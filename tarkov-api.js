/**
 * Tarkov.dev API Integration
 * Client-side JavaScript for fetching hideout data
 */

const TARKOV_API = 'https://api.tarkov.dev/graphql';

const HIDEOUT_QUERY = `
{
  hideoutStations {
    id
    name
    levels {
      id
      level
      itemRequirements {
        count
        quantity
        item {
          id
          name
          iconLink
          wikiLink
          avg24hPrice
          lastLowPrice
        }
      }
      stationLevelRequirements {
        station {
          id
          name
        }
        level
      }
      traderRequirements {
        trader {
          name
        }
        level
      }
    }
  }
}
`;

/**
 * Fetch hideout data from Tarkov.dev GraphQL API
 * @returns {Promise<Object>} The hideout stations data
 */
async function fetchHideoutData() {
  try {
    const response = await fetch(TARKOV_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: HIDEOUT_QUERY,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error('GraphQL query returned errors');
    }

    return result.data;
  } catch (error) {
    console.error('Failed to fetch hideout data:', error);
    throw error;
  }
}

/**
 * Calculate total items needed across all hideout upgrades
 * @param {Object} data - The hideout stations data
 * @returns {Object} Map of item names to quantities
 */
function calculateTotalItems(data) {
  const itemTotals = {};

  data.hideoutStations.forEach(station => {
    station.levels.forEach(level => {
      level.itemRequirements.forEach(req => {
        const itemName = req.item.name;
        const quantity = req.quantity;

        if (!itemTotals[itemName]) {
          itemTotals[itemName] = {
            total: 0,
            usedIn: [],
            item: req.item, // Store full item data (with prices, icons, etc.)
          };
        }

        itemTotals[itemName].total += quantity;
        itemTotals[itemName].usedIn.push({
          station: station.name,
          level: level.level,
          count: quantity,
        });
      });
    });
  });

  return itemTotals;
}

/**
 * Get requirements for a specific station and level
 * @param {Object} data - The hideout stations data
 * @param {string} stationName - Name of the station
 * @param {number} level - Level number
 * @returns {Object|null} Requirements or null if not found
 */
function getStationRequirements(data, stationName, level) {
  const station = data.hideoutStations.find(s => s.name === stationName);
  if (!station) return null;

  const stationLevel = station.levels.find(l => l.level === level);
  return stationLevel || null;
}

/**
 * Calculate total roubles cost for all hideout upgrades
 * @param {Object} itemTotals - Result from calculateTotalItems()
 * @returns {number} Total cost in roubles
 */
function calculateTotalCost(itemTotals) {
  let total = 0;

  Object.entries(itemTotals).forEach(([itemName, data]) => {
    // Use avg24hPrice if available, fallback to lastLowPrice
    const price = data.item.avg24hPrice || data.item.lastLowPrice || 0;
    total += price * data.total;
  });

  return total;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    fetchHideoutData,
    calculateTotalItems,
    getStationRequirements,
    calculateTotalCost,
  };
}

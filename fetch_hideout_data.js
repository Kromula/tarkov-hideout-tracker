const fs = require('fs');

const TARKOV_API = 'https://api.tarkov.dev/graphql';

const query = `
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

async function fetchHideoutData() {
  console.log('Fetching hideout data from Tarkov.dev API...');

  try {
    const response = await fetch(TARKOV_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      throw new Error('GraphQL query failed');
    }

    // Save the fresh data
    fs.writeFileSync('api_data.json', JSON.stringify(data, null, 2));
    console.log('✅ Successfully saved fresh hideout data to api_data.json');

    // Display some stats
    const stations = data.data.hideoutStations;
    console.log(`\nFetched ${stations.length} hideout stations`);

    // Count total items needed
    const itemMap = {};
    stations.forEach(station => {
      station.levels.forEach(level => {
        level.itemRequirements.forEach(req => {
          const itemName = req.item.name;
          if (!itemMap[itemName]) {
            itemMap[itemName] = 0;
          }
          itemMap[itemName] += req.quantity;
        });
      });
    });

    console.log(`Total unique items needed: ${Object.keys(itemMap).length}`);

    return data;
  } catch (error) {
    console.error('❌ Error fetching data:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  fetchHideoutData()
    .then(() => console.log('\n✨ Done!'))
    .catch(err => {
      console.error('\n💥 Failed:', err);
      process.exit(1);
    });
}

module.exports = { fetchHideoutData };

# 🎯 Tarkov Hideout Tracker

A web-based tracker for Escape from Tarkov hideout items with **live API integration**.

---

## 🚀 Quick Start

1. **Open the app**: Double-click `index.html` or serve it locally
2. **Start tracking**: Mark items you own
3. **Stay updated**: Click "Refresh API Data" after game patches

---

## ✨ Features

### 📊 Live Data
- ✅ Fetches latest hideout requirements from Tarkov.dev API
- ✅ Automatically caches data for 24 hours
- ✅ Manual refresh button for post-patch updates
- ✅ Offline fallback with hardcoded data

### 📦 Item Tracking
- Track 119+ hideout items
- Mark items as owned
- See what you need vs. what you have
- Find in Raid (FIR) item indicators
- High-value item highlighting

### 🏠 Hideout Progress
- Track all 26 hideout stations
- Level-by-level requirements
- Real-time progress calculation
- See remaining items needed per module

### 💾 Data Management & Backups
- Auto-save to browser localStorage
- **Automatic backup system** (10 backups retained)
- Backups created before dangerous operations
- Easy restore from any backup point
- Export/import your progress
- Download all backups as JSON
- Reset or reload default items
- Progress preserved across API updates

---

## 🔧 Files Overview

### Main Files:
- **`index.html`** - Main application (open this!)
- **`tarkov-api.js`** - API client and helper functions

### Node.js Scripts (Optional):
- **`fetch_hideout_data.js`** - Fetch and save API data offline
- **`parse_api.js`** - Analyze API data (legacy)

### Documentation:
- **`INTEGRATION_COMPLETE.md`** - What was integrated and how
- **`TEST_INTEGRATION.md`** - Testing guide
- **`API_INTEGRATION.md`** - Full API documentation
- **`SETUP_SUMMARY.md`** - Setup details

### Demo:
- **`example-integration.html`** - API integration demo

---

## 📖 How to Use

### Basic Usage:

1. **Open** `index.html` in your browser
2. **Browse** items in the "All Items" tab
3. **Click ➕/➖** to adjust owned quantities
4. **Switch tabs** to see different views:
   - 📋 All Items
   - 📊 Needed Items (missing items)
   - ✅ Safe to Sell (excess items)
   - 💎 High Value Items
   - 🏠 Hideout Progress (modules)

### After Game Patches:

1. Click **"🔄 Refresh API Data"** button
2. Confirm the dialog
3. Latest requirements are loaded
4. Your progress is preserved!

---

## 🌐 API Information

### Source:
- **API**: [Tarkov.dev GraphQL API](https://api.tarkov.dev/graphql)
- **Free**: Community-maintained, no authentication needed
- **Updated**: Shortly after game patches

### What's Fetched:
- All hideout station requirements
- Item names, quantities, and icons
- Station dependencies
- Trader requirements

### Caching:
- **Duration**: 24 hours
- **Storage**: Browser localStorage
- **Manual**: Use "Refresh API Data" button

---

## 🐛 Troubleshooting

### "Using offline data" message?
- Check internet connection
- API might be temporarily down (rare)
- App still works with cached/hardcoded data

### Items seem incorrect?
- Click "Refresh API Data" to force refresh
- Game might have been recently patched
- Check [Tarkov.dev](https://tarkov.dev) for API status

### Progress lost?
- Check if browser cleared localStorage
- Use Export/Import to backup your data

### Can't open the file?
- Use a local web server instead of `file://`
- Example: `python -m http.server 8000`
- Then open: `http://localhost:8000`

---

## 🔍 Console Commands

Open browser console (F12) for advanced debugging:

```javascript
// Check cache age
const timestamp = localStorage.getItem('tarkov_api_cache_timestamp');
const age = Date.now() - parseInt(timestamp);
console.log('Cache age:', Math.floor(age / 1000 / 60), 'minutes');

// Force refresh
refreshAPIData();

// Clear API cache
clearAPICache();
location.reload();

// View items
console.log('Items:', items);
console.log('Modules:', hideoutModules);
```

---

## 📦 Technologies

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **API**: Tarkov.dev GraphQL API
- **Storage**: Browser localStorage
- **No build required**: Just open and use!

---

## 🎮 About Tarkov.dev

[Tarkov.dev](https://tarkov.dev) is a community-driven resource for Escape from Tarkov:
- Free GraphQL API
- Game data and statistics
- Interactive tools
- Active community maintenance

---

## 📝 License

This is a personal tracker tool. Game data courtesy of:
- [Tarkov.dev](https://tarkov.dev)
- [Battlestate Games](https://www.battlestategames.com/) (Escape from Tarkov)

---

## 🙏 Credits

- **API**: [The Hideout](https://github.com/the-hideout) community
- **Game**: Battlestate Games
- **Icons**: Tarkov.dev CDN

---

## 🚀 Start Tracking!

Open `index.html` and happy tracking! 🎯

---

**Need help?** Check the documentation files or open an issue.

**Want to contribute?** This is a personal project, but suggestions welcome!

**Enjoy the game!** See you in Tarkov! 🏃‍♂️💨

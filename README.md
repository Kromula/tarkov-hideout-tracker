# 🎯 Tarkov Hideout Tracker

<div align="center">

![Tarkov Hideout Tracker](https://img.shields.io/badge/Tarkov-Hideout_Tracker-orange?style=for-the-badge)
![Version](https://img.shields.io/badge/version-2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**A powerful web-based item tracker for Escape from Tarkov hideout upgrades**

[Features](#-features) • [Demo](#-screenshots) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-integration)

</div>

---

## 📖 Overview

Tarkov Hideout Tracker is a comprehensive web application that helps Escape from Tarkov players track their hideout upgrade items efficiently. With **live API integration** from Tarkov.dev, automatic backups, and real-time flea market pricing, you'll never lose track of your hideout progress again.

### 🎮 Perfect For:
- 📦 Tracking all 119+ hideout items across 26 stations
- 💰 Identifying high-value items based on flea market prices
- 🏠 Managing hideout module progression
- 💾 Protecting your progress with automatic backups
- 📊 Staying updated with the latest game patches

---

## ✨ Features

### 🌐 Live API Integration
- **Real-time data** from [Tarkov.dev API](https://tarkov.dev)
- Automatic updates when game patches release
- Flea market pricing integration
- Item images and wiki links
- Smart 24-hour caching for performance

### 💾 Automatic Backup System
- **10 automatic backups** retained
- Backups before dangerous operations
- One-click restore from any backup point
- Download all backups as JSON
- Never lose progress again!

### 💎 Smart High-Value Detection
- Automatic marking based on **real flea prices**
- Customizable threshold (default: 80,000₽)
- See item values: `💰 125,000₽`
- Identify what to keep vs. sell

### 📊 Comprehensive Tracking
- Track 119+ items across 26 hideout stations
- Mark items as owned with +/- buttons
- See what's still needed vs. safe to sell
- Find-in-Raid (FIR) indicators
- Progress bars for each item

### 🎨 Clean, Modern UI
- Dark theme optimized for gaming
- Responsive design (mobile-friendly)
- Tab-based navigation
- Real-time statistics
- Intuitive controls

---

## 📸 Screenshots

### Main Dashboard
> *Screenshot placeholder: Show the main view with items, stats, and tabs*

![Main Dashboard - Coming Soon]()

### Hideout Progress Tracking
> *Screenshot placeholder: Show hideout modules with progress indicators*

![Hideout Progress - Coming Soon]()

### High Value Items with Prices
> *Screenshot placeholder: Show high value tab with flea market prices*

![High Value Items - Coming Soon]()

### Backup Manager
> *Screenshot placeholder: Show backup management interface*

![Backup Manager - Coming Soon]()

---

## 🚀 Installation

### Option 1: Direct Download (Recommended)

1. **Download or clone this repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tarkov-hideout-tracker.git
   cd tarkov-hideout-tracker
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - That's it! No installation required.

### Option 2: Local Web Server

For better CORS compatibility:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then open: http://localhost:8000
```

### Option 3: GitHub Pages (Coming Soon)

Visit the live demo: `https://YOUR_USERNAME.github.io/tarkov-hideout-tracker/`

---

## 📖 Usage

### Getting Started

1. **Open the app** - Open `index.html` in your browser
2. **First load** - App automatically fetches latest hideout data from API
3. **Mark items** - Use +/- buttons to track owned quantities
4. **Save progress** - Click "💾 Save Progress" (auto-backed up!)

### Navigation

#### 📋 All Items Tab
View all hideout items with:
- Current owned quantity
- Total needed for all upgrades
- Progress indicators
- Quick +/- adjustment

#### 📊 Needed Items Tab
See only items you still need to collect

#### 🏠 Hideout Modules Tab
Track progress for each hideout station:
- Generator, Vents, Security, etc.
- Level-by-level requirements
- Mark modules as complete

#### ✅ Safe to Sell Tab
Items you have **excess** of - safe to sell on flea!

#### 💎 High Value Tab
Items worth 80,000₽+ on flea market
- Real-time pricing from API
- Adjustable threshold
- Know what to prioritize!

---

## 🔧 Key Features Explained

### 🤖 Automatic Backups

**Never lose progress again!**

Backups are created automatically:
- ✅ On app load (session start)
- ✅ Every 15 minutes
- ✅ Before "Reset All" or "Refresh API"
- ✅ Before restoring another backup
- ✅ On page close

**Manage Backups:**
1. Click **"💾 Manage Backups"** button
2. View all backups with timestamps
3. Restore or download as needed

### 💰 Flea Market Pricing

**Know what items are worth!**

- Prices from Tarkov.dev API
- Based on real player transactions
- Shows avg 24h price or last low price
- Updates when you refresh API data

**Adjust High Value Threshold:**
1. Click threshold in stat card: `80,000₽ ⚙️`
2. Enter your preferred amount
3. Items re-evaluated instantly!

### 🔄 API Refresh

**Stay up-to-date with game patches:**

1. Click **"🔄 Refresh API Data"**
2. Latest hideout requirements downloaded
3. Your progress preserved
4. Images and prices updated

---

## 🌐 API Integration

### Powered by Tarkov.dev

This app uses the [Tarkov.dev GraphQL API](https://tarkov.dev/api/) to fetch:

- ✅ Hideout station requirements
- ✅ Item names and quantities
- ✅ Flea market prices (avg24hPrice)
- ✅ Item images (WebP format)
- ✅ Wiki links

### Data Flow

```
1. App loads → Check cache (24h)
2. If stale → Fetch from api.tarkov.dev/graphql
3. Transform data → Merge with user progress
4. Display → All items with current prices
5. Cache → Store for next load
```

### Offline Support

- App works offline with cached data
- Falls back to embedded data if API unavailable
- Manual refresh available anytime

---

## 📦 File Structure

```
tarkov-hideout-tracker/
├── index.html              # Main application
├── tarkov-api.js           # API client & helpers
├── fetch_hideout_data.js   # Node.js script (optional)
├── api_data.json           # Cached API data
├── README.md               # This file
├── BACKUP_SYSTEM.md        # Backup documentation
├── HIGH_VALUE_FEATURE.md   # High value guide
└── BACKUP_SUMMARY.md       # Quick backup guide
```

---

## 🛠️ Technologies

- **Frontend:** Vanilla JavaScript, HTML5, CSS3
- **API:** Tarkov.dev GraphQL API
- **Storage:** Browser localStorage
- **Architecture:** Client-side only (no backend needed!)

---

## 💡 Tips & Tricks

### Best Practices

1. **Weekly backups** - Click "Manage Backups" → "Download All Backups"
2. **After patches** - Click "Refresh API Data" to get latest requirements
3. **Export progress** - Use "Export Data" for permanent backup
4. **Adjust threshold** - Set high value threshold to your preference

### Keyboard Shortcuts

- Use number input fields for quick quantity entry
- Click item images to edit/update them
- Toggle high value manually if needed

### Pro Tips

- 💾 Download backups weekly for safety
- 🔄 Refresh API after game patches
- 💎 Adjust high value threshold to your economy
- 📊 Check "Safe to Sell" before selling items
- 🏠 Complete modules one at a time for satisfaction!

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- 📱 Mobile app version
- 🌍 Translations/localization
- 📊 Statistics and analytics
- 🎨 Themes and customization
- 📈 Price history graphs

---

## 🐛 Known Issues

- None currently! Report any bugs via [Issues](https://github.com/YOUR_USERNAME/tarkov-hideout-tracker/issues)

---

## 📝 Changelog

### Version 2.0 (Current)
- ✅ Live API integration from Tarkov.dev
- ✅ Automatic backup system (10 backups)
- ✅ Flea market pricing integration
- ✅ Adjustable high value threshold
- ✅ Smart caching (24 hours)
- ✅ Backup manager UI
- ✅ Price display on items
- ✅ API status indicators

### Version 1.0 (Initial)
- ✅ Basic item tracking
- ✅ Hideout module progression
- ✅ Manual data entry
- ✅ Export/import functionality

---

## 🙏 Credits

### Data Sources
- **[Tarkov.dev](https://tarkov.dev)** - API and game data
- **[The Hideout](https://github.com/the-hideout)** - Community API
- **Battlestate Games** - Escape from Tarkov

### Built With
- ❤️ and ☕ by the EFT community
- Powered by [Claude](https://claude.ai) assistance

---

## 📄 License

This project is licensed under the MIT License - see below for details.

**MIT License**

```
Copyright (c) 2025 Tarkov Hideout Tracker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Links

- 🌐 **Live Demo:** Coming Soon
- 📖 **Documentation:** [Backup System](BACKUP_SYSTEM.md) | [High Value Guide](HIGH_VALUE_FEATURE.md)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/YOUR_USERNAME/tarkov-hideout-tracker/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/YOUR_USERNAME/tarkov-hideout-tracker/discussions)

---

## ⭐ Support

If you find this project useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 🤝 Contributing code
- 📢 Sharing with friends

---

<div align="center">

**Happy Tracking, PMC! 🎯**

Made with ❤️ for the Tarkov community

[⬆ Back to Top](#-tarkov-hideout-tracker)

</div>

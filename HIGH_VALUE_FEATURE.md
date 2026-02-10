# 💎 High Value Items - API-Powered Pricing

Your app now automatically marks items as "High Value" based on **real flea market prices** from the Tarkov.dev API!

---

## ✨ What's New

### 🤖 **Automatic High Value Detection**

Items are marked as high value if they sell for **80,000₽ or more** on the flea market (adjustable).

- ✅ Prices from API (avg24hPrice or lastLowPrice)
- ✅ Updated with API refresh
- ✅ Shown in green next to item name: 💰 125,000₽
- ✅ Marked with 💎 HIGH VALUE badge

### ⚙️ **Adjustable Threshold**

Click the threshold in the "High Value Items" stat card:
```
High Value Items
42
Threshold: 80,000₽ ⚙️  ← Click here!
```

Enter your preferred amount (e.g., 100000 for 100k₽).

### 💰 **Price Display**

Every item now shows its flea market price:
- In the item card: `💰 125,000₽`
- Next to badges (HIGH VALUE, FIR)
- Updated from API automatically

---

## 🎯 How It Works

### Price Sources:

The API provides:
1. **avg24hPrice** - Average price over 24 hours (preferred)
2. **lastLowPrice** - Most recent low price (fallback)

Your app uses whichever is available.

### High Value Logic:

```
If fleaPrice >= threshold (default 80,000₽):
  → Mark as HIGH VALUE 💎
  → Show in High Value tab
```

### Examples:

| Item | Flea Price | High Value? |
|------|------------|-------------|
| LEDX | 450,000₽ | ✅ Yes |
| Graphics Card | 125,000₽ | ✅ Yes |
| Bitcoin | 220,000₽ | ✅ Yes |
| Bundle of Wires | 8,500₽ | ❌ No |
| Screw Nuts | 3,200₽ | ❌ No |

---

## 🔧 Usage

### View High Value Items:

1. Click **"High Value"** tab
2. See all items worth 80k+ roubles
3. Prices shown on each card

### Adjust Threshold:

1. Find "High Value Items" stat card
2. Click on `80,000₽ ⚙️`
3. Enter new amount (e.g., 100000)
4. ✅ All items re-evaluated instantly!

### Manual Override:

You can still manually mark items as high value:
- Click "Toggle High Value" button on item card
- Overrides API pricing

---

## 💡 Benefits

### Before:
- ❌ Manual marking of high value items
- ❌ Guessing which items are valuable
- ❌ Outdated information

### After:
- ✅ **Automatic** based on real flea prices
- ✅ **Always accurate** (updated with API)
- ✅ **See actual prices** on each item
- ✅ **Customizable threshold** for your needs

---

## 📊 Price Information

### Where Prices Come From:

The Tarkov.dev API aggregates flea market data:
- Real player transactions
- Updated regularly
- Community-maintained

### Price Accuracy:

- ✅ Reflects current market conditions
- ✅ Updated when you refresh API data
- ✅ Shows average 24h price (stable)
- ✅ Falls back to last low price

### When Prices Update:

Prices refresh when:
1. You click "Refresh API Data"
2. API cache expires (24 hours)
3. You first load the app (if no cache)

---

## 🎮 Example Scenarios

### Scenario 1: Finding Valuable Loot

```
1. Click "High Value" tab
2. See all items worth 80k+
3. Prioritize collecting these in raids
4. Know exactly what they're worth: 💰 125,000₽
```

### Scenario 2: Deciding What to Sell

```
Item: GPU
Price: 💰 125,000₽
Owned: 5
Needed: 1
Safe to sell: 4

→ Sell 4 GPUs = 500,000₽ profit!
```

### Scenario 3: Custom Threshold

```
You only care about items > 150k:
1. Click threshold: 80,000₽ ⚙️
2. Enter: 150000
3. Now only super valuable items shown
```

---

## 🔍 Console Info

When API loads, check console (F12):

```
💎 High Value Items (12 items over 80,000₽):
  LEDX Skin Transilluminator: 450,000₽
  Graphics card: 125,000₽
  Bitcoin: 220,000₽
  Tetriz portable game: 95,000₽
  ...
```

This shows you what's marked as high value and why.

---

## ⚙️ Advanced

### Change Default Threshold:

The default is 80,000₽, but you can:
1. Click threshold and change it
2. New threshold saved to localStorage
3. Persists across sessions

### Re-evaluate Items:

When you adjust threshold:
1. All items checked against new threshold
2. HIGH VALUE badge added/removed automatically
3. High Value tab updates instantly

### Manual Override:

Toggle "High Value" button on item card:
- Adds/removes HIGH VALUE status
- Works independently of API pricing
- Useful for items without flea prices

---

## 📋 Summary

### Automatic Features:
- ✅ High value detection based on flea prices
- ✅ Price display on every item
- ✅ Default threshold: 80,000₽
- ✅ Adjustable anytime
- ✅ Updated with API refresh

### What You Do:
- ✅ (Optional) Adjust threshold to your preference
- ✅ View High Value tab to see valuable items
- ✅ See prices automatically

### Result:
**Know exactly what items are worth!** 💰

---

## 🆘 FAQ

**Q: Where do prices come from?**
A: Tarkov.dev API, which aggregates real flea market data.

**Q: How often do prices update?**
A: When you click "Refresh API Data" or when cache expires (24h).

**Q: Can I change the 80k threshold?**
A: Yes! Click the threshold in the stat card and enter your amount.

**Q: What if an item has no price?**
A: It won't be marked as high value automatically. You can manually mark it.

**Q: Do prices affect my owned quantities?**
A: No! Prices are just for information. Your progress is unchanged.

**Q: Can I see total value of items I own?**
A: Not yet, but that's a great idea for future update!

---

## 🎯 Quick Reference

| Action | How To |
|--------|--------|
| View high value items | Click "High Value" tab |
| See item prices | Look for 💰 on item cards |
| Adjust threshold | Click `80,000₽ ⚙️` in stat card |
| Refresh prices | Click "Refresh API Data" |
| Manual override | Click "Toggle High Value" on item |

---

**Start using it now!** Open your app and check the High Value tab to see what's worth the most! 💎

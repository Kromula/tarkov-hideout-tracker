# 📸 Screenshot Guide

Your GitHub repository is live! Here's how to add screenshots to make your README even more appealing.

---

## 🎯 Screenshots Needed

The README has placeholders for 4 screenshots:

1. **Main Dashboard** - Show the main view with items, stats, and tabs
2. **Hideout Progress Tracking** - Show hideout modules with progress
3. **High Value Items** - Show high value tab with prices
4. **Backup Manager** - Show backup management interface

---

## 📷 How to Take Screenshots

### Option 1: Windows Snipping Tool (Recommended)

1. Open your app: `index.html`
2. Press **Windows + Shift + S** (Snipping Tool)
3. Select area to capture
4. Save as PNG

### Option 2: Browser DevTools

1. Open your app
2. Press **F12** → Open DevTools
3. Press **Ctrl + Shift + P**
4. Type "screenshot" → Choose "Capture full size screenshot"
5. Saves automatically to Downloads

### Option 3: Third-party Tools

- **ShareX** (free, powerful)
- **Greenshot** (free, simple)
- **Lightshot** (free, easy)

---

## 📁 Organize Screenshots

### Step 1: Create Screenshots Folder

```bash
cd "E:\Claude Dev\tarkov-hideout-tracker"
mkdir screenshots
```

### Step 2: Take & Save Screenshots

Save with these names:
- `main-dashboard.png`
- `hideout-progress.png`
- `high-value-items.png`
- `backup-manager.png`

### Step 3: Add to Repository

```bash
git add screenshots/
git commit -m "Add screenshots for README"
git push
```

---

## 📝 Update README

After uploading screenshots, edit `README.md`:

**Replace these lines:**

```markdown
### Main Dashboard
> *Screenshot placeholder: Show the main view with items, stats, and tabs*

![Main Dashboard - Coming Soon]()
```

**With:**

```markdown
### Main Dashboard
![Main Dashboard](screenshots/main-dashboard.png)
```

Do this for all 4 screenshots, then:

```bash
git add README.md
git commit -m "Add screenshots to README"
git push
```

---

## 🎨 Screenshot Tips

### What to Show

1. **Main Dashboard**
   - Show "All Items" tab
   - Several items with different states (owned, needed)
   - Stats at top showing counts
   - Controls visible

2. **Hideout Progress**
   - Switch to "Hideout Modules" tab
   - Show 2-3 modules expanded
   - Some completed, some in progress

3. **High Value Items**
   - Switch to "High Value" tab
   - Show items with prices: 💰 125,000₽
   - Info box explaining the feature

4. **Backup Manager**
   - Click "💾 Manage Backups" button
   - Show list of backups with dates
   - Buttons visible (Restore, Delete, Create, Download)

### Make It Look Good

- ✅ Clean browser window (no extra tabs/bookmarks bar)
- ✅ Full screen app (maximize window)
- ✅ Good sample data (show some progress, not empty)
- ✅ Light theme or dark theme (your preference)
- ✅ Crop to just the app (remove browser chrome if desired)

---

## 🌐 Alternative: Use GitHub Issues

If you don't want screenshots in the repo:

1. Create a GitHub issue
2. Drag screenshots into the issue description
3. GitHub uploads them and gives you URLs
4. Use those URLs in README:

```markdown
![Main Dashboard](https://user-images.githubusercontent.com/...)
```

This keeps repo size small!

---

## 🚀 After Adding Screenshots

Your README will look **much more professional** with visuals!

Benefits:
- 📈 More stars/interest
- 👀 Visitors see what they're getting
- 🎯 Showcases features visually
- 💼 Professional presentation

---

## 📋 Quick Commands

```bash
# Create screenshots folder
mkdir screenshots

# After taking screenshots and saving to folder:
git add screenshots/
git add README.md
git commit -m "Add screenshots to README"
git push

# Check your repo:
# Visit: https://github.com/Kromula/tarkov-hideout-tracker
```

---

**Take 5 minutes to add screenshots - it makes a huge difference!** 📸✨

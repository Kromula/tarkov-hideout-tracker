# 💾 Automatic Backup System

Your Tarkov Hideout Tracker now has a **comprehensive automatic backup system** to prevent data loss!

---

## ✨ Features

### 🤖 Automatic Backups

Backups are created automatically in these situations:

1. **Session Start** - When you first load the app
2. **Before Dangerous Operations**:
   - Before clicking "Reset All"
   - Before clicking "Load Default Items"
   - Before clicking "Refresh API Data"
   - Before restoring from a backup
3. **Periodic** - Every 15 minutes while using the app
4. **Session End** - When you close the page

### 📊 Backup Storage

- **Location**: Browser localStorage
- **Maximum**: 10 backups (oldest are automatically deleted)
- **What's Saved**:
  - All item quantities (owned amounts)
  - Hideout module progress
  - Timestamp and reason for backup
  - Complete state snapshot

---

## 🎯 How to Use

### View Your Backups

1. Click the **"💾 Manage Backups"** button (blue)
2. See all available backups with:
   - Date and time created
   - Reason for backup
   - Number of items and total owned
3. Options for each backup:
   - **♻️ Restore** - Restore that backup
   - **🗑️ Delete** - Remove that backup

### Restore a Backup

1. Click **"💾 Manage Backups"**
2. Find the backup you want to restore
3. Click **"♻️ Restore"** on that backup
4. Confirm the action
5. ✅ Your progress is restored!

**Note**: Before restoring, a backup of your current state is created automatically!

### Create Manual Backup

1. Click **"💾 Manage Backups"**
2. Click **"💾 Create Manual Backup"** at the bottom
3. ✅ Backup created!

### Download All Backups

1. Click **"💾 Manage Backups"**
2. Click **"📥 Download All Backups"** (green button)
3. Save the JSON file to your computer
4. Keep it safe as an offline backup!

---

## 🔍 Backup Status

The header shows your backup status:

```
💾 Last backup: 5m ago (Manage)
```

- **Time**: When the last backup was created
- **Click "Manage"**: Opens the backup manager

---

## 🛡️ Protection from Data Loss

### Before (Without Backups):
- ❌ Accidentally clicked "Reset All" → Data lost forever
- ❌ Browser cleared localStorage → All progress gone
- ❌ Bad import file → Overwrote good data

### After (With Backups):
- ✅ Accidentally reset? Restore from backup!
- ✅ Lost data? Open backup manager and restore!
- ✅ Bad import? Restore previous backup!

---

## 📋 Backup Types

### Automatic Reasons:

| Reason | When Created |
|--------|--------------|
| `session_start` | When you open the app |
| `periodic` | Every 15 minutes |
| `before_reset` | Before clicking "Reset All" |
| `before_load_defaults` | Before loading default items |
| `before_api_refresh` | Before refreshing API data |
| `before_restore` | Before restoring another backup |
| `session_end` | When closing the page |
| `manual` | When you click "Create Manual Backup" |

---

## 💡 Best Practices

### Daily Use:
1. ✅ Use the app normally - backups are automatic
2. ✅ Check backup status in header occasionally
3. ✅ If doing risky operations, create manual backup first

### Weekly:
1. ✅ Download all backups (JSON file)
2. ✅ Save to cloud storage or external drive
3. ✅ Keep for disaster recovery

### Before Major Operations:
1. ✅ Click "Create Manual Backup" first
2. ✅ Perform the operation
3. ✅ If something goes wrong, restore backup

---

## 🔧 Advanced Usage

### Console Commands

Open console (F12) and use these commands:

```javascript
// View all backups
getAllBackups();

// Create manual backup
createAutoBackup('my_backup_reason');

// Restore specific backup (get key from getAllBackups())
restoreFromBackup('tarkov_backup_1234567890');

// Delete old backups manually
cleanupOldBackups();

// Check backup status
updateBackupStatus();
```

### Export Backups as JSON

The "Download All Backups" feature creates a JSON file with:
- All backup snapshots
- Timestamps and reasons
- Complete item and module data
- Can be saved as permanent offline backup

---

## ⚠️ Important Notes

### Storage Limits

- **Browser localStorage**: ~5-10MB limit
- **Each backup**: ~50-100KB
- **10 backups**: Uses ~500KB-1MB
- **Plenty of space**: Won't run out!

### Backup Retention

- **Automatic**: Oldest deleted when > 10 backups
- **Manual backups**: Same rules apply
- **Downloaded JSON**: Keep forever!

### What's NOT Backed Up

These don't need backups (auto-refresh from API):
- ❌ API cache (refreshes automatically)
- ❌ Item images (from API)
- ❌ Hideout requirements (from API)

Only YOUR data is backed up:
- ✅ Item owned quantities
- ✅ Hideout module progress
- ✅ Custom added items

---

## 🚀 Quick Reference

### Common Tasks:

**Restore Yesterday's Progress:**
1. Click "💾 Manage Backups"
2. Find yesterday's backup (check date/time)
3. Click "♻️ Restore"

**Download Backup Before Risky Operation:**
1. Click "💾 Manage Backups"
2. Click "📥 Download All Backups"
3. Save the JSON file
4. Perform risky operation
5. If something goes wrong, import the JSON

**Clear Old Backups:**
1. Click "💾 Manage Backups"
2. Click "🗑️ Delete" on old backups
3. Or they auto-delete when > 10 exist

---

## 🎉 You're Protected!

With automatic backups:
- ✅ Never lose progress again
- ✅ Undo mistakes easily
- ✅ Restore from any point in time
- ✅ Export for permanent storage
- ✅ Peace of mind while using the app

---

## 💬 FAQ

**Q: Will backups slow down my app?**
A: No! Backups are tiny (~50KB) and instant.

**Q: Can I disable auto-backups?**
A: Not recommended, but you can delete them manually.

**Q: How long are backups kept?**
A: Forever, until > 10 backups (then oldest deleted automatically).

**Q: Can I share backups?**
A: Yes! Download JSON and share it. Others can import it.

**Q: What if I clear browser data?**
A: Download backups first! Or they'll be deleted with localStorage.

**Q: Do backups work offline?**
A: Yes! Backups are stored locally, work without internet.

---

## 🆘 Emergency Recovery

### If You Lost All Data:

1. **Check Backup Manager**:
   - Click "💾 Manage Backups"
   - Backups might still be there!

2. **Look for Downloaded JSON**:
   - Check Downloads folder
   - Import using "📥 Import Data"

3. **Check Browser History**:
   - Backups in localStorage persist
   - Unless you cleared browser data

4. **Prevention for Next Time**:
   - Download backups weekly
   - Keep JSON file safe

---

Enjoy worry-free tracking! 💾🎯

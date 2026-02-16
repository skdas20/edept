# Google Sites Content Extraction Summary

**Date:** February 15, 2026
**Source:** https://sites.google.com/view/iem-ece/home

---

## ✅ COMPLETED TASKS

### 1. ✅ Address Updated
**Updated in 3 locations with correct address:**
```
Gurukul, Y-12, Block-EP, Sector-V,
Salt Lake Electronics Complex,
Kolkata – 700 091, West Bengal, India
```

**Files Updated:**
- ✅ `content/config/site.json` (line 13)
- ✅ `lib/config.ts` (line 15)
- ✅ `app/contact/page.tsx` (lines 27-29)

### 2. ✅ Content Extracted from All Pages
Successfully fetched and documented content from:
- ✅ Home
- ✅ Faculty Members
- ✅ Course & Curriculum
- ✅ Events
- ✅ Student's Corner
- ✅ Research
- ✅ Feedback
- ✅ Calendar
- ✅ Contact Us
- ✅ Innovative Teaching Learning (ITL)

### 3. ✅ Created Documentation Files
- ✅ `content/google-sites-data.json` - Complete JSON with all extracted data
- ✅ `CONTENT_COMPARISON.md` - Detailed comparison report
- ✅ `GOOGLE_SITES_EXTRACTION_SUMMARY.md` - This file

---

## ⏳ PENDING TASKS

### 🖼️ Images (Manual Download Required)
**Why manual?** Google CDN returns 403 Forbidden for automated downloads.

**How to download:**
1. Open https://sites.google.com/view/iem-ece/home (while logged in)
2. Navigate to Events page
3. Right-click each image → "Save image as..."
4. Save to: `public/assets/images/`

**Images to download:**
- `sytron-2025.jpg` - SYTRON 2025 event banner
- `bengal-esummit-1.jpg` - Bengal E-Summit photo 1
- `bengal-esummit-2.jpg` - Bengal E-Summit photo 2
- `department-header.jpg` - Department header/banner

---

## 📊 KEY DATA EXTRACTED

### Department Info
- **Established:** 1996
- **Accreditation:** NBA, AICTE
- **University:** Maulana Abul Kalam Azad University of Technology
- **Key Achievement:** PG programs in VLSI & Microelectronics (2006)

### Contact Info
- **Phone:** +91 33 2357 2969, +91 33 2357 7649
- **Fax:** +91 33 2357 8302 (not yet added to site)
- **Email:** eee.iemk@gmail.com

### Site Maintainers
- Prof. Samit Karmakar
- Prof. Srijita Chakraborty

### Research
- **30 Research Areas** documented
- **3 Research Labs:** IEDC-ECE, AMRL, IoT Research Lab

### Events
- **SYTRON 2025** (Aug 30-31, 2025) - https://www.sytron.co.in/
- **Bengal E-Summit** - https://bengalesummit.in/
- Multiple event documentation sheets available

---

## 📂 FILE LOCATIONS

### Documentation
```
content/google-sites-data.json          # All extracted data in JSON
CONTENT_COMPARISON.md                   # Detailed comparison
GOOGLE_SITES_EXTRACTION_SUMMARY.md      # This summary
```

### Config Files (Updated)
```
content/config/site.json                # Site configuration
lib/config.ts                           # TypeScript config
```

### Pages to Update
```
app/page.tsx                            # Home page
app/about/page.tsx                      # About page
app/events/page.tsx                     # Events page
app/research/page.tsx                   # Research page
app/student-corner/page.tsx             # Student Corner
app/contact/page.tsx                    # Contact (updated ✅)
```

### Images Folder
```
public/assets/images/                   # Created, awaiting manual downloads
```

---

## 🎯 WHAT TO DO NEXT

### Priority 1: Download Images
1. Login to Google Sites
2. Download 4 images to `public/assets/images/`

### Priority 2: Update Events Page
Add real events:
- SYTRON 2025
- Bengal E-Summit

### Priority 3: Expand Research Page
Add 30 research areas from `google-sites-data.json`

### Priority 4: Create ITL Page
New page at `app/itl/page.tsx` with:
- IEM Learning portal link
- IEMCRP link
- NPTEL Swayam link
- Other resources

### Priority 5: Update Home Page
Add:
- Established year (1996)
- NBA/AICTE accreditation badges
- Real department introduction text

### Priority 6: Faculty Page
- Access Google Drive documents
- Extract faculty details
- Update faculty page

---

## 📝 NOTES

### What Worked Well ✅
- WebFetch successfully retrieved text content from all pages
- Contact information verified and updated
- Navigation structure mapped
- Research areas documented
- Event information extracted

### What Didn't Work ❌
- Image downloads blocked by Google CDN (403 Forbidden)
- Some sub-pages returned 404 (likely embedded differently)
- Faculty details in Google Drive (not directly on site)
- Course schedules in Google Sheets (not directly on site)

### Workarounds Applied ✔️
- Created comprehensive JSON for easy data reference
- Documented manual steps for image downloads
- Listed all Google Drive/Sheets resources for user access
- Created comparison report to guide updates

---

## 🔗 IMPORTANT LINKS

### Google Sites Pages
- Home: https://sites.google.com/view/iem-ece/home
- Events: https://sites.google.com/view/iem-ece/events
- Research: https://sites.google.com/view/iem-ece/research

### External Resources
- SYTRON: https://www.sytron.co.in/
- Bengal E-Summit: https://bengalesummit.in/
- IEM Learning: https://www.iemlearning.com/
- IEMCRP: https://www.iemcrp.com/
- NPTEL Swayam: https://swayam.gov.in/
- IEM Main: https://iem.edu.in/

### Faculty LinkedIn
- Prof. Samit Karmakar: https://in.linkedin.com/in/samit-karmakar-4a325a188
- Prof. Srijita Chakraborty: https://in.linkedin.com/in/srijita-chakraborty-1b940184

---

## ✨ SUMMARY

**Status:** 🟢 Data extraction successful
**Address:** ✅ Updated
**JSON Data:** ✅ Created
**Comparison:** ✅ Documented
**Images:** ⏳ Pending manual download

**Next Action:** Download images manually while logged into Google Sites, then update content page by page using `google-sites-data.json` as reference.

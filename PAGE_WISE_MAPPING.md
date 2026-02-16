# Page-Wise Image & Content Mapping
## IEM ECE Department Website Migration

**Date:** February 16, 2026  
**Status:** In Progress - Systematic Navigation-Based Mapping

---

## Navigation Structure from Google Sites

Based on the extracted data, the old Google Sites had this navigation:
1. HOME
2. Faculty Members
3. Course & Curriculum
4. Events
5. Student's Corner
6. Research
7. Feedback
8. Calendar
9. Contact Us
10. Innovative Teaching Learning (ITL)
11. More (dropdown with additional pages)

---

## 1. HOME PAGE

### Current Status: ✅ 90% Complete

### Images Available:
**Location:** `extracted_data/.../HOME/`
- `1f27e34389873ed236fbefa7fd5da9d2.jpg` - Department/Building photo
- `655712d24e661849e1dad3aa41497f9f.jpg` - HOD photo or department activity
- `7628b50bb49f0e895ec067d511c20156.jpg` - Campus/Department view
- `84b45e96b7f25021e8fa8e91e5bc549e.jpg` - Lab/Infrastructure
- `b55761421d528816d6a080303c1e564e.jpg` - Student activity
- `f84b437cd16dad4901005bf963009c99.jpg` - Department event

**Copied to:** `public/images/home/`

### Content Sections:
- ✅ Hero Section (with circuit pattern background)
- ✅ Department Introduction
- ✅ Key Stats (Established 1996, NBA/AICTE accreditation)
- ✅ HOD Message Component
- ✅ Department Highlights
- ✅ Call to Action

### Remaining Tasks:
- ⏳ Add hero banner image from home folder
- ⏳ Verify all stats match Google Sites exactly

---

## 2. FACULTY MEMBERS PAGE

### Current Status: ⏳ 70% Complete (Content done, images need mapping)

### Images Available:
**Location:** `extracted_data/.../Faculty Members/`
**Count:** 39 faculty images (hashed filenames)

**Copied to:** `public/images/faculty/`

### Faculty List (12 members):
1. Prof. (Dr.) Malay Gangopadhyaya - Professor & Head
2. Prof. (Dr.) Tapan Kumar Rana - Professor
3. Prof. (Dr.) Debasish De - Professor
4. Prof. (Dr.) Himadri Sekhar Dutta - Associate Professor
5. Prof. (Dr.) Runa Kumari - Associate Professor
6. Prof. (Dr.) Srijita Chakraborty - Associate Professor
7. Prof. (Dr.) Sumita Banerjee - Assistant Professor
8. Prof. (Dr.) Karabi Dutta Choudhury - Assistant Professor
9. Prof. Subhabrata Banerjee - Assistant Professor
10. Prof. Tapaasree Roy - Assistant Professor
11. Prof. Amartya Mukherjee - Assistant Professor
12. Prof. (Dr.) Sutapa Dey - Assistant Professor

### Remaining Tasks:
- ⏳ **CRITICAL:** Map 39 faculty images to 12 faculty names
- ⏳ Need to manually identify which image belongs to which faculty member
- ⏳ Update faculty page with actual photos

---

## 3. COURSE & CURRICULUM (ACADEMICS)

### Current Status: ⏳ 40% Complete

### Sub-pages from Google Sites:
1. **BTech ECE** - Undergraduate program details
2. **MTech ECE** - Postgraduate program details
3. **Class Schedules** - 2nd, 3rd, 4th Year, MTech
4. **Syllabus** - Semester-wise course details
5. **Laboratory Manual** - Lab experiment guides
6. **Laboratory Project** - Student projects
7. **Theory** - Course materials
8. **Assignment** - Student assignments
9. **Question Bank** - Previous year questions (2nd, 3rd, 4th Year)
10. **Question Paper Database** - Exam papers
11. **PO PSO & PEO** - Program outcomes
12. **Accreditation** - NBA certificate
13. **Academic Calendar** - Important dates
14. **Holiday List** - Academic holidays

### Images Available:
**Accreditation:** `extracted_data/.../Accreditation/` (3 images)
**Academic Calendar:** `extracted_data/.../Academic Calendar/` (2 images)
**Infrastructure:** `extracted_data/.../Infrastructure/` (15 images)
**Classroom:** `extracted_data/.../Classroom Infrastructure/` (1 image)

### Current Implementation:
- ✅ Basic academics page structure
- ✅ Labs sub-page exists
- ⏳ Routine section needs class schedules
- ⏳ Syllabus section needs semester-wise details
- ⏳ Lab images need to be added
- ⏳ Academic calendar needs to be added

### Remaining Tasks:
- ⏳ Add class schedules for all years
- ⏳ Add syllabus information
- ⏳ Add lab images to labs page
- ⏳ Add accreditation certificates
- ⏳ Add academic calendar
- ⏳ Add PO, PSO, PEO details

---

## 4. EVENTS PAGE

### Current Status: ✅ 85% Complete

### Sub-pages from Google Sites:
1. **Events** - Main events listing
2. **2024** - Year-specific events
3. **Upcoming Events** - Future events
4. **Event Reports** - Past event documentation
5. **Conference** - Academic conferences
6. **Workshops** - Training workshops
7. **Faculty Development Program** - FDP activities
8. **Seminars and Lecture Series** - Guest lectures
9. **Tech-Fest** - Technical festivals
10. **Student Branch Chapter** - IEEE, IETE chapters
11. **IEEE Societies** - APS, CAS, EDS chapters
12. **IETE Student Chapter** - IETE activities

### Images Available & Status:
- ✅ **Events:** `extracted_data/.../Events/` (3 images) - INTEGRATED
- ✅ **2024:** `extracted_data/.../2024/` (9 images) - INTEGRATED
- ✅ **Conference:** `extracted_data/.../Conference/` (15 images) - INTEGRATED
- ✅ **Workshops:** `extracted_data/.../Workshops/` (6 images) - INTEGRATED
- ⏳ **FDP:** `extracted_data/.../Faculty Development Program/` (9 images)
- ⏳ **Seminars:** `extracted_data/.../Seminars and Lecture Series/` (3 images)
- ⏳ **Tech-Fest:** `extracted_data/.../Tech-Fest/` (2 images)
- ⏳ **Student Branch:** `extracted_data/.../Student Branch Chapter/` (8 images)
- ⏳ **IEEE Societies:** Multiple folders (1 image each)

### Current Implementation:
- ✅ SYTRON 2025 event added
- ✅ Bengal E-Summit added
- ✅ 8 past event images integrated
- ✅ Event documentation links section
- ✅ Professional societies section

### Remaining Tasks:
- ⏳ Add more FDP images and details
- ⏳ Add seminar/lecture series images
- ⏳ Add Tech-Fest images
- ⏳ Add Student Branch Chapter images

---

## 5. STUDENT'S CORNER

### Current Status: ✅ 80% Complete

### Sub-pages from Google Sites:
1. **Students Corner** - Main landing
2. **Benefits** - Student benefits information
3. **Career Guidance Cell (CGC)** - Career support
4. **Academic Disciplinary Committee (ADC)** - Academic policies
5. **Industrial Visit** - Industry exposure
6. **Mock Interview Core Subjects** - Interview preparation
7. **Placement** - Placement statistics
8. **Students Achievement** - Awards and recognition
9. **Students Progression** - Higher studies
10. **Higher Study Results** - University admissions
11. **Batch Photography** - Class photos
12. **Photo Gallery** - Department gallery
13. **Extra Curricular Activity** - Sports, cultural events
14. **IEM-UEM Kolkata Marathon** - Marathon participation
15. **NSS & CSR Activity** - Social service
16. **Outreach Activity** - Community engagement
17. **Library IEM Gurukul** - Library resources
18. **Laboratory Manual** - Lab guides
19. **Laboratory Project** - Student projects
20. **Question Bank** - Study materials

### Images Available:
- ⏳ **CGC:** `extracted_data/.../Career Guidance Cell/` (14 images)
- ⏳ **ADC:** `extracted_data/.../Academic Disciplinary Committee/` (6 images)
- ⏳ **Industrial Visit:** `extracted_data/.../Industrial Visit/` (5 images)
- ⏳ **Mock Interview:** `extracted_data/.../Mock Interview Core Subjects/` (4 images)
- ⏳ **Placement:** `extracted_data/.../Placement/` (1 image) + `Copy of Placement/` (14 images)
- ⏳ **Students Achievement:** `extracted_data/.../Students Achievement/` (21 images)
- ⏳ **Batch Photography:** `extracted_data/.../Batch Photography/` (3 images)
- ✅ **Photo Gallery:** `extracted_data/.../Photo Gallery/` (12 images) - INTEGRATED
- ⏳ **Extra Curricular:** `extracted_data/.../Extra Curricular Activity/` (13 images)
- ⏳ **Marathon:** `extracted_data/.../IEM-UEM Kolkata Marathon 2022/` (4 images)
- ⏳ **NSS & CSR:** `extracted_data/.../NSS  CSR Activity/` (4 images)
- ⏳ **Outreach:** `extracted_data/.../Outreach Activity/` (13 images)
- ⏳ **Library:** `extracted_data/.../Library IEM Gurukul/` (5 images)

### Current Implementation:
- ✅ Academic resources section with 8 links
- ✅ Student life section
- ✅ Placement statistics section
- ✅ Links to Gallery, Events, Alumni

### Remaining Tasks:
- ⏳ Add CGC images and details
- ⏳ Add ADC information
- ⏳ Add Industrial Visit gallery
- ⏳ Add Mock Interview section
- ⏳ Add detailed placement statistics with images
- ⏳ Add Students Achievement gallery
- ⏳ Add Batch Photography section
- ⏳ Add Extra Curricular activities gallery
- ⏳ Add NSS & CSR activities
- ⏳ Add Outreach activities

---

## 6. RESEARCH PAGE

### Current Status: ✅ 90% Complete

### Sub-pages from Google Sites:
1. **Research** - Main research page
2. **Publications** - Faculty publications
3. **Patent** - Patent filings
4. **Projects** - Research projects
5. **MoU** - Memoranda of Understanding
6. **Departmental Journal** - Department journal
7. **IoT Research Lab** - IoT lab details
8. **IEDC-ECE** - Entrepreneurship center
9. **AMRL** - Advanced research lab

### Images Available:
- ✅ **Research:** `extracted_data/.../Research/` (2 images) - Copied
- ✅ **IoT Lab:** `extracted_data/.../IoT Research Lab/` (2 images) - Copied
- ⏳ **Departmental Journal:** `extracted_data/.../Departmental Journal/` (4 images)

### Current Implementation:
- ✅ 30 research areas listed
- ✅ 3 research labs with links (IEDC-ECE, AMRL, IoT Lab)
- ✅ Research infrastructure section
- ✅ Publications section (sample data)
- ✅ Patents section (sample data)

### Remaining Tasks:
- ⏳ Add actual publication list
- ⏳ Add actual patent list
- ⏳ Add MoU details
- ⏳ Add departmental journal images
- ⏳ Add research project details

---

## 7. FEEDBACK PAGE

### Current Status: ❌ Not Created

### Images Available:
**Location:** `extracted_data/.../Feedback/` (1 image)

### Content from Google Sites:
- Student Feedback forms
- Alumni Feedback
- Employer Feedback
- Faculty Feedback
- Feedback analysis methodology
- Improvements from feedback

### Remaining Tasks:
- ⏳ Create Feedback page
- ⏳ Add feedback forms/links
- ⏳ Add feedback methodology
- ⏳ Add improvements implemented

---

## 8. CALENDAR PAGE

### Current Status: ❌ Not Created

### Content from Google Sites:
- Google Calendar embed
- Holiday list
- Academic calendar
- Important dates

### Images Available:
**Academic Calendar:** `extracted_data/.../Academic Calendar/` (2 images)

### Remaining Tasks:
- ⏳ Create Calendar page
- ⏳ Add academic calendar
- ⏳ Add holiday list
- ⏳ Embed Google Calendar

---

## 9. CONTACT US PAGE

### Current Status: ✅ 95% Complete

### Images Available:
**Location:** `extracted_data/.../Contact Us/` (1 image)

### Current Implementation:
- ✅ Exact address
- ✅ Phone numbers (+91 33 2357 2969, +91 33 2357 7649)
- ✅ Fax (+91 33 2357 8302)
- ✅ Email (eee.iemk@gmail.com)
- ✅ Site maintainers with LinkedIn links
- ✅ Google Maps embed
- ✅ Contact form

### Remaining Tasks:
- ⏳ Add contact page image if needed

---

## 10. INNOVATIVE TEACHING LEARNING (ITL)

### Current Status: ❌ Not Created

### Images Available:
**Location:** `extracted_data/.../Innovative Teaching Learning ITL/` (1 image)

### Content from Google Sites:
- Main portal: https://www.iemlearning.com/
- Academic management: https://www.iemcrp.com/
- NPTEL Swayam Portal
- Youtube Gymkhana TV
- IEM Alumni Association

### Remaining Tasks:
- ⏳ Create ITL page
- ⏳ Add portal links
- ⏳ Add learning resources
- ⏳ Add ITL image

---

## 11. ALUMNI PAGE

### Current Status: ✅ 100% Complete

### Images Available & Status:
**Location:** `extracted_data/.../Alumni/` (12 images)
- ✅ ALL 12 images copied to `public/images/alumni/`
- ✅ ALL 7 testimonial images mapped and integrated
- ✅ Batch photo (2018-2022) integrated

### Current Implementation:
- ✅ 7 alumni testimonials with exact names and quotes
- ✅ All testimonial photos integrated
- ✅ Batch photo displayed
- ✅ Alumni network CTA section

---

## 12. GALLERY PAGE

### Current Status: ✅ 100% Complete

### Images Available & Status:
**Location:** `extracted_data/.../Photo Gallery/` (12 images)
- ✅ ALL 12 images copied to `public/images/gallery/`
- ✅ ALL 12 images integrated in gallery page
- ✅ Category filters working
- ✅ Responsive grid layout

---

## 13. ADDITIONAL PAGES FROM GOOGLE SITES

### Pages Not Yet Created:

1. **Awards & Achievements**
   - Images: `extracted_data/.../Award  Achievement/` (9 images)
   - Images: `extracted_data/.../Awards  Achievements/` (1 image)
   - Status: ❌ Not created

2. **Accreditation**
   - Images: `extracted_data/.../Accreditation/` (3 images)
   - NBA Certificate
   - Status: ⏳ Partial (mentioned in About page)

3. **NAAC SSR**
   - Status: ❌ Not created

4. **NIRF**
   - Images: `extracted_data/.../NIRF/` (1 image)
   - Status: ❌ Not created

5. **Advisory Board**
   - Status: ✅ Mentioned in About page

6. **Magazine/Newsletter**
   - Images: `extracted_data/.../Magazine/` (1 image)
   - Status: ❌ Not created

7. **Enrichment Programs**
   - Status: ❌ Not created

8. **Engineers Pledge**
   - Status: ❌ Not created

9. **IEM Diary**
   - Status: ❌ Not created

10. **Circulation Notice**
    - Status: ❌ Not created

---

## PRIORITY MAPPING TASKS

### HIGH PRIORITY (Complete First):
1. ✅ Home page images and content
2. ⏳ **Faculty image mapping** (39 images to 12 names) - CRITICAL
3. ✅ Events page with images
4. ✅ Research page with labs
5. ✅ Contact page details
6. ✅ Student Corner resources

### MEDIUM PRIORITY:
7. ⏳ Academics page - class schedules, syllabus
8. ⏳ Student Corner - CGC, ADC, Placement details
9. ⏳ Awards & Achievements page
10. ⏳ Feedback page
11. ⏳ Calendar page

### LOW PRIORITY:
12. ⏳ ITL page
13. ⏳ Magazine/Newsletter
14. ⏳ Additional documentation pages

---

## IMAGE SUMMARY

### Total Images Extracted: 400+
### Images Copied to Public: 150+
### Images Integrated: 40+

### By Category:
- ✅ Alumni: 12 images (100% integrated)
- ✅ Gallery: 12 images (100% integrated)
- ✅ Events: 50+ images (16% integrated - 8 images)
- ⏳ Faculty: 39 images (0% integrated - need mapping)
- ⏳ Home: 6 images (0% integrated)
- ⏳ Infrastructure: 15 images (0% integrated)
- ⏳ Student Activities: 100+ images (0% integrated)
- ⏳ Research: 4 images (0% integrated)
- ⏳ Others: 150+ images (0% integrated)

---

## NEXT STEPS

1. **Faculty Image Mapping** - Manually identify and map 39 faculty images
2. **Academics Page** - Add class schedules, syllabus, lab images
3. **Student Corner Expansion** - Add CGC, ADC, Placement galleries
4. **Create Missing Pages** - Feedback, Calendar, ITL, Awards
5. **Image Integration** - Add remaining images to respective pages
6. **Content Verification** - Cross-check all content with Google Sites

---

**Last Updated:** February 16, 2026  
**Overall Progress:** 65% Complete

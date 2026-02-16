# Content Migration Plan - IEM ECE Department Website

## Overview
This document outlines the exact content from the old Google Sites that needs to be migrated to the new Next.js website. The design stays the same - we're only updating the text and data.

---

## 1. HOME PAGE (`app/page.tsx`)

### Department Introduction
**Current:** Generic placeholder text
**Update to:**
"The Electronics and Communication Engineering department represents one of the institution's foundational engineering programs, established in 1996. The program holds NBA accreditation and AICTE approval. Originally affiliated with Kalyani University, it later transitioned to Maulana Abul Kalam Azad University of Technology."

### Key Stats Section
- **Established:** 1996
- **Accreditation:** NBA, AICTE
- **University:** Maulana Abul Kalam Azad University of Technology
- **Postgraduate Programs:** Started in 2006 (VLSI and Microelectronics)

### HOD Message (`components/sections/HODMessage.tsx`)
**Update message to:**
"The department emphasizes mentor-based education, practical laboratory work, and student participation in research projects spanning embedded systems, VLSI, DSP, and image processing. Our programs encourage publication in international journals and involvement in interdisciplinary activities. We are committed to developing competent professionals who contribute to engineering and technology advancement."

**HOD Details:**
- Name: Prof. (Dr.) Malay Gangopadhyaya
- Designation: Professor & Head of Department
- Email: malay.gangopadhyaya@iemcal.com

---

## 2. ABOUT PAGE (`app/about/page.tsx`)

### Vision
"To evolve as a centre of excellence with international repute having the ability to adapt to the changing needs of industry and society through quality education, research and innovation."

### Mission
1. "Developing competent professionals contributing to engineering and technology advancement"
2. "Delivering quality education meeting stakeholder expectations"
3. "Supporting higher studies, research, and entrepreneurship initiatives"
4. "Fostering innovation and research in emerging technologies"

### HOD Message (Extended)
Same as home page + additional context about the department's focus on practical learning and industry collaboration.

### Advisory Board
Keep the existing structure but verify these members are current.

---

## 3. FACULTY PAGE (`app/faculty/page.tsx`)

### Faculty Members (Update with actual data)

**Professors:**
1. Prof. (Dr.) Malay Gangopadhyaya - Professor & Head
   - Qualification: Ph.D.
   - Area: Device, Circuit & System
   - Email: malay.gangopadhyaya@iemcal.com

2. Prof. (Dr.) Tapan Kumar Rana - Professor
   - Qualification: Ph.D.
   - Area: Microwave & Antenna
   - Email: tapan.rana@iemcal.com

3. Prof. (Dr.) Debasish De - Professor
   - Qualification: Ph.D.
   - Area: Mobile Computing
   - Email: debasish.de@iemcal.com

**Associate Professors:**
4. Prof. (Dr.) Himadri Sekhar Dutta
   - Qualification: Ph.D.
   - Area: Photonics
   - Email: himadri.dutta@iemcal.com

5. Prof. (Dr.) Runa Kumari
   - Qualification: Ph.D.
   - Area: Control Systems
   - Email: runa.kumari@iemcal.com

6. Prof. (Dr.) Srijita Chakraborty
   - Qualification: Ph.D.
   - Area: Signal Processing
   - Email: srijita.chakraborty@iemcal.com

**Assistant Professors:**
7. Prof. (Dr.) Sumita Banerjee
   - Qualification: Ph.D.
   - Area: VLSI Design
   - Email: sumita.banerjee@iemcal.com

8. Prof. (Dr.) Karabi Dutta Choudhury
   - Qualification: Ph.D.
   - Area: Communication
   - Email: karabi.dutta@iemcal.com

9. Prof. Subhabrata Banerjee
   - Qualification: M.Tech
   - Area: Embedded Systems
   - Email: subhabrata.banerjee@iemcal.com

10. Prof. Tapaasree Roy
    - Qualification: M.Tech
    - Area: Analog Electronics
    - Email: tapaasree.roy@iemcal.com

11. Prof. Amartya Mukherjee
    - Qualification: M.Tech
    - Area: IoT
    - Email: amartya.mukherjee@iemcal.com

12. Prof. (Dr.) Sutapa Dey
    - Qualification: Ph.D.
    - Area: Nano-electronics
    - Email: sutapa.dey@iemcal.com

**Note:** Images for faculty members are available in the extracted data folder. They need to be copied to `public/images/faculty/` directory.

---

## 4. ALUMNI PAGE (Create new: `app/alumni/page.tsx`)

### Notable Alumni Testimonials

1. **BISWARUP DEBNATH** (Batch of 2017)
   "The progression from IEM to IISc became so easy only because of my faculty members of ECE department."

2. **TAMOGHNA SAHA** (Batch of 2017)
   "The three years journey of B.TECH in ECE department has made much more matured and able person and I owe a lot to all my teachers."

3. **SOUNAK LAHIRI** (Batch of 2016)
   "The teachers are very knowledgeable and supportive and I am in debt to the department for inculcating the sense of discipline and responsibility in me."

4. **SUSMIT BHATTACHARYA** (Batch of 2016)
   "I had the golden period of my student life in IEM and the department helped me a lot to achieve what I am today."

5. **RIYA SETT** (Batch of 2016)
   "The department of ECE have nurtured the students right from the very early stage and have made them able to compete in their professional life."

6. **AGOMONI SARKAR** (Batch of 2015)
   "Each and every faculty members are very much cooperative and that has helped me to built my career."

7. **JIMIT SHETH** (Batch of 2015)
   "Being a professional now, I take pride in the fact that I am from IEM. The discipline and the culture of the department are something that helped us a lot to establish our self in our professional life."

**Batch Photo:** IEM ECE BATCH (2018-2022) - Image available in Alumni folder

---

## 5. EVENTS PAGE (`app/events/page.tsx`)

### Current/Upcoming Events

**SYTRON 2025**
- Dates: August 30-31, 2025
- Type: Technical Extravaganza
- Description: IoT and Verilog workshops, robotic competitions, model exhibitions, poster presentations, technical quizzes, tech talks, Gen-AI app challenges, coding competitions, and gaming events
- Website: https://www.sytron.co.in/
- Image: Available in extracted data

**Bengal E-Summit**
- Website: https://bengalesummit.in/
- Images: Available in extracted data

### Event Categories (Links to Google Sheets)
- FDPs Conducted
- Entrepreneurship Activities
- Workshops
- Distinguished Lecture Series
- Seminars
- Industry Interaction & Alumni Mentoring

---

## 6. RESEARCH PAGE (`app/research/page.tsx`)

### Research Areas (30 total)
1. Communication Engineering
2. Semiconductor devices and quantum electronics
3. Dielectric and substrate integrated waveguides
4. Antenna design (microstrip, wearable, dielectric resonator)
5. Filter design and cavity resonators
6. Low-power VLSI design
7. Power electronics and industrial electronics
8. Solid-state lighting
9. Microcontroller-based embedded systems
10. Digital image processing and computer vision
11. Pattern recognition and machine learning
12. Biomedical and medical electronics
13. Nanotechnology
14. Renewable energy and climate change
15. Optical systems (self-imaging, tweezers, telescopes)
... (and 15 more areas)

### Research Infrastructure
- **IEDC-ECE:** Entrepreneurship development center (https://iedc-ece.iem.edu.in/)
- **AMRL Facility:** Advanced research laboratory (https://sites.google.com/view/iem-amrl/home)
- **IoT Research Lab:** Internet of Things specialization

### Research Outputs
- Publications
- Patent filings
- MoU with partners
- Departmental journal

---

## 7. STUDENT CORNER PAGE (`app/student-corner/page.tsx`)

### Academic Resources
- Academic ERP portal (https://www.iemcrp.com/iemEn/loginCole.jsp?mcole=104)
- Career Guidance Cell (CGC)
- Academic Disciplinary Committee (ADC)
- Placement support with mock interviews
- Student Scholarship (https://iem.edu.in/scholarships/)

### Professional Development
- MatLab Campus License (https://in.mathworks.com/academia/tah-portal/institute-of-engineering-and-management-31600358.html)
- Industrial Visit opportunities
- Student Branch Chapter activities
- Faculty mentorship networks

### Student Life
- Photo Gallery
- Batch Photography collections
- Tech-Fest participation
- Extra Curricular Activities
- Alumni networking sections

---

## 8. ACADEMICS PAGE (Labs & Routine)

### Laboratory Infrastructure
- Multiple specialized labs for ECE
- IoT Research Lab
- VLSI Lab
- Communication Lab
- Microprocessor Lab

### Class Schedules
- BTech 2nd Year: Even Semester 2026 (from Jan 5, 2026)
- BTech 3rd Year: Even Semester 2026 (from Jan 5, 2026)
- BTech 4th Year: Even Semester 2026 (from Jan 5, 2026)
- MTech 1st Year: Even Semester 2026 (from Jan 5, 2026)

---

## 9. CONTACT PAGE (`app/contact/page.tsx`)

### Contact Information
**Address:**
Gurukul, Y-12, Block-EP, Sector-V, Salt Lake Electronics Complex, Kolkata – 700 091, West Bengal, India

**Phone:**
- +91 33 2357 2969
- +91 33 2357 7649

**Fax:** +91 33 2357 8302

### Site Maintainers
1. **Prof. Samit Karmakar**
   - LinkedIn: https://in.linkedin.com/in/samit-karmakar-4a325a188

2. **Prof. Srijita Chakraborty**
   - LinkedIn: https://in.linkedin.com/in/srijita-chakraborty-1b940184

---

## 10. IMAGES TO MIGRATE

### Priority Images
1. **Faculty Photos:** Located in `extracted_data/.../Faculty Members/` folder
   - Copy to: `public/images/faculty/`
   - Format: Keep original filenames or rename systematically

2. **Alumni Photos:** Located in `extracted_data/.../Alumni/` folder
   - Copy to: `public/images/alumni/`

3. **Event Photos:** Located in various event folders
   - Copy to: `public/images/events/`

4. **Infrastructure Photos:** Located in `extracted_data/.../Infrastructure/` folder
   - Copy to: `public/images/infrastructure/`

5. **Research Lab Photos:** Located in respective lab folders
   - Copy to: `public/images/labs/`

---

## Implementation Priority

### Phase 1 (High Priority)
1. ✅ Update HOME page content
2. ✅ Update ABOUT page (Vision, Mission)
3. ✅ Update FACULTY page with actual data
4. ✅ Update HOD Message component

### Phase 2 (Medium Priority)
5. ⬜ Create ALUMNI page with testimonials
6. ⬜ Update EVENTS page with SYTRON 2025
7. ⬜ Update RESEARCH page with areas and labs
8. ⬜ Update CONTACT page information

### Phase 3 (Lower Priority)
9. ⬜ Migrate all images
10. ⬜ Update STUDENT CORNER page
11. ⬜ Update ACADEMICS page (Labs & Routine)
12. ⬜ Add Gallery page

---

## Notes
- All external links should open in new tabs
- Maintain responsive design for all content
- Ensure accessibility compliance
- Keep the existing design system and color scheme
- Images need to be optimized before deployment
- Verify all email addresses and phone numbers are current

# Synopsis
How to lean up and optimize resumes for Applicant Tracking Systems (ATS).

# How ATS Works
An ATS is software used by recruiters and employers to collect, parse, sort, and rank resumes before a human reviews them. Most mid-size and large employers use one — estimates commonly cited range from roughly 75-99% of large companies and 98%+ of the Fortune 500. Two things happen in sequence:

- **Parsing** — the ATS extracts your text into structured fields (name, contact info, job titles, dates, skills, experience). Bad formatting breaks this step, scrambling or dropping data before a recruiter ever searches it.
- **Ranking/filtering** — once parsed, the ATS (or a human using its search) matches your content against job description keywords and scores or filters candidates accordingly.

Getting past an ATS is therefore two separate problems: **make sure it can parse your resume correctly**, then **make sure what it parses matches the job**.

# Keyword Matching
- Mirror the job description's exact language for job titles, skills, tools, and action verbs. Many ATS do literal or near-literal matching, not semantic understanding — "cross-functional collaboration" will not reliably match "interdepartmental teamwork," and "Adobe Creative Suite" will not reliably match "Adobe Creative Cloud."
- Include the exact job title somewhere in your resume when it accurately reflects your role or a past role.
- Place each important keyword in more than one place — e.g., the skills section, a role title or summary line, and inside a bullet that proves you actually used it. Repetition across sections (roughly 2-3 natural occurrences) reinforces the match without keyword stuffing.
- A common target is roughly 65-75% keyword match against the job description, though this varies by system and role.
- Newer AI-enhanced ATS and recruiter review can penalize keyword stuffing — text that repeats terms unnaturally or without supporting context. The goal is natural language that happens to contain the right terms, not a wall of repeated buzzwords.
- Spell out acronyms alongside the abbreviation on first use so both forms are searchable, e.g. "Search Engine Optimization (SEO)" or "Customer Relationship Management (CRM)." After the first mention, the acronym alone is fine.

# Formatting That Breaks Parsing
Avoid these — they are the most common causes of scrambled, dropped, or misread resume content:

- **Tables and multi-column layouts** — many parsers read left-to-right, top-to-bottom and can interleave or drop content split across columns or table cells. Stick to a single-column layout.
- **Text boxes, images, graphics, charts, and icons** — text inside an image or text box is often invisible to the parser. Skill-level graphics (bars, star ratings) should be replaced with plain text, e.g. "Java (Expert)" instead of a rating graphic.
- **Headers and footers** — many ATS parsers skip header/footer regions entirely. Never put contact information (name, phone, email, LinkedIn) only in a header/footer; put it in the main body of the document.
- **Non-standard fonts** — stick to widely supported fonts such as Arial, Calibri, Georgia, or Times New Roman. Decorative or unusual fonts can render as garbled characters or be dropped.
- **Special characters and unicode bullets/symbols** — fancy bullet glyphs, arrows, emoji, or symbol characters (e.g. a phone icon instead of the word "Phone:") can turn into gibberish or blank text when parsed. Use simple bullets (solid circle, open circle, square, hyphen).
- **Scanned or "flattened" image-based PDFs** — a PDF exported from Word/Google Docs contains real, selectable text and parses fine. A PDF that is actually a scanned image or screenshot has no underlying text layer, so the ATS reads a blank page.

# Standard Section Headings
Use conventional, predictable headings so the parser correctly buckets your content:

- "Work Experience" or "Professional Experience" — not "My Journey" or "Where I've Been"
- "Education"
- "Skills" or "Core Competencies"
- "Summary" or "Professional Summary"

Creative or cutesy headings may look distinctive to a human but can prevent the ATS from correctly categorizing the section, which can mean the content under it is effectively ignored during automated matching.

# File Format: PDF vs. DOCX
This is an area where the conventional wisdom has genuinely shifted, and some advice online is outdated:

- **The old, now largely outdated claim:** "ATS can't read PDFs at all." This was true of some older or poorly-implemented systems but is not an accurate description of most systems in current use.
- **The current, more accurate picture:** Modern major ATS platforms (e.g. Workday, Greenhouse, Lever, iCIMS) generally parse *text-based* PDFs (exported from Word, Google Docs, or a resume builder) just as well as DOCX. What breaks parsing isn't the PDF format itself — it's an image-based/scanned PDF, or a PDF built with heavy design formatting (tables, columns, text boxes), regardless of file type.
- **Remaining caution:** Some career-advice sources still recommend DOCX as the "safer default" when you don't know which ATS a particular employer uses, since a small minority of systems still handle older or non-standard PDF exports poorly. If the job posting specifies a format, always follow it. If unspecified, either a clean text-based PDF or a simply-formatted .docx is a reasonable, low-risk choice — the formatting simplicity matters more than the file extension.
- Avoid generating your resume from heavily visual tools (e.g. Canva-style templates or typesetting systems) that produce complex underlying structure, regardless of the final file format.

# Dates and Other Details
- Use a consistent, unambiguous date format throughout, such as "Jan 2022 – Mar 2024" or "01/2022 – 03/2024." Avoid apostrophe abbreviations (e.g. "Jan '22") and avoid omitting the month (e.g. "2022 – 2024"), both of which can parse incorrectly or make tenure calculations inaccurate.
- Keep name, job title, employer, and dates on their own clearly separated lines rather than crammed into one run-on line — this helps both parsers and human skimmers.
- Use standard, spelled-out degree names and job titles where possible, since ATS keyword matching is often literal.

# Relationship to STAR / CAR / PAR
ATS optimization and bullet-writing frameworks like STAR, CAR, and PAR solve different problems and are complementary, not competing:

- **ATS optimization is about WHAT terms appear** — ensuring the right keywords, skills, and job titles are present and parsed correctly so the resume is found and ranked well in the first place.
- **STAR/CAR/PAR is about HOW a bullet is structured** — turning a raw responsibility into a compelling, results-oriented statement (situation/context/problem → action → result) once a human (or an AI reviewer) actually reads it.

In practice, write bullets using a framework like STAR/CAR/PAR for structure and impact, then check that the resulting sentence naturally contains the keywords and phrasing the job description uses. A STAR-structured bullet that never mentions the target skill by name still won't surface in a keyword-filtered ATS search — and a bullet stuffed with keywords but no structure or result reads poorly to the human reviewer once it gets through. Both passes are necessary.

# Appendix
## Sources
- [Indeed Career Guide — ATS-Friendly Resume: 18 Tips to Pass Applicant Tracking Systems](https://www.indeed.com/career-advice/resumes-cover-letters/automated-screening-resume)
- [Indeed Career Guide — 13 Best Practices for Beating an Applicant Tracking System](https://www.indeed.com/career-advice/resumes-cover-letters/how-to-beat-applicant-tracking-system)
- [Jobscan — 5 Critical ATS Resume Formatting Mistakes to Avoid](https://www.jobscan.co/blog/ats-formatting-mistakes/)
- [Jobscan — Applicant Tracking Systems: Everything You Need to Know](https://www.jobscan.co/applicant-tracking-systems)
- [TopResume — How to Make an ATS-Friendly Resume](https://topresume.com/career-advice/what-is-an-ats-resume)
- [UC Irvine Career Center — Mastering ATS Career Guide (PDF)](https://career.uci.edu/wp-content/uploads/2025/03/2025-Mastering-ATS-Career-Guide-8.5x11.pdf)

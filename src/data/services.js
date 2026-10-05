/** Service content. `icon` keys map to src/components/icons.js, `art` to ArtPlate variants. */
export const services = [
  {
    id: 'thesis-to-paper',
    number: '01',
    icon: 'FileText',
    art: 'sprig',
    projectType: 'thesis',
    title: 'Thesis-to-Paper Conversion',
    detailTitle: 'Thesis-to-Paper Conversion & Clinician Publications',
    summary:
      'Transform academic and clinical research work into structured, publication-ready research papers.',
    description:
      'Years of careful work often stay locked inside a thesis or a clinical record. We help postgraduate scholars and practising clinicians turn that work into manuscripts that meet journal standards, with clear structure, sound reporting and a realistic submission plan.',
    offerings: [
      { title: 'Thesis analysis', text: 'A structured review of your data, design and findings to identify the publishable core.' },
      { title: 'Research structuring', text: 'Planning the paper around a clear question, methods and results.' },
      { title: 'Manuscript preparation', text: 'Drafting and refining sections in line with reporting guidelines.' },
      { title: 'Scientific communication', text: 'Precise, readable writing that reviewers and clinicians can follow.' },
      { title: 'Publication guidance', text: 'Journal selection, formatting, cover letters and response to reviewers.' },
    ],
  },
  {
    id: 'collaborative-projects',
    number: '02',
    icon: 'Users',
    art: 'rings',
    projectType: 'collaboration',
    title: 'Collaborative Health Projects',
    detailTitle: 'Collaborative Health Projects',
    summary:
      'Collaborate with institutes, clinicians and organizations on meaningful health and research initiatives.',
    description:
      'We work alongside colleges, hospitals, clinics and health organisations to plan and run projects where Ayurveda, Yoga and modern healthcare meet, from study design to documentation and dissemination.',
    offerings: [
      { title: 'Institutional collaboration', text: 'Joint work with colleges, hospitals and research bodies.' },
      { title: 'Clinical projects', text: 'Protocol support for observational and interventional studies.' },
      { title: 'Research partnerships', text: 'Long-term partnerships built around shared research questions.' },
      { title: 'Organization-based projects', text: 'Health and wellness programmes with measurable outcomes.' },
    ],
  },
  {
    id: 'workshops-webinars',
    number: '03',
    icon: 'Presentation',
    art: 'lattice',
    projectType: 'workshop',
    title: 'Research Workshops & Webinars',
    detailTitle: 'Workshops & Webinars',
    summary:
      'Practical workshops and webinars focused on research methodology and scientific communication.',
    description:
      'Hands-on sessions for students, faculty and practitioners who want to build research skills. Each session is practical, example-led and adapted to the audience, from first-time researchers to experienced clinicians.',
    offerings: [
      { title: 'Research methodology', text: 'Study designs, sampling, outcome measures and basic statistics.' },
      { title: 'Scientific writing', text: 'Writing abstracts, manuscripts and grant summaries with clarity.' },
      { title: 'Research planning', text: 'Turning a clinical observation into a workable research plan.' },
      { title: 'Academic guidance', text: 'Mentoring on ethics, registration, referencing and publication.' },
    ],
  },
  {
    id: 'ayurveda-consultancy',
    number: '04',
    icon: 'Sprout',
    art: 'molecule',
    projectType: 'consultancy',
    title: 'Ayurveda Procedures & Product Guidance',
    detailTitle: 'Ayurveda Procedures, Therapies & Product Formulation',
    summary:
      'Guidance related to Ayurveda procedures, therapies and product formulation.',
    description:
      'Practical, classically grounded advice for practitioners and organisations working with Ayurvedic procedures, therapy protocols and formulations, with attention to documentation and quality from the start.',
    offerings: [
      { title: 'Ayurveda procedure guidance', text: 'Protocol clarity and documentation for classical procedures.' },
      { title: 'Therapy-related consultancy', text: 'Structuring therapy programmes for clinics and wellness centres.' },
      { title: 'Product formulation guidance', text: 'Referencing classical sources, ingredient rationale and quality considerations.' },
    ],
  },
];

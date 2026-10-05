/**
 * MOCK ARTICLE DATA
 * Shape mirrors what a CMS would return. To go live, replace the functions in
 * src/services/articlesApi.js with calls to WordPress REST, a headless CMS or a Spring Boot API,
 * mapping the response to these same fields:
 * id, title, slug, excerpt, content (HTML), image, category, author, date (ISO), readTime
 *
 * `image` can be a normal URL, or "art:<variant>" to render a built-in illustration.
 */
export const categories = ['Ayurveda', 'Yoga', 'Research', 'Healthcare', 'Clinical Studies', 'Scientific Writing'];

export const articles = [
  {
    id: 1,
    slug: 'ayurveda-modern-research',
    title: 'Integrating Ayurveda with Modern Research',
    excerpt: 'Classical Ayurvedic ideas can be studied with modern methods without losing what makes them distinctive. Here is how to begin.',
    category: 'Ayurveda',
    author: 'Dr. Aditi Deshmukh',
    date: '2026-09-12',
    readTime: '6 min read',
    image: 'art:sprig',
    imageAlt: 'Botanical specimen illustration of a medicinal herb with measurement marks',
    content: `<p>Ayurveda carries centuries of observation about food, medicines, routines and the human constitution. Modern research offers tools to test, refine and communicate that knowledge. The two are not in competition. The real challenge is translation: framing classical ideas as questions that a study can answer.</p>
<h2>Start with a clear question</h2>
<p>Terms such as dosha imbalance or agni can be difficult to measure directly. Good integrative research starts by deciding what can be observed: a symptom score, a laboratory value, a functional outcome or a patient-reported measure. The classical concept then guides the intervention and the selection of participants, while the outcome stays measurable.</p>
<blockquote>The aim is not to make Ayurveda look like biomedicine. It is to make its claims testable.</blockquote>
<h2>Respect the individualised approach</h2>
<p>Ayurvedic practice often tailors treatment to the person. This can be built into a protocol through clear, pre-defined rules for how treatment is chosen, so the approach can be reported and repeated by others.</p>
<h2>Report with transparency</h2>
<ul><li>Describe the intervention in enough detail to be reproduced, including source texts and preparation methods.</li><li>Use recognised reporting guidelines for the study design.</li><li>Register clinical trials and state limitations openly.</li></ul>
<p>When these steps are followed, Ayurvedic research becomes easier for peers, journals and clinicians to read, trust and build upon.</p>`,
  },
  {
    id: 2,
    slug: 'understanding-evidence-based-healthcare',
    title: 'Understanding Evidence-Based Healthcare',
    excerpt: 'What evidence-based practice really means, why it matters for traditional medicine, and how clinicians can apply it every day.',
    category: 'Healthcare',
    author: 'Dr. Rohan Kulkarni',
    date: '2026-08-28',
    readTime: '5 min read',
    image: 'art:lattice',
    imageAlt: 'Line chart with confidence band representing clinical evidence',
    content: `<p>Evidence-based healthcare combines three things: the best available research, the clinician's experience, and the values and circumstances of the patient. It is often misread as research alone. In practice, it is a way of making decisions that stay honest about what is known and what is not.</p>
<h2>Not all evidence is equal</h2>
<p>A single case report, a well-designed cohort study and a systematic review of randomised trials answer different questions and carry different weight. Understanding this hierarchy helps clinicians read studies critically and avoid over-stating a result.</p>
<h2>Why it matters for traditional medicine</h2>
<p>Traditional systems have a long record of practice but a shorter record of formal trials. Evidence-based thinking gives a shared language for that conversation. It helps identify which practices are well supported, which need more study, and where the research gaps are.</p>
<h2>Applying it day to day</h2>
<ol><li>Frame a clear clinical question.</li><li>Search for relevant studies.</li><li>Appraise their quality and relevance.</li><li>Discuss options with the patient.</li><li>Record outcomes so your own practice becomes evidence.</li></ol>
<p>That last step is where clinicians can make the biggest contribution: careful documentation is the raw material of future research.</p>`,
  },
  {
    id: 3,
    slug: 'research-methodology-in-ayurveda',
    title: 'Research Methodology in Ayurveda',
    excerpt: 'A practical overview of study designs, outcome measures and common pitfalls for researchers working with Ayurvedic interventions.',
    category: 'Research',
    author: 'Dr. Rohan Kulkarni',
    date: '2026-08-10',
    readTime: '7 min read',
    image: 'art:rings',
    imageAlt: 'Concentric circle diagram suggesting a sampling and study design framework',
    content: `<p>Choosing the right design is the most important decision in any study. Ayurvedic research spans literary review, pharmacognosy, laboratory work, observational studies and clinical trials. Each has its own standards.</p>
<h2>Match the design to the question</h2>
<p>A question about how a formulation is described in classical texts needs a literary and conceptual review. A question about whether a therapy improves an outcome needs a comparative clinical design. Using a stronger design than the question needs wastes resources, while a weaker one leaves the question unanswered.</p>
<h2>Common pitfalls</h2>
<ul><li>Small samples without a justification for the sample size.</li><li>Outcome measures that do not reflect the condition being treated.</li><li>Unclear descriptions of the intervention.</li><li>Missing ethics approval or trial registration.</li></ul>
<h2>Plan analysis before collecting data</h2>
<p>Deciding the primary outcome and statistical approach in advance protects a study from bias and makes the final paper far easier to write. A short pilot can reveal practical problems before they become costly.</p>`,
  },
  {
    id: 4,
    slug: 'from-thesis-to-manuscript',
    title: 'From Thesis to Manuscript: A Practical Path to Publication',
    excerpt: 'A thesis and a journal paper are different documents. Learn how to identify the publishable core and shape it for reviewers.',
    category: 'Scientific Writing',
    author: 'Dr. Aditi Deshmukh',
    date: '2026-07-22',
    readTime: '6 min read',
    image: 'art:sprig',
    imageAlt: 'Botanical illustration representing the growth of a manuscript from raw research',
    content: `<p>Many postgraduate scholars finish a thesis and then find that it never becomes a paper. The reasons are usually practical: time pressure, uncertainty about structure and unfamiliarity with journal expectations.</p>
<h2>Find the single story</h2>
<p>A thesis can hold several questions. A paper needs one main message. Begin by choosing the question your data answers most convincingly, and let everything else support it or move to a second paper.</p>
<h2>Restructure, don't copy</h2>
<p>Journal readers expect a short introduction, focused methods, clear results and an honest discussion. Long literature reviews and extended methods must be condensed. Tables and figures should carry as much of the result as possible.</p>
<h2>Choose the journal early</h2>
<p>Read the author guidelines before writing. Word limits, reference style and reporting checklists shape how you write. Choosing a journal whose readers care about your question also improves your chances.</p>
<h2>Prepare for revision</h2>
<p>Revision requests are a normal part of the process. A polite, point-by-point response that changes the manuscript where reviewers have a fair point is often the difference between rejection and acceptance.</p>`,
  },
  {
    id: 5,
    slug: 'designing-credible-yoga-studies',
    title: 'Studying Yoga as an Intervention: Designing Credible Studies',
    excerpt: 'Yoga is easy to practise and hard to standardise. This piece looks at how researchers can define, deliver and measure it well.',
    category: 'Yoga',
    author: 'Dr. Meera Iyer',
    date: '2026-07-05',
    readTime: '5 min read',
    image: 'art:rings',
    imageAlt: 'Concentric circles symbolising breath and structured practice',
    content: `<p>Yoga can include postures, breathing practices, meditation, lifestyle guidance or all of these together. That flexibility is a strength in practice but a challenge in research, because a study must say exactly what participants did.</p>
<h2>Define the intervention</h2>
<p>Specify the practices, their order, duration, frequency and level of supervision. Name the tradition or text if you follow one. Another researcher should be able to deliver the same programme from your description.</p>
<h2>Choose meaningful outcomes</h2>
<p>Select outcomes that match the purpose of the programme, such as pain scores, sleep quality, stress measures or physical function. Combine patient-reported outcomes with objective measures where possible.</p>
<h2>Plan for adherence</h2>
<p>Attendance and home practice strongly affect results. Record them, and consider how you will handle participants who stop early. Reporting adherence honestly makes the findings more useful.</p>`,
  },
  {
    id: 6,
    slug: 'designing-clinical-studies-ayurvedic-interventions',
    title: 'Designing Clinical Studies for Ayurvedic Interventions',
    excerpt: 'Trial registration, ethics, blinding and documentation: the essentials to get right before recruiting your first participant.',
    category: 'Clinical Studies',
    author: 'Dr. Rohan Kulkarni',
    date: '2026-06-18',
    readTime: '8 min read',
    image: 'art:molecule',
    imageAlt: 'Chemical structure diagram representing a standardised formulation',
    content: `<p>A clinical study is judged as much by its preparation as by its results. The steps below apply whether you are testing a classical formulation, a procedure or a lifestyle programme.</p>
<h2>Protocol and ethics</h2>
<p>Write a protocol that states the objective, eligibility, intervention, outcomes and analysis plan. Obtain approval from an institutional ethics committee before enrolling participants, and use clear informed-consent materials.</p>
<h2>Registration</h2>
<p>Prospectively registering a trial in a recognised registry supports transparency and is expected by most journals.</p>
<h2>Standardise and document the intervention</h2>
<p>For herbal or herbo-mineral products, record the source of ingredients, preparation method and quality checks. For procedures, describe steps and practitioner qualifications.</p>
<h2>Consider blinding and comparison</h2>
<p>Where blinding is not possible, say so and take other steps to limit bias, such as objective outcomes and independent assessment.</p>
<blockquote>A study designed with care is easier to defend, easier to publish and easier for others to replicate.</blockquote>`,
  },
];

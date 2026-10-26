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
  slug: 'care-consort-prisma-reporting-guidelines',
  title: 'CARE, CONSORT, and PRISMA: Choosing the Right Framework for Clinical Documentation and Publication',
  excerpt: 'Choosing the right reporting guideline is essential for transparent scientific publication. Learn how CARE, CONSORT, and PRISMA support case reports, clinical trials, and systematic reviews.',
  category: 'Research',
  author: 'Dr. Prajakta Giratkar',
  date: '2026-10-15',
  readTime: '4 min read',
  image: '/images/articles/care-consert-prisama.png',
  imageAlt: 'Scientific illustration representing structured clinical research and evidence reporting',
  content: `<p>Every clinician encounters unique clinical presentations, breakthrough treatment responses, or innovative therapeutic combinations in daily practice. Yet, when attempting to publish these valuable observations, many manuscripts face immediate desk rejection from peer-reviewed journals.</p>

<p>The primary reason is rarely the clinical outcome itself; rather, it is methodological ambiguity—a lack of standardized reporting.</p>

<p>Modern biomedical journals (both conventional and integrative) require standardized reporting guidelines endorsed by the EQUATOR Network (Enhancing the QUAlity and Transparency Of health Research). Understanding which framework applies to your data is the first step in turning clinical practice into indexed literature.</p>

<p>Here is a practical guide to the three foundational frameworks every clinician and researcher must know: CARE, CONSORT, and PRISMA.</p>

<h2>1. CARE: For Single Cases and Clinical Case Series</h2>
<p><em>(CAse REport Guidelines)</em></p>
<ul>
<li><strong>Study Design:</strong> Retrospective or prospective observational reporting of a single patient or a small series of patients treated in regular practice.</li>
<li><strong>When to Use It:</strong>
<ul>
<li>Documenting an unexpected therapeutic response to a traditional formulation or integrative regimen.</li>
<li>Reporting adverse events, drug interactions, or novel diagnostic insights.</li>
<li>Describing complex, individualized management protocols that cannot be captured in a rigid trial format.</li>
</ul>
</li>
<li><strong>Why Clinicians Need It:</strong> Journals often reject case reports for lacking baseline details or missing chronological timelines. The 13-item CARE checklist ensures you document patient history, diagnostic assessments, intervention timelines (including exact dosage, duration, and co-prescriptions), and follow-up endpoints with transparency.</li>
</ul>
<p><strong>Key Rule of Thumb:</strong> If your data comes directly from routine clinical charts and describes real-world patient care without an experimental intervention protocol, CARE is your reporting guideline.</p>

<h2>2. CONSORT: For Interventional Clinical Trials</h2>
<p><em>(Consolidated Standards of Reporting Trials)</em></p>
<ul>
<li><strong>Study Design:</strong> Randomized Controlled Trials (RCTs) and prospective clinical trials comparing two or more intervention arms.</li>
<li><strong>When to Use It:</strong>
<ul>
<li>Testing a standardized Ayurvedic medicine or integrative protocol against an active comparator, standard of care, or placebo.</li>
<li>Formally measuring efficacy, safety, and biomarker shifts in a structured patient cohort.</li>
</ul>
</li>
<li><strong>Why Clinicians Need It:</strong> CONSORT provides a 25-item checklist and a standardized flow diagram mapping patient progression from screening and randomization to intervention and final analysis. It ensures readers and peer reviewers understand exactly how bias was minimized and whether the findings can be replicated.</li>
</ul>
<p><strong>Key Rule of Thumb:</strong> If you are actively allocating patients to specific treatment groups to test a formal clinical hypothesis, your manuscript must strictly follow CONSORT (or its specialized extensions, such as CONSORT for Herbal Interventions).</p>

<h2>3. PRISMA: For Systematic Reviews and Meta-Analyses</h2>
<p><em>(Preferred Reporting Items for Systematic Reviews and Meta-Analyses)</em></p>
<ul>
<li><strong>Study Design:</strong> Secondary research synthesizing all available published studies on a specific clinical question.</li>
<li><strong>When to Use It:</strong>
<ul>
<li>Evaluating the collective evidence for a therapeutic modality (e.g., Ayurvedic interventions in Polycystic Ovarian Syndrome: A Systematic Review).</li>
<li>Summarizing safety profiles or clinical efficacy across multiple published clinical trials or observational studies.</li>
</ul>
</li>
<li><strong>Why Clinicians Need It:</strong> Unlike a casual, narrative literature review, a systematic review follows a transparent, reproducible search protocol across databases (such as PubMed, Scopus, DHARA, and Ayush Research Portal). PRISMA outlines the 27-item checklist and the famous 4-stage flow diagram: Identification, Screening, Eligibility, and Included.</li>
</ul>
<p><strong>Key Rule of Thumb:</strong> If your study does not involve new patients, but instead systematically analyzes the existing body of scientific literature, PRISMA is mandatory.</p>

<h2>Quick Comparison at a Glance</h2>
<table>
<thead>
<tr>
<th>Reporting Framework</th>
<th>Best Suited For</th>
<th>Core Source of Data</th>
<th>Key Deliverable</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CARE</strong></td>
<td>Case Reports &amp; Case Series</td>
<td>Routine OPD/IPD medical records &amp; clinical notes</td>
<td>Chronological timeline &amp; individual clinical narrative</td>
</tr>
<tr>
<td><strong>CONSORT</strong></td>
<td>Randomized Controlled Trials (RCTs)</td>
<td>Pre-planned trial protocol &amp; patient cohort logs</td>
<td>25-item checklist &amp; patient enrollment flowchart</td>
</tr>
<tr>
<td><strong>PRISMA</strong></td>
<td>Systematic Reviews &amp; Meta-Analyses</td>
<td>Database search queries (PubMed, Scopus, etc.)</td>
<td>27-item checklist &amp; study selection flow diagram</td>
</tr>
</tbody>
</table>

<h2>Bridging Clinical Practice with Publication Standards</h2>
<p>Clinical experience is rich with insight, but peer-reviewed indexing requires methodological structure. Adopting these international reporting frameworks at the very beginning—whether drafting intake forms for a case series or designing an institutional study—ensures your work transitions smoothly from clinical documentation to global scientific literature.</p>

<p>Need help structuring your clinical observations into a CARE-compliant manuscript or designing a research protocol? Connect with our publication team to explore end-to-end clinical writing and publication support.</p>`
},
  {
  id: 2,
  slug: 'importance-of-research-in-ayurveda',
  title: 'The Importance of Research in Ayurveda: Bridging Ancient Wisdom and Modern Science',
  excerpt: 'A philosophical explanation and a scientifically established finding are not the same. Research is the bridge between traditional knowledge and evidence that can be evaluated, reproduced, and applied responsibly.',
  category: 'Research',
  author: 'Dr. Reena Marbate',
  date: '2026-10-25',
  readTime: '3 min read',
  image: '/images/articles/importance-of-research-in-ayurveda.jpeg',
  imageAlt: 'Illustration representing research bridging Ayurveda and modern science',
  content: `<p>Human curiosity has always extended beyond what we can see, touch, or measure. From contemplating the origin of the universe to exploring the intricacies of the human body, we have continuously sought answers to fundamental questions: How did life begin? How does the human body function? What defines consciousness? Where does the mind reside? And what gives meaning to our existence?</p>

<p>Over centuries, scientific disciplines such as physics, chemistry, mathematics and biology have helped us understand many of the mechanisms underlying the natural world. The theory of evolution has offered insights into how Homo sapiens emerged and adapted, while advances in neuroscience, genetics, and medical technology have transformed our understanding of human health. Yet, despite remarkable progress, questions concerning consciousness, subjective experience, spirituality, and the relationship between mind and body remain active areas of investigation.</p>

<p>It is within this broader pursuit of understanding life that Ayurveda offers an interesting perspective. As a traditional Indian system of medicine, Ayurveda approaches health through an interconnected understanding of the body, mind, behaviour, environment, and, in some interpretations, spirituality. Its concepts invite us to explore dimensions of health that may not always be adequately captured by conventional biomedical indicators alone.</p>

<p>However, a philosophical explanation and a scientifically established finding are not the same. Research provides the bridge between traditional knowledge and evidence that can be evaluated, reproduced, and applied responsibly.</p>

<p>Ayurveda has developed a rich conceptual framework for understanding health, disease, individual differences, and the relationship between humans and their surroundings. Concepts such as Prakriti, Dosha, Agni, Ama, Ojas, Dhatu, and Srotas form part of its traditional understanding of physiological functioning and health.</p>

<p>Similarly, Ayurveda recognises the importance of mental wellbeing, daily routines, dietary practices, sleep, physical activity, and the broader context in which individuals live. Its classical literature also discusses Sattva, Rajas, and Tamas in relation to the mind, alongside concepts of consciousness and spiritual development.</p>

<p>These ideas offer several potentially valuable avenues for contemporary research. For instance, could Ayurvedic descriptions of individual constitution help us better understand differences in metabolic characteristics, lifestyle responses, or susceptibility to certain health conditions? Can specific dietary and behavioural practices improve sleep, stress management, or quality of life? Which Ayurvedic interventions demonstrate clinically meaningful benefits, for whom, and under what circumstances?</p>

<p>Such questions allow us to move beyond simply describing traditional concepts towards investigating their relevance to present-day healthcare.</p>

<p>For example, how should researchers define and measure spiritual wellbeing? Can meditation or other contemplative practices influence perceived stress, emotional regulation, sleep, or quality of life? How do cultural beliefs shape people's experiences of healing? Can changes in subjective wellbeing be studied alongside physiological outcomes?</p>

<p>Research need not reduce every human experience to a laboratory measurement. It can also examine meaning, lived experience, cultural context, and personal narratives through rigorous qualitative methods. Across these methods, sound sampling, validated outcome measures, adequate sample sizes, appropriate statistical analysis, ethical oversight, preregistration where applicable, and transparent reporting are essential.</p>

<p>Equally important is collaboration. Ayurvedic practitioners, biomedical researchers, statisticians, pharmacologists, public health professionals, and patients can contribute different forms of expertise to the research process.</p>

<p>Robust research in Ayurveda is important for five key reasons.</p>

<ol>
<li>Establishing safety and effectiveness</li>
<li>Standardising medicines and interventions</li>
<li>Understanding mechanisms without forcing equivalence</li>
<li>Supporting evidence-informed clinical practice</li>
<li>Building public trust</li>
</ol>

<p>Ultimately, the goal is not to prove that Ayurveda is right or that modern science has all the answers. It is to ask better questions, conduct more rigorous studies, and identify what genuinely benefits people.</p>

<p>When tradition meets scientific curiosity, research becomes the means through which knowledge can be examined, refined, and responsibly translated into better healthcare.</p>`
  }

];

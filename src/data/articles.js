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
}

];

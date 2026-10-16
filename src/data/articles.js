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
  title: 'CARE, CONSORT, and PRISMA: Choosing the Right Framework for Clinical Research Publication',
  excerpt: 'Choosing the right reporting guideline is essential for transparent scientific publication. Learn how CARE, CONSORT, and PRISMA support case reports, clinical trials, and systematic reviews.',
  category: 'Research',
  author: 'VD. Prajakta Giratkar',
  date: '2026-10-15',
  readTime: '9 min read',
  image: '/images/articles/care-consert-prisama.png',
  imageAlt: 'Scientific illustration representing structured clinical research and evidence reporting',
  content: `<p>Clinical practice and biomedical research generate valuable insights, but transforming these observations into a publishable manuscript requires more than presenting promising results. Researchers must clearly describe their methods, document their findings, and provide enough information for readers to understand how conclusions were reached.</p>

<p>Reporting guidelines provide structured recommendations for communicating research. Three widely used frameworks are CARE, CONSORT, and PRISMA. Although all three aim to improve reporting transparency, each serves a different type of research publication.</p>

<h2>Why Reporting Guidelines Matter</h2>
<p>A scientific manuscript should allow readers to understand what was studied, how the work was conducted, what was observed, and what limitations affect the interpretation. Missing methodological details can make findings difficult to evaluate or reproduce.</p>

<p>Reporting guidelines help authors identify essential information before submitting their manuscripts. The appropriate guideline depends on the research design, rather than simply the subject area or the journal in which the work will appear.</p>

<h2>CARE: Reporting Clinical Case Reports</h2>
<p>CARE stands for CAse REport. The CARE guidelines support transparent reporting of individual clinical cases, including unusual presentations, diagnostic challenges, unexpected outcomes, and clinically informative observations.</p>

<p>A case report documents the clinical course of an individual patient. It should present the relevant history, examination findings, diagnostic reasoning, therapeutic interventions, follow-up, and outcomes in a clear and organised manner.</p>

<h3>Important Elements of a CARE-Based Report</h3>
<ul>
<li><strong>Patient information:</strong> Include relevant medical history and clinical context while protecting patient confidentiality.</li>
<li><strong>Clinical findings:</strong> Describe important examination findings and diagnostic results.</li>
<li><strong>Timeline:</strong> Present the sequence of symptoms, investigations, interventions, and follow-up.</li>
<li><strong>Diagnostic assessment:</strong> Explain the diagnostic reasoning and relevant challenges.</li>
<li><strong>Therapeutic intervention:</strong> Describe treatment details, dosage, duration, and other relevant information.</li>
<li><strong>Follow-up and outcomes:</strong> Report clinical progress, relevant changes, and adverse events.</li>
<li><strong>Patient perspective and consent:</strong> Include the patient's perspective where available and address consent for publication according to applicable requirements.</li>
</ul>

<h3>Applying CARE to Ayurveda and Integrative Healthcare</h3>
<p>For a case report involving an Ayurvedic intervention, authors should describe the intervention precisely. Relevant details may include the formulation, ingredients, preparation, dosage, duration, concurrent treatments, outcome measures, and follow-up.</p>

<p>Authors should distinguish observations from interpretations. An improvement following an intervention does not, by itself, establish that the intervention caused the improvement.</p>

<p><strong>When to use CARE:</strong> Use the applicable CARE guidance when preparing a report about an individual patient's clinical presentation, management, and outcome.</p>

<h2>CONSORT: Reporting Randomized Controlled Trials</h2>
<p>CONSORT stands for Consolidated Standards of Reporting Trials. It supports transparent reporting of randomized controlled trials (RCTs), which commonly compare an intervention with a placebo, an active treatment, or standard care.</p>

<p>Because randomized trials involve participant allocation and planned comparisons, the manuscript must explain how participants entered the study, how treatment groups were formed, which outcomes were assessed, and how the results were analysed.</p>

<h3>Important Elements of a CONSORT-Based Report</h3>
<ul>
<li><strong>Trial design:</strong> Describe the design, allocation ratio, and relevant methodological details.</li>
<li><strong>Participants:</strong> Report eligibility criteria, recruitment settings, and participant characteristics.</li>
<li><strong>Randomization:</strong> Explain sequence generation and allocation concealment.</li>
<li><strong>Interventions:</strong> Describe the treatments or procedures assigned to each group.</li>
<li><strong>Outcomes:</strong> Define the primary and secondary outcomes and when they were measured.</li>
<li><strong>Sample size:</strong> Explain how the planned sample size was determined.</li>
<li><strong>Statistical methods:</strong> Describe the analyses used to compare groups.</li>
<li><strong>Results:</strong> Report participant flow, outcome findings, effect estimates, and precision.</li>
<li><strong>Safety:</strong> Report relevant adverse events and other important unintended effects.</li>
<li><strong>Registration and ethics:</strong> Include trial registration, ethics information, funding, and disclosures where applicable.</li>
</ul>

<h3>Understanding the CONSORT Flow Diagram</h3>
<p>The participant flow diagram summarises the movement of participants through the trial. It typically reports how many people were assessed for eligibility, randomized, allocated to each group, followed up, and included in the analyses.</p>

<p>Reasons for exclusions and losses to follow-up should be reported clearly. This information helps readers understand the completeness of the data and assess potential sources of bias.</p>

<h3>Applying CONSORT to Ayurveda Clinical Trials</h3>
<p>When studying an Ayurvedic formulation, procedure, or structured lifestyle intervention in a randomized trial, researchers should describe the intervention and comparison group in sufficient detail. They should also report randomization procedures, outcome measures, adherence, withdrawals, and relevant safety findings.</p>

<p><strong>When to use CONSORT:</strong> Use the applicable CONSORT statement and relevant extensions when reporting a randomized controlled trial.</p>

<h2>PRISMA: Reporting Systematic Reviews and Meta-Analyses</h2>
<p>PRISMA stands for Preferred Reporting Items for Systematic Reviews and Meta-Analyses. It helps researchers report systematic reviews transparently, including how evidence was identified, selected, assessed, and synthesised.</p>

<p>A systematic review uses planned methods to answer a focused research question by identifying and evaluating relevant studies. A meta-analysis is a statistical technique that may be used to combine results when the available studies and data are sufficiently suitable. Not every systematic review includes a meta-analysis.</p>

<h3>Important Elements of a PRISMA-Based Review</h3>
<ul>
<li><strong>Review question:</strong> Clearly define the objective and rationale for the review.</li>
<li><strong>Eligibility criteria:</strong> Specify the characteristics studies must meet to be included.</li>
<li><strong>Information sources:</strong> Identify databases, registers, and other sources searched.</li>
<li><strong>Search strategy:</strong> Document search terms and methods so the search can be understood and reproduced.</li>
<li><strong>Study selection:</strong> Explain screening procedures and reasons for excluding full-text reports.</li>
<li><strong>Data collection:</strong> Describe how information was extracted from included studies.</li>
<li><strong>Risk of bias:</strong> Explain how the methodological limitations of included studies were assessed.</li>
<li><strong>Synthesis methods:</strong> Describe how evidence was summarised and how any meta-analysis was performed.</li>
<li><strong>Results:</strong> Present the characteristics of included studies and the main findings.</li>
<li><strong>Limitations:</strong> Discuss limitations of both the available evidence and the review process.</li>
<li><strong>Registration and protocol:</strong> Report protocol registration and access details where applicable.</li>
</ul>

<h3>Understanding the PRISMA Flow Diagram</h3>
<p>The PRISMA flow diagram summarises the review selection process. It shows the number of records identified, screened, excluded, and retained for further assessment, along with the number of studies ultimately included.</p>

<p>Recording exclusion reasons and documenting the selection process helps readers understand how the final evidence base was assembled.</p>

<h3>Applying PRISMA to Ayurveda Research</h3>
<p>Systematic reviews in Ayurveda and integrative healthcare may examine clinical trials, observational studies, formulations, or structured interventions. Authors should define eligibility criteria carefully and document how variations in terminology, intervention descriptions, study designs, and outcome measures were handled.</p>

<p>When studies differ substantially, authors should explain those differences and avoid combining results inappropriately. Conclusions should reflect the strength and limitations of the available evidence.</p>

<p><strong>When to use PRISMA:</strong> Use the relevant PRISMA guidance when reporting a systematic review or meta-analysis.</p>

<h2>Comparing CARE, CONSORT, and PRISMA</h2>
<p>Although these frameworks share the goal of transparent reporting, they address different research designs. The following table summarises their main differences.</p>

<table>
<thead>
<tr>
<th>Feature</th>
<th>CARE</th>
<th>CONSORT</th>
<th>PRISMA</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Full name</strong></td>
<td>CAse REport</td>
<td>Consolidated Standards of Reporting Trials</td>
<td>Preferred Reporting Items for Systematic Reviews and Meta-Analyses</td>
</tr>
<tr>
<td><strong>Primary purpose</strong></td>
<td>Transparent reporting of individual clinical cases</td>
<td>Transparent reporting of randomized trials</td>
<td>Transparent reporting of systematic reviews and meta-analyses</td>
</tr>
<tr>
<td><strong>Typical publication</strong></td>
<td>Clinical case report</td>
<td>Randomized controlled trial</td>
<td>Systematic review or meta-analysis</td>
</tr>
<tr>
<td><strong>Main focus</strong></td>
<td>Patient history, clinical findings, interventions, and outcomes</td>
<td>Randomization, participant flow, interventions, outcomes, and analyses</td>
<td>Search methods, study selection, evidence assessment, and synthesis</td>
</tr>
<tr>
<td><strong>Key reporting aid</strong></td>
<td>Case-report checklist and clinical timeline</td>
<td>Reporting checklist and participant flow diagram</td>
<td>Reporting checklist and study-selection flow diagram</td>
</tr>
<tr>
<td><strong>Best time to consult</strong></td>
<td>While planning and writing a case report</td>
<td>During trial planning and manuscript preparation</td>
<td>While planning and reporting a systematic review</td>
</tr>
</tbody>
</table>

<h2>How to Choose the Right Reporting Guideline</h2>
<p>Start by identifying the design of your research. The type of evidence you are reporting determines which framework is most relevant.</p>

<ol>
<li><strong>Reporting one patient's clinical experience?</strong> Consult CARE.</li>
<li><strong>Reporting a randomized controlled trial?</strong> Consult CONSORT.</li>
<li><strong>Synthesising evidence from multiple studies in a systematic review?</strong> Consult PRISMA.</li>
<li><strong>Working with a specialised design?</strong> Check whether a relevant extension or another reporting guideline applies.</li>
<li><strong>Preparing for journal submission?</strong> Review the target journal's author instructions and confirm which checklist it requests.</li>
</ol>

<h2>Common Reporting Challenges</h2>
<p>Researchers may overlook important details when they begin writing without consulting a suitable reporting guideline. Common problems include incomplete intervention descriptions, unclear outcome definitions, missing participant-flow information, insufficient search details, and conclusions that exceed the findings.</p>

<p>Another common misunderstanding is treating reporting guidelines as a measure of research quality by themselves. A complete manuscript can still describe a study with methodological limitations. Reporting guidelines improve transparency, but they do not replace sound study design, appropriate ethical review, critical appraisal, or suitable statistical methods.</p>

<h2>A Practical Checklist Before Submission</h2>
<ul>
<li>Identify the research design and select the appropriate reporting guideline.</li>
<li>Use the current version and any relevant extensions.</li>
<li>Check that all required methods and results are reported.</li>
<li>Verify tables, figures, timelines, and flow diagrams.</li>
<li>Confirm that limitations and potential sources of bias are discussed.</li>
<li>Review ethical requirements, consent, registration, and disclosures as applicable.</li>
<li>Complete the relevant checklist and follow the target journal's submission instructions.</li>
</ul>

<h2>Bridging Clinical Practice with Scientific Publication</h2>
<p>Clinical observations and research findings become more useful when they are documented and reported transparently. CARE, CONSORT, and PRISMA offer practical structures for communicating individual cases, randomized trials, and systematic reviews, respectively.</p>

<p>For researchers working in Ayurveda, yoga, and integrative healthcare, choosing the right framework early can make manuscript preparation more systematic and help readers interpret findings in context.</p>

<h2>Conclusion</h2>
<p>The appropriate reporting guideline depends on the research design. CARE supports clinical case reports, CONSORT supports randomized controlled trial reports, and PRISMA supports systematic reviews and meta-analyses. Consulting the relevant checklist during manuscript preparation helps authors communicate their work more completely and clearly.</p>

<p>Before submission, consult the official resources for <a href="https://www.care-statement.org/" target="_blank" rel="noopener noreferrer">CARE</a>, <a href="https://www.consort-statement.org/" target="_blank" rel="noopener noreferrer">CONSORT</a>, and <a href="https://www.prisma-statement.org/" target="_blank" rel="noopener noreferrer">PRISMA</a>, along with the requirements of the intended journal.</p>`
}

];

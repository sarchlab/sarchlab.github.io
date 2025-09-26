<script lang="ts">
    import CvTable from './cv_table.svelte'

    type TableCell =
        | string
        | number
        | boolean
        | null
        | undefined
        | { html: string }

    type TableEntry = {
        left: Array<TableCell>
        right: Array<TableCell>
        hanging?: TableCell
    }

    type CvData = {
        academicAppointments: TableEntry[]
        educationEntries: TableEntry[]
        awardsEntries: TableEntry[]
        industryEntries: TableEntry[]
        grantEntries: TableEntry[]
        peerReviewedConferenceEntries: TableEntry[]
        journalEntries: TableEntry[]
        bookEntries: TableEntry[]
        bookTranslationEntries: TableEntry[]
        bookChapterEntries: TableEntry[]
        patentEntries: TableEntry[]
        workshopEntries: TableEntry[]
        preprintEntries: TableEntry[]
        softwareEntries: TableEntry[]
        talkEntries: TableEntry[]
        teachingWMEntries: TableEntry[]
        teachingNEUEntries: TableEntry[]
        menteePhDEntries: TableEntry[]
        menteeMasterEntries: TableEntry[]
        menteeUndergradEntries: TableEntry[]
        mediaCoverageEntries: TableEntry[]
        servicePhdCommitteeEntries: TableEntry[]
        serviceMasterCommitteeEntries: TableEntry[]
        serviceOrgEntries: TableEntry[]
        serviceConferenceOrgEntries: TableEntry[]
        serviceWorkshopChairEntries: TableEntry[]
        serviceFundingPanelEntries: TableEntry[]
        serviceProgramCommitteeEntries: TableEntry[]
        serviceJournalReviewerEntries: TableEntry[]
        serviceExternalReviewEntries: TableEntry[]
        serviceWmAdvisingEntries: TableEntry[]
        serviceWmUniversityEntries: TableEntry[]
        serviceWmDepartmentEntries: TableEntry[]
    }

    export let data: { cvData: CvData }

    const {
        academicAppointments,
        educationEntries,
        awardsEntries,
        industryEntries,
        grantEntries,
        peerReviewedConferenceEntries,
        journalEntries,
        bookEntries,
        bookTranslationEntries,
        bookChapterEntries,
        patentEntries,
        workshopEntries,
        preprintEntries,
        softwareEntries,
        talkEntries,
        teachingWMEntries,
        teachingNEUEntries,
        menteePhDEntries,
        menteeMasterEntries,
        menteeUndergradEntries,
        mediaCoverageEntries,
        servicePhdCommitteeEntries,
        serviceMasterCommitteeEntries,
        serviceOrgEntries,
        serviceConferenceOrgEntries,
        serviceWorkshopChairEntries,
        serviceFundingPanelEntries,
        serviceProgramCommitteeEntries,
        serviceJournalReviewerEntries,
        serviceExternalReviewEntries,
        serviceWmAdvisingEntries,
        serviceWmUniversityEntries,
        serviceWmDepartmentEntries,
    } = data.cvData

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const triggerPrint = () => {
        window.print()
    }
</script>

<svelte:head>
    <title>Yifan Sun - Curriculum Vitae</title>
</svelte:head>

<div class="cv-container">
    <header class="cv-header">
        <div>
            <h1>Yifan Sun</h1>
            <p class="tagline">
                Assistant Professor, Computer Science, William &amp; Mary
                <br />
                McGlothlin-Street Hall 117 Williamsburg, VA 23185
            </p>
        </div>
        <div class="contact">
            <div class="contact-item">
                <img
                    class="contact-icon"
                    src="/phone-solid-full.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                />
                <span>(+1) 716-868-2480</span>
            </div>
            <div class="contact-item">
                <img
                    class="contact-icon"
                    src="/envelope-solid-full.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                />
                <a href="mailto:ysun25@wm.edu">ysun25@wm.edu</a>
            </div>
            <div class="contact-item">
                <img
                    class="contact-icon"
                    src="/globe-solid-full.svg"
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                />
                <a
                    href="https://syifan.github.io"
                    target="_blank"
                    rel="noreferrer">syifan.github.io</a
                >
            </div>
        </div>
    </header>

    <main>
        <section class="cv-section" id="academic-appointments">
            <header class="section-header">
                <h2>Academic Appointments</h2>
            </header>
            <CvTable entries={academicAppointments} />
        </section>

        <section class="cv-section" id="education">
            <header class="section-header">
                <h2>Education</h2>
            </header>
            <CvTable entries={educationEntries} />
        </section>

        <section class="cv-section" id="industry-experience">
            <header class="section-header">
                <h2>Industry Experience</h2>
            </header>
            <CvTable entries={industryEntries} />
        </section>

        <section class="cv-section" id="awards">
            <header class="section-header">
                <h2>Awards</h2>
            </header>
            <CvTable entries={awardsEntries} />
        </section>

        <section class="cv-section" id="grants">
            <header class="section-header">
                <h2>Grants and Supports</h2>
            </header>
            <p class="list-heading">
                I have acquired research funding that totals $1,685,843 at
                William &amp; Mary.
            </p>
            <CvTable entries={grantEntries} />
        </section>

        <section class="cv-section" id="publications">
            <header class="section-header">
                <h2>Publications</h2>
            </header>
            <div class="section-intro">
                <p class="note">
                    <span class="self-name">Underline</span> &#8212; Myself
                </p>
                <p class="note">
                    <span class="wm-advisee">Wavy underline</span> &#8212; My William
                    &amp; Mary student advisee
                </p>
            </div>
            <h3>Peer-Reviewed Conference Papers</h3>
            <div class="publication-list">
                <CvTable entries={peerReviewedConferenceEntries} />
            </div>

            <h3>Journals</h3>
            <div class="publication-list">
                <CvTable entries={journalEntries} />
            </div>

            <h3>Books</h3>
            <div class="publication-list">
                <CvTable entries={bookEntries} />
            </div>

            <h3>Translation of My Books</h3>
            <div class="publication-list">
                <CvTable entries={bookTranslationEntries} />
            </div>

            <h3>Book Chapters</h3>
            <div class="publication-list">
                <CvTable entries={bookChapterEntries} />
            </div>

            <h3>Patents</h3>
            <div class="publication-list">
                <CvTable entries={patentEntries} />
            </div>

            <h3>Workshop or Poster Publications</h3>
            <div class="publication-list">
                <CvTable entries={workshopEntries} />
            </div>

            <h3>Preprints</h3>
            <div class="publication-list">
                <CvTable entries={preprintEntries} />
            </div>
        </section>

        <section class="cv-section" id="software">
            <header class="section-header">
                <h2>Software &amp; Datasets</h2>
            </header>
            <CvTable entries={softwareEntries} />
        </section>

        <section class="cv-section" id="talks">
            <header class="section-header">
                <h2>Talks and Tutorials</h2>
            </header>
            <CvTable entries={talkEntries} />
        </section>

        <section class="cv-section" id="teaching">
            <header class="section-header">
                <h2>Teaching</h2>
            </header>
            <div class="subsection">
                <h3>Teaching @ William &amp; Mary</h3>
                <CvTable entries={teachingWMEntries} />
            </div>
            <div class="subsection">
                <h3>Teaching @ Northeastern University</h3>
                <CvTable entries={teachingNEUEntries} />
            </div>
        </section>

        <section class="cv-section" id="mentees">
            <header class="section-header">
                <h2>Student Mentees</h2>
            </header>
            <h3>Ph.D. Students</h3>
            <CvTable entries={menteePhDEntries} />
            <h3>Master Researchers</h3>
            <CvTable entries={menteeMasterEntries} />
            <h3>Undergraduate Researchers</h3>
            <CvTable entries={menteeUndergradEntries} />
        </section>

        <section class="cv-section" id="media-coverage">
            <header class="section-header">
                <h2>Selected Media Coverage</h2>
            </header>
            <CvTable entries={mediaCoverageEntries} />
        </section>

        <section class="cv-section" id="service">
            <header class="section-header">
                <h2>Service</h2>
            </header>
            <h3>Ph.D. Dissertation Committee</h3>
            <CvTable entries={servicePhdCommitteeEntries} />
            <h3>Master Thesis Committee</h3>
            <CvTable entries={serviceMasterCommitteeEntries} />
            <h3>Professional Organization Participation</h3>
            <CvTable entries={serviceOrgEntries} />
            <h3>Conference Organization</h3>
            <CvTable entries={serviceConferenceOrgEntries} />
            <h3>Workshop Chairing</h3>
            <CvTable entries={serviceWorkshopChairEntries} />
            <h3>Funding Agency Panelist</h3>
            <CvTable entries={serviceFundingPanelEntries} />
            <h3>Program Committee</h3>
            <CvTable entries={serviceProgramCommitteeEntries} />
            <h3>Journal Reviewer</h3>
            <CvTable entries={serviceJournalReviewerEntries} />
            <h3>External Review Committee / Ad-hoc Reviewer</h3>
            <CvTable entries={serviceExternalReviewEntries} />
            <h3>William &amp; Mary Undergraduate Advising</h3>
            <CvTable entries={serviceWmAdvisingEntries} />
            <h3>William &amp; Mary University-Wide Committee</h3>
            <CvTable entries={serviceWmUniversityEntries} />
            <h3>William &amp; Mary Department-Level Committee</h3>
            <CvTable entries={serviceWmDepartmentEntries} />
        </section>
    </main>

    <div class="floating-actions" aria-label="page controls">
        <button type="button" class="action-button" on:click={scrollToTop}>
            Back to Top
        </button>
        <button type="button" class="action-button" on:click={triggerPrint}>
            Download PDF
        </button>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        background: #e9eef3;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: #111;
        font-size: 0.85rem;
        line-height: 1.45;
    }

    .cv-container {
        max-width: 850px;
        min-height: 11in;
        margin: 1.5rem auto;
        background: #fff;
        padding: 80px 80px 80px 80px;
        box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
    }

    .cv-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 3px solid #1d2f4b;
        padding-bottom: 1.2rem;
        margin-bottom: 1.6rem;
        gap: 1.5rem;
    }

    .cv-header h1 {
        font-size: 2.4rem;
        letter-spacing: 0.03em;
        margin: 0;
        color: #1d2f4b;
    }

    .tagline {
        margin: 0.4rem 0 0;
        font-size: 0.9rem;
        color: #334;
    }

    .contact {
        text-align: right;
        font-size: 0.85rem;
        line-height: 1.35;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
    }

    .contact-item {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.35rem;
    }

    .contact-icon {
        width: 16px;
        height: 16px;
        opacity: 0.85;
    }

    .contact a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid rgba(29, 47, 75, 0.35);
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1.45rem;
    }

    .floating-actions {
        position: fixed;
        right: 1.5rem;
        bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        z-index: 999;
    }

    .action-button {
        background: #1d2f4b;
        color: #fff;
        border: none;
        border-radius: 999px;
        padding: 0.55rem 1.1rem;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        cursor: pointer;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
    }

    .action-button:hover,
    .action-button:focus {
        transform: translateY(-1px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
        background: #243f68;
        outline: none;
    }

    .action-button:focus-visible {
        outline: 2px solid rgba(29, 47, 75, 0.4);
        outline-offset: 3px;
    }

    .cv-section {
        position: relative;
    }

    .section-header {
        margin-bottom: 0rem;
    }

    .section-intro {
        margin-bottom: 0.9rem;
    }

    .subsection {
        margin-top: 1.4rem;
    }

    .subsection:first-of-type {
        margin-top: 0;
    }

    .entry-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    section {
        position: relative;
    }

    /* section::before {
        content: '';
        position: absolute;
        left: -0.5in;
        top: 0.2rem;
        width: 0.18in;
        height: 0.18in;
        background: #1d2f4b;
    } */

    h2 {
        font-size: 2.12rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin: 0.4rem 0 0.2rem 0;
        color: #1d2f4b;
        border-bottom: 1px solid rgba(29, 47, 75, 0.35);
        font-weight: 100;
    }

    h3 {
        font-size: 1.2rem;
        /* letter-spacing: 0.12em; */
        /* text-transform: uppercase; */
        margin: 1rem 0 0.6rem;
        color: #243654;
        font-weight: 500;
        text-decoration: underline;
    }

    .entry {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 0.75rem;
        padding: 0.15rem 0;
    }

    .entry-body {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    .entry-header {
        font-weight: 600;
        color: #111;
    }

    .role {
        font-weight: 600;
        color: #111;
    }

    .affiliation {
        font-size: 0.9rem;
        color: #333;
    }

    .entry-meta {
        text-align: right;
        font-size: 0.82rem;
        color: #333;
    }

    ul,
    ol {
        margin: 0.3rem 0 0.6rem 1.2rem;
        padding: 0;
    }

    li {
        margin-bottom: 0.25rem;
    }

    .entry-body {
        margin-top: 0.2rem;
    }

    :global(.publication-title) {
        /* color: #1d2f4b; */
        font-weight: 700;
    }

    :global(.self-name) {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-color: #1d2f4b;
        /* font-weight: 600; */
    }

    :global(.wm-advisee) {
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: #1d2f4b;
    }

    @media screen and (max-width: 900px) {
        .cv-container {
            margin: 0;
            min-height: auto;
            padding: 1.5rem;
            box-shadow: none;
        }

        .cv-header {
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
        }

        .contact {
            text-align: left;
            align-items: flex-start;
        }

        section::before {
            left: -0.4rem;
        }

        .entry {
            grid-template-columns: 1fr;
        }

        .entry-meta {
            text-align: left;
        }
    }

    @media print {
        @page {
            size: letter;
            margin: 0.7in;
        }

        :global(body) {
            background: #fff;
            font-size: 0.88rem;
            margin: 0;
        }

        .cv-container {
            box-shadow: none;
            margin: 0;
            width: 100%;
            max-width: none;
            padding: 0;
            page-break-inside: avoid;
        }

        .floating-actions {
            display: none !important;
        }

        section::before {
            left: -0.5in;
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .cv-header {
            border-bottom-width: 2px;
        }
    }
</style>

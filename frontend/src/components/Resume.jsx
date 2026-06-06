// BASE_URL is "/" locally and "/<repo>/" on GitHub Pages, so the PDF
// (served from public/) resolves correctly in both cases.
const RESUME_URL = `${import.meta.env.BASE_URL}ruth-resume.pdf`

export default function Resume() {
  return (
    <section className="resume">
      <div className="resume__header">
        <h1 className="resume__title">Resume</h1>
        <div className="resume__actions">
          <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
          <a className="btn btn--primary" href={RESUME_URL} download>
            Download PDF
          </a>
        </div>
      </div>

      <object
        className="resume__viewer"
        data={RESUME_URL}
        type="application/pdf"
        aria-label="Ruth Sirma resume"
      >
        <p className="resume__fallback">
          Your browser can&apos;t display the PDF inline.{' '}
          <a href={RESUME_URL} target="_blank" rel="noreferrer">
            Open it in a new tab
          </a>{' '}
          or{' '}
          <a href={RESUME_URL} download>
            download it
          </a>
          .
        </p>
      </object>
    </section>
  )
}

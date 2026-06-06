export default function UnderDevelopment({ title, blurb }) {
  return (
    <section className="under-dev">
      <span className="under-dev__icon" role="img" aria-label="under construction">
        🚧
      </span>
      <h1 className="under-dev__title">{title}</h1>
      <p className="under-dev__badge">Under development</p>
      {blurb && <p className="under-dev__blurb">{blurb}</p>}
    </section>
  )
}

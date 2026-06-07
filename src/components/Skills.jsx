export function Skills({ skills }) {
  return (
    <section className="section-band skills-section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">Toolbox</p>
        <h2>Skills for building clean, useful products.</h2>
      </div>
      <div className="skill-grid">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  )
}

function WorkHistoryLogo({ item }) {
  const handleImgError = (event) => {
    event.currentTarget.style.display = 'none'
    event.currentTarget.nextSibling.style.display = 'grid'
  }

  const content = (
    <>
      {item.logo ? (
        <img src={item.logo} alt="" loading="lazy" onError={handleImgError} />
      ) : null}
      <span className="work-history-logo-fallback" style={{ background: item.logoColor }}>
        {item.logoText}
      </span>
    </>
  )

  if (item.companyHref) {
    return (
      <a
        className="work-history-logo"
        href={item.companyHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${item.company} website`}
      >
        {content}
      </a>
    )
  }

  return <span className="work-history-logo">{content}</span>
}

export function WorkHistory({ items }) {
  return (
    <section className="section-band" id="career">
      <div className="section-heading">
        <p className="section-kicker">Career</p>
        <h2>Where I've worked.</h2>
      </div>

      <div className="work-history-list">
        {items.map((item) => (
          <article className="work-history-item" key={`${item.company}-${item.role}`}>
            <WorkHistoryLogo item={item} />

            <div className="work-history-body">
              <h3>{item.role}</h3>
              <p className="work-history-meta">
                {item.companyHref ? (
                  <a href={item.companyHref} target="_blank" rel="noreferrer">
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
                {' '}· {item.employmentType}
              </p>
              <p className="work-history-duration">{item.duration}</p>
              <p className="work-history-location">{item.location}</p>
              <p className="work-history-description">{item.description}</p>
              {item.skills?.length ? (
                <p className="work-history-skills">{item.skills.join(' · ')}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

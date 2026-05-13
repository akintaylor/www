const projects = [
  {
    name: 'jujuLM ',
    description: [
      '',
    ],
    // link: '',
    // linkLabel: '',
    // stack: '',
  },
  {
    name: 'INAWA',
    description: [
      '',
    ],
    // link: 'https://projectbeta.com',
    // linkLabel: 'projectbeta.com',
    // stack: 'Node.js · TypeScript · Redis',
  },
  {
    name: 'Woyin Taylor',
    description: [
      "",
    ],
    link: 'https://woyintaylor.com/',
    linkLabel: 'woyintaylor.com',
    stack: '',
  },
  {
    name: 'Foresyte',
    description: [
      "",
    ],
    link: 'https://getforesyte.com/',
    linkLabel: 'getforesyte.com',
    stack: '',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      {projects.map(p => (
        <div className="entry" key={p.name}>
          <h2 className="entry-title">{p.name}</h2>
          <div className="prose">
            {p.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {p.linkLabel && (
            <a className="ext-link" href={p.link} target="_blank" rel="noreferrer">
              {p.linkLabel}
            </a>
          )}
        </div>
      ))}
    </section>
  )
}

import avatar from '../assets/avatar.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="about-photo-wrap">
        <img src={avatar} alt="Akínbọ̀wálé Akín-Taylor" className="about-photo" />
      </div>
      <div className="prose">
        {/* Replace this with your real bio */}
        <p>
          My name is{' '}
          <span className="name-swap">
            <span className="short">Akín.</span>
            <span className="full">Akínbọ̀wálé Akín-Taylor.</span>
          </span>
        </p>
        {/* <p>
          I'm a software engineer based in Lagos, Nigeria. I care about writing code that's easy
          to read, systems that are easy to reason about, and teams that are easy to work with.
        </p> */}

        {/* <p>
          I currently work at{' '}
          <a href="#" target="_blank" rel="noreferrer">[Your Company]</a>, where I focus on
          [what you do — backend APIs, data infrastructure, product engineering].
        </p>
        <p>
          I write here mostly to think out loud. Sometimes it's technical. Sometimes it isn't.
        </p> */}
      </div>
    </section>
  )
}

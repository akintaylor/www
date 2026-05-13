import { Link } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
}

function groupByYear(posts) {
  return posts.reduce((acc, post) => {
    const year = post.date.getFullYear()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})
}

export default function Home() {
  const { posts, loading } = usePosts()

  if (loading) return null

  if (posts.length === 0) {
    return (
      <section>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          No posts yet. Add a <code>.md</code> file to <code>src/posts/</code> to get started.
        </p>
      </section>
    )
  }

  const grouped = groupByYear(posts)
  const years   = Object.keys(grouped).sort((a, b) => b - a)

  return (
    <section>
      {years.map(year => (
        <div className="year-group" key={year}>
          <p className="year-label">{year}</p>
          {grouped[year].map(post => (
            <div className="post-item" key={post.slug}>
              <Link className="post-link" to={`/writing/${post.slug}`}>
                <h2 className="post-title">{post.title}</h2>
                {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
                <time className="post-date">{formatDate(post.date)}</time>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

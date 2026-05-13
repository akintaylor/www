import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost } from '../hooks/usePosts'

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Post() {
  const { slug } = useParams()
  const [post, setPost]       = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPost(slug).then(p => { setPost(p); setLoading(false) })
  }, [slug])

  if (loading) return null

  if (!post) {
    return (
      <div className="not-found">
        <p>Post not found. <Link to="/">← Back</Link></p>
      </div>
    )
  }

  return (
    <div className="post-page">
      <Link className="post-page-back" to="/">All writing</Link>

      <header className="post-page-header">
        <h1 className="post-page-title">{post.title}</h1>
        <time className="post-page-meta">{formatDate(post.date)}</time>
      </header>

      <div className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import matter from 'gray-matter'

// Vite glob import — pulls in every .md file in src/posts/ as raw text
const postModules = import.meta.glob('../posts/**/*.md', { query: '?raw', import: 'default' })

function slugFromPath(path) {
  // e.g. "../posts/engineering/my-post.md" → "engineering/my-post"
  return path.replace(/^.*\/posts\//, '').replace(/\.md$/, '')
}

async function loadAllPosts() {
  const entries = await Promise.all(
    Object.entries(postModules).map(async ([path, load]) => {
      const raw = await load()
      const { data, content } = matter(raw)
      return {
        slug:    slugFromPath(path),
        title:   data.title   || 'Untitled',
        date:    data.date    ? new Date(data.date) : new Date(0),
        excerpt: data.excerpt || '',
        content,
      }
    })
  )
  // Sort newest first
  return entries.sort((a, b) => b.date - a.date)
}

export function usePosts() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadAllPosts().then(p => { setPosts(p); setLoading(false) })
  }, [])

  return { posts, loading }
}

export async function getPost(slug) {
  const key = Object.keys(postModules).find(p => slugFromPath(p) === slug)
  if (!key) return null
  const raw = await postModules[key]()
  const { data, content } = matter(raw)
  return {
    slug,
    title:   data.title   || 'Untitled',
    date:    data.date    ? new Date(data.date) : new Date(0),
    excerpt: data.excerpt || '',
    content,
  }
}

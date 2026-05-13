import { Routes, Route, Link } from 'react-router-dom'
import Sidebar  from './components/Sidebar'
import Home     from './pages/Home'
import Post     from './pages/Post'
import About    from './pages/About'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      {/* CONTACT — fixed top-right */}
      <Link to="/contact" className="top-contact">Contact</Link>

      <main>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/writing/:slug"  element={<Post />} />
          <Route path="/about"          element={<About />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="*" element={
            <div className="not-found">
              <p>Page not found. <Link to="/">← Home</Link></p>
            </div>
          } />
        </Routes>

        <footer>&copy; {new Date().getFullYear()} Akinbowale Akin-Taylor</footer>
      </main>
    </div>
  )
}

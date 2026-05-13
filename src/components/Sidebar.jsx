import { NavLink, Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link className="site-name" to="/">
        <span className="short">AKT</span>
        <span className="full">Akínbọ̀wálé Akín-Taylor</span>
      </Link>

      <ul className="nav-list">
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li className="nav-contact-mobile">
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  return (
    <div className="app">
      <header className="site-header">
        <NavLink to="/about" className="brand">
          Ruth Sirma
        </NavLink>
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ruth Sirma</p>
      </footer>
    </div>
  )
}

import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import UnderDevelopment from './components/UnderDevelopment.jsx'
import Resume from './components/Resume.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route
          path="about"
          element={
            <UnderDevelopment
              title="About"
              blurb="A little about who I am and what I do is on the way."
            />
          }
        />
        <Route path="resume" element={<Resume />} />
        <Route
          path="projects"
          element={
            <UnderDevelopment
              title="Projects"
              blurb="Selected work and case studies are being put together."
            />
          }
        />
        <Route
          path="contact"
          element={
            <UnderDevelopment
              title="Contact"
              blurb="Ways to reach me are coming shortly."
            />
          }
        />
        <Route
          path="*"
          element={
            <UnderDevelopment
              title="Page not found"
              blurb="This page doesn't exist yet — check back soon."
            />
          }
        />
      </Route>
    </Routes>
  )
}

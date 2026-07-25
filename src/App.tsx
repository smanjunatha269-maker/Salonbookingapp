import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SkillsPreview from './pages/SkillsPreview'
import Quiz from './pages/Quiz'
import Results from './pages/Results'
import NotFound from './pages/NotFound'
import { ROUTES } from './utils/constants'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.skills} element={<SkillsPreview />} />
          <Route path={ROUTES.quiz} element={<Quiz />} />
          <Route path={ROUTES.results} element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Comic from './pages/Comic'
import Characters from './pages/Characters'
import News from './pages/News'
import Downloads from './pages/Downloads'
import Donate from './pages/Donate'
import Layout from './components/Layout'
import Page404 from './pages/Page404'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/news" element={<News />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/donate" element={<Donate />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
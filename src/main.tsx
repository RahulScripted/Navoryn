import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BookCall from './pages/book-call'
import ServiceDetailPage from './pages/service-detail'
import HowWeWorkPage from './pages/how-we-work'
import ContactPage from './pages/contact'
import PricingPage from './pages/pricing'
import { SERVICE_DETAILS } from './components/what-we-do/details/data/details'
import NotFound from './ui/not-found'
import TransitionLayout from './ui/block-transition/TransitionLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<TransitionLayout />}>
          <Route path="/:section?" element={<App />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {SERVICE_DETAILS.map((d) => (
            <Route key={d.id} path={`/${d.id}`} element={<ServiceDetailPage id={d.id} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

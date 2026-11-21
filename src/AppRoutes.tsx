import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { BookCall, CaseStudyPage, ContactPage, HowWeWorkPage, PricingPage, PrivacyPolicyPage, SecurityPage, ServiceDetailPage, TermsPage } from './pages/lazy'
import { SERVICE_DETAILS } from './components/what-we-do/details/data/details'
import NotFound from './ui/not-found'
import TransitionLayout from './ui/block-transition/TransitionLayout'
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<TransitionLayout />}>
        <Route path="/:section?" element={<App />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/about-navoryn" element={<HowWeWorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        {SERVICE_DETAILS.map((d) => (
          <Route key={d.id} path={`/${d.id}`} element={<ServiceDetailPage id={d.id} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

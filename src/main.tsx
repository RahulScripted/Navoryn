import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import PreLoader from './ui/preloader'
import { AppRoutes } from './pages/lazy'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PreLoader />
      <Suspense fallback={null}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)

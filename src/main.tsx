import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BookCall from './pages/book-call'
import NotFound from './pages/not-found'
import TransitionLayout from './ui/block-transition/TransitionLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<TransitionLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import BookCall from './pages/book-call'
import TransitionLayout from './ui/block-transition/TransitionLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<TransitionLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/book-call" element={<BookCall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

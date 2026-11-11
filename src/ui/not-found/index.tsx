import { HomeButton } from "./components/HomeButton"
import { NotFoundArt } from "./components/NotFoundArt"

export default function NotFound() {
  return (
    <main className="page-px flex min-h-svh flex-col items-center justify-center gap-12 bg-background py-12 text-foreground">
      <h1 className="sr-only">Page Disconnected. Sorry, the page was not found.</h1>
      <NotFoundArt />
      <HomeButton />
    </main>
  )
}

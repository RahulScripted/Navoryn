import { Link } from "react-router-dom"

const LINE = "text-sm font-extrabold uppercase leading-tight tracking-tight sm:text-xl lg:text-2xl xl:text-3xl"

export function NotFoundMessage() {
  return (
    <div className="page-px relative z-20 flex items-start justify-between gap-6 pb-4 lg:absolute lg:inset-x-0 lg:top-[22%] lg:px-[6%] lg:pb-0">
      <p className={LINE}>
        Sorry, the page
        <br />
        not found
      </p>

      <Link
        to="/"
        className={`${LINE} group cursor-target rounded-md text-right outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background`}
      >
        Return to the
        <br />
        <span className="underline decoration-2 underline-offset-4 transition-colors group-hover:text-muted-foreground">
          Home page
        </span>
      </Link>
    </div>
  )
}

import { FOOTER_COLUMNS } from "@/ui/footer/data/footer"

export function FooterNav() {
  return (
    <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {FOOTER_COLUMNS.map((column) => (
        <div key={column.title}>
          <h3 className="text-sm font-medium">{column.title}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {column.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="cursor-target text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

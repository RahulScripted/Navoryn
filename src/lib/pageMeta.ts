import { useEffect } from "react"
const SITE = "Navoryn"
function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}
interface PageMeta {
  title: string
  description: string
  noindex?: boolean
}
export function usePageMeta({ title, description, noindex = false }: PageMeta) {
  useEffect(() => {
    const full = title === SITE ? title : `${title} | ${SITE}`
    document.title = full
    setMeta('meta[name="description"]', "name", "description", description)
    setMeta('meta[property="og:title"]', "property", "og:title", full)
    setMeta('meta[property="og:description"]', "property", "og:description", description)
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow")
  }, [title, description, noindex])
}

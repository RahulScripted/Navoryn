import { useLocation, useOutlet } from "react-router-dom"
import BlockTransition from "@/ui/block-transition/BlockTransition"
import { isSectionPath } from "@/lib/sections"

export default function TransitionLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  // Section URLs (/pricing, /faq...) are the same page, so they must not replay the transition.
  const key = isSectionPath(location.pathname) ? "/" : location.pathname
  return (
    <BlockTransition transitionKey={key} columns={5} duration={1} enableContentShift>
      <div key={key}>{outlet}</div>
    </BlockTransition>
  )
}

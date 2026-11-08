import { useLocation, useOutlet } from "react-router-dom"
import BlockTransition from "@/ui/block-transition/BlockTransition"

export default function TransitionLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <BlockTransition transitionKey={location.pathname} columns={5} duration={1} enableContentShift>
      <div key={location.pathname}>{outlet}</div>
    </BlockTransition>
  )
}

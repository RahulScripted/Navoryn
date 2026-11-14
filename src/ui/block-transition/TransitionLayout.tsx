import { useLocation, useOutlet } from "react-router-dom"
import BlockTransition from "@/ui/block-transition/BlockTransition"
import ClickSpark from "@/utilities/ClickSpark"
import { useIsDark } from "@/components/technology/hooks/useIsDark"
import { isSectionPath } from "@/lib/sections"

export default function TransitionLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const isDark = useIsDark()
  // Section URLs (/pricing, /faq...) are the same page, so they must not replay the transition.
  const key = isSectionPath(location.pathname) ? "/" : location.pathname
  return (
    <>
      {/* Sparks on every click, anywhere on every page. */}
      <ClickSpark
        global
        sparkColor={isDark ? "#fafafa" : "#0a0a0a"}
        sparkCount={8}
        sparkSize={12}
        sparkRadius={26}
        duration={500}
      />
      <BlockTransition transitionKey={key} columns={5} duration={1} enableContentShift>
        <div key={key}>{outlet}</div>
      </BlockTransition>
    </>
  )
}

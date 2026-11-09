import type { ReactNode } from "react"
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { Bubble, BubbleContent } from "@/components/ui/c-message-3-utils/bubble"
import { Message, MessageContent } from "@/components/ui/c-message-3-utils/message"

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -24, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1 },
}

const fromRight: Variants = {
  hidden: { opacity: 0, x: 24, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1 },
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.45, delayChildren: 0.1 } },
}

const reaction: Variants = {
  hidden: { opacity: 0, scale: 0, y: 6, rotate: -18 },
  show: {
    opacity: 1,
    // Pop in with an overshoot, then a quick heartbeat settle.
    scale: [0, 1.35, 0.9, 1.12, 1],
    y: [6, 0, 0, 0, 0],
    rotate: [-18, 8, -4, 2, 0],
  },
}

const spring = { type: "spring", stiffness: 420, damping: 30 } as const

const item = (dir: "left" | "right"): Variants =>
  dir === "left" ? fromLeft : fromRight

/** Tiny circular avatar. The brand side shows the NAVORYN logo. */
function Avatar({ brand }: { brand?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        "grid size-6 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold " +
        (brand
          ? "bg-foreground text-background"
          : "bg-background/80 text-foreground")
      }
    >
      {brand ? "N" : "CL"}
    </span>
  )
}

function Row({
  dir,
  children,
}: {
  dir: "left" | "right"
  children: ReactNode
}) {
  return (
    <motion.div
      variants={item(dir)}
      transition={spring}
      className={
        "flex items-center gap-2 " + (dir === "right" ? "flex-row-reverse" : "")
      }
    >
      <Avatar brand={dir === "right"} />
      {children}
    </motion.div>
  )
}

export function Pattern() {
  return (
    <motion.div
      className="mt-5 flex w-full flex-col justify-center gap-3.5 px-1"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Row dir="left">
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>We want a partner who listens.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </Row>

      <Row dir="right">
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>We start by understanding your goals.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </Row>

      <Row dir="left">
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>That&apos;s exactly what we were missing.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </Row>

      <Row dir="right">
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>Then we&apos;re already on the same page.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </Row>

      <Row dir="left">
        <Message>
          <MessageContent>
            <div className="relative">
              <Bubble variant="muted">
                <BubbleContent>Love it — let&apos;s build together.</BubbleContent>
              </Bubble>
              <motion.span
                variants={reaction}
                transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
                className="absolute -bottom-2.5 left-1 grid size-5 place-items-center rounded-full bg-background text-[0.65rem] shadow-md ring-1 ring-foreground/10"
                aria-label="Reacted with a heart"
              >
                ❤️
              </motion.span>
            </div>
          </MessageContent>
        </Message>
      </Row>
    </motion.div>
  )
}

export default Pattern

import * as motion from "motion/react-client"
import { Bubble, BubbleContent } from "./components/bubble/bubble"
import { Message, MessageContent } from "./components/bubble/message"
import { ChatRow } from "./components/row/ChatRow"
import { container, reaction } from "./types/variants"
import { useRevealReady } from "@/utilities/ScrollReveal/components/block/useRevealReady"

export default function MessageChat() {
  const [ref, ready] = useRevealReady<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      className="mt-5 flex w-full flex-col justify-center gap-3.5 px-1"
      variants={container}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
    >
      <ChatRow dir="left">
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>We want a partner who listens.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </ChatRow>

      <ChatRow dir="right">
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>We start by understanding your goals.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </ChatRow>

      <ChatRow dir="left">
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>That&apos;s exactly what we were missing.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </ChatRow>

      <ChatRow dir="right">
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>Then we&apos;re already on the same page.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </ChatRow>

      <ChatRow dir="left">
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
      </ChatRow>
    </motion.div>
  )
}

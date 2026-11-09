import * as React from "react"
import { cn } from "@/lib/utils"

type MessageAlign = "start" | "end"

const AlignContext = React.createContext<MessageAlign>("start")

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: MessageAlign
}

export function Message({ align = "start", className, ...props }: MessageProps) {
  return (
    <AlignContext.Provider value={align}>
      <div
        className={cn(
          "flex min-w-0 flex-1",
          align === "end" ? "justify-end" : "justify-start",
          className,
        )}
        {...props}
      />
    </AlignContext.Provider>
  )
}

export function MessageContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const align = React.useContext(AlignContext)
  return (
    <div
      className={cn(
        "flex max-w-[85%] flex-col gap-1",
        align === "end" ? "items-end" : "items-start",
        className,
      )}
      {...props}
    />
  )
}

export function MessageHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center px-1 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}

export function MessageFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const align = React.useContext(AlignContext)
  return (
    <div
      className={cn(
        "flex items-center px-1 text-[0.65rem] text-muted-foreground",
        align === "end" ? "self-end" : "self-start",
        className,
      )}
      {...props}
    />
  )
}

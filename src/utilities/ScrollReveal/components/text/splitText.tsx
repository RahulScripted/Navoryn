import type { ReactNode } from "react"
import type { SplitBy } from "./paintPiece"

export function splitText(text: string, splitBy: SplitBy): ReactNode[] {
  return text.split(/(\s+)/).map((word, index) =>
    word.trim() === "" ? (
      word
    ) : (
      <span className="scroll-reveal-word" key={index}>
        {splitBy === "chars" ? (
          Array.from(word).map((char, charIndex) => (
            <span className="scroll-reveal-piece" key={charIndex}>
              {char}
            </span>
          ))
        ) : (
          <span className="scroll-reveal-piece">{word}</span>
        )}
      </span>
    ),
  )
}

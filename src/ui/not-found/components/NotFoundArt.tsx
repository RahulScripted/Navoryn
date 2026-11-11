import rawArt from "@/asset/svgs/404-error.svg?raw"

const art = rawArt
  .replace(/<style[\s\S]*?<\/style>/g, "")
  .replace(/<metadata[\s\S]*?<\/metadata>/g, "")
  .replace(/<defs>[\s\S]*?<\/defs>/g, "")
  .replace(/<svg\b/, '<svg aria-hidden="true" focusable="false"')

export function NotFoundArt() {
  return (
    <div
      role="img"
      aria-label="A cute creature in front of a swinging Page Disconnected sign"
      className="nf-art w-full max-w-[min(90vw,62svh)]"
      dangerouslySetInnerHTML={{ __html: art }}
    />
  )
}

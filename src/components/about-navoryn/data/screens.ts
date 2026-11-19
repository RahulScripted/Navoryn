export type SketchKind = "dashboard" | "inbox" | "calendar" | "editor" | "insights"
export type SketchTone = "p" | "b" | "t" | "c" | "a" | "o"
export type SketchRect = [number, number, number, number, SketchTone]

export const SCREEN_W = 300
export const SCREEN_H = 190
export const SCREEN_SECONDS = 10

const rows = (n: number, f: (i: number) => SketchRect[]) => Array.from({ length: n }, (_, i) => f(i)).flat()

export const SKETCH: Record<SketchKind, SketchRect[]> = {
  dashboard: [
    [0, 0, 52, 190, "p"], [64, 12, 120, 10, "t"], [236, 10, 52, 16, "c"], [64, 36, 70, 44, "p"], [142, 36, 70, 44, "p"], [220, 36, 68, 44, "a"],
    [70, 128, 14, 50, "b"], [92, 112, 14, 66, "b"], [114, 132, 14, 46, "b"], [136, 100, 14, 78, "b"], [158, 120, 14, 58, "b"], [180, 94, 14, 84, "b"],
    [210, 92, 78, 86, "p"], [220, 104, 50, 6, "t"], [220, 118, 38, 6, "t"], [220, 132, 56, 6, "t"], [10, 14, 32, 8, "t"], [10, 34, 32, 6, "t"], [10, 48, 32, 6, "t"], [10, 62, 32, 6, "t"],
  ],
  inbox: rows(5, (i) => [
    [16, 14 + i * 34, 268, 28, "p"], [26, 24 + i * 34, 8, 8, "c"], [44, 21 + i * 34, 110, 6, "t"], [44, 32 + i * 34, 170, 5, "t"],
    ...(i % 2 === 0 ? ([[244, 22 + i * 34, 30, 10, "a"]] as SketchRect[]) : []),
  ]),
  calendar: [
    [16, 10, 100, 12, "t"], [236, 8, 48, 16, "c"],
    ...rows(28, (i) => [[16 + (i % 7) * 38, 36 + Math.floor(i / 7) * 35, 34, 30, "p"] as SketchRect]),
    [92, 71, 34, 30, "a"], [130, 106, 72, 30, "c"], [206, 141, 34, 30, "a"],
  ],
  editor: [
    [16, 10, 268, 20, "p"], [28, 44, 150, 14, "t"], [28, 70, 150, 6, "t"], [28, 84, 132, 6, "t"], [28, 98, 160, 6, "t"], [28, 112, 110, 6, "t"],
    [196, 64, 80, 74, "a"], [28, 150, 66, 24, "c"], [104, 150, 66, 24, "p"], [200, 150, 76, 6, "t"],
  ],
  insights: [
    [16, 14, 120, 12, "t"], [16, 40, 120, 130, "p"], [76, 105, 44, 44, "o"], [150, 40, 134, 36, "p"], [150, 84, 134, 36, "p"], [150, 128, 134, 42, "p"],
    [160, 52, 60, 6, "t"], [160, 96, 80, 6, "t"], [160, 140, 50, 6, "t"], [236, 134, 40, 24, "b"],
  ],
}
export const SCREENS: SketchKind[] = ["dashboard", "inbox", "calendar", "editor", "insights"]

export const LENS_PATH = {
  x: [0.2, 0.5, 0.8, 0.75, 0.5, 0.25, 0.2],
  y: [0.28, 0.45, 0.3, 0.7, 0.78, 0.68, 0.28],
  r: 30,
}

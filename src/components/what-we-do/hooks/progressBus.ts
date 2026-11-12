export type ProgressListener = (progress: number) => void

export interface ProgressBus {
  get: () => number
  set: (progress: number) => void
  subscribe: (listener: ProgressListener) => () => void
}

export function createProgressBus(): ProgressBus {
  let value = 0
  const listeners = new Set<ProgressListener>()

  return {
    get: () => value,
    set(progress) {
      if (progress === value) return
      value = progress
      listeners.forEach((listener) => listener(value))
    },
    subscribe(listener) {
      listeners.add(listener)
      listener(value)
      return () => {
        listeners.delete(listener)
      }
    },
  }
}

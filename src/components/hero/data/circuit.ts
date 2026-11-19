import {
  BarChartIcon,
  CodeIcon,
  ComponentInstanceIcon,
  CubeIcon,
  GearIcon,
  LightningBoltIcon,
  Link2Icon,
  LockClosedIcon,
  MagicWandIcon,
  MixIcon,
  MobileIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import type { ChipPoint, CircuitChip, CircuitTrace } from "../types/hero"

export const CIRCUIT_W = 1440
export const CIRCUIT_H = 900
export const CHIP_HOT_RADIUS = 90

export const TRACES: CircuitTrace[] = [
  { d: "M0 236H96M156 236H232Q252 236 252 256V336Q252 356 272 356H430Q450 356 450 376V560Q450 580 470 580", end: { x: 470, y: 580 }, port: 0.3, gap: 24 },
  { d: "M0 470H118M178 470H300Q320 470 320 490V640Q320 660 340 660", end: { x: 340, y: 660 }, port: 0.5, gap: 46 },
  { d: "M84 0V122Q84 142 104 142H170" },
  { d: "M0 640H96M156 640H200Q220 640 220 660V760Q220 780 240 780", end: { x: 240, y: 780 }, port: 0.7, gap: 68 },
  { d: "M0 356H24M84 356H160" },
  { d: "M330 0V140Q330 160 350 160H380" },
]

export const LINK_RADIUS = 18

export const CHIPS: CircuitChip[] = [
  { x: 126, y: 236, icons: [CodeIcon, LightningBoltIcon] },
  { x: 148, y: 470, icons: [MobileIcon, BarChartIcon] },
  { x: 54, y: 356, icons: [ComponentInstanceIcon, Link2Icon] },
  { x: 126, y: 640, icons: [RocketIcon, LockClosedIcon] },
  { x: 200, y: 142, icons: [MagicWandIcon, CubeIcon] },
  { x: 410, y: 160, icons: [GearIcon, MixIcon] },
]

export const CHIP_POINTS: ChipPoint[] = [
  ...CHIPS.map(({ x, y }) => ({ x, y })),
  ...CHIPS.map(({ x, y }) => ({ x: CIRCUIT_W - x, y })),
]

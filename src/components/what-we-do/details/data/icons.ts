import {
  ArchiveIcon, BarChartIcon, BellIcon, CardStackIcon, ClipboardIcon, CodeIcon, Component1Icon, CubeIcon,
  DashboardIcon, DoubleArrowRightIcon, FileTextIcon, FrameIcon, GearIcon, GlobeIcon, GroupIcon, IdCardIcon,
  LayersIcon, LayoutIcon, LightningBoltIcon, Link1Icon, Link2Icon, ListBulletIcon, LockClosedIcon, LoopIcon,
  MagicWandIcon, MagnifyingGlassIcon, MobileIcon, Pencil2Icon, PersonIcon, PieChartIcon, ReloadIcon,
  RocketIcon, Share2Icon, ShuffleIcon, StackIcon, TableIcon, TargetIcon, TimerIcon, UpdateIcon, ViewGridIcon,
} from "@radix-ui/react-icons"
import type { IconComponent } from "@/types/icon"
import type { IconAnim } from "@/components/what-we-do/components/card/iconAnim"
import type { ServiceId } from "../../types/service"

export interface DetailIcon {
  icon: IconComponent
  anim: IconAnim
}

const i = (icon: IconComponent, anim: IconAnim): DetailIcon => ({ icon, anim })

/** One icon per highlight card, in card order, with the animation it plays when the card is hovered. */
export const DETAIL_ICONS: Record<ServiceId, DetailIcon[]> = {
  "web-development": [i(GlobeIcon, "spin-y"), i(DashboardIcon, "pop"), i(IdCardIcon, "wiggle"), i(GearIcon, "spin")],
  "saas-mvp-development": [i(CubeIcon, "spin-y"), i(StackIcon, "bounce"), i(GroupIcon, "pop"), i(RocketIcon, "rise")],
  "mobile-app-development": [i(MobileIcon, "wiggle"), i(CodeIcon, "nudge"), i(LayersIcon, "bounce"), i(Link2Icon, "wiggle")],
  "ui-ux-product-design": [i(Pencil2Icon, "wiggle"), i(MagnifyingGlassIcon, "wiggle"), i(FrameIcon, "pop"), i(Component1Icon, "spin")],
  "website-app-redesign": [i(ReloadIcon, "spin"), i(LayoutIcon, "pop"), i(LightningBoltIcon, "flash"), i(UpdateIcon, "spin")],
  "seo-digital-growth": [i(MagnifyingGlassIcon, "wiggle"), i(FileTextIcon, "bounce"), i(TimerIcon, "spin"), i(BarChartIcon, "grow")],
  "api-platform-integrations": [i(CodeIcon, "nudge"), i(Link2Icon, "wiggle"), i(TableIcon, "pop"), i(LockClosedIcon, "wiggle")],
  "social-media-integrations": [i(PersonIcon, "pop"), i(ListBulletIcon, "nudge"), i(Share2Icon, "pop"), i(TargetIcon, "pop")],
  "business-automation": [i(LoopIcon, "spin"), i(ShuffleIcon, "nudge"), i(BellIcon, "wiggle"), i(PieChartIcon, "spin")],
  "ecommerce-payments": [i(ViewGridIcon, "pop"), i(ArchiveIcon, "bounce"), i(CardStackIcon, "nudge"), i(ClipboardIcon, "wiggle")],
  "legacy-modernization": [i(UpdateIcon, "spin"), i(StackIcon, "bounce"), i(DoubleArrowRightIcon, "nudge"), i(Link1Icon, "wiggle")],
  "maintenance-optimization": [i(GearIcon, "spin"), i(TimerIcon, "spin"), i(LockClosedIcon, "wiggle"), i(MagicWandIcon, "wiggle")],
}

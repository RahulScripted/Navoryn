import {
  ActivityLogIcon,
  ArchiveIcon,
  AvatarIcon,
  BadgeIcon,
  BarChartIcon,
  BellIcon,
  BookmarkIcon,
  BorderAllIcon,
  CalendarIcon,
  CardStackIcon,
  CaretSortIcon,
  ChatBubbleIcon,
  CheckboxIcon,
  ChevronDownIcon,
  CodeIcon,
  ColumnsIcon,
  ComponentInstanceIcon,
  CursorArrowIcon,
  DashboardIcon,
  DesktopIcon,
  DimensionsIcon,
  DividerHorizontalIcon,
  DotsHorizontalIcon,
  DoubleArrowRightIcon,
  DragHandleVerticalIcon,
  EnterIcon,
  ExclamationTriangleIcon,
  FileTextIcon,
  GlobeIcon,
  GridIcon,
  HamburgerMenuIcon,
  ImageIcon,
  InfoCircledIcon,
  InputIcon,
  LayoutIcon,
  Link2Icon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MixIcon,
  MixerHorizontalIcon,
  PersonIcon,
  PieChartIcon,
  PlusCircledIcon,
  QuestionMarkCircledIcon,
  RadiobuttonIcon,
  RocketIcon,
  RowsIcon,
  SewingPinIcon,
  SpeakerLoudIcon,
  StarIcon,
  SwitchIcon,
  TableIcon,
  TextAlignLeftIcon,
  TextIcon,
  TimerIcon,
  UploadIcon,
  VideoIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
} from "@radix-ui/react-icons"
import type { IconComponent } from "@/types/icon"

export interface CategoryItem {
  label: string
  icon: IconComponent
  /** The number shown after the name, such as "1.2K". Left out when there is none. */
  count?: string | number
}

export interface CategoryGroup {
  heading: string
  /** The items of the group, in columns of five. */
  columns: CategoryItem[][]
}

export const CATEGORIES_INTRO = {
  title: "Categories",
  description:
    "Explore a collection of carefully crafted sections and components, from homepages and feature layouts to pricing, buttons, and more. Find the right elements to shape your digital experience.",
  tabletDescription:
    "Discover sections and components, from homepages and features to pricing and buttons. Find the elements you need.",
  mobileDescription: "Explore sections and components to find the right elements for your design.",
}

// The groups and counts follow the reference design. The three items of the second "Data and feedback" column
// that were hidden behind the preview card in the screenshot are not listed yet.
export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    heading: "Marketing blocks",
    columns: [
      [
        { label: "Heroes", icon: ViewHorizontalIcon, count: "1.2K" },
        { label: "Features", icon: StarIcon, count: 318 },
        { label: "Pricing", icon: CardStackIcon, count: 216 },
        { label: "Testimonials", icon: ChatBubbleIcon, count: 161 },
        { label: "Calls to action", icon: SpeakerLoudIcon, count: 501 },
      ],
      [
        { label: "Footers", icon: DividerHorizontalIcon, count: 65 },
        { label: "Navbars", icon: HamburgerMenuIcon, count: 477 },
        { label: "Backgrounds", icon: ImageIcon, count: 365 },
        { label: "Shaders", icon: MixIcon, count: 404 },
        { label: "Texts", icon: TextIcon, count: 663 },
      ],
    ],
  },
  {
    heading: "UI components",
    columns: [
      [
        { label: "Buttons", icon: CursorArrowIcon, count: "2K" },
        { label: "AI chats", icon: ChatBubbleIcon, count: 248 },
        { label: "Cards", icon: CardStackIcon, count: "1.8K" },
        { label: "Inputs", icon: InputIcon, count: 949 },
        { label: "Tables", icon: TableIcon, count: 313 },
      ],
      [
        { label: "Forms", icon: FileTextIcon, count: "1.5K" },
        { label: "Dialogs", icon: ComponentInstanceIcon, count: 328 },
        { label: "Tabs", icon: ViewGridIcon, count: 239 },
        { label: "Avatars", icon: PersonIcon, count: 597 },
        { label: "Badges", icon: BadgeIcon, count: 605 },
      ],
    ],
  },
  {
    heading: "Forms and pickers",
    columns: [
      [
        { label: "Sign ins", icon: EnterIcon, count: 103 },
        { label: "Sign ups", icon: PlusCircledIcon, count: 58 },
        { label: "Selects", icon: CaretSortIcon, count: 316 },
        { label: "Checkboxes", icon: CheckboxIcon, count: 238 },
        { label: "Radio Groups", icon: RadiobuttonIcon, count: 152 },
      ],
      [
        { label: "Toggles", icon: SwitchIcon, count: 532 },
        { label: "Sliders", icon: MixerHorizontalIcon, count: 217 },
        { label: "Date Pickers", icon: CalendarIcon, count: 250 },
        { label: "Calendars", icon: CalendarIcon, count: 239 },
        { label: "Text Areas", icon: TextAlignLeftIcon, count: 187 },
      ],
    ],
  },
  {
    heading: "Data and feedback",
    columns: [
      [
        { label: "Charts & Data Viz", icon: BarChartIcon, count: 246 },
        { label: "Stats & KPIs", icon: ActivityLogIcon, count: 153 },
        { label: "Dashboards", icon: DashboardIcon, count: 400 },
        { label: "Progress", icon: PieChartIcon, count: 375 },
        { label: "Numbers", icon: DimensionsIcon, count: 54 },
      ],
      [
        { label: "Toasts", icon: BellIcon, count: 79 },
        { label: "Alerts", icon: ExclamationTriangleIcon, count: 240 },
      ],
    ],
  },
  {
    heading: "Navigation and layout",
    columns: [
      [
        { label: "Sidebars", icon: LayoutIcon, count: 95 },
        { label: "Menus", icon: HamburgerMenuIcon, count: 287 },
        { label: "Dropdowns", icon: ChevronDownIcon, count: 506 },
        { label: "Paginations", icon: CodeIcon, count: 130 },
        { label: "Docks", icon: DesktopIcon },
      ],
      [
        { label: "Grids & Bento", icon: GridIcon, count: 620 },
        { label: "Lists", icon: ListBulletIcon, count: 349 },
        { label: "Accordions", icon: RowsIcon, count: 234 },
        { label: "Carousels", icon: ViewHorizontalIcon, count: 239 },
        { label: "Scroll Areas", icon: DragHandleVerticalIcon, count: 293 },
      ],
      [
        { label: "File Trees", icon: ArchiveIcon, count: 61 },
        { label: "Steppers", icon: DotsHorizontalIcon, count: 124 },
        { label: "Timelines", icon: TimerIcon, count: 74 },
        { label: "Links", icon: Link2Icon, count: 354 },
        { label: "Search Bars", icon: MagnifyingGlassIcon, count: 218 },
      ],
    ],
  },
  {
    heading: "Media and effects",
    columns: [
      [
        { label: "Images", icon: ImageIcon, count: 428 },
        { label: "Galleries", icon: ViewGridIcon, count: 272 },
        { label: "Videos", icon: VideoIcon, count: 162 },
        { label: "Icons", icon: StarIcon, count: 851 },
        { label: "Marquees", icon: DoubleArrowRightIcon, count: 113 },
      ],
      [
        { label: "Borders", icon: BorderAllIcon, count: 111 },
        { label: "Cursors", icon: CursorArrowIcon, count: 152 },
        { label: "Globes", icon: GlobeIcon },
        { label: "Maps", icon: SewingPinIcon, count: 51 },
        { label: "File Uploads", icon: UploadIcon, count: 154 },
      ],
    ],
  },
  {
    heading: "Everything else",
    columns: [
      [
        { label: "Announcements", icon: SpeakerLoudIcon, count: 71 },
        { label: "FAQs", icon: QuestionMarkCircledIcon, count: 191 },
        { label: "Tooltips", icon: InfoCircledIcon, count: 267 },
        { label: "Popovers", icon: ChatBubbleIcon, count: 179 },
        { label: "Tags", icon: BookmarkIcon, count: 74 },
      ],
      [
        { label: "Profiles", icon: PersonIcon, count: 270 },
        { label: "Team Sections", icon: AvatarIcon, count: 119 },
        { label: "Onboarding", icon: RocketIcon, count: 53 },
        { label: "Hooks", icon: Link2Icon, count: 51 },
        { label: "Clients", icon: PersonIcon },
      ],
      [
        { label: "Comparisons", icon: ColumnsIcon },
      ],
    ],
  },
]

import { BrandColumn } from "@/ui/footer/components/brand/BrandColumn"
import { FooterNav } from "@/ui/footer/components/nav/FooterNav"
import { FooterBottom } from "@/ui/footer/components/bottom/FooterBottom"
import { Watermark } from "@/ui/footer/components/watermark/Watermark"

export default function Footer() {
  return (
    <footer className="footer-surface relative overflow-hidden border-t text-foreground">
      <div className="page-px w-full pt-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <BrandColumn />
          <FooterNav />
        </div>
        <FooterBottom />
      </div>
      <Watermark />
    </footer>
  )
}

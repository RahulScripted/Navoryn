import apiIntegration from "@/asset/webps/api-integration.webp"
import businessAutomation from "@/asset/webps/business-automation.webp"
import mobileApp from "@/asset/webps/mobile-app.webp"
import productDesign from "@/asset/webps/product-design.webp"
import redesign from "@/asset/webps/redesign.webp"
import saasMvp from "@/asset/webps/saas-mvp.webp"
import seo from "@/asset/webps/seo.png"
import socialMedia from "@/asset/webps/socialMedia.webp"
import webDevelopment from "@/asset/webps/web-development.webp"
import type { ServiceId } from "../types/service"

export const SERVICE_IMAGES: Partial<Record<ServiceId, string>> = {
  "web-development": webDevelopment,
  "saas-mvp-development": saasMvp,
  "mobile-app-development": mobileApp,
  "ui-ux-product-design": productDesign,
  "website-app-redesign": redesign,
  "seo-digital-growth": seo,
  "api-platform-integrations": apiIntegration,
  "social-media-integrations": socialMedia,
  "business-automation": businessAutomation,
}

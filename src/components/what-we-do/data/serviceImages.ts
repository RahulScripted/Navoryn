import ecommerce from "@/asset/webps/home/services/e-commerce.webp"
import apiIntegration from "@/asset/webps/home/services/api-integration.webp"
import businessAutomation from "@/asset/webps/home/services/business-automation.webp"
import legacy from "@/asset/webps/home/services/legacy.webp"
import mobileApp from "@/asset/webps/home/services/mobile-app.webp"
import maintenance from "@/asset/webps/home/services/maintenance.webp"
import productDesign from "@/asset/webps/home/services/product-design.webp"
import redesign from "@/asset/webps/home/services/redesign.webp"
import saasMvp from "@/asset/webps/home/services/saas-mvp.webp"
import seo from "@/asset/webps/home/services/seo.webp"
import socialMedia from "@/asset/webps/home/services/socialMedia.webp"
import webDevelopment from "@/asset/webps/home/services/web-development.webp"
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
  "ecommerce-payments": ecommerce,
  "legacy-modernization": legacy,
  "maintenance-optimization": maintenance,
}

import adobeBlack from "../../../asset/svgs/adobe-logo-black.svg?url"
import adobeWhite from "../../../asset/svgs/adobe-logo-white.svg?url"
import awsDark from "../../../asset/svgs/amazon-web-services-dark.svg?url"
import awsLight from "../../../asset/svgs/amazon-web-services-light.svg?url"
import chartjs from "../../../asset/svgs/chartdotjs.svg?url"
import chatgptDark from "../../../asset/svgs/chatgpt-dark.svg?url"
import chatgptLight from "../../../asset/svgs/chatgpt-light.svg?url"
import claude from "../../../asset/svgs/claude.svg?url"
import expo from "../../../asset/svgs/expo-badge.svg?url"
import express from "../../../asset/svgs/express.svg?url"
import figma from "../../../asset/svgs/figma.svg?url"
import framerDark from "../../../asset/svgs/framer-dark.svg?url"
import framerLight from "../../../asset/svgs/framer-light.svg?url"
import gemini from "../../../asset/svgs/gemini.svg?url"
import githubDark from "../../../asset/svgs/github-dark.svg?url"
import githubLight from "../../../asset/svgs/github-light.svg?url"
import gsap from "../../../asset/svgs/gsap.svg?url"
import java from "../../../asset/svgs/java.svg?url"
import jest from "../../../asset/svgs/jest.svg?url"
import kiro from "../../../asset/svgs/kiro.svg?url"
import mongodb from "../../../asset/svgs/mongodb.svg?url"
import mysqlDark from "../../../asset/svgs/mysql-dark.svg?url"
import mysqlLight from "../../../asset/svgs/mysql-light.svg?url"
import nextjs from "../../../asset/svgs/nextdotjs.svg?url"
import nodejs from "../../../asset/svgs/nodejs.svg?url"
import photoshop from "../../../asset/svgs/photoshop.svg?url"
import playwright from "../../../asset/svgs/playwright.svg?url"
import postgresql from "../../../asset/svgs/postgresql.svg?url"
import postman from "../../../asset/svgs/postman.svg?url"
import react from "../../../asset/svgs/react.svg?url"
import reactnative from "../../../asset/svgs/reactnative.svg?url"
import reactnavigation from "../../../asset/svgs/reactnavigation.svg?url"
import redux from "../../../asset/svgs/redux.svg?url"
import render from "../../../asset/svgs/render.svg?url"
import rubyOnRails from "../../../asset/svgs/ruby-on-rails.svg?url"
import supabase from "../../../asset/svgs/supabase.svg?url"
import threeDark from "../../../asset/svgs/threedotjs-dark.svg?url"
import threeLight from "../../../asset/svgs/threedotjs-light.svg?url"
import typescript from "../../../asset/svgs/typescript.svg?url"
import vercelDark from "../../../asset/svgs/vercel-dark.svg?url"
import vercelLight from "../../../asset/svgs/vercel-light.svg?url"
import vitest from "../../../asset/svgs/vitest.svg?url"

export interface ToolIcon {
  src: string
  srcDark?: string
}

export const TOOL_ICONS: Record<string, ToolIcon> = {
  "Figma": { src: figma },
  "Adobe Photoshop": { src: photoshop },
  "Adobe Illustrator": { src: adobeBlack, srcDark: adobeWhite },
  "Framer": { src: framerLight, srcDark: framerDark },

  "React.js": { src: react },
  "Next.js": { src: nextjs },
  "TypeScript": { src: typescript },
  "JavaScript": { src: typescript },
  "Redux Toolkit": { src: redux },

  "React Native": { src: reactnative },
  "Expo": { src: expo },
  "React Navigation": { src: reactnavigation },

  "Node.js": { src: nodejs },
  "Express.js": { src: express },
  "Java": { src: java },
  "Ruby on Rails": { src: rubyOnRails },
  "REST APIs": { src: postman },
  "GraphQL": { src: postman },

  "MongoDB": { src: mongodb },
  "MySQL": { src: mysqlLight, srcDark: mysqlDark },
  "PostgreSQL": { src: postgresql },
  "Supabase": { src: supabase },

  "Jest": { src: jest },
  "Vitest": { src: vitest },
  "Playwright": { src: playwright },
  "Postman": { src: postman },

  "Vercel": { src: vercelLight, srcDark: vercelDark },
  "Netlify": { src: render },
  "Render": { src: render },
  "GitHub": { src: githubLight, srcDark: githubDark },
  "AWS": { src: awsLight, srcDark: awsDark },

  "GSAP": { src: gsap },
  "Framer Motion": { src: framerLight, srcDark: framerDark },
  "Three.js": { src: threeLight, srcDark: threeDark },
  "Recharts": { src: chartjs },
  "Chart.js": { src: chartjs },

  "ChatGPT": { src: chatgptDark, srcDark: chatgptLight },
  "Claude": { src: claude },
  "Gemini": { src: gemini },
  "Kiro": { src: kiro },
}

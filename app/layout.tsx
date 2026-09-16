import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://nexora1998.netlify.app"),title:{default:"Nexora — Discover Useful Products",template:"%s | Nexora"},description:"Nexora is a global product discovery platform featuring curated products across multiple categories.",robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

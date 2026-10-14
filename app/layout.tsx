import type { Metadata } from 'next';
import { clinic } from '@/lib/clinic';
import './globals.css';
const description = 'Estética avançada em Barueri: harmonização facial, botox, preenchimento labial e harmonização corporal. Cuidado personalizado e inclusivo. Agende sua avaliação.';
export const metadata: Metadata = {
  metadataBase:new URL(clinic.siteUrl), title:'DM Harmonize | Estética avançada em Barueri', description,
  alternates:{canonical:'/'},
  openGraph:{title:'DM Harmonize — Estética que respeita seus traços.',description,url:'/',siteName:clinic.name,locale:'pt_BR',type:'website',images:[{url:'/images/hero-1920x1080.jpg',width:1920,height:1080,alt:'DM Harmonize — estética avançada em Barueri'}]},
  twitter:{card:'summary_large_image',title:'DM Harmonize | Estética avançada em Barueri',description,images:['/images/hero-1920x1080.jpg']}, icons:{icon:'/favicon.svg'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  const business={'@context':'https://schema.org','@type':'LocalBusiness',name:clinic.fullName,telephone:`+${clinic.phoneDigits}`,url:clinic.siteUrl,image:`${clinic.siteUrl}/images/especialista.webp`,address:{'@type':'PostalAddress',streetAddress:`${clinic.address}, 3º andar, sala 304`,addressLocality:'Barueri',addressRegion:'SP',postalCode:clinic.postalCode,addressCountry:'BR'}};
  return <html lang="pt-BR"><head><link rel="preload" href="/images/hero.webp" as="image" media="(min-width: 641px)"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business).replace(/</g,'\\u003c')}}/></head><body>{children}</body></html>;
}

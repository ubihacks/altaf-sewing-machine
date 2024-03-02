import { Metadata } from "next";
import { Providers } from "./Providers";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: 'Altaf Sewing Machine & Repairing Centre',
  description: 'Altaf Sewing Machine & Repairing Centre is a trusted and reputable provider of sewing machines repair and maintenance services. We provide high-quality services with a primary focus on customer satisfaction. We offer a comprehensive range of services that includes selling new sewing machines, buying used machines, repairing and maintaining, and replacement of parts. We welcome you to visit our shop or give us a call to learn more. you can rest assured that you are receiving the highest quality services and products available in the industry.',
  keywords: 'sewing machines, oldest sewing machines shop, repair, maintenance, Altaf Sewing Machine & Repairing Centre, sewing machine repair, sewing machine maintenance, sewing machine parts, used sewing machines, new sewing machines, sewing machine shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
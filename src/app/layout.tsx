import { Metadata } from "next";
import { Providers } from "./Providers";


export const metadata: Metadata = {
  title: 'Altaf Sewing Machine & Repairing Centre',
  description: 'Altaf Sewing Machine & Repairing Centre is a trusted and reputable provider of sewing machines repair and maintenance services. We provide high-quality services with a primary focus on customer satisfaction. We offer a comprehensive range of services that includes selling new sewing machines, buying used machines, repairing and maintaining, and replacement of parts. We welcome you to visit our shop or give us a call to learn more. you can rest assured that you are receiving the highest quality services and products available in the industry.',
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
      </body>
    </html>
  );
}
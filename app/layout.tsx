import '@/app/ui/global.css'
import { inter, raleway } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}

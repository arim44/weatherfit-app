import Link from "next/link";
import style from './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <header>
            {/* 링크로 하면 미리가져오는 프리패칭을 함 */}
            <Link href={'/'}>홈 🌤️ WeatherFit</Link> &nbsp;&nbsp;
            <Link href={'/outfit'}>코디추천</Link> &nbsp;&nbsp;
            <Link href={'/todo'}>todo</Link> &nbsp;&nbsp;
          </header>
          <main>{children} </main>
          <footer>&copy; 2026 양파마켓 All right reseved</footer>
        </div>
      </body>
    </html>
  );
}

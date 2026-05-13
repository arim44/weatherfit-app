import Link from "next/link";

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
            <Link href='./'> 🌤️ WeatherFit</Link>
          </header>
          <main>{children} </main>
          <footer>&copy; 2026 양파마켓 All right reseved</footer>
        </div>
      </body>
    </html>
  );
}

import Link from "next/link";
import styles from "./page.module.css";
import TodoProvider from "@/providers/TodoProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <TodoProvider>
          <div>
            <header className={styles.header}>
              {/* 링크로 하면 미리가져오는 프리패칭을 함 */}
              🌤️ <Link href={'/'}>WeatherFit</Link> &nbsp;&nbsp;&nbsp;
              👚 <Link href={'/outfit'}>코디추천</Link> &nbsp;&nbsp;&nbsp;
              📝 <Link href={'/todo'}>todo</Link> &nbsp;&nbsp;&nbsp;
            </header>
            <main>{children} </main>
            <footer className={styles.footer}>&copy; 2026 HAR All right reseved</footer>
          </div>
        </TodoProvider>
      </body>
    </html>
  );
}

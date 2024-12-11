import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            <a href="/youtube">Youtube</a>
          </li>
          <li><a href="/facebook">Facebook</a></li>
          <li><a href="/tiktok">Tiktok</a></li>
        </ol>
      </main>
    </div>
  );
}

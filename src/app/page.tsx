import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import "./styles/app.css";

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
          <li className="blue">
            <Link href={'/youtube'}>Youtube</Link>
          </li>
          <li><Link href={'/facebook'}>Facebook</Link></li>
          <li> <Link href={'/tiktok'}>Tiktok</Link></li>
        </ol>
      </main>
    </div>
  );
}

'use client'
import styles from "./page.module.css";
import "../styles/app.css";

export default function Home() {

    /*
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://my-json-server.typicode.com/Ares7760-sudo/light-backend-api/blogs");
      const data = await res.json();
      console.log("check res >>>", data);
    }

    fetchData();
  }, [])*/

  return (
    <div className={styles.page}>
      <main className={styles.main}>

      </main>
    </div>
  );
}

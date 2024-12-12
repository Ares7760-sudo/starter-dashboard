'use client'
import styles from "./page.module.css";
import "../styles/app.css";
import InfoTable from "@/Components/app.table";
//import { useEffect } from "react";
import useSWR from 'swr';

export default function Home() {

  const fetcher = (url: string) => fetch(url)
  .then(r => r.json());

  const { data } = useSWR(
    "https://my-json-server.typicode.com/Ares7760-sudo/light-backend-api/blogs", 
    fetcher, 
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }    
  );

  if(!data) {
    return <div>loading...</div>
  }
    console.log("check res >>>", data);

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
      <InfoTable 
        blogs={data}
      />
      </main>
    </div>
  );
}

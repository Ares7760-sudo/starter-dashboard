'use client'
import InfoTable from "@/Components/app.table"
import useSWR from 'swr'

const BlogsPage = () => {
    const fetcher = (url: string) => fetch(url)
  .then(r => r.json());

  const { data, error, isLoading } = useSWR(
    "https://myblog-backend-ii3d.onrender.com/api/blogs", 
    fetcher, 
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }    
  );

  if(isLoading) {
    return <div>loading...</div>
  }
    return (
        <div>
            <InfoTable 
                blogs={data?.sort((a: any, b: any) => b.id - a.id)}
            />
        </div>
    )
}

export default BlogsPage
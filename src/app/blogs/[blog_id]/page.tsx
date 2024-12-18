'use client'
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import * as React from 'react'

const ViewDetailBlog = ({params}: {params: {blog_id: string}}) => {

    const { blog_id } = React.use(params)
    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url)
  .then(r => r.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:3002/api/blogs/${blog_id}`, 
    fetcher, 
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }    
  );

    return (
        <>
        <Container>
            <div className='my-3'>
                <Link href={"/blogs"}>Quay về trang trước</Link>
            </div>
    <Card>
        <Card.Header>Nhật ký của chó nhỏ</Card.Header>
        <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>
                {data?.content}
            </Card.Text>
        </Card.Body>
        <Card.Footer className='text-muted'>Tác giả : {data?.author}</Card.Footer>
    </Card>
    </Container>
        </>
    )

}

export default ViewDetailBlog
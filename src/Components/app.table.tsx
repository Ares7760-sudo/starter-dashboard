'use client'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import AddBlogModal from './create.modal';
import UpdateBlogModal from './update.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from "swr";

interface IProps {
    blogs: IBlog[]
}

const InfoTable = (props: IProps) => {
    const { blogs } = props;

    const [ blog, setBlog ] = useState<IBlog | null>(null);
    const [ showModalAddBlog, setShowModalAddBlog] = useState<boolean>(false);
    const [ showModalUpdateBlog, setShowModalUpdateBlog] = useState<boolean>(false);

    const handleDeleteBlog = (blog_id: number) => {
        if (confirm("Bạn có chắc là muốn xóa bài viết này không ?")) {
          fetch(`http://localhost:3002/api/blogs/${blog_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        });
        toast.success("Đã xóa bài viết");
        mutate("http://localhost:3002/api/blogs/");
        }
    }

    return (
        <>
        <Container>
        <div className='mb-3 mt-3'
          style={{ display:"flex", justifyContent: "space-between"}}>
            <h3>Nhật ký của tôi</h3>
            <Button variant='primary'
              onClick={() => setShowModalAddBlog(true)}
            >Thêm bài đăng</Button>
        </div>  
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tiêu đề</th>
          <th>Tác giả</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
            {blogs.map(item => {
                return (
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link 
                  className='mx-2 btn btn-success'
                  href={`/blogs/${item.id}`}>Xem</Link>
                <Button variant='warning' className='mx-2'
                    onClick={() => {
                        setBlog(item)
                        setShowModalUpdateBlog(true)
                    }}
                >Sửa</Button>
                <Button variant='danger' className='mx-2'
                    onClick={() => handleDeleteBlog(item.id)}
                >Xóa</Button>
                </td>
                </tr>
                )
            })}
      </tbody>
    </Table>
    <AddBlogModal
        showModalAddBlog={showModalAddBlog}
        setShowModalAddBlog={setShowModalAddBlog}
    ></AddBlogModal>
    <UpdateBlogModal
        showModalUpdateBlog={showModalUpdateBlog}
        setShowModalUpdateBlog={setShowModalUpdateBlog}
        blog={blog}
        setBlog={setBlog}
    ></UpdateBlogModal>
    </Container>
        </>
    )
} 

export default InfoTable
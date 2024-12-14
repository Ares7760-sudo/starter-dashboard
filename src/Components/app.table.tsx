'use client'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import AddBlogModal from './create.modal';

interface IProps {
    blogs: IBlog[]
}

const InfoTable = (props: IProps) => {
    const { blogs } = props;
    const [ showModalAddBlog, setShowModalAddBlog] = useState<boolean>(false);
    console.log(">>>", blogs)

    return (
        <>
        <Container>
        <div className='mb-3'
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
            {blogs.map(blog => {
                return (
                <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                <Button variant='success' className='mx-2'>Xem</Button>
                <Button variant='warning' className='mx-2'>Sửa</Button>
                <Button variant='danger' className='mx-2'>Xóa</Button>
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
    </Container>
        </>
    )
} 

export default InfoTable
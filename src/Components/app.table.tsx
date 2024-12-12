'use client'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

interface IProps {
    blogs: IBlog[]
}

const InfoTable = (props: IProps) => {
    const { blogs } = props;
    return (
        <>
        <Container>
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
                <Button variant='success' className='mx-2'>View</Button>
                <Button variant='warning' className='mx-2'>Edit</Button>
                <Button variant='danger' className='mx-2'>Delete</Button>
                </td>
                </tr>
                )
            })}
      </tbody>
    </Table>
    </Container>
        </>
    )
} 

export default InfoTable
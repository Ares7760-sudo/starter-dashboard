'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from "swr";
import { useEffect } from "react";

interface IProps {
    showModalUpdateBlog: boolean;
    setShowModalUpdateBlog: (value: boolean) => void;
    blog: IBlog | null;
    setBlog: (value: IBlog | null) => void;
}

function UpdateBlogModal(props: IProps) {
    const { showModalUpdateBlog, setShowModalUpdateBlog, blog, setBlog } = props;

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id);
            setTitle(blog.title);
            setAuthor(blog.author);
            setContent(blog.content);
        }
    }, [blog])

    const handleSubmit = () => {
        if(!title) {
            toast.error("Phải nhập tiêu đề");
            return;
          }
          if(!author) {
            toast.error("Phải nhập tác giả");
            return;
          }
          if(!content) {
            toast.error("Phải nhập nội dung");
            return;
          }

          fetch(`http://localhost:3002/api/blogs/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content})
        });
        toast.success("Đã cập nhật bài đăng");
        handleCloseModal();
        mutate("http://localhost:3002/api/blogs/");
    }

    const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setBlog(null);
        setShowModalUpdateBlog(false);
  }

  return (
    <>
    <Modal 
        show={showModalUpdateBlog} 
        onHide={() => setShowModalUpdateBlog(false)}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa bài đăng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control type="text" placeholder="Nhập tiêu đề" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Tác giả</Form.Label>
            <Form.Control type="text" placeholder="Vô Danh" 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control as="textarea" rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Lưu bài
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateBlogModal
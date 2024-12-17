'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { mutate } from "swr";

interface IProps {
    showModalAddBlog: boolean;
    setShowModalAddBlog: (value: boolean) => void;
}

function AddBlogModal(props: IProps) {
  const {showModalAddBlog, setShowModalAddBlog} = props;

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
        console.log("check>>>", JSON.stringify({ title, author, content}));
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
        
        fetch("http://localhost:3002/api/create-new-blog", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content})
        }).then(res => res.json())
            .then(res => {
                if(res) {
                    toast.success("Đã tạo bài mới");
                    handleCloseModal();
                    mutate("http://localhost:3002/api/blogs/");
                } else {
                    toast.error("Có lỗi xảy ra");
                }
            });
  }

  const handleCloseModal = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setShowModalAddBlog(false);
  }

  return (
    <>
      <Modal 
        show={showModalAddBlog} 
        onHide={() => setShowModalAddBlog(false)}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm bài mới</Modal.Title>
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
  );
}

export default AddBlogModal;
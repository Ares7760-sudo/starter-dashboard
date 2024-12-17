const ViewDetailBlog = ({params}: {params: {blog_id: string}}) => {
    console.log("check param : ", params.blog_id)
    return (
        <div>
            Nội dung bài viết {params.blog_id}
        </div>
    )
}

export default ViewDetailBlog
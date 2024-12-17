const ViewDetailBlog = async ({params}: {params: {blog_id: string}}) => {
    const {blog_id} = await params
    console.log("check param : ", blog_id)

    const res = await fetch(`http://localhost:3002/api/blogs/${blog_id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json();
    return (
        <>
        <p>{data.content}</p>
        </>
    )

}

export default ViewDetailBlog
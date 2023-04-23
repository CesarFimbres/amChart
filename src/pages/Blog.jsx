import { Link, useLoaderData } from "react-router-dom";

export const Blog = () => {
    const { blogs, props } = useLoaderData();
    console.log(useLoaderData());
    console.log(props);
    console.log(blogs);

    return (
        <ul>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No blogs found</li>
            )}
        </ul>
    );
};

export const loaderBlogs = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await data.json();
    const props = {name:'Anna'}

    return { blogs, props };
};
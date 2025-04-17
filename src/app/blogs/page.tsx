import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const page = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
      cache:"no-store"  
      })
      const blogs: Blog[] = await res.json()
      console.log(blogs);
    return (
        <>
<div className="grid grid-cols-3 m-10">
{
    blogs.map(blog=><BlogCard key={blog.id} blog={blog}></BlogCard>)
}
</div>
</>
    );
};

export default page;
import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const page = async ({
  params,
}: {
  params: Promise<{ detailedblog: string }>;
}) => {
  const {detailedblog} = await params;
  const res = await fetch(`http://localhost:5000/blogs/${detailedblog}`);
  const blog = await res.json();
  console.log(blog);

  return <>
  <BlogDetailsCard key={blog.id} blog={blog}/>
  </>;
};

export default page;

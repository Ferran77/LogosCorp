import BlogDetails from "@/components/blogs/BlogDetails";
import DetailsBanner from "@/components/blogs/DetailsBanner";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import React from "react";

export const metadata = {
  title:
    "Blog Details || Factorix - Industrial & Factory React Nextjs Template",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page({ params }) {
  const blogItem =
    allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <Header1 />
      <DetailsBanner blogItem={blogItem} />
      <BlogDetails />
      <Footer1 />
    </>
  );
}

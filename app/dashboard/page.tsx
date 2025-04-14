import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/prisma/prisma"; // Import the Prisma Client instance
import { notFound } from "next/navigation";

import BlogPostCard from "@/components/general/BlogPostCard";

// The return type should be inferred, or you can use `any` if necessary
async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!data) return notFound();
  return data;
}

const Dashboard = async () => {
  const data = await getData();
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Your Blogs</h2>
        <Link href="/dashboard/create" className={buttonVariants()}>
          Create New Blog
        </Link>
      </div>
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <BlogPostCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

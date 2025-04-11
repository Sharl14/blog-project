import React from "react";
import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
  if (!data) {
    return notFound();
  }

  return data;
}
type Params = Promise<{ id: string }>;

const PostDetailsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="max-w-3xl mx-auto py-6">
      <Link
        href="/"
        className={buttonVariants({
          variant: "secondary",
        })}
      >
        Back to the post
      </Link>

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          {data.title}
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative size-8 overflow-hidden rounded-full">
              <Image
                src={data.authorImage}
                alt={data.authorName}
                fill
                className="object-cover"
              />
            </div>
            <p>{data.authorName}</p>
          </div>
          <p>{data.createdAt.toDateString()}</p>
        </div>
      </div>
      <div className="relative h-[400px] w-full mb-8">
        <Image
          src={data.imageUrl}
          alt={data.title}
          fill
          className="object-cover rounded-b-sm"
        />
      </div>
      <Card>
        <CardContent>
          <p>{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetailsPage;

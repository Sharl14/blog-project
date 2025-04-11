import React from "react";
import Link from "next/link";
import Image from "next/image";
interface blogPost {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
const BlogPostCard = ({ data }: blogPost) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
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
      </Link>
    </div>
  );
};

export default BlogPostCard;

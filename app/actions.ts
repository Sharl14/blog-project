"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export const handleSubmission = async (formData: FormData) => {
  const session = await auth();
  if (!session?.user) return;
  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");

  if (
    typeof title !== "string" ||
    typeof content !== "string" ||
    typeof url !== "string"
  ) {
    throw new Error("Invalid form submission");
  }

  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl: url,
      authorId: session.user.id ?? "",
      authorImage: session.user.image ?? "",
      authorName: session.user.name ?? "Anonymous",
    },
  });

  redirect("/dashboard");
};

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleSubmission } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";
const CreateBlog = () => {
  return (
    <div>
      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Create New Blog</CardTitle>
          <CardDescription>Fill the form to create a blog</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmission} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label>Title</Label>
              <Input name="title" type="text" placeholder="title" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Content</Label>
              <Textarea name="content" placeholder="Blog contet" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>ImageUrl</Label>
              <Input name="url" type="text" placeholder="Image Url" />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;

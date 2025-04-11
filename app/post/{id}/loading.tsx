import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const LoadingDetails = () => {
  return (
    <div className="max-w-3xl mx-auto py-6">
      <Skeleton className="w-[100px] h-[50px]" />;
      <div className="mb-8 mt-6">
        <Skeleton className="w-[400px] h-[50px]" />;
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative size-8 overflow-hidden rounded-full">
              <Skeleton className="w-[300px] h-[50px]" />;
            </div>
            <Skeleton className="w-[100px] h-[50px]" />;
          </div>
          <Skeleton className="w-[100px] h-[50px]" />;
        </div>
      </div>
      <div className="relative h-[400px] w-full mb-8">
        <Skeleton className="w-full h-[400px]" />;
      </div>
      <Skeleton className="w-[500px] h-[200px]" />;
    </div>
  );
};

export default LoadingDetails;

import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="min-h-screen w-full  flex sm:flex-row flex-col p-8 gap-4">
      <div className="h-[80vh]  w-1/2 p-4">
        <Skeleton className="h-full w-full rounded-xl" />
      </div>
      <div className="h-[80vh] w-1/2 p-4 flex flex-col gap-2">
        <Skeleton className="h-[20px] w-3/4 rounded-xl" />
        <Skeleton className="h-[18px] w-1/2 rounded-xl" />
        <Skeleton className="h-[18px] my-8 w-[40px] rounded-xl" />

        <Skeleton className="h-[12px] w-[100%] rounded-xl" />
        <Skeleton className="h-[12px] w-[91%] rounded-xl" />
        <Skeleton className="h-[12px] w-[98%] rounded-xl" />
        <Skeleton className="h-[12px] w-[67%] rounded-xl" />
      </div>
    </div>
  );
}

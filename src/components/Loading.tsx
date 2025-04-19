import React from "react";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader className="text-primary h-10 w-10 animate-spin" />
    </div>
  );
}

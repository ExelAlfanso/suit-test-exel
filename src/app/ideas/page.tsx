import { Suspense } from "react";
import IdeasClient from "./IdeasClient";

export default function IdeasPage() {
  return (
    <Suspense
      fallback={<div className="min-h-screen text-white">Loading...</div>}
    >
      <IdeasClient></IdeasClient>
    </Suspense>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <div>
        <h1>I am from dashboard</h1>;<button onClick={handleBack}>Back</button>
      </div>
      ;
    </>
  );
}

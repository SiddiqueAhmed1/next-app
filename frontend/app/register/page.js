"use client";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div>
        <h1>Register Please</h1>
        <Link href={"/login"}>Register</Link>
      </div>
    </>
  );
}

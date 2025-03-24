"use client";

export default function ClientComponent({ children }) {
  console.log("클라이언트 컴포넌트");
  return <div>{children}</div>;
}

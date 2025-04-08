"use client";
import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);
  const router = useRouter();

  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); //현재 페이지에 필요한 서버컴포넌트들을 다시 불러온다.
            reset(); //에러상태를 초기화
          });
        }}
      >
        다시시도
      </button>
    </div>
  );
}

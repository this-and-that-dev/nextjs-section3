"use client";

import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState, useEffect, useRef } from "react";

export default function ReviewItemDeleteButton({ reviewId, bookId }) {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null,
  );

  const formRef = useRef(null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input hidden readOnly value={reviewId} name="reviewId" />
      <input hidden readOnly value={bookId} name="bookId" />
      {isPending ? (
        "..."
      ) : (
        <div
          onClick={() => {
            formRef.current?.requestSubmit();
          }}
        >
          삭제하기
        </div>
      )}
    </form>
  );
}

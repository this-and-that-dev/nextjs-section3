import style from "./review-editor.module.css";
import createReviewAction from "@/actions/create-review.action";

export default function ReviewEditor({ bookId }) {
  return (
    <section>
      <form action={createReviewAction} className={style.form_container}>
        <input hidden value={bookId} readOnly name="bookId" />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}

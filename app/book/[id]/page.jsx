import style from "./page.module.css";
import { notFound } from "next/navigation";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function BookDetail({ bookId }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생하였습니다....</div>;
  }
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    await response.json();

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function ReviewList({ bookId }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
    {
      next: {
        tags: [`review-${bookId}`],
      },
    },
  );

  if (!response.ok) {
    throw new Error(`review fetch failed: ${response.statusText}`);
  }

  const reviews = await response.json();

  return (
    <section>
      {reviews.map((review) => {
        return <ReviewItem key={review.id} {...review} />;
      })}
    </section>
  );
}

export default async function Page({ params }) {
  const bookId = params.id;

  return (
    <div className={style.container}>
      <BookDetail bookId={bookId} />
      <ReviewEditor bookId={bookId} />
      <ReviewList bookId={bookId} />
    </div>
  );
}

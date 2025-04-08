"use server";
import { revalidatePath, revalidateTag } from "next/cache";

async function createReviewAction(formData) {
  const bookId = formData.get("bookId").toString();
  const content = formData.get("content").toString();
  const author = formData.get("author").toString();

  if (!content || !author) {
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ content, author, bookId }),
      },
    );
    console.log(response.status);
    // revalidatePath(`/book/${bookId}`);
    revalidateTag(`review-${bookId}`);
  } catch (err) {
    console.error(err);
    return;
  }
}

export default createReviewAction;

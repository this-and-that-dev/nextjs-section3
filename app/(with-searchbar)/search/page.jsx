import BookItem from "@/components/book-item";

export default async function Page({ searchParams }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`,
  );

  if (!response.ok) {
    return <div>오류가 발생하였습니다...</div>;
  }

  const searchBooks = await response.json();

  return (
    <div>
      {searchBooks &&
        searchBooks.map((book) => <BookItem key={book.id} {...book} />)}
    </div>
  );
}

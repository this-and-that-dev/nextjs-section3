import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Page({ searchParams }) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

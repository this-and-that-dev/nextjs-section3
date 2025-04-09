import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

export default async function Page({ params }) {
  return (
    <div>
      가로채기 성공!
      <Modal>
        <BookPage params={params} />
      </Modal>
    </div>
  );
}

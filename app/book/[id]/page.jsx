export default async function Page({ params }) {
  const q = await params;
  console.log(q);
  return <div>book/[{q.id}] page입니다.</div>;
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  console.log(params);
  return <div>Search 페이지 : {params.q}</div>;
}

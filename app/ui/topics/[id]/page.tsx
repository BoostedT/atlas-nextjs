export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  await new Promise((r) => setTimeout(r, 3000));

  return <div>Topic: {id}</div>;
}
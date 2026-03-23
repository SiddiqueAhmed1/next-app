export default async function ProjectDetailedPage({ params }) {
  const { id } = await params;
  return (
    <>
      <h1>params id: {id}</h1>
    </>
  );
}

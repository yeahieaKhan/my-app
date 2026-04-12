const blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log({ id });
  return (
    <div>
      <h1>We got a dynamic id {id}</h1>
    </div>
  );
};

export default blog;

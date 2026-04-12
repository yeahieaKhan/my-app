const blogs = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log({ id });
  return (
    <div>
      <h1>Catch all router ............ {id}</h1>
    </div>
  );
};

export default blogs;

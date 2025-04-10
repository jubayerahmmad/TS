const Song = ({ params }: { params: { id: string } }) => {
  return <div>song:{params.id}</div>;
};

export default Song;

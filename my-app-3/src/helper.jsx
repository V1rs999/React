function Helper(props) {
  const users = props.data;
  return (
    <>
      {users.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </>
  );
}
export default Helper;

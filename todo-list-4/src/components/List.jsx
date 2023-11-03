import Item from "./item.jsx";

export default function List({ tasks, setUnfinishedCount, unfinishedCount }) {
  return (
    <ul>
      {tasks.map((item) => (
        <Item
          key={item.id}
          {...item}
          setUnfinishedCount={setUnfinishedCount}
          unfinishedCount={unfinishedCount}
        />
      ))}
    </ul>
  );
}

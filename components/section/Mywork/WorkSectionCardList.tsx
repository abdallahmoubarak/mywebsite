export default function WorkSectionCardList({ list }: { list: any[] }) {
  return (
    <div>
      {list.map((item, i) => (
        <div key={i}>
          <div>{item.title}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
}

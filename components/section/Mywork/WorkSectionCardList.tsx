import WorkSectionCard from "./WorkSectionCard";

export default function WorkSectionCardList({ list }: { list: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 select-none py-4">
      {list.map((work, i) => (
        <WorkSectionCard key={i} work={work} />
      ))}
    </div>
  );
}

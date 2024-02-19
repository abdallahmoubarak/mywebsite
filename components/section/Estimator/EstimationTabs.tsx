export default function EstimationTabs({
  tab,
  setTab,
}: {
  tab: string;
  setTab: Function;
}) {
  return (
    <div className="flex">
      {tabs.map((item, i) => (
        <div
          key={i}
          className={`flex-auto px-4 py-2 cursor-pointer first-letter:capitalize ${
            item === tab
              ? "dark:text-black dark:bg-offwhite bg-slate-600 text-white"
              : ""
          }`}
          onClick={() => setTab(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}

const tabs = ["development", "marketing"];

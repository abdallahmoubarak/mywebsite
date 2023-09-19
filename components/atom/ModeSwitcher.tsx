import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

export default function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      {resolvedTheme === "light" ? (
        <div
          onClick={() => setTheme("dark")}
          className="text-3xl flex items-center justify-center w-9 h-9 rounded-md border border-blackgray cursor-pointer hover:dark:bg-blackgray ">
          <CiDark />
        </div>
      ) : (
        <div
          onClick={() => setTheme("light")}
          className="text-3xl flex items-center justify-center w-9 h-9 rounded-md border border-blackgray cursor-pointer  hover:bg-blackgray ">
          <CiLight />
        </div>
      )}
    </>
  );
}

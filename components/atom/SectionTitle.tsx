export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-xl lg:text-3xl py-2">{children}</h1>;
}

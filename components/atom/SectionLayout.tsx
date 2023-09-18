export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lg:px-12 lg:py-4 px-4 py-8">{children}</div>;
}

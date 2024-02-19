export default function EstimationItem({
  service,
  setServices,
}: {
  service: any;
  setServices: Function;
}) {
  return (
    <div>
      <div className="py-3 flex justify-between">
        <div className="flex gap-2">
          <div className="text-2xl">{service.icon}</div>
          <div className="text-xl">{service.title}</div>
        </div>
        <input
          type="number"
          value={service.value}
          className="px-2 w-12 border rounded-md"
          onChange={(e) =>
            Number(e.target.value) >= 0 &&
            Number(e.target.value) <= service.max &&
            setServices((services: any) =>
              Object({
                ...services,
                [service.name]: { ...service, value: e.target.value },
              }),
            )
          }
        />
      </div>
      <input
        type="range"
        value={service?.value}
        min={0}
        max={service.max}
        className="w-full"
        onChange={(e) =>
          setServices((services: any) =>
            Object({
              ...services,
              [service.name]: { ...service, value: e.target.value },
            }),
          )
        }
      />
    </div>
  );
}

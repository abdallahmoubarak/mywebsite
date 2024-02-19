import SectionLayout from "@/components/atom/SectionLayout";
import {
  MdBrandingWatermark,
  MdDesignServices,
  MdFeaturedVideo,
} from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt, FaNetworkWired } from "react-icons/fa";
import { useEffect, useState } from "react";
import EstimationItem from "./EstimationItem";
import EstimationTabs from "./EstimationTabs";

export default function Estimator() {
  const [tab, setTab] = useState("development");
  const [services, setServices] = useState(items);
  const [total, setTotal] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(
    currancy.filter((c) => c.name === "USD")[0],
  );

  useEffect(() => {
    const itemList = Object.values(services);
    const values: string[] = itemList.map((item) =>
      item.value ? item.value.toString() : "0",
    );
    const rates = itemList.map((item) => item.rate);

    const ratesIndx = rates.map((rate: any, k) => {
      const rateIndexes = Object.keys(rate);
      for (var indx in rateIndexes) {
        if (parseInt(rateIndexes[indx], 0) >= parseInt(values[k], 0)) {
          return rate[rateIndexes[indx]] * parseInt(values[k], 0);
        }
      }
      return 0;
    });

    const totalCalc = ratesIndx.reduce((a: number, b: any) => a + b, 0);
    setTotal(Math.round(currentCurrency.rate * totalCalc));
  }, [services, setServices, currentCurrency]);

  useEffect(() => {
    setServices(items);
  }, [tab]);

  return (
    <div>
      <div className="text-center text-xl py-6">Project Cost Estimator</div>
      <SectionLayout>
        <div className="max-w-lg bg-white dark:bg-transparent mx-auto rounded-xl border overflow-hidden">
          <EstimationTabs setTab={setTab} tab={tab} />
          <div className="py-2 px-6 border-y">
            <div className="">
              {Object.values(services)
                ?.filter((service) => service.category === tab)
                .map((service, i) => (
                  <EstimationItem
                    key={i}
                    service={service}
                    setServices={setServices}
                  />
                ))}
            </div>
          </div>
          <div className="flex gap-4 p-4">
            Select Currancy:
            <select
              className="text-xl"
              onChange={(e) =>
                setCurrentCurrency(
                  currancy.filter((c) => c.name === e.target.value)[0],
                )
              }>
              {Object.values(currancy)?.map((curranci: any, i) => (
                <option key={i} value={curranci.name}>
                  <div>{curranci.flag}</div> <div>{curranci.name}</div>
                </option>
              ))}
            </select>
          </div>
          <div className="py-4 text-center text-2xl">Total</div>
          <div className="pb-4 text-center text-2xl">
            {Math.round(total - total * 0.1)}
            {total ? ` - ${total} ` : " "}
            <span className="text-md">{currentCurrency.syb}</span>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}

export const items = {
  brand: {
    name: "brand",
    title: "Branding System",
    icon: <MdBrandingWatermark />,
    category: "marketing",
    max: 3,
    value: 0,
    types: ["No Need", "Small Business", "Medium Business", "Pro"],
    rate: { "1": 400, "2": 1200, "3": 2600 },
  },
  post: {
    name: "post",
    title: "Post Design",
    icon: <MdDesignServices />,
    category: "marketing",
    max: 50,
    value: 0,
    rate: { "8": 30, "12": 28, "51": 26 },
  },
  uiux: {
    name: "uiux",
    title: "UX/UI (Interface)",
    icon: <MdDesignServices />,
    category: "development",
    max: 50,
    value: 0,
    rate: { "8": 120, "12": 110, "51": 100 },
  },
  website: {
    name: "website",
    title: "Website (Page)",
    icon: <CgWebsite />,
    category: "marketing",
    max: 30,
    value: 0,
    rate: { "8": 260, "12": 320, "31": 440 },
  },
  landing: {
    name: "landing",
    title: "Landing Page",
    icon: <CgWebsite />,
    category: "marketing",
    max: 1,
    value: 0,
    rate: { "1": 1200 },
  },
  app: {
    name: "app",
    title: "Application (Page)",
    icon: <FaMobileAlt />,
    category: "development",
    max: 50,
    value: 0,
    rate: { "8": 220, "12": 340, "30": 360, "51": 380 },
  },
  system: {
    name: "system",
    title: "Sub-System (Schema)",
    icon: <FaNetworkWired />,
    category: "development",
    max: 50,
    value: 0,
    rate: { "8": 320, "12": 440, "20": 460, "51": 480 },
  },
  feature: {
    name: "feature",
    title: "Feature",
    icon: <MdFeaturedVideo />,
    category: "development",
    max: 12,
    value: 0,
    rate: { "3": 620, "13": 900 },
  },
};

const currancy = [
  { flag: "🇺🇸", rate: 1, syb: "$", name: "USD" },
  { flag: "🇦🇪", rate: 3.67, syb: "AED", name: "AED" },
  { flag: "🇴🇲", rate: 0.3, syb: "OMR", name: "OMR" },
];

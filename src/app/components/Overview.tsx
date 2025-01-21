import { homes } from "@/lib/utils";
import OverviewItem from "./OverviewItem";

export default function Overview() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homes.map((home) => (
            <OverviewItem
              key={home.id}
              title={home.title}
              image={home.image}
              description={home.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

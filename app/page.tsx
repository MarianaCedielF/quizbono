import properties from "@/data/properties.json";
import PropertyCard from "@/components/propertyCard";
import { Property } from "@/lib/types";

type RawProperty = Omit<Property, "id">;

export default function HomePage() {
  const typedProperties: Property[] = (properties as RawProperty[]).map(
    (property, index) => ({
      ...property,
      id: index + 1,
    })
  );

  return (
    <main className="page-shell">
      <div className="container">
        <header className="topbar">
          <div className="brand">
            <span className="brand-badge">Premium Real Estate</span>
            <h2>EstateHub</h2>
            <p>Modern property browsing experience</p>
          </div>
        </header>

        <div className="section-title">
          <h2>Available Properties</h2>
          <p>Click on any card to view full details</p>
        </div>

        <section className="grid">
          {typedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </section>
      </div>
    </main>
  );
}
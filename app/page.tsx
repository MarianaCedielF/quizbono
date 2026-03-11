import properties from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/lib/types";

export default function HomePage() {
  const typedProperties = properties as Property[];

  return (
    <main className="container">
      <section className="hero">
        <h1>Property Listings</h1>
        <p>
          Explore available properties and view detailed information for each one.
        </p>
      </section>

      <section className="grid">
        {typedProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </main>
  );
}
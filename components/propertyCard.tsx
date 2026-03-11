import Link from "next/link";
import { Property } from "@/lib/types";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} className="property-card">
      <div>
        <h2>{property.propertyName}</h2>
        <p className="city">{property.city}</p>
        <p className="price">{property.price}</p>

        <div className="property-info">
          <span>🛏 {property.rooms} rooms</span>
          <span>🛁 {property.baths} baths</span>
          <span>{property.garage ? "🚗 Garage" : "❌ No garage"}</span>
        </div>

        <p className="address">{property.address}</p>
      </div>
    </Link>
  );
}
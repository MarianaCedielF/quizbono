import Link from "next/link";
import { Property } from "@/lib/types";

type PropertyCardProps = {
  property: Property;
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} className="property-card">
      <div className="property-card-top">
        <div>
          <h2>{property.propertyName}</h2>
          <span className="city-badge">{property.city}</span>
        </div>

        <p className="price">{property.price}</p>
      </div>

      <div className="property-meta">
        <div className="meta-box">
          <strong>{property.rooms}</strong>
          <span>Rooms</span>
        </div>

        <div className="meta-box">
          <strong>{property.baths}</strong>
          <span>Baths</span>
        </div>

        <div className="meta-box">
          <strong>{property.garage ? "Yes" : "No"}</strong>
          <span>Garage</span>
        </div>
      </div>

      <p className="address">{property.address}</p>

      <div className="card-footer">
        <span className="view-more">View details →</span>
      </div>
    </Link>
  );
}
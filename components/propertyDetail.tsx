import { Property } from "@/lib/types";

type PropertyDetailProps = {
  property: Property;
};

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="detail-card">
      <div className="detail-header">
        <div>
          <h1>{property.propertyName}</h1>
          <span className="city-badge">{property.city}</span>
        </div>

        <p className="price">{property.price}</p>
      </div>

      <div className="detail-grid">
        <div className="detail-section">
          <h3>Property Information</h3>
          <div className="detail-list">
            <div className="detail-item">
              <span className="detail-label">Rooms</span>
              <span className="detail-value">{property.rooms}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Baths</span>
              <span className="detail-value">{property.baths}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Garage</span>
              <span className="detail-value">
                {property.garage ? "Available" : "Not available"}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Floor</span>
              <span className="detail-value">{property.floor}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Address</span>
              <span className="detail-value">{property.address}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>Owner Contact</h3>
          <div className="detail-list">
            <div className="detail-item">
              <span className="detail-label">Owner</span>
              <span className="detail-value">{property.fullName}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <span className="detail-value">{property.phone}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">{property.email}</span>
            </div>
          </div>
        </div>

        <div className="detail-section full-width">
          <h3>Coordinates</h3>
          <div className="detail-list">
            <div className="detail-item">
              <span className="detail-label">Latitude</span>
              <span className="detail-value">{property.latitute}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Longitude</span>
              <span className="detail-value">{property.longitude}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
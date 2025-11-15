export class AvailabeDriverResponseDto {
  driverName: string;
  vehicleType: string;
  location: { lat: number; lng: number };
  priceEstimate: string;
  etaMinutes: number;
}
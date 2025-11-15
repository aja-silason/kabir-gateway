export class AvailabeDriverResponseDto {
  driverName: string;
  vehicleType: { type: string, plate: string};
  location: { lat: number; lng: number };
  priceEstimate: string;
  etaMinutes: number;
}
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { Driver, DriverProps } from "src/domain/driver/model/driver.model";
import { CustomNotFound } from "src/domain/exception/CustomNotFound";

@Injectable()
export class ListAvailableDriversUsecase {

    async execute(): Promise<Driver[]>{

        const res = await axios.get('http://localhost:4000/txkabir/drivers');

        const drivers = res.data;

        if(!drivers.length) {
            throw new CustomNotFound("Resource not found");
        }

        const result: Driver[] = drivers.map((d: DriverProps) => {

            const transform: DriverProps = {
                driverName: d.driverName,
                vehicleType: {type: d.vehicleType.type, plate: d.vehicleType.plate},
                location: { lat: d.location.lat, lng: d.location.lng },
                priceEstimate: (Math.random() * 5 + 2).toFixed(2),
                etaMinutes: Math.floor(Math.random() * 10) + 2
            }

            return new Driver(transform);

        })

        return result;

    }

}
import { Injectable } from "@nestjs/common";
import axios from "axios";
import { Driver, DriverProps } from "src/domain/driver/model/driver.model";
import { DriverProtocol } from "src/domain/driver/protocol/driver.protocol";
// import { LogRepository } from "src/infra/repository/driver/log.repository";

@Injectable()
export class listAvailableDriversUsecase {

    constructor(
        // private logRepo: LogRepository
    ){}

    async execute(): Promise<Driver[]>{

        const res = await axios.get('http://localhost:4000/txkabir/drivers');

        const drivers = res.data;

        const result: Driver[] = drivers.map((d: DriverProps) => {

            const transform: DriverProps = {
                driverName: d.driverName,
                vehicleType: d.vehicleType,
                location: { lat: d.location.lat, lng: d.location.lng },
                priceEstimate: (Math.random() * 5 + 2).toFixed(2),
                etaMinutes: Math.floor(Math.random() * 10) + 2
            }

            return new Driver(transform);

        })

        // await this.logRepo.create("/available-drivers");

        return result;

    }

}
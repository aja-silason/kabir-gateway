interface Location {
    lat: number,
    lng: number
}

export type DriverProps = {
    driverName: string,
    vehicleType: string,
    location: Location,
    priceEstimate: string,
    etaMinutes: number,
}

export class Driver {

    constructor( private props: DriverProps ){}

    public static create(props: DriverProps) {
        return new Driver({...props});
    }

    public get allProps(){
        return this.props;
    }

}
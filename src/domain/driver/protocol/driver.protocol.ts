export abstract class DriverProtocol {
    abstract findAll(): Promise<any[]>;
}
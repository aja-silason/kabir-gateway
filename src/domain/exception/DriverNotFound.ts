import { HttpException, HttpStatus } from "@nestjs/common";
import { HttpStatusCode } from "axios";

export class DriverNotFoundException extends HttpException {

    constructor(message: string){
        super(message, HttpStatus.NOT_FOUND);
    }

}
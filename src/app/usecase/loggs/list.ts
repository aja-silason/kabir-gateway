import { Injectable } from "@nestjs/common";
import { CustomNotFound } from "src/domain/exception/CustomNotFound";
import { LoggsProtocol } from "src/domain/logs/protocol/logs.protocol";

@Injectable()
export class ListLoggsUsecase {

    constructor(
        private readonly protocol: LoggsProtocol
    ){}

    async execute(): Promise<any[]> {

        const logg = await this.protocol.findAll();

         if(!logg.length) {
            throw new CustomNotFound("Resource not found");
        }

        return logg;

    }

}
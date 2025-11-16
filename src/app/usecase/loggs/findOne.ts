import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";
import { CustomNotFound } from "src/domain/exception/CustomNotFound";
import { LoggsProtocol } from "src/domain/logs/protocol/logs.protocol";

@Injectable()
export class FindOneLoggsUsecase {

    constructor(
        private readonly protocol: LoggsProtocol
    ){}

    async execute(id: UUID): Promise<any[]> {

        const logg = await this.protocol.findOne(id);

         if(!logg) {
            throw new CustomNotFound("Resource not found");
        }

        return logg;

    }

}
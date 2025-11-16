import { Injectable } from "@nestjs/common";
import { CustomNotFound } from "src/domain/exception/CustomNotFound";
import { LoggsEntity } from "src/domain/logs/entity/logs.entity";
import { LoggsProtocol } from "src/domain/logs/protocol/logs.protocol";

@Injectable()
export class FindOneLoggsUsecase {

    constructor(
        private readonly protocol: LoggsProtocol
    ){}

    async execute(id: string): Promise<LoggsEntity[]> {

        const logg = await this.protocol.findOne(id);

         if(!logg) {
            throw new CustomNotFound("Resource not found");
        }

        return logg;

    }

}
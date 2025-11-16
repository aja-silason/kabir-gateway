import { Injectable } from "@nestjs/common";
import { LoggsProtocol } from "src/domain/logs/protocol/logs.protocol";
import { LoggsDto } from "src/infra/http/logs/dto/LoggsDto";
import * as os from 'os';

@Injectable()
export class GenerateLoggUsecase {

    constructor(
        private readonly protocol: LoggsProtocol
    ) {}

    async execute(): Promise<void>{

        const id = crypto.randomUUID();

        const ip = this.getLocalIP();

        const res = new LoggsDto(id, "/asdf", ip);

        this.protocol.create(res)

    }

    private getLocalIP(): string {
        const nets = os.networkInterfaces();

        for (const name of Object.keys(nets)) {
        for (const net of nets[name]!) {
            if (net.family === 'IPv4' && !net.internal) {
            return net.address;
            }
        }
        }

        return '0.0.0.0';
    }

}
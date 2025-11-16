import { Injectable } from "@nestjs/common";
import { LoggsProtocol } from "src/domain/logs/protocol/logs.protocol";
import { LoggsDto } from "src/infra/http/logs/dto/LoggsDto";
import * as os from 'os';
import { LoggMetadata } from "src/infra/http/logs/dto/LoggMetadata";
import { Request } from "express";

@Injectable()
export class GenerateLoggUsecase {

    constructor(
        private readonly protocol: LoggsProtocol
    ) {}

    async execute(req: Request): Promise<void>{

        const id = crypto.randomUUID();

        const startRequest = Date.now();

        const responseTime = Date.now() - startRequest;

        const request: LoggMetadata = {
            route: req.originalUrl,
            deviceIp: this.getLocalIP(),
            method: req.method,
            queryParams: req.query,
            responseTimeMs: responseTime,
            userAgent: req.headers['user-agent']
        }

        const res = new LoggsDto(id, request);

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
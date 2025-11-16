import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class ApiGuard implements CanActivate {

    private validationApiKey = '123456789'

    canActivate(context: ExecutionContext): boolean {
        const req = context.switchToHttp().getRequest<Request>();

        let apiKey = req.headers['x-api-key'] as string | undefined;

        if (!apiKey && req.headers['authorization']) {
            const authHeader = req.headers['authorization'] as string;
            apiKey = authHeader.replace(/^Bearer\s+/i, '');    
        }

        if(apiKey?.trim() === this.validationApiKey) {
            console.log(apiKey);
            return true;
        }
        
        throw new UnauthorizedException('Invalid API key');
    }

}
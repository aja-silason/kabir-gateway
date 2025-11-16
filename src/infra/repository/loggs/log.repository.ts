import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoggsEntity } from "src/domain/logs/entity/logs.entity";
import { LoggsProtocol } from "src/domain/logs/protocol/logs.protocol";
import { LoggsDto } from "src/infra/http/logs/dto/LoggsDto";
import { Repository } from "typeorm";

@Injectable()
export class TypeORMLoggsRepository implements LoggsProtocol {

    constructor(
        @InjectRepository(LoggsEntity)
        private readonly repository: Repository<LoggsEntity>
    ){}

    async create(input: LoggsDto): Promise<void> {
        
        const aLogg = this.repository.create(input);
        
        await this.repository.save(aLogg);

    }

    async findAll(): Promise<LoggsEntity[]> {

        return await this.repository.find();
        
    }

    async findOne(id: string): Promise<LoggsEntity> {
        
        const aLogg = await this.repository.findOne({where: {id: id}});

        if(!aLogg) throw new NotFoundException("Loggs not available")

        return aLogg;


    }

}
import { PartialType } from '@nestjs/swagger';
import { CreateAvailableDriverDto } from './create-available-driver.dto';

export class UpdateAvailableDriverDto extends PartialType(CreateAvailableDriverDto) {}

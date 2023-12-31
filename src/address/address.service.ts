import { Injectable } from "@nestjs/common";
import { AddressEntity } from "./entities/address.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAddressDto } from "./dtos/createAddress.dto";
import { UserService } from "../user/user.service";
import { CityService } from "../city/city.service";

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly adressRepository: Repository<AddressEntity>,
    private readonly userService: UserService,
    private readonly cityService: CityService
  ) {}
  async createAddress(createAddressDto: CreateAddressDto, userId: number): Promise<AddressEntity> {
    await this.userService.findUserById(userId)
    await this.cityService.findCityById(createAddressDto.cityId)
    return this.adressRepository.save({
      ...createAddressDto,
      userId,
    });
  }
}

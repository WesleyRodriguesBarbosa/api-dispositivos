import repository from "../repositories/deviceRepository.js";

import CreateDeviceDTO from "../dto/CreateDeviceDTO.js";
import UpdateDeviceDTO from "../dto/UpdateDeviceDTO.js";
import DeviceResponseDTO from "../dto/DeviceResponseDTO.js";

import BadRequestException from "../exceptions/BadRequestException.js";
import NotFoundException from "../exceptions/NotFoundException.js";
import ConflictException from "../exceptions/ConflictException.js";

class DeviceService {

  async create(data) {

    if (!data.name)
      throw new BadRequestException("Nome obrigatório");

    if (typeof data.pin !== "number")
      throw new BadRequestException("Pin inválido");

    const pinExists =
      await repository.findByPin(data.pin);

    if (pinExists)
      throw new ConflictException(
        "Pin já cadastrado"
      );

    const dto = new CreateDeviceDTO(data);

    const device =
      await repository.save(dto);

    return new DeviceResponseDTO(device);
  }

  async findAll() {

    const devices =
      await repository.findAll();

    return devices.map(
      device =>
        new DeviceResponseDTO(device)
    );
  }

  async findById(id) {

    const device =
      await repository.findById(id);

    if (!device)
      throw new NotFoundException(
        "Dispositivo não encontrado"
      );

    return new DeviceResponseDTO(device);
  }

  async update(id, data) {

  const dto = new UpdateDeviceDTO(data);

  if (dto.pin) {
    const existingPin =
      await repository.findByPin(dto.pin);

    if (
      existingPin &&
      existingPin._id.toString() !== id
    ) {
      throw new ConflictException(
        "Pin já está em uso"
      );
    }
  }

  const device =
    await repository.update(id, dto);

  if (!device) {
    throw new NotFoundException(
      "Dispositivo não encontrado"
    );
  }

  return new DeviceResponseDTO(device);
}
 
  async delete(id) {

    const device =
      await repository.delete(id);

    if (!device)
      throw new NotFoundException(
        "Dispositivo não encontrado"
      );
  }
}

export default new DeviceService();
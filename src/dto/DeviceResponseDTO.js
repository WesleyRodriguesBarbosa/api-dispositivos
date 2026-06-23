export default class DeviceResponseDTO {

  constructor(device) {
    this.id = device._id;
    this.name = device.name;
    this.pin = device.pin;
    this.status = device.status;
  }
}
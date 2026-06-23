export default class CreateDeviceDTO {
  constructor({ name, pin, status }) {
    this.name = name;
    this.pin = pin;
    this.status = status ?? false;
  }
}
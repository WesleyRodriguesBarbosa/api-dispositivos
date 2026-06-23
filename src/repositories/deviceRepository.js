import Device from "../models/Device.js";

class DeviceRepository {

  async save(device) {
    return Device.create(device);
  }

  async findAll() {
    return Device.find();
  }

  async findById(id) {
    return Device.findById(id);
  }

  async findByPin(pin) {
    return Device.findOne({ pin });
  }

  async update(id, data) {
    return Device.findByIdAndUpdate(
      id,
      data,
      { returnDocument: "after" }
    );
  }

  async delete(id) {
    return Device.findByIdAndDelete(id);
  }
}

export default new DeviceRepository();
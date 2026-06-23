import service from "../services/deviceServices.js";

class DeviceController {

  async create(req, res, next) {
    try {
      const result =
        await service.create(req.body);

      return res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      return res.json(
        await service.findAll()
      );
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      return res.json(
        await service.findById(req.params.id)
      );
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      return res.json(
        await service.update(
          req.params.id,
          req.body
        )
      );
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await service.delete(req.params.id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default new DeviceController();
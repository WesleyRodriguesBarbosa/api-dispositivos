import express from "express";
import controller from "../controllers/deviceController.js";

const router = express.Router();

/**
 * @swagger
 * /devices:
 *   get:
 *     summary: Lista todos os dispositivos
 *     tags: [Devices]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/", controller.findAll);

/**
 * @swagger
 * /devices/{id}:
 *   get:
 *     summary: Busca dispositivo por ID
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Não encontrado
 */
router.get("/:id", controller.findById);

/**
 * @swagger
 * /devices:
 *   post:
 *     summary: Cria um dispositivo
 *     tags: [Devices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/DeviceDTO"
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post("/", controller.create);

/**
 * @swagger
 * /devices/{id}:
 *   put:
 *     summary: Atualiza dispositivo
 *     tags: [Devices]
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/DeviceDTO"
 *
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/DeviceResponse"
 *       404:
 *         description: Não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorResponse"
 */
router.put("/:id", controller.update);

/**
 * @swagger
 * /devices/{id}:
 *   delete:
 *     summary: Remove dispositivo
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Removido com sucesso
 */
router.delete("/:id", controller.delete);

export default router;
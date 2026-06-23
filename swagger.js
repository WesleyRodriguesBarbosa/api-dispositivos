import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Dispositivos IoT",
      version: "1.0.0",
      description: "API com Node.js + MongoDB + DTO + Swagger"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
    components: {
      schemas: {
        DeviceDTO: {
          type: "object",
          required: ["name", "pin"],
          properties: {
            name: {
              type: "string",
              example: "Led Sala"
            },
            pin: {
              type: "integer",
              example: 23
            },
            status: {
              type: "boolean",
              example: true
            }
          }
        },

        DeviceResponse: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "69eff2a7b57685b23e671146"
            },
            name: {
              type: "string",
              example: "Led Sala"
            },
            pin: {
              type: "integer",
              example: 23
            },
            status: {
              type: "boolean",
              example: true
            }
          }
        },

        ErrorResponse: {
          type: "object",
          properties: {
            timestamp: {
              type: "string",
              example: "2026-06-21T10:00:00.000Z"
            },
            status: {
              type: "integer",
              example: 404
            },
            error: {
              type: "string",
              example: "NotFoundException"
            },
            message: {
              type: "string",
              example: "Dispositivo não encontrado"
            }
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
};

export default swaggerJsdoc(options);
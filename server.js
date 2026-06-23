import dotenv from "dotenv";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

await connectDB();

app.listen(3000, "0.0.0.0", () => {
  console.log(
    "Servidor rodando na porta 3000"
  );

  console.log(
    "Swagger: http://localhost:3000/api-docs"
  );
});
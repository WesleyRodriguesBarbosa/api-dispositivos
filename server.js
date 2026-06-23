import dotenv from "dotenv";

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

await connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

  console.log(
    "Swagger: http://localhost:3000/api-docs"
  );

import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Rota principal
app.get("/api", (req: Request, res: Response) => {
  res
    .status(200)
    .send({
      mensagem:
        "A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris."
    });
});

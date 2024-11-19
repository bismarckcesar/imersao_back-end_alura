import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5555;
const API_KEY_GEMINI = process.env.API_GEMINI || "";

async function geradorConteudo(prompt: string) {
  const genAi = new GoogleGenerativeAI(API_KEY_GEMINI);
  const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  const { response } = await model.generateContent(prompt);
  return response;
}
// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({
    mensagem:
      "A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris."
  });
});

app.post("/gemini", async (req: Request, res: Response) => {
  try {
    const { mensagem } = req.body;
    if (!mensagem) {
      res.status(400).send({ mensagem: "A mensagem é obrigatória." });
    }
    const data = await geradorConteudo(mensagem);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

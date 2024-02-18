import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('My serversss!');
});

app.get('/champions', async (req: Request, res: Response) => {
  const allChampions = await prisma.champion.findMany();
  res.json(allChampions);
})

app.post('/champions', async(req: Request, res: Response) => {
  // Extract the data from the request body
  console.log(req);
  const { name, health, mana, healthRegen, manaRegen } = req.body;

  // Do some validation on the data
  if (!name || !health || !mana || !healthRegen || !manaRegen) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const result = await prisma.champion.create(
    {
      data: {
        name,
        health,
        mana,
        healthRegen,
        manaRegen
      }
    }
  )
  res.json(result)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
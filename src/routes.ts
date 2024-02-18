import { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("My serversss!");
  });

  app.get("/api/champions", async (req: Request, res: Response) => {
    const allChampions = await prisma.champion.findMany();
    res.json(allChampions);
  });

  app.post("/api/champions", async (req: Request, res: Response) => {
    // Extract the data from the request body
    console.log(req);
    const { name, health, mana, healthRegen, manaRegen } = req.body;

    // Do some validation on the data
    if (!name || !health || !mana || !healthRegen || !manaRegen) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await prisma.champion.create({
      data: {
        name,
        health,
        mana,
        healthRegen,
        manaRegen,
      },
    });
    res.json(result);
  });
};

export default routes;

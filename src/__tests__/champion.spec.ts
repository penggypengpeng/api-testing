import supertest from "supertest";
import createServer from "../utils/server";
import { beforeEach } from "node:test";
import { prisma } from "../routes";

const app = createServer();

describe("Champion", () => {
    describe("get champions", () => {
        describe("given a couple of champions exist", () => {
            beforeEach(async () => {
                await prisma.champion.create({
                    data: {
                        name: "Fiddle",
                        health: 100,
                        mana: 100,
                        healthRegen: 5,
                        manaRegen: 5,
                    },
                });

                await prisma.champion.create({
                    data: {
                        name: "Teemo",
                        health: 100,
                        mana: 100,
                        healthRegen: 5,
                        manaRegen: 5,
                    },
                });
            });

            afterEach(async () => {
                await prisma.champion.deleteMany({});
            });

            it("should return those champions", async () => {
                const res = await supertest(app).get("/api/champions");

                expect(res.statusCode).toBe(200);
                console.log(res.body);
                expect(res.body.length).toBe(2);
            });
        });
    });
});

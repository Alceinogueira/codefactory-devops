const request = require("supertest");
const app = require("../src/app");

describe("CodeFactory DevOps API", () => {

    test("GET / deve retornar status 200", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
    });

    test("GET /health deve retornar status OK", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
    });

});
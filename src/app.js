const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        projeto: "CodeFactory DevOps",
        status: "online",
        mensagem: "Aplicação funcionando corretamente!"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

module.exports = app;
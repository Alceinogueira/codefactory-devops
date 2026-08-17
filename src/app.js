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

app.get("/info", (req, res) => {
    res.json({
        projeto: "CodeFactory DevOps",
        versao: "1.0.0",
        ambiente: "desenvolvimento",
        tecnologia: "Node.js + Express"
    });
});

module.exports = app;
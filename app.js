const express = require('express');
const app = express();

app.use("/home", (req,res) => {
    return res.json({
        error: false,
        mensage: "Informações da página home",
    });
});

app.listen(8080,() => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});
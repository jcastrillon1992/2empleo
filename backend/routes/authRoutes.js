// routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Ruta temporal para evitar errores
router.get("/", (req, res) => {
  res.send("Auth route funcionando...");
});

module.exports = router;


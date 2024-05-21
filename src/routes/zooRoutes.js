const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Route to add a new zoo
router.post('/add-zoo', async (req, res) => {
  const { name, location } = req.body;
  const newZoo = await prisma.zoo.create({
    data: { name, location },
  });
  res.json(newZoo);
});

// Route to delete a zoo by ID
router.delete('/delete-zoo/:id', async (req, res) => {
  const { id } = req.params;
  const deletedZoo = await prisma.zoo.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedZoo);
});

module.exports = router;

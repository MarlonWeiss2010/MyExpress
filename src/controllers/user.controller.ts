import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Serverfehler beim Abrufen der Benutzer" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Benutzer konnte nicht erstellt werden" });
  }
};

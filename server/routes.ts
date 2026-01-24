import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertDemoRequestSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.status(201).json(contact);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact submission" });
    }
  });

  app.post("/api/demo", async (req, res) => {
    try {
      const data = insertDemoRequestSchema.parse(req.body);
      const demo = await storage.createDemoRequest(data);
      res.status(201).json(demo);
    } catch (error) {
      res.status(400).json({ error: "Invalid demo request" });
    }
  });

  return httpServer;
}

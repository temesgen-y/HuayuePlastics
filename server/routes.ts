import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendToTelegram } from "./telegram";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication routes
  setupAuth(app);

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Save to database
      const contact = await storage.createContact(validatedData);
      
      // Send to Telegram
      const telegramSent = await sendToTelegram(validatedData as any);
      
      if (!telegramSent) {
        console.warn('Failed to send contact form to Telegram');
      }
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        message: "Invalid form data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get all contacts (admin only)
  app.get("/api/contacts", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    storage.getContacts()
      .then(contacts => res.json(contacts))
      .catch(error => {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ message: "Internal server error" });
      });
  });

  // Mark contact as read (admin only)
  app.patch("/api/contacts/:id/read", async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    try {
      const id = parseInt(req.params.id);
      await storage.markContactAsRead(id);
      res.json({ message: "Contact marked as read" });
    } catch (error) {
      console.error('Error marking contact as read:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

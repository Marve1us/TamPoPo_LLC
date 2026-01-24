import { type Contact, type InsertContact, type DemoRequest, type InsertDemoRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createDemoRequest(demo: InsertDemoRequest): Promise<DemoRequest>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private demoRequests: Map<string, DemoRequest>;

  constructor() {
    this.contacts = new Map();
    this.demoRequests = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createDemoRequest(insertDemo: InsertDemoRequest): Promise<DemoRequest> {
    const id = randomUUID();
    const demo: DemoRequest = { 
      ...insertDemo,
      message: insertDemo.message ?? null,
      id,
      createdAt: new Date()
    };
    this.demoRequests.set(id, demo);
    return demo;
  }
}

export const storage = new MemStorage();

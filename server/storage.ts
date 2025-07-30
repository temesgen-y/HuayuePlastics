import { storage as memoryStorage } from "./db";
import session from "express-session";

// Use a simple in-memory store for development, but this won't work well in serverless
// In production, you should use a proper session store like Redis or database-backed store
export interface IStorage {
  createContact(data: any): Promise<any>;
  getContacts(): Promise<any[]>;
  markContactAsRead(id: number): Promise<void>;
  getUser(id: number): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(insertUser: any): Promise<any>;
}

export class Storage implements IStorage {
  getSessionStore() {
    // For serverless environments, we'll use a simple memory store
    // but sessions won't persist between function invocations
    // In production, use Redis or a database-backed session store
    return new session.MemoryStore();
  }

  async getUser(id: number): Promise<any | undefined> {
    return memoryStorage.users.find((user: any) => user.id === id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return memoryStorage.findUserByUsername(username);
  }

  async createUser(insertUser: any): Promise<any> {
    const user = {
      id: memoryStorage.users.length + 1,
      ...insertUser
    };
    memoryStorage.users.push(user);
    return user;
  }

  async createContact(data: any): Promise<any> {
    return memoryStorage.createContact(data);
  }

  async getContacts(): Promise<any[]> {
    return memoryStorage.getContacts();
  }

  async markContactAsRead(id: number): Promise<void> {
    return memoryStorage.markContactAsRead(id);
  }
}

export const storage = new Storage();
import { storage as memoryStorage } from "./db";
import session from "express-session";
import MemoryStore from "memorystore";

const MemoryStoreSession = MemoryStore(session);

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
    return new MemoryStoreSession({
      max: 500, // Maximum number of sessions to store
      ttl: 86400000, // 1 day in milliseconds
      checkPeriod: 86400000 // prune expired entries every 24h
    });
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
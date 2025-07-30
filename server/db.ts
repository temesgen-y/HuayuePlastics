// Simple in-memory storage - no database required
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

// In-memory storage
export const contacts: Contact[] = [];
export const users: User[] = [
  {
    id: 1,
    username: "admin",
    email: "admin@huayueplastics.com",
    password: "admin123" // In production, this should be hashed
  }
];

let nextContactId = 1;

// Simple storage functions
export const storage = {
  users, // Export users array
  contacts, // Export contacts array
  
  async createContact(data: Omit<Contact, 'id' | 'read' | 'createdAt'>): Promise<Contact> {
    const contact: Contact = {
      id: nextContactId++,
      ...data,
      read: false,
      createdAt: new Date()
    };
    contacts.push(contact);
    return contact;
  },

  async getContacts(): Promise<Contact[]> {
    return [...contacts].reverse(); // Most recent first
  },

  async markContactAsRead(id: number): Promise<void> {
    const contact = contacts.find(c => c.id === id);
    if (contact) {
      contact.read = true;
    }
  },

  async findUserByUsername(username: string): Promise<User | undefined> {
    return users.find(user => user.username === username);
  }
};

// For compatibility with existing code
export const db = null;
import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { storage } from "./storage";
import { registerRoutes } from "./routes";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration - simplified for serverless
app.use(
  session({
    store: storage.getSessionStore(),
    secret: process.env.SESSION_SECRET || "your-super-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      
      // Simple password check (in production, use proper hashing)
      if (user.password !== password) {
        return done(null, false, { message: "Invalid password" });
      }
      
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await storage.getUser(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Routes
registerRoutes(app);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Health check endpoint for serverless
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server only in development
if (process.env.NODE_ENV !== "production" || process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`[express] serving on port ${PORT}`);
  });
}

export default app;
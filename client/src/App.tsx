import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import ProductsPage from "@/pages/products";
import AboutPage from "@/pages/about";
import AgencyPolicyPage from "@/pages/agency-policy";
import NewsPage from "@/pages/news";
import ContactPage from "@/pages/contact";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminAuth from "@/pages/admin/auth";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/agency-policy" component={AgencyPolicyPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/contact" component={ContactPage} />
      <ProtectedRoute path="/admin" component={AdminDashboard} />
      <Route path="/admin/auth" component={AdminAuth} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Redirect } from "wouter";
import { Loader2, Shield, Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

export default function AdminAuth() {
  const { user, loginMutation, registerMutation } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Redirect if already logged in
  if (user) {
    return <Redirect to="/admin" />;
  }

  const onLogin = (data: LoginFormData) => {
    loginMutation.mutate(data as any);
  };

  const onRegister = (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side - Forms */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center">
                <Shield className="text-white h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-neutral-dark">Admin Portal</h2>
            <p className="text-neutral-gray mt-2">
              Secure access to Huayue Plastics admin dashboard
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Enter your credentials to access the admin dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                    <div>
                      <Label htmlFor="login-username">Username</Label>
                      <Input
                        id="login-username"
                        type="text"
                        {...loginForm.register("username")}
                        placeholder="Enter your username"
                        className="mt-1"
                      />
                      {loginForm.formState.errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                          {loginForm.formState.errors.username.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative mt-1">
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          {...loginForm.register("password")}
                          placeholder="Enter your password"
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-neutral-gray" />
                          ) : (
                            <Eye className="h-4 w-4 text-neutral-gray" />
                          )}
                        </Button>
                      </div>
                      {loginForm.formState.errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {loginForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={loginMutation.isPending}
                      className="w-full bg-primary-green hover:bg-secondary-green text-white"
                    >
                      {loginMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing In...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Create a new admin account for the dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
                    <div>
                      <Label htmlFor="register-username">Username</Label>
                      <Input
                        id="register-username"
                        type="text"
                        {...registerForm.register("username")}
                        placeholder="Choose a username"
                        className="mt-1"
                      />
                      {registerForm.formState.errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                          {registerForm.formState.errors.username.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative mt-1">
                        <Input
                          id="register-password"
                          type={showRegisterPassword ? "text" : "password"}
                          {...registerForm.register("password")}
                          placeholder="Create a strong password"
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                        >
                          {showRegisterPassword ? (
                            <EyeOff className="h-4 w-4 text-neutral-gray" />
                          ) : (
                            <Eye className="h-4 w-4 text-neutral-gray" />
                          )}
                        </Button>
                      </div>
                      {registerForm.formState.errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {registerForm.formState.errors.password.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={registerMutation.isPending}
                      className="w-full bg-primary-green hover:bg-secondary-green text-white"
                    >
                      {registerMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right side - Hero */}
      <div className="hidden lg:block lg:flex-1 relative">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary-green to-secondary-green"
          style={{
            backgroundImage: "url('/attached_assets/slide_5_1753709644847.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary-green bg-opacity-80"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center p-12 text-center">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-6">
              Welcome to <br />
              <span className="text-accent-green">Huayue Plastics</span><br />
              Admin Portal
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Manage contact messages, monitor business inquiries, and oversee your plastic packaging operations.
            </p>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                <span>Contact message management</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                <span>Real-time Telegram notifications</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                <span>Secure authentication system</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                <span>Business insights dashboard</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <p className="text-sm text-gray-300">
                Leading Asian plastic packaging manufacturer since 1998
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

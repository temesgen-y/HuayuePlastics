import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Contact } from "@shared/schema";
import { 
  LogOut, 
  Mail, 
  Phone, 
  User, 
  Clock, 
  CheckCircle, 
  MessageSquare,
  Calendar,
  Users,
  TrendingUp,
  Eye
} from "lucide-react";
import { format } from "date-fns";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const { toast } = useToast();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Fetch contacts
  const { data: contacts = [], isLoading, error } = useQuery<Contact[]>({
    queryKey: ["/api/contacts"],
  });

  // Mark contact as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: async (contactId: number) => {
      await apiRequest("PATCH", `/api/contacts/${contactId}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
      toast({
        title: "Contact marked as read",
        description: "The contact has been marked as read successfully.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleMarkAsRead = (contact: Contact) => {
    if (!contact.isRead) {
      markAsReadMutation.mutate(contact.id);
    }
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const unreadCount = contacts.filter(contact => !contact.isRead).length;
  const totalContacts = contacts.length;
  const todayContacts = contacts.filter(contact => {
    const today = new Date();
    const contactDate = new Date(contact.createdAt);
    return contactDate.toDateString() === today.toDateString();
  }).length;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-neutral-gray">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-red-500 mb-4">Error loading dashboard</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-2xl font-bold text-primary-green">
                HUAYUE <span className="text-neutral-dark font-normal">ADMIN</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-neutral-gray">
                Welcome, <span className="font-medium text-neutral-dark">{user?.username}</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-red-200 text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="text-white h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-neutral-gray">Total Messages</p>
                  <p className="text-2xl font-bold text-neutral-dark">{totalContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-accent-green rounded-full w-12 h-12 flex items-center justify-center">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-neutral-gray">Unread Messages</p>
                  <p className="text-2xl font-bold text-neutral-dark">{unreadCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-secondary-green rounded-full w-12 h-12 flex items-center justify-center">
                  <Calendar className="text-white h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-neutral-gray">Today's Messages</p>
                  <p className="text-2xl font-bold text-neutral-dark">{todayContacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 text-neutral-gray mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-neutral-dark mb-2">No Messages Yet</h3>
                    <p className="text-neutral-gray">
                      Contact form submissions will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedContact?.id === contact.id
                            ? "border-primary-green bg-green-50"
                            : contact.isRead
                            ? "border-gray-200 bg-white hover:bg-gray-50"
                            : "border-accent-green bg-green-50 hover:bg-green-100"
                        }`}
                        onClick={() => setSelectedContact(contact)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <User className="h-4 w-4 text-neutral-gray mr-2" />
                              <span className="font-medium text-neutral-dark">{contact.name}</span>
                              {!contact.isRead && (
                                <Badge className="ml-2 bg-accent-green">New</Badge>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-neutral-gray mb-2">
                              <Mail className="h-4 w-4 mr-2" />
                              <span>{contact.email}</span>
                              <span className="mx-2">•</span>
                              <Phone className="h-4 w-4 mr-1" />
                              <span>{contact.phone}</span>
                            </div>
                            <p className="text-sm text-neutral-gray line-clamp-2">
                              {contact.message}
                            </p>
                          </div>
                          <div className="ml-4 text-right">
                            <div className="flex items-center text-xs text-neutral-gray mb-2">
                              <Clock className="h-3 w-3 mr-1" />
                              {format(new Date(contact.createdAt), "MMM d, yyyy")}
                            </div>
                            <div className="text-xs text-neutral-gray">
                              {format(new Date(contact.createdAt), "h:mm a")}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Message Detail */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Message Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedContact ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-neutral-dark mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-neutral-gray mr-3" />
                          <div>
                            <div className="text-sm font-medium text-neutral-dark">{selectedContact.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-neutral-gray mr-3" />
                          <div>
                            <div className="text-sm text-neutral-dark">{selectedContact.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-neutral-gray mr-3" />
                          <div>
                            <div className="text-sm text-neutral-dark">{selectedContact.phone}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-neutral-gray mr-3" />
                          <div>
                            <div className="text-sm text-neutral-dark">
                              {format(new Date(selectedContact.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold text-neutral-dark mb-3">Message</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-neutral-dark leading-relaxed whitespace-pre-wrap">
                          {selectedContact.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      {!selectedContact.isRead && (
                        <Button
                          onClick={() => handleMarkAsRead(selectedContact)}
                          disabled={markAsReadMutation.isPending}
                          className="bg-primary-green hover:bg-secondary-green text-white"
                        >
                          {markAsReadMutation.isPending ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Marking as Read...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Mark as Read
                            </>
                          )}
                        </Button>
                      )}
                      
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                      >
                        <a href={`mailto:${selectedContact.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Reply via Email
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MessageSquare className="h-8 w-8 text-neutral-gray mx-auto mb-3" />
                    <p className="text-neutral-gray">
                      Select a message to view details
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

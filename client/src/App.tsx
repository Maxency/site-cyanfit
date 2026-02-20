import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import ContactModal from "./components/ContactModal";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <ContactModalProvider>
          <TooltipProvider>
            <Toaster />
            <ContactModal />
            <WhatsAppFloatingButton />
            <Router />
          </TooltipProvider>
        </ContactModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

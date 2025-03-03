import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/home";
import useVersion from "./hooks/use-version";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Number.POSITIVE_INFINITY,
        },
    },
});

function App() {
    useVersion();
    return (
        <QueryClientProvider client={queryClient}>
            <div
                className="dark antialiased h-screen flex flex-col"
                style={{
                    colorScheme: "dark",
                }}
            >
                <BrowserRouter>
                    <TooltipProvider delayDuration={0}>
                        <SidebarProvider>
                            <div className="flex flex-1">
                                <AppSidebar />
                                <main className="flex-1 flex flex-col w-full">
                                    <SidebarInset
                                        className="flex-1 !m-0 !ml-0 !rounded-none !shadow-none"
                                        variant="default"
                                    >
                                        <div className="h-full w-full">
                                            <Routes>
                                                <Route path="*" element={<Home />} />
                                            </Routes>
                                        </div>
                                    </SidebarInset>
                                </main>
                            </div>
                        </SidebarProvider>
                        <Toaster />
                    </TooltipProvider>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    );
}

export default App;

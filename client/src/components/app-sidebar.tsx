import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";
import { Book, Cog, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AppSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 p-2 rounded-md bg-background border md:hidden"
            >
                <Menu size={24} />
            </button>

            <aside className={cn(
                "fixed md:sticky top-0 left-0",
                "h-screen w-[280px]",
                "bg-background border-r",
                "transition-all duration-300",
                "flex flex-col",
                "md:translate-x-0",
                "md:opacity-100",
                isOpen
                    ? "translate-x-0 opacity-100 z-50"
                    : "-translate-x-full opacity-0 -z-10",
            )}>
                <Sidebar className="flex flex-col flex-1 h-full">
                    <SidebarHeader className="flex-none">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" asChild>
                                    <NavLink to="/" onClick={() => setIsOpen(false)}>
                                        <img
                                            alt="grantolf-icon"
                                            src="/grantolf.png"
                                            width="100%"
                                            height="100%"
                                            className="size-7"
                                        />
                                        <div className="flex flex-col gap-0.5 leading-none">
                                            <span className="font-semibold">
                                                Grantolf
                                            </span>
                                            <span className="">Chat with the Grant Wizard</span>
                                        </div>
                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent className="flex-1">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <NavLink
                                    to="https://grantolf"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <SidebarMenuButton>
                                        <Book /> Grantolf Main Site
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <NavLink
                                    to="https://app.uniswap.org/swap?chain=polygon&inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0xdb7a2607b71134d0b09c27ca2d77b495e4dbeedb&value=.01&field=input"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <SidebarMenuButton>
                                        <Cog /> BUY $GRANTS on Polygon
                                    </SidebarMenuButton>
                                </NavLink>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter className="flex-none">
                        <SidebarMenu>
                            {/* Removed ConnectionStatus component */}
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>
            </aside>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 md:hidden z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}

import Chat from "@/components/chat";

export default function Home() {
    // Use a UUID format for Grantolf
    const grantolfId = "grantolf-0000-0000-0000-000000000000";

    return (
        <div className="flex-1 flex flex-col">
            <Chat agentId={grantolfId} />
        </div>
    );
}

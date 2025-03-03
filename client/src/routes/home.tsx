import Chat from "@/components/chat";

export default function Home() {
    // Use a fixed ID for Grantolf
    const grantolfId = "grantolf";

    return (
        <div className="flex-1 flex flex-col">
            <Chat agentId={grantolfId} />
        </div>
    );
}

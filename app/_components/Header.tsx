import { Bell, Settings, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-[#050505] shadow-lg border-1 border-[#19202b]">
            <div className="py-4 flex items-center justify-between">
            <h1 className="text-white ml-20 mx-auto font-bold text-3xl">Cryptit</h1>
            <div className="flex gap-5 mr-20">
                <Bell className="text-[#9ca3af]" />
                <Settings className="text-[#9ca3af]" />
                <User className="bg-[#00ff88] p-1 rounded-full text-[#050505]" />
            </div>
            </div>
        </div>
     );
}

export default Header;
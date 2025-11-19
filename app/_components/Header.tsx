import { Bell } from "lucide-react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-[#050505] shadow-lg flex items-center justify-between">
            <h1 className="text-white">Cryptit</h1>
            <div>
                <Bell className="text-white" />
            </div>
        </div>
     );
}

export default Header;
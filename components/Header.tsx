import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
<nav className="flex items-center justify-between p-3 h-[60px] bg-gray-800 border-b border-gray-700">
  <div className="flex space-x-4">
    <Button className="m-2">
      <Link
        href="/json2table"
        className={`text-white font-bold hover:text-gray-300 transition duration-200 ${isActive("/json2table") ? 'underline' : ''}`}
      >
        Json2Table
      </Link>
    </Button>
    {/* 可以根据需要添加更多菜单项 */}
    <Button className="m-2">
      <Link
        href="/anotherPage"
        className={`text-white font-bold hover:text-gray-300 transition duration-200 ${isActive("/anotherPage") ? 'underline' : ''}`}
      >
        Another Page
      </Link>
    </Button>
  </div>
</nav>

  );
};

export default Header;

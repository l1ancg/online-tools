import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <nav className="flex items-center justify-between p-3 h-[60px]">
      <Button className="m-2">
        <Link
          href="/json2table"
          className="bold"
          data-active={isActive("/json2table")}
        >
          Json2Table
        </Link>
      </Button>
    </nav>
  );
};

export default Header;

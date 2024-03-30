"use client";

import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky flex justify-between top-0 left-0 h-screen flex-col bg-dark-1 p-6 pt-28 max-sm:hidden text-white lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                {
                  "bg-blue-1": isActive,
                }
              )}
            >
              <Image src={link.icon} alt={link.name} width={24} height={24} />
              <span className="text-lg font-semibold max-lg:hidden">
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;

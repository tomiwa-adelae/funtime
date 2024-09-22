"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Menu } from "lucide-react";

import { Irish_Grover } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

export function MobileNavbar() {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger asChild className="md:hidden">
				<Button variant="ghost" size="icon">
					<Menu className="text-orange-400" />
				</Button>
			</SheetTrigger>
			<SheetContent
				side={"left"}
				className="flex items-center justify-center flex-col bg-white"
				style={{ zIndex: "20000" }}
			>
				<SheetHeader className="w-full">
					<SheetClose asChild>
						<Link
							href="/"
							className="flex items-center justify-start gap-2"
						>
							<Image
								src={"/assets/logo.png"}
								alt="Funtime"
								width={1000}
								height={1000}
								className="w-32 h-14 object-cover"
							/>
						</Link>
					</SheetClose>
				</SheetHeader>
				<nav className="flex-1 mt-4 w-full flex items-start justify-start gap-2 flex-col pt-4">
					{navLinks.map(({ label, route }, index) => {
						const isActive =
							pathname === route ||
							pathname.startsWith(`${route}/`);

						return (
							<SheetClose asChild key={index}>
								<Link
									href={route}
									className={`flex items-center justify-start w-full rounded-md p-3 text-xs text-black font-bold transition  ${
										isActive
											? "bg-orange-400 text-white"
											: "bg-transparent"
									} hover:bg-orange-200`}
								>
									{label}
								</Link>
							</SheetClose>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
}

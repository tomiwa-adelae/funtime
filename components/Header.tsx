import { navLinks } from "@/constants";
import { Irish_Grover } from "next/font/google";
import Link from "next/link";
import React from "react";
import { MobileNavbar } from "./MobileNavbar";
import Image from "next/image";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const Header = () => {
	return (
		<div className="container">
			<header className="container shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded-full py-3">
				<div className="container">
					<div className="flex items-center justify-between gap-4">
						<Link href="/">
							<Image
								src={"/assets/logo.png"}
								alt="Funtime"
								width={1000}
								height={1000}
								className="w-32 h-14 object-cover"
							/>
						</Link>
						<nav className="hidden text-orange-400 md:flex font-semibold text-xs uppercase gap-10">
							{navLinks.map((link, index) => (
								<Link
									key={index}
									className="hover:text-black transition"
									href={link.route}
								>
									{link.label}
								</Link>
							))}
						</nav>
						<MobileNavbar />
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;

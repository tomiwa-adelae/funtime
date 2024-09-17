import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="py-8 bg-white">
			<div className="container">
				<Separator className="mb-6" />
				<div className="flex items-center justify-between gap-4">
					<small className="font-semibold text-xs md:text-sm text-gray-700">
						&copy; Funtime 2024. All Rights Reserved.
					</small>
					<div className="flex gap-4">
						<Facebook className="w-4 h-4 md:w-6 md:h-6 text-black cursor-pointer hover:text-orange-400" />
						<Twitter className="w-4 h-4 md:w-6 md:h-6 text-black cursor-pointer hover:text-orange-400" />
						<Instagram className="w-4 h-4 md:w-6 md:h-6 text-black cursor-pointer hover:text-orange-400" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

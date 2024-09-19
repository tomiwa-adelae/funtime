import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Card = ({
	title,
	img,
	subText,
	description,
}: {
	title: string;
	img: string;
	subText: string;
	description: string;
}) => {
	return (
		<div className="w-full group/card">
			<div
				className={cn(
					" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
					"bg-cover"
				)}
				style={{ backgroundImage: `url(${img})` }}
			>
				<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60" />
				<div className="text content flex items-start justify-end gap-2 flex-col h-full">
					<h3 className="font-bold text-xl md:text-3xl text-gray-50 relative z-10">
						{title}
					</h3>
					<p className="font-normal text-base md:text-lg text-gray-50 relative z-10">
						{subText}
					</p>
					<p className="font-semibold text-xs text-gray-200 relative z-10">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;

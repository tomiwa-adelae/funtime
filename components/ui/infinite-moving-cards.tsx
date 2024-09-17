"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		image: string;
		title: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => (
					<div
						className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-orange-500 px-8 py-6 md:w-[450px]"
						style={{
							background:
								"linear-gradient(180deg, var(--orange-400), var(--orange-500)",
						}}
						key={item.name}
					>
						<blockquote>
							<div className="flex flex-col items-start justify-between h-full">
								<div className="relative z-20 text-sm md:text-base leading-[1.6] text-white font-semibold">
									{item.quote}
								</div>
								<div className="relative flex-1 z-20 mt-6 flex flex-row gap-2 items-center">
									<Image
										src={item.image}
										alt={"User"}
										width={1000}
										height={1000}
										className="w-12 h-12 object-cover rounded-full"
									/>
									<span className="flex flex-col gap-0.5">
										<span className="text-sm leading-[1.6] text-gray-100 font-semibold">
											{item.name}
										</span>
										<span className="text-xs leading-[1.6] text-gray-100 font-normal">
											{item.title}
										</span>
									</span>
								</div>
							</div>
						</blockquote>
					</div>
				))}
			</ul>
		</div>
	);
};

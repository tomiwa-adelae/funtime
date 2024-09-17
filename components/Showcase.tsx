import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Irish_Grover } from "next/font/google";
import { BackgroundLines } from "./ui/background-lines";
import { Button } from "./ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

export function Showcase() {
	return (
		<div
			// style={{ backgroundImage: "url(/assets/tree.png)" }}
			className="bg-right bg-no-repeat bg-cover relative bg-white bg w-full h-full"
		>
			<div className="h-20 z-50 my-8">
				{/* <div className="absolute h-20 w-full z-50 mt-8"> */}
				<Header />
			</div>

			<BackgroundBeamsWithCollision>
				<BackgroundLines>
					<div className="container mt-20 lg:mt-0 text-center flex flex-col lg:flex-row items-center justify-center gap-4">
						<div className="mt-8 relative z-20 py-16">
							<h2
								className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold text-center text-black tracking-tight ${irishGrover.className}`}
							>
								Fun in every crunch
								<br />
								<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
									<div className="absolute text-orange-400 left-0 top-[1px] bg-clip-text bg-no-repeat py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
										<span className="">
											It&apos;s fun time
										</span>
									</div>
									<div className="relative text-orange-400 bg-clip-text bg-no-repeat py-4">
										<span className="">
											It&apos;s fun time
										</span>
									</div>
								</div>
							</h2>
							<p className="text-sm text-white md:text-base mt-6 md:w-8/12 mx-auto">
								Dive into a world of endless excitement, where
								every moment is a new adventure waiting to be
								explored. Join the fun today!
							</p>
							<Button asChild className="mt-6 w-auto">
								<Link href="/">Insert your letter</Link>
							</Button>
						</div>
						<Image
							src={"/assets/tree.png"}
							alt={"Coconut tree"}
							width={1000}
							height={1000}
							className="w-auto h-auto object-cover"
						/>
					</div>
				</BackgroundLines>
			</BackgroundBeamsWithCollision>
		</div>
	);
}

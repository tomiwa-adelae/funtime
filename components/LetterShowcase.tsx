"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Irish_Grover } from "next/font/google";
import { BackgroundLines } from "./ui/background-lines";

import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";
import LettersInput from "./LettersInput";
import SerialInput from "./SerialInput";
import { Button } from "./ui/button";
import { SparklesCore } from "./ui/sparkles";
import { Separator } from "./ui/separator";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

export function LetterShowcase() {
	return (
		<div className="bg-right bg-no-repeat bg-cover relative bg-gradient-to-r from-amber-300 to-orange-400 text-white bg w-full h-full pt-12">
			<div className="h-20 z-50">
				<Header />
			</div>

			<BackgroundBeamsWithCollision>
				<BackgroundLines>
					<div className="container text-center flex flex-col lg:flex-row items-center justify-center gap-2">
						<div className="relative z-20 py-10 flex-1">
							<h1
								className={`text-5xl sm:text-6xl md:text-7xl font-bold text-center text-black tracking-tight ${irishGrover.className}`}
							>
								Yay! You found
								<br />
								<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
									<div className="absolute text-white left-0 top-[1px] bg-clip-text bg-no-repeat py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
										<span className="">another letter</span>
									</div>
									<div className="relative text-white bg-clip-text bg-no-repeat py-4">
										<span className="">another letter</span>
									</div>
								</div>
							</h1>
							<p className="text-sm md:text-base md:w-8/12 text-gray-700 font-semibold mx-auto">
								Insert your letter and serial number
							</p>
							<div className="mt-8">
								<LettersInput />
								<div className="mt-6 flex items-center justify-center gap-2 md:gap-4">
									{[1, 2, 3, 4, 5, 6, 7].map((index) => (
										<SerialInput key={index} />
									))}
								</div>
							</div>
							<Separator className="my-10" />
							<div>
								<h3 className="text-xl md:text-2xl break-words">
									Are your letters complete? Click here ➡{" "}
									<Button variant={"white"}>Complete</Button>{" "}
									<br />
									Funland is waiting for you!
								</h3>
							</div>
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

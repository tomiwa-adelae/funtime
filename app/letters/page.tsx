import Header from "@/components/Header";
import { Irish_Grover } from "next/font/google";

const irishGrover = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

const page = () => {
	return (
		<div className="bg-orange-400 text-white pt-12 min-h-screen">
			<Header />
			<h1
				className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl  font-bold text-center text-black tracking-tight ${irishGrover.className}`}
			>
				Yay! You found another letter
				<br />
				<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
					<div className="absolute text-white left-0 top-[1px] bg-clip-text bg-no-repeat py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
						<span className="">
							Insert your letter and serial number
						</span>
					</div>
					<div className="relative text-white bg-clip-text bg-no-repeat py-4">
						<span className="">
							Insert your letter and serial number
						</span>
					</div>
				</div>
			</h1>
		</div>
	);
};

export default page;

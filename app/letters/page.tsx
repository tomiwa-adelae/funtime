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
			<div className="container py-10">
				<div className="text-center">
					<h1
						className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl  font-bold text-center text-black tracking-tight ${irishGrover.className}`}
					>
						Yay! You found{" "}
						<span className="text-white"> another letter</span>
					</h1>

					<p className="text-sm md:text-base md:w-8/12 text-gray-700 font-semibold mx-auto">
						Insert your letter and serial number{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;

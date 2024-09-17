import { BadgeCheck, Gift } from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";

const Pricing = () => {
	return (
		<div className="bg-gradient-to-r from-amber-100 to-orange-100">
			<div className="container py-12">
				<h3 className="text-black uppercase text-center text-xl sm:text-2xl md:text-3xl font-medium mb-8">
					Pricing
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 bg-white">
						<div className="inline-block p-2 bg-orange-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 mb-4 border border-gray-100">
							<Gift className="w-8 h-8 text-orange-400" />
						</div>
						<p className="text-sm font-semibold text-gray-800">
							Starter
						</p>
						<h3 className="text-3xl font-bold my-2">Free</h3>
						<p className="text-sm text-gray-700">
							Experience a taste of the excitement at no cost!
							Dive into select activities and join the community
							of fun-seekers with limited access to our exciting
							events.
						</p>
						<Separator className="my-4" />
						<div className="space-y-3">
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
						</div>
					</div>
					<div className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 bg-white">
						<div className="inline-block p-2 bg-orange-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 mb-4 border border-gray-100">
							<Gift className="w-8 h-8 text-orange-400" />
						</div>
						<p className="text-sm font-semibold text-gray-800">
							Starter
						</p>
						<h3 className="text-3xl font-bold my-2">Free</h3>
						<p className="text-sm text-gray-700">
							Experience a taste of the excitement at no cost!
							Dive into select activities and join the community
							of fun-seekers with limited access to our exciting
							events.
						</p>
						<Separator className="my-4" />
						<div className="space-y-3">
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-orange-400" />{" "}
								Access to basic events and activities
							</p>
						</div>
					</div>
					<div className="rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 bg-gradient-to-r from-amber-500 to-orange-400 text-white">
						<div className="inline-block p-2 bg-orange-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 mb-4 border border-gray-100">
							<Gift className="w-8 h-8 text-orange-400" />
						</div>
						<p className="text-sm font-semibold text-gray-800">
							Starter
						</p>
						<h3 className="text-3xl font-bold my-2">Free</h3>
						<p className="text-sm text-gray-700">
							Experience a taste of the excitement at no cost!
							Dive into select activities and join the community
							of fun-seekers with limited access to our exciting
							events.
						</p>
						<Separator className="my-4" />
						<div className="space-y-3">
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-white" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-white" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-white" />{" "}
								Access to basic events and activities
							</p>
							<p className="text-sm flex items-center justify-start">
								<BadgeCheck className="w-4 h-4 mr-1 text-white" />{" "}
								Access to basic events and activities
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;

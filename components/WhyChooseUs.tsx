import { boxDetails } from "@/constants";
import React from "react";
import Card from "./Card";

const WhyChooseUs = () => {
	return (
		<div className="bg-orange-400 py-12" id="why">
			<div className="container">
				<h3 className="text-white text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
					Why choose us
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{boxDetails.map(
						({ title, img, subText, description }, index) => (
							<Card
								key={index}
								title={title}
								img={img}
								subText={subText}
								description={description}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;

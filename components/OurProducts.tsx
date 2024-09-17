import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

const OurProducts = () => {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));
	return (
		<div>
			<div className="w-full h-full py-12">
				<h2 className="container text-orange-400 uppercase text-center text-xl sm:text-2xl md:text-3xl font-semibold">
					Our products
				</h2>
				<Carousel items={cards} />
			</div>
		</div>
	);
};

const DummyContent = () => {
	return (
		<div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
			<p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
				<span className="font-bold text-neutral-700 dark:text-neutral-200">
					The first rule of Apple club is that you boast about Apple
					club.
				</span>{" "}
				Keep a journal, quickly jot down a grocery list, and take
				amazing class notes. Want to convert those notes to text? No
				problem. Langotiya jeetu ka mara hua yaar is ready to capture
				every thought.
			</p>
			<Image
				src="https://assets.aceternity.com/macbook.png"
				alt="Macbook mockup from Aceternity UI"
				height="500"
				width="500"
				className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
			/>
		</div>
	);
};

const data = [
	{
		title: "Caramel",
		src: "/assets/caramel.png",
		content: <DummyContent />,
	},
	{
		title: "Ordinary",
		src: "/assets/ordinary.png",
		content: <DummyContent />,
	},
	{
		title: "Spicy",
		src: "/assets/spicy.png",
		content: <DummyContent />,
	},
];

export default OurProducts;

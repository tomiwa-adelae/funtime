import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

const OurProducts = () => {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));
	return (
		<div className="bg-orange-400 w-full h-full py-12" id="products">
			<h2 className="container text-white uppercase text-center text-xl sm:text-2xl md:text-3xl font-semibold">
				Our products
			</h2>
			<Carousel items={cards} />
		</div>
	);
};

const DummyContent = ({ image }: any) => {
	return (
		<div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
			<Image
				src={image}
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
		content: <DummyContent image={"/assets/caramel.png"} />,
	},
	{
		title: "Ordinary",
		src: "/assets/ordinary.png",
		content: <DummyContent image={"/assets/ordinary.png"} />,
	},
	{
		title: "Spicy",
		src: "/assets/spicy.png",
		content: <DummyContent image={"/assets/spicy.png"} />,
	},
];

export default OurProducts;

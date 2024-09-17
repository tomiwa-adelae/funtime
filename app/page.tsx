import { Companies } from "@/components/Companies";
import Footer from "@/components/Footer";
import OurProducts from "@/components/OurProducts";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
	return (
		<div className="min-h-[200vh]">
			<Showcase />
			<WhyChooseUs />
			<OurProducts />
			<Companies />
			<Testimonials />
			<Footer />
		</div>
	);
}

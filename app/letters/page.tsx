import { LetterShowcase } from "@/components/LetterShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Letters | Funtime",
	description: "Fun in every crunch. It is fun time.",
};

const page = () => {
	return (
		<div>
			<LetterShowcase />
		</div>
	);
};

export default page;

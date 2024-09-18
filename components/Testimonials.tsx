"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
	return (
		<div className="py-16 flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
			<h3 className="text-orange-400 uppercase text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
				Don&apos;t take our word for it. <br /> Over 100+ people trust
				us.
			</h3>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="fast"
			/>
			{/* <InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="slow"
			/> */}
		</div>
	);
}

const testimonials = [
	{
		quote: "As a busy mom, I'm always on the lookout for snacks that are both healthy and enjoyable for my kids. Funtime Coconut Chips have become a staple in our home. Not only are they made from real coconut with no artificial additives, but they also taste amazing! My children love them, and I feel good knowing they're snacking on something nutritious. Plus, they variety of flavors keeps everyone happy. Funtime is now our go-to snack for family movie nights and after-school treats!",
		name: "Ishola Sarah",
		title: "Consumer",
		image: "/assets/mom.jpg",
	},
	{
		quote: "My mom gives me Funtime Coconut Chips as a snack, and they're the best! They're cruncy and taste like coconut, which I really like. Something, I even share them with my friends at school. It's fun to eat something that's yummy and that I know my mom thinks is good for me",
		name: "Tommy Lilian",
		title: "Consumer",
		image: "/assets/child.jpg",
	},
	{
		quote: "I first heard about Funtime Cococnute Chips from my mom and her friends. They were always talking about how great they are for snacking and how they're made with real coconut. I decided to try them out, and I was really impressed. They chips are delicious, and I love that they're a healthier option. Now, I'm hooked and often share them with my won friends. It's cool to have a snack that my mom loves and that I can enjoy too!",
		name: "Mr. Segun Jake",
		title: "Consumer",
		image: "/assets/man.jpg",
	},
];

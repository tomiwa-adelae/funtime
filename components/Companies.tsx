"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingLogo } from "./ui/infinite-moving-logo";
import { companies } from "@/constants";

export function Companies() {
	return (
		<div className="flex flex-col antialiased items-center justify-center relative overflow-hidden bg-orange-100 py-12">
			<h3 className="text-orange-400 uppercase text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
				You can find out products
			</h3>
			<InfiniteMovingLogo
				items={companies}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

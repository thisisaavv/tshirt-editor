"use client";

import React from "react";
import { ColorBox } from "@/components/colors-box";
import { Design } from "./design";
import { View } from "./view";

export function Editor() {
	return (
		<>
			<article className="flex gap-8">
				<View />
				<Design />
			</article>
		</>
	);
}

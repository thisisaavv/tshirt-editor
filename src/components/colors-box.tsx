"use client";

import React from "react";
import { Circle } from "@uiw/react-color";
import { useColor } from "@/store/color-store";
import { Heading } from "@/components/heading";

export function ColorBox() {
	const { color, setColor } = useColor();

	return (
		<div className="w-80">
			<Heading title="Color" />
			<div>
				<Circle
					colors={[
						"#f44336",
						"#e91e63",
						"#9c27b0",
						"#673ab7",
						"#3f51b5",
						"#2196f3",
						"#03a9f4",
						"#00bcd4",
						"#009688",
						"#4caf50",
						"#8bc34a",
						"#cddc39",
						"#ffeb3b",
						"#ffc107",
						"#ff9800",
						"#ff5722",
						"#795548",
						"#607d8b",
						"#FFFFFF",
						"#000000",
						"#e0e0e0",
					]}
					color={color ? color : "#f44336"}
					onChange={(color) => {
						setColor(color.hex);
					}}
				/>
			</div>
		</div>
	);
}

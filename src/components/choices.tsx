"use client";

import React from "react";
import { ImageRender } from "@/components/image-render";
import { editorConfig } from "@/config/editorConfig";

export default function Choice() {
	return (
		<div className="relative overflow-hidden">
			<div>
				{editorConfig.images.map((image, index) => {
					return (
						<div key={index} className="p-2 bg-white">
							<ImageRender image={image.image[0]} className="hover:bg-gray-200" />
						</div>
					);
				})}
			</div>
		</div>
	);
}

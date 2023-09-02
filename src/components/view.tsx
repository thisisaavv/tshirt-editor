"use client";

import { ImageRender } from "@/components/image-render";
import { useColor } from "@/store/color-store";
import React from "react";
import { useInputText } from "@/store/text-store";
import { DraggableResizable } from "./draggable-resizable";
import Choice from "./choices";
import { useImage } from "@/store/image-store";
import { editorConfig } from "@/config/editorConfig";
import Image from "next/image";
import { useIllustration } from "@/store/illustration-store";

export function View() {
	const { value: textValue, font, color } = useInputText();
	const { image } = useImage();
	const { illustration } = useIllustration();

	return (
		<div className="flex gap-2">
			{/* <Choice /> */}
			<aside className="relative overflow-hidden w-[120px]">
				<div>
					{editorConfig.images.map((image, index) => {
						return (
							<div key={index} className="p-2 bg-white">
								<ImageRender image={image.image[0]} className="hover:bg-gray-200" />
							</div>
						);
					})}
				</div>
			</aside>
			<div className="relative text-ellipsis overflow-hidden w-full min-w-[600px]">
				<div className="inline-block p-20 bg-white content-center" id="view">
					<ImageRender image={image}>
						<DraggableResizable className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 125">
								<foreignObject width="200" height="125" x="0" y="0">
									<div className="h-full flex justify-center items-center">
										<p
											style={{
												fontFamily: font,
												color,
											}}
											className="text-4xl font-semibold text-center"
										>
											{textValue}
										</p>
									</div>
								</foreignObject>
							</svg>
						</DraggableResizable>
						{illustration && (
							<DraggableResizable className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<Image
									draggable={false}
									src={illustration && URL.createObjectURL(illustration)}
									alt="Placeholder"
									width={1080}
									height={720}
								/>
							</DraggableResizable>
						)}
					</ImageRender>
				</div>
			</div>
		</div>
	);
}

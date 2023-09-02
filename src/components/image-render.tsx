"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { useImage } from "@/store/image-store";
import { useColor } from "@/store/color-store";

interface ImageRenderProps extends Partial<ImageProps> {
	className?: string;
	image?: string;
	children?: React.ReactNode;
}

export function ImageRender({ children, className, image, ...props }: ImageRenderProps) {
	const { setImage } = useImage();
	const { color } = useColor();

	return (
		<>
			<Image
				{...props}
				onClick={() => setImage(image || "/assets/images/placeholder.webp")}
				src={image || "/assets/images/placeholder.webp"}
				alt="Placeholder"
				width={1080}
				draggable={false}
				height={720}
				style={{ backgroundColor: color }}
				className={cn(`select-none`, className)}
			/>

			{children}
		</>
	);
}

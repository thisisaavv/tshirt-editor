"use client";

import React from "react";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/tabs";
import { useInputText } from "@/store/text-store";
import { ColorBox } from "./colors-box";
import { exportAsImage } from "@/lib/html2canvas";
import { useIllustration } from "@/store/illustration-store";

export function Design() {
	const { value, setValue, setColor, setFont } = useInputText();
	const { illustration, setIllustration } = useIllustration();

	return (
		<div>
			<ColorBox />
			<hr className="my-8" />
			<Tabs defaultValue="text" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="text">Texto</TabsTrigger>
					<TabsTrigger value="illustration">Ilustración</TabsTrigger>
				</TabsList>
				<TabsContent value="text">
					<label className="block mb-2 font-semibold">Texto</label>
					<input
						type="text"
						className="w-full px-4 py-2 border border-gray-300 rounded"
						onChange={(e) => setValue(e.target.value)}
					/>
					<label className="block mt-4 mb-2 font-semibold">Color</label>
					<input
						type="color"
						className="w-24 fill-none border border-gray-300 rounded"
						onChange={(e) => setColor(e.target.value)}
					/>

					<label className="block mt-4 mb-2 font-semibold">Fuente</label>
					<select
						className="w-full px-4 py-2 border border-gray-300 rounded"
						onChange={(e) => setFont(e.target.value)}
					>
						<option onClick={() => setFont("Arial")}>Arial</option>
						<option onClick={() => setFont("Times New Roman")}>Times New Roman</option>
						<option onClick={() => setFont("Georgia")}>Verdana</option>
						<option onClick={() => setFont("Courier New")}>Courier New</option>
						<option onClick={() => setFont("Lucida Console")}>Lucida Console</option>
						<option onClick={() => setFont("Comic Sans Serif")}>
							Comic Sans Serif
						</option>
						<option onClick={() => setFont("Impact")}>Impact</option>
						<option onClick={() => setFont("Tahoma")}>Tahoma</option>
						<option onClick={() => setFont("Trebuchet MS")}>Trebuchet MS</option>
					</select>
				</TabsContent>
				<TabsContent value="illustration">
					<div className="mt-4">
						<input type="file" accept="image/*" onChange={(e: any) => setIllustration(e.target.files[0])} />
					</div>
				</TabsContent>
			</Tabs>
			{/* <hr className="my-8" />
			<div className="flex justify-between">
				<button
					className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
					onClick={() =>
						exportAsImage(
							document.getElementById("view") as any,
							new Date().getTime().toString()
						)
					}
				>
					Download
				</button>
			</div> */}

			<hr className="my-8" />
			<div>
				<button className="w-full p-4 font-semibold text-white bg-teal-600 rounded hover:bg-teal-700">
					Comprar ahora
				</button>
			</div>
		</div>
	);
}

"use client"


interface HeadingProps {
	title: string;
}

export function Heading({ title }: HeadingProps) {
	return (
		<>
			<div>
				<span className="text-2xl font-extrabold pb-4">{title}</span>
			</div>
		</>
	);
}

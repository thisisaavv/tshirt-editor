import { cn } from "@/lib/utils";
import { Rnd } from "react-rnd";

interface DraggableResizableProps {
	children: React.ReactNode;
	className?: string;
}

export function DraggableResizable({ children, className }: DraggableResizableProps) {
	return (
		<Rnd
			className={cn("border-collapse hover:border-2 hover:border-dashed active:border-dashed active:border-2 border-gray-400 overflow-hidden", className)}
			default={{
				x: 0,
				y: 0,
				width: 150,
				height: 80,
			}}
		>
			{children}
		</Rnd>
	);
}

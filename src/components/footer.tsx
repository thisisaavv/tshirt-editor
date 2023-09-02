import Image from "next/image";

export function Footer() {
	return (
		<footer className="py-8 container flex justify-between items-center">
			<div>
				{/* <h1 className="text-4xl font-extrabold">Editor</h1> */}
				<Image src="/assets/images/logo.png" alt="Logo" width={60} height={60} />
			</div>
			<div>
				<span>Desarrollado por Multiservicios Luque</span>
			</div>
		</footer>
	);
}

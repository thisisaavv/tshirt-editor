import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="py-8 container flex justify-between items-center">
			<div className="flex items-center gap-2">
				<Image src="/assets/images/logo.png" alt="Logo" width={60} height={60} />
				<h1 className="text-4xl font-extrabold">Multiservicios Luque</h1>
			</div>
			<div>
				<nav className="text-neutral-600 font-medium">
					<ul className="flex gap-4 decoration-black-100 underline-offset-4">
						<li>
							<Link href="/" className="hover:underline">
								Inicio
							</Link>
						</li>
						{/* <li>
							<Link href="/about" className="hover:underline">
								Acerca de
							</Link>
						</li> */}
						<li>
							<Link href="/editor" className="hover:underline">
								Editor
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

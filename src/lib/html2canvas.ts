import html2canvas from "html2canvas";

export const exportAsImage = async (element: HTMLElement, fileName: string) => {
	const canvas = await html2canvas(element);
	const image = canvas.toDataURL("image/png", 1.0);
	downloadImage(image, fileName);
};

export const exportImage = (target: HTMLElement) =>
	html2canvas(target).then((canvas) => {
		const base64image = canvas.toDataURL("image/png");
		window.location.href = base64image;
	});

const downloadImage = (blob: any, fileName: string) => {
	const fakeLink = window.document.createElement("a") as HTMLAnchorElement;
	fakeLink.style.display = "none";
	fakeLink.download = fileName;

	fakeLink.href = blob;

	document.body.appendChild(fakeLink);
	fakeLink.click();
	document.body.removeChild(fakeLink);

	fakeLink.remove();
};

export const showImage = (image)=> {
	
	const app = document.getElementById('swquiz-app')
	const imageWrapper = document.createElement('div');

	image = atob(image)

	imageWrapper.classList.add('swquiz-app-image');
	imageWrapper.style.backgroundImage = `url(${image})`;
	app.appendChild(imageWrapper);
}


	


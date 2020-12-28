export function fetchData (mode,id) {
	return  fetch(`https://swapi.dev/api/${mode}/${id}/`)
	.then(response => response.json())
	.then(data => data)
	.catch((err) => console.log(err));
}
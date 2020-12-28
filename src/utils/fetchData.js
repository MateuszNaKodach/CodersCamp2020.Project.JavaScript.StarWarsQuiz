export function fetchData (
	mode,
	id,
	httpClient = () => fetch(`https://swapi.dev/api/${mode}/${id}/`).then(response => response.json())
	) {
	return httpClient()
		.catch((err) => console.log(err));
}
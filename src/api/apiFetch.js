/*TODO här måste jag lägga till lite status code error handling */
export function apiFetch(url) {
  return fetch(url).then((response) => response.json());
}

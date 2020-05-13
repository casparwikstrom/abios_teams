export function apiFetch(url) {
  return fetch(url).then((response) => response.json());
}

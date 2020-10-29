export const getJson = (url) => fetch(url).then(response => response.json());

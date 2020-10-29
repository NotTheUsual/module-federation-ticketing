export const getJson = (url) => fetch(`http://localhost:7001${url}`).then(response => response.json());

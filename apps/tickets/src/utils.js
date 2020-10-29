export const getJson = (url) => fetch(`http://localhost:7001${url}`).then(response => response.json());
export const putJson = (url) => fetch(`http://localhost:7001${url}`, { method: 'PUT' });

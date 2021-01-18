import { getJson } from '../utils';

export const fetchDocs = () => getJson('/api/docs');

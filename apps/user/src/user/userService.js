import { getJson } from '../utils';

export const fetchUser = () => getJson('http://localhost:7001/api/user');

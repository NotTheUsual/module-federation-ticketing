import { getJson } from '../utils';

export const fetchTickets = () => getJson('/api/tickets');

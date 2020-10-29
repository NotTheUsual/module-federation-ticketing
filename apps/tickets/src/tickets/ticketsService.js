import { getJson, putJson } from '../utils';

export const fetchTickets = () => getJson('/api/tickets');
export const toggleTicket = (ticketId) => putJson(`/api/tickets/${ticketId}/toggle`);

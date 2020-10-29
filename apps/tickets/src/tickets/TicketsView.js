import { useQuery } from 'react-query';
import { fetchTickets } from './ticketsService';
import classNames from 'classnames';
import './TicketsView.css';

function Ticket({ ticket }) {
  const className = classNames('ticket', { 'ticket--completed': ticket.completed });
  return (
    <li className={className}>
      <span className="ticket__id">{ticket.id}</span>
      <span className="ticket__title">{ticket.title}</span>
    </li>
  );
}

function TicketsView() {
  const query = useQuery('tickets', fetchTickets);

  const { data: tickets, isLoading } = query;

  if (isLoading) return <p>Loading...</p>

  return (
    <ul className="ticket-list">
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}

export default TicketsView;

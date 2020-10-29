import { useQuery } from 'react-query';
import { fetchTickets, toggleTicket } from './ticketsService';
import classNames from 'classnames';
import './TicketsView.css';

function Ticket({ ticket, onToggle }) {
  const handleClick = (e) => {
    e.preventDefault();
    toggleTicket(ticket.id)
      .then(onToggle);
  };

  const className = classNames('ticket', { 'ticket--completed': ticket.completed });

  return (
    <li className={className}>
      <button className="ticket__button" onClick={handleClick}>
        <span className="ticket__id">{ticket.id}</span>
        <span className="ticket__title">{ticket.title}</span>
      </button>
    </li>
  );
}

function TicketsView() {
  const query = useQuery('tickets', fetchTickets, { refetchOnWindowFocus: false, refetchOnReconnect: false });

  const { data: tickets, isLoading } = query;

  if (isLoading) return <p>Loading...</p>

  const onToggle = () => {
    query.refetch();
  };

  return (
    <ul className="ticket-list">
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default TicketsView;

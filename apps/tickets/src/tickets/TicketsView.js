import { useQuery } from 'react-query';
import { fetchTickets } from './ticketsService';

function TicketsView() {
  const query = useQuery('tickets', fetchTickets);

  const { data: tickets, isLoading } = query;

  if (isLoading) return <p>Loading...</p>

  return (
    <section>
      <h4>Tickets</h4>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    </section>
  );
}

export default TicketsView;

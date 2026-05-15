import SupportSidebar from '../../components/support/SupportSidebar'
import TicketFilters from '../../components/support/TicketFilters'
import TicketHeader from '../../components/support/TicketHeader'
import TicketTable from '../../components/support/TicketTable'
import './all-tickets.css'

function AllTickets() {
  return (
    <div className="support-tickets-layout">
      <SupportSidebar />

      <main className="support-tickets-main">
        <TicketHeader />

        <div className="support-tickets-content">
          <TicketFilters />
          <TicketTable />
        </div>
      </main>
    </div>
  )
}

export default AllTickets

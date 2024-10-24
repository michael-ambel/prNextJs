import Link from "next/link";
import Loading from "../loading";
import TicketList from "./TicketList";
import { Suspense } from "react";


const Tickets = () => {
    return ( 
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
                <Link href='/tickets/create' className="ml-auto">
                    <button className="btn-primary">New Ticket</button>
                </Link>
                
            </nav>
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
     );
}
 
export default Tickets;
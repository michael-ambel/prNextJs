import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

async function getTickets() {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('Tickets')
    .select()

    if(error){
        console.log(error.message);
    }

    return data
}


const TicketList = async () => {

    const tickets = await getTickets()

    return ( 
        <>
            {tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0,200)}...</p>
                        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                    </Link>
                </div>
            ))}

            {tickets.length === 0 && <p className="text-center">There are no open ticket,</p> }
        </>
     );
}
 
export default TicketList;
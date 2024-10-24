import { notFound } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DeletButton from "./DeletButton";
export const dynamicParams = true; // default val = true

export async function  generateMetadata({params}){
  const id = params.id

  const supabase = createServerComponentClient({cookies})

  const {data: ticket} = await supabase.from('Tickets')
  .select()
  .eq('id', id)
  .single()

  return( {title: `BIS HelpDesk: ${ticket?.title || 'No Ticket Found'}` })
  
}

async function getTicket(id) {
    //await new Promise(resolve => setTimeout(resolve, 3000))
    
    const supabase = createServerComponentClient({cookies})
    const {data} = await supabase.from('Tickets')
    .select()
    .eq('id', id)
    .single()

    return data;
  }
  
  
  export default async function TicketDetails({ params }) {

    const supabase = createServerComponentClient({cookies})
    const {data} =await supabase.auth.getSession()
        
    const ticket = await getTicket(params.id)
    if (!ticket) {
      notFound()
    }
  
    return (
      <main>
        <nav>
          <h2>Ticket Details</h2>
          <div className="ml-auto">
            {data.session.user.email === ticket.user_email && <DeletButton id={ticket.id}/> }
          </div>
        </nav>
          <div className="card">
              <h3>{ticket.title}</h3>
              <small>Created by {ticket.user_email}</small>
              <p>{ticket.body}</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
          </div>
      </main>
    )
  }
'use server'

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function addTicket(formData) {
    
    const ticket = Object.fromEntries(formData)

    const supabase = createServerActionClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    const {error} = await supabase.from('Ticketss')
    .insert({
        ...ticket,
        user_email: session.user.email
    })

    if(error){
        throw new Error('Could not add the new ticket')
    }

    revalidatePath('/tickets')
    redirect('/tickets')

}

export async function deletTicket(id){

    const supabase = createServerActionClient({cookies})
    const {error} = await supabase.from("Tickets")
    .delete()
    .eq('id', id)

    if(error){
        throw new Error('Can not delete')
    }

    revalidatePath(`/tickets`)
    redirect(`/tickets`)
}
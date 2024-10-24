"use client"

import { useTransition } from "react";
import { TiDelete } from 'react-icons/ti'
import { deletTicket } from "../actions";

const DeletButton = ({id}) => {
    const [isPending, startTransition] = useTransition()
   
    return ( 
        <>
            <button 
            className="btn-primary"
            onClick={() => startTransition(() => deletTicket(id))}
            disabled = {isPending}>
                {isPending && <> <TiDelete /> Deleting...</>}
                {!isPending && <> <TiDelete /> Delete Ticket</>}
            </button>
        </>
     );
}
 
export default DeletButton;
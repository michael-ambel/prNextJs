"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter()
    const handleLogout = async  (e) => {
        e.preventDefault()
        
        const supabase = createClientComponentClient()
        const {error} = await supabase.auth.signOut()

        if(!error){
            router.push('/login')
        }
        if(error){
            console.log(error.message);
        }
    }
    return ( 
        <button className="btn-primary" onClick={handleLogout}>
            Logout
        </button>
     );
}
 
export default LogoutButton;
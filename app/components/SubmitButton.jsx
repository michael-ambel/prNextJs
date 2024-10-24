'use client'
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {

    const { pending } = useFormStatus();
    
    return ( 
        <button disabled = {pending} className='btn-primary'>
            {pending? <span>Submitting</span> : <span>Submit</span>}
        </button>
     );
}
 
export default SubmitButton;
import { btnContext } from './Bodier.jsx';
import { useContext } from 'react';
export function Button(){
    function toggleRefresh(){
        window.location.reload();
    }
    return(  
   <button onClick={toggleRefresh}
    className='p-2 sm:p-4 bg-white rounded-full cursor-pointer
     border-none hover:bg-gray-300
     text-2xl font-serif mt-10  ml-20 sm:ml-60'>next</button>
   )
}
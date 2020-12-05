import React ,{useContext} from 'react'
import {SubsContext} from '../context/SubsContext'
export default function Subscription({subscription}) {
    const {updateSubs,deleteSubs}=useContext(SubsContext)
        
    const handleToggleCompleted= ()=>{
        

        const updatedFields={
            ...subscription.fields,
            archive:!subscription.fields.archive

        }
        const updatedSub={id:subscription.id,fields:updatedFields}
        updateSubs(updatedSub)

    }
    return (
        <div>
            <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4 ">
                <input type="checkbox" name="marked" id="marked" checked={subscription.fields.archive} className="mr-2 form-checkbox h-5 w-5" onChange={handleToggleCompleted}/>
                <p className={`flex-1 text-gray-800 ${subscription.fields.archive?'underline':''} `} >{subscription.fields.name}</p>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded " onClick={()=>deleteSubs(subscription.id)}>Delete Me!</button>
            </li>
           


            
        </div>
    )
}

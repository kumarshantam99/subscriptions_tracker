import React, { useState, useContext } from 'react';
import { SubsContext } from '../context/SubsContext';
import Tags from './Tags'


export default function SubsForm() {
  
    const [subs,setSubs]=useState({
        name:'',
        url:'',
        amount:'',
        date:'',
        edate:'',
        
        

    })
    const initialState = {
        name:'',
        url:'',
        amount:'',
        date:'',
        edate:'',
        
      };
    const [count,setCount]=useState(0)
    const { addSubs } = useContext(SubsContext);
    const onChange = (e) => {
        
        
        setSubs({...subs,[e.target.name]:e.target.value});
      };
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        addSubs(subs)
       
        setSubs({...initialState})
        
        setCount(count + 1);
    };
    return (
        <form className="form my-6" onSubmit={handleSubmit}>
            <div className="flex flex-col text-sm mb-2">
                <label htmlFor="subscription" className="font-bold mb-2 text-gray-800 ">
                    Add a Subscription
                </label>
                
                <input
                    type="text"
                    name="name"
                    value={subs.name}
                   
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                    onChange={onChange}
                />
                <h3 className="font-bold mb-2 text-gray-800 ">
                    Date of Purchase
                </h3>
                <input
                    type="date"
                    name="date"
                    value={subs.date}
                   
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                    onChange={onChange}
                />
                <label htmlFor="subscription" className="font-bold mb-2 text-gray-800 ">
                    Date of Renewal
                </label>
                <input
                    type="date"
                    name="edate"
                    value={subs.edate}
                   
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                    onChange={onChange}
                />
                <label htmlFor="slink" className="font-bold mb-2 text-gray-800 ">
                   Link
                </label>
               
                <input
                    type="text"
                    name="url"
                    value={subs.url}
                   
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                    onChange={onChange}
                />
                
                <label htmlFor="trial" className="font-bold mb-2 text-gray-800 ">
                    Free-Trial
                </label>
                
                <label htmlFor="amount" className="font-bold mb-2 text-gray-800 ">
                    Amount
                </label>
                <input
                    type="text"
                    name="amount"
                    value={subs.amount}
                   
                    className=" appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "
                    onChange={onChange}
                />
            </div>
            <button
                type="submit"
                className=" w-full rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
            >
                Submit
            </button>
        </form>
    );
}
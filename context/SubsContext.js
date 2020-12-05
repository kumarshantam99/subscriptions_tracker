import React,{createContext, useState} from 'react'

const SubsContext=createContext()

const SubsProvider=({children})=>{
    const [subs,setSubs]=useState([])
    const refreshSubs=async()=>{
        try {
            const res=await fetch('/api/getSubs')
            const latestSubs=await res.json()
            setSubs(latestSubs)
            
        } catch (error) {
            console.error(error)
        }
    }
    const addSubs=async (subs)=>{
        try {
            
            const res = await fetch('/api/createSubs', {
                method: 'POST',
                body: JSON.stringify(subs)
            });
            console.log(res)
            const newTodos = await res.json();
            setSubs((prevSubs) => {
                const updatedSubs = [newTodos, ...prevSubs];
                return updatedSubs;
            });
        } catch (err) {
            console.error(err);
        }
    }
    const updateSubs=async(updatedSub)=>{
        try {
            const res=await fetch('/api/updateSubs',{
                method:'PUT',
                body:JSON.stringify(updatedSub),
                headers:{'Content-Type':'application/json'}
            })
            await res.json()
            setSubs((prevSubs)=>{
                const existingSubs=[...prevSubs]
                const existingSub=existingSubs.find(subscription=>subscription.id===updatedSub.id)
                existingSub.fields=updatedSub.fields
                return existingSubs
            })
            
        } catch (error) {
            console.error(error)
        }
    }
    const deleteSubs=async(id)=>{
        try {
            await fetch('/api/deleteSubs',{
                method:'DELETE',
                body:JSON.stringify({id}),
                headers:{'Content-Type':'application/json'}
            })
           
            setSubs((prevSubs)=>{
                return prevSubs.filter((sub)=>sub.id!==id)
                
            })
            
        } catch (error) {
            console.error(error)
        }
    }
    return <SubsContext.Provider value={{
        subs,setSubs,refreshSubs,updateSubs,deleteSubs,addSubs
    }}>{children}</SubsContext.Provider>
}

export {SubsProvider,SubsContext}
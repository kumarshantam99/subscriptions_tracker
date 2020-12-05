import Head from 'next/head'
import Navbar from '../components/Navbar'
import Subscription from '../components/Subscription'
import SubsForm from '../components/SubsForm'
import {table,minifyRecords} from './api/utils/Airtable'
import {SubsContext} from '../context/SubsContext'
import {useEffect,useContext} from 'react'
import auth0 from './api/utils/auth0'

export default function Home({initialSubs,user}) {
  const {subs,setSubs}=useContext(SubsContext)
  
  console.log(user)
  
  useEffect(()=>{
    setSubs(initialSubs)
  },[])

  console.log(initialSubs)
  return (
    <div >
      <Head>
        <title>Subscriptions Tracker App</title>
        
      </Head>
      <Navbar user={user} />

      <main >
        
        <br/>
        {user && (
          <>
          <h1 className="text-2xl text-center mb-4">Subscriptions Tracker</h1>
             <SubsForm/>
        <ul>
          {subs &&
        subs.map(subscription=><Subscription key={subscription.id} subscription={subscription} />)}
        </ul>
          </>
        )}
       
        
      </main>

      
    </div>
  )
}

export async function getServerSideProps(context){
  const session=await auth0.getSession(context.req)
  
  try {
    const subs=await table.select({}).firstPage()
  return {
    props:{
      initialSubs:minifyRecords(subs),
      user:session?.user || null
    }
  }
    
  } catch (error) {
    console.error(err)
    return {
      props:{
        err:"AHHH WTF!!!"
      }
    }
    
  }
  

}
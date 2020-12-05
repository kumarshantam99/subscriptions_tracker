import React from 'react'

export default function Navbar({user}) {
    return (
        <nav className="flex w-full rounded justify-between bg-gray-700 items-center py-4 px-2">
            <p className="text-2xl font-bold text-white">My Subscriptions</p>
            <div className="flex">
                {user&&(<span className="text-2l py-2 px-2 font-lg text-white">{user.name}</span>)}
                {
                    user&&(<a href="/api/logout"className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"> Logout</a>)
                }
                {
                    !user&&(<a href="/api/login"className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Login</a>)
                }
                
                
            </div>
            
        </nav>
    )
}

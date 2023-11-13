'use client'
// import prisma from '@/utils/prisma'
import React from 'react'
import useSWR from 'swr'


// Using Server Side Component:
// export default async function Admin() {
//   const orders = await prisma.order.findMany({
//     where: {
//       status: false
//     }
//   })

//   if(orders.length === 0) {
//     return (
//       <div>No orders available</div>
//     )
//   }

//   return (
//     <div>
//       <h1>Orders</h1>
//       <div>

//         {/* { JSON.stringify(orders) } */}
//         { orders.map(({ id, name, total, order, status, date }) => (
//           <div key={id} style={{border: '1px solid orange'}}>
//             <h3>{name}</h3>
//             <p>{id}</p>
//             <p>{date}</p>
//             <p>{total}</p>
//             <div>
//               {order.map((item) => (
//                 <div key={item.id}>{item.name}</div>
//               ))}
//             </div>
//             <span>Status: { !status ? 'Pending' : 'Completed' }</span>
//           </div>
//         )) }
//       </div>
//     </div>
//   )
// }

// Using Client Side Component
export default function Admin() {
  const fetcher = async () => {
    const data = await fetch('/api/orders')
    const { orders } = await data.json()
    return orders
  } 
  
  const { data: orders, error, isLoading } = useSWR('/api/orders', fetcher, {
    refreshInterval: 1000
  })

  const handleComplete = async (id) => {
    await fetch(`/api/orders/${id}`)
  }


  if (isLoading) return <div>loading...</div>

  if(error) console.log(error)

  return (
  <div>
    <h1>Orders</h1>
    <div>

      
    { orders?.map(({ id, name, total, order, status, date }) => (
      <div key={id} style={{border: '1px solid orange'}}>
        <h3>{name}</h3>
        <p>{id}</p>
        <p>{date}</p>
        <p>{total}</p>
        <div>
          {order.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
        <p>Status: { !status ? 'Pending' : 'Completed' }</p>

        <button style={{background: 'salmon'}} onClick={() => handleComplete(id)}>
          Complete Order
        </button>
      </div>
    ))}
    </div>
  </div>
)
}
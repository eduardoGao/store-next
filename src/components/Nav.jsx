'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useStoreContext } from '../context/store-context'


const getCategories = async () => {
  try {
    const res = await fetch('/api')
    const { categories } = await res.json()
  
    return categories

  } catch (error) {
    console.log(error);
  }
}
export const Nav = () => {
  const [categories, setCategories] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    getCategories().then(data => setCategories(data))  
  }, [])

  const router = useRouter()
  useEffect(() => {
    if(categories.length > 0 && pathname === '/') {
      router.push(`/category/${categories[0]?.id}`)
    }
  
  }, [categories])
  
  const { handleCurrentCategory } = useStoreContext()

  

  return (
    <nav>
      {categories.map(item => (
        <Link key={item.id} href={`/category/${item.id}`} onClick={() => handleCurrentCategory(item)} className={pathname === `/${item.id}` ? 'currentLink' : ''}>
          <li>{item.name}</li>
        </Link>
      ))}
    </nav>
  )
}

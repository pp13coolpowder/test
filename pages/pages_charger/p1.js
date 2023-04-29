import React from 'react'
import Bottom_bar from '../component/bottom_bar'
import Link from 'next/link'

export default function p1() {
  return (
    <div className=' flex justify-center'>
      <div className=' p-4' >
      <input className='rounded-full border border-slate-500' placeholder='ค้นหาจุดชาร์จ'></input>
      <div className='mt-40'>
        <Link className=' bg-white' href='/pages_charger/p2'>Go to p2</Link>
      </div>
      </div>
      <Bottom_bar/>
    </div>
  )
}

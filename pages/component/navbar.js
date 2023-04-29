import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='h-12 w-full bg-white shadow-2xl p-2 flex gap-6'>
            <Link href='/pages_charger/p1' className='flex text-blue-700'>
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0674 -2.92597e-08C10.2372 -2.18371e-08 10.411 0.067134 10.5413 0.197453C10.802 0.458091 10.802 0.884589 10.5413 1.14523L1.62042 10.0661L10.411 18.8567C10.6717 19.1174 10.6717 19.5439 10.411 19.8045C10.1504 20.0652 9.72388 20.0652 9.46324 19.8045L0.194808 10.54C-0.0658297 10.2794 -0.0658297 9.8529 0.194809 9.59226L9.58962 0.197453C9.72388 0.0631849 9.89369 -3.68541e-08 10.0674 -2.92597e-08Z" fill="#0041A4" />
                </svg>
                ย้อนกลับ
            </Link>
            <div className='text-blue-700'>จองจุดชาร์จ</div>
        </div>
    )
}

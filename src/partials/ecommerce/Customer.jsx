import React from 'react'
import Sidebar from '../Sidebar'

const Customer = () => {
  return (
   <>
   <div className='flex h-screen overflow-hidden'>
    {/* Sidebar */}
    <Sidebar />
{/* Content area */}
<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
Quản lý sản phẩm
      

      </div>
   </div>
    
   </>
  )
}

export default Customer
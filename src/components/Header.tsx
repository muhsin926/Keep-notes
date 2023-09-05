import React from 'react'
import {CiSearch} from 'react-icons/ci'

const Header = () => {
  return (
    <div className='border-b pt-2 pb-3 flex justify-center align-center'>
        <div className='w-96 p-2 bg-gray-100 rounded-md flex gap-2 items-center'>
            <CiSearch/>
            <input type="text" className='bg-gray-100'  placeholder='Search..'/>
        </div>
    </div>
  )
}

export default Header
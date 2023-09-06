import React from 'react'
import {CiSearch} from 'react-icons/ci'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSearchText } from '../store/slices/searchSlice'

const Header = () => {
    const {searchText} = useAppSelector((state) => state.searchSlice)
    const dispatch = useAppDispatch()
  return (
    <div className='border-b pt-2 pb-3 flex justify-center align-center px-5'>
        <div className='w-96 p-2 bg-gray-100 rounded-md flex gap-2 items-center'>
            <CiSearch/>
            <input type="text" value={searchText} onChange={(e) => dispatch(setSearchText(e.target.value))} className='bg-gray-100 focus:outline-none'  placeholder='Search..'/>
        </div>
    </div>
  )
}

export default Header
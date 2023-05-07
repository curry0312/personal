import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  return (
    <nav className='fixed left-0 right-0 flex justify-around items-center p-4 z-40 bg-white'>
      <div className='font-francois font-bold text-purple-700 text-3xl'>WANG</div>
      <div className='flex gap-4 items-center'>
        <AnchorLink href='#home' className='text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white'>Home</AnchorLink>
        <AnchorLink href='#about' className='text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white'>About</AnchorLink>
        <AnchorLink href='#projects' className='text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white'>Projects</AnchorLink>
        <AnchorLink href='#contact' className='text-purple-900 font-outfit text-xl transition-colors duration-200 ease-linear rounded-md px-2 py-1 hover:bg-purple-700 hover:text-white'>contact</AnchorLink>
      </div>
    </nav>
  )
}

export default Navbar

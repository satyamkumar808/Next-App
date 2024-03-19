import React from 'react'

function Container({children}: {children:React.ReactNode}) {
  return (
    <div className='flex items-center flex-col p-5 h-lvh bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100'>
        {children}
    </div>
  )
}

export default Container
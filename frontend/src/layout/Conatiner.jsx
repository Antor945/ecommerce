import React from 'react'

const Conatiner = ({className,children}) => {
  return (
    <div className={`container mx-auto ${className}`}>
     {children}
    </div>
  )
}

export default Conatiner
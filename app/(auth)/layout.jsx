import React from 'react'

const layout = ({ children }) => {
    return (
        <div className="flex items-center justify-center" >
            {children}
        </div >
    )
}

export default layout
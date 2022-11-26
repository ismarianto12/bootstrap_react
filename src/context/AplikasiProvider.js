import React, { createContext } from 'react'

const AplikasiContext = createContext()

const AplikasiProvider = ({ children }) => {
    const user = {
        name: 'Ismarianto'
    }

    return (
        <AplikasiContext.Provider value={{ user }}>
            {children}
        </AplikasiContext.Provider>
    )
}


export { AplikasiContext }
export default AplikasiProvider
import { createContext, useEffect, useState } from 'react'

interface MenuContextType {
  isMenuActive: boolean
  activeMenu: any
}

export const MenuContext = createContext({} as MenuContextType)

export function MenuProvider({ children }) {
  const [isMenuActive, setIsActive] = useState(false)

  function activeMenu() {
    if (isMenuActive === false) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <MenuContext.Provider value={{ isMenuActive, activeMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

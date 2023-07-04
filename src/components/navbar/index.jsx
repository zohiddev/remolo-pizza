import { useEffect, useState } from 'react'
import { BurgerIcon } from '../ui/BurgerIcon'
import { Logo } from '../ui/Logo'
import { PagesList } from '../lists/PagesList'
import { pagesData } from '../../data/pages'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const [activePage, setActivePage] = useState(pathname)

  useEffect(() => {
    setActivePage(pathname)
  }, [pathname])

  if (pathname === '/login') {
    return null
  }

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className='navbar__logo-row'>
        <Logo additionalClasses={['navbar__logo']} />
        <BurgerIcon clickHandler={() => setIsOpen(!isOpen)} />
      </div>
      <PagesList pagesData={pagesData} activePage={activePage} />
    </div>
  )
}

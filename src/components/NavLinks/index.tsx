import { MouseEventHandler, useEffect } from 'react'
import { listNavLinks } from '../../utils/listNavLinks'
import { Anchor } from '../Anchor'
import { NavItem } from '../NavItem'
import ReactSwitch from 'react-switch'
import * as Styled from './styles'
import { DarkModeIcon } from '../../assets/svgs/DarkModeIcon'
import { LightModeIcon } from '../../assets/svgs/LightModeIcon'
import usePersistedState from '../../hooks/usePersistedState'

type Props = {
  isOpen: boolean
  onClick: MouseEventHandler
}

export const NavLinks = ({ isOpen, onClick }: Props) => {
  const [theme, setTheme] = usePersistedState('@theme', false)

  const handleChangeTheme = () => {
    setTheme(prevState => !prevState)
  }

  useEffect(() => {
    if (theme) document.body.classList.remove('darkmode')
    else document.body.classList.add('darkmode')
  }, [theme])

  return (
    <Styled.NavLinks isOpen={isOpen}>
      {listNavLinks.map(({ sectionName, link }, index) => (
        <NavItem key={index}>
          <Anchor onClick={onClick} link={link}>
            {sectionName}
          </Anchor>
        </NavItem>
      ))}
      <ReactSwitch
        onColor="#00008B"
        offColor="#62ABD9"
        checkedIcon={DarkModeIcon}
        uncheckedIcon={LightModeIcon}
        onChange={handleChangeTheme}
        checked={theme}
      />
    </Styled.NavLinks>
  )
}

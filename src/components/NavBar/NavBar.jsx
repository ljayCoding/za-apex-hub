import { Avatar, Box, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { useState } from 'react'
import {
  faDiscord,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import LinkButton from '../LinkButton/LinkButton'
import MenuLinkIcon from '../MenuLinkIcon/MenuLinkIcon'
import useLocalStorage from 'use-local-storage'

const NavBar = () => {
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('lg'))

  const [showMenu, setShowMenu] = useState(false)

  const [user] = useLocalStorage('user')

  const clickHandler = () => {
    setShowMenu((current) => !current)
  }

  return (
    <Box
      sx={{
        borderBottom: '2px black solid',
        backgroundColor: '#073B4C',
        position: 'sticky',
        top: '0px',
      }}
    >
      <MenuLinkIcon
        to="https://discord.gg/qSdEMMAFGj"
        right="0px"
        icon={faDiscord}
      />
      <MenuLinkIcon
        to="https://twitter.com/ApexAfrUpdates"
        right="30px"
        icon={faTwitter}
      />
      <MenuLinkIcon
        to="https://www.youtube.com/@ApexAfricaHub"
        right="57px"
        icon={faYoutube}
      />
      {desktop ? (
        <Box>
          <LinkButton to="/" name="home" />
          <LinkButton to="/tournaments" name="tournaments" />
          <LinkButton to="/clip-submission" name="clip submission" />
          {!user ? <LinkButton to="/sign-in" name="sign in" /> : <Avatar />}
        </Box>
      ) : (
        <>
          {showMenu || (
            <MenuIcon
              sx={{
                fontSize: '30px',
                marginTop: '5px',
                marginLeft: '2px',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={clickHandler}
            />
          )}
          {showMenu && (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <MenuOpenIcon
                sx={{
                  fontSize: '30px',
                  marginTop: '5px',
                  marginLeft: '2px',
                  '&:hover': { cursor: 'pointer' },
                }}
                onClick={clickHandler}
              ></MenuOpenIcon>{' '}
              <LinkButton to="/" name="home" />
              <LinkButton to="/tournaments" name="tournaments" />
              <LinkButton to="/clip-submission" name="clip submission" />
              <LinkButton to="/sign-in" name="sign in" />
            </Box>
          )}
        </>
      )}{' '}
    </Box>
  )
}

export default NavBar

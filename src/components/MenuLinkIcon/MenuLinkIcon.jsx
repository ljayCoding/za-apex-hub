import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const MenuLinkIcon = ({ icon, to }) => {
  return (
    <Link to={to} style={{ color: '#06D6A0' }} rel="noreferrer" target="_blank">
      <FontAwesomeIcon
        style={{
          marginRight: '5px',
          marginTop: '7px',
          fontSize: '20px',
        }}
        icon={icon}
      ></FontAwesomeIcon>
    </Link>
  )
}
export default MenuLinkIcon

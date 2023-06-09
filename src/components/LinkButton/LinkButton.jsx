import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const LinkButton = ({ to, name, ...props }) => {
  return (
    <Button
      {...props}
      component={Link}
      to={to}
      sx={{
        '&:hover': {
          fontWeight: 'bold',
        },
      }}
    >
      {name}
    </Button>
  )
}
export default LinkButton

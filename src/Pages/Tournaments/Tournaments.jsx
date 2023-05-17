import { Box, Typography, Button } from '@mui/material'
import CreateNewTournament from '../../components/CreateNewTournament/CreateNewTournament'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react'

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {showModal && (
          <CreateNewTournament onClose={handleModalClose} open={showModal} />
        )}
        <Typography variant="h5" sx={{ marginTop: '5px' }}>
          Tournaments
        </Typography>
        <Button
          variant="contained"
          sx={{
            margin: '25px 0 10px 0',
            fontSize: '12px',
            width: '110px',
            height: '45px',
            color: '#222222',
            '&:hover': {
              fontWeight: 'bold',
            },
          }}
          onClick={() => {
            setShowModal(true)
          }}
        >
          Create Custom
        </Button>
        <Box>
          <Typography
            variant="p1"
            sx={{
              fontWeight: 'bold',
            }}
          >
            * COMING SOON! *
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default Tournaments

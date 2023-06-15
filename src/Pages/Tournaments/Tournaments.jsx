import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  CircularProgress,
} from '@mui/material'
import CreateNewTournament from '../../components/CreateNewTournament/CreateNewTournament'
import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false)

  const [tournaments, setTournaments] = useState()

  const handleModalClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    axios.get('http://localhost:3000/tournament').then((tournaments) => {
      setTournaments(tournaments.data)
    })
  }, [])

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
        {!tournaments ? (
          <CircularProgress />
        ) : (
          <List>
            {tournaments?.map((tournament) => (
              <ListItem key={tournament.id}>
                {JSON.stringify(tournament)}
              </ListItem>
            ))}
          </List>
        )}
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

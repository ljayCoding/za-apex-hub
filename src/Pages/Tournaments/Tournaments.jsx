import {
  Box,
  Button,
  CircularProgress,
  Input,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'

import CreateNewTournament from '../../components/CreateNewTournament/CreateNewTournament'
import NavBar from '../../components/NavBar/NavBar'
import axios from 'axios'

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false)
  const [tournaments, setTournaments] = useState()
  const [update, setUpdate] = useState()
  const [isLoading, setIsLoading] = useState()
  let nameRef = useRef()

  const handleModalClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    setIsLoading(true)

    axios
      .get('http://localhost:4000/tournament')
      .then((tournaments) => {
        setTournaments(tournaments.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [update])

  const createHandler = () => {
    if (nameRef.current.value !== '') {
      setIsLoading(true)

      axios
        .post('http://localhost:4000/tournament', {
          name: nameRef.current.value,
        })
        .then(() => {
          setUpdate(new Date())

          nameRef.current.value = ''
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
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
        <Input
          inputRef={nameRef}
          sx={{ background: 'white', color: 'black' }}
        />
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
            '&:disabled': {
              background: 'grey',
            },
          }}
          disabled={isLoading}
          onClick={() => {
            createHandler()
          }}
        >
          Create Custom
        </Button>
        {isLoading && <CircularProgress />}
        {tournaments && tournaments.length > 0 && (
          <List>
            {tournaments?.map((tournament) => (
              <ListItem key={tournament.id}>
                {JSON.stringify(tournament)}
              </ListItem>
            ))}
          </List>
        )}
        {tournaments && tournaments.length == 0 && (
          <Typography sx={{ color: 'red' }}>No tournaments found</Typography>
        )}
      </Box>
    </>
  )
}
export default Tournaments

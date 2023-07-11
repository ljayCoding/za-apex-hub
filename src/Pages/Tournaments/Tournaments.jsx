import { Box, Typography, Button } from '@mui/material'
import CreateNewTournament from '../../components/CreateNewTournament/CreateNewTournament'
import { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import data from '../../data/tournaments.json'

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false)
  const [tournaments, setTournaments] = useState()

  const handleModalClose = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await data
        setTournaments(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
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
        {tournaments &&
          tournaments.map((tournament) => (
            <Box
              key={tournament.id}
              sx={{
                minHeight: '200px',
                minWidth: '85%',
                maxWidth: '85%',
                display: 'column',
                border: '1px solid black',
                margin: 'auto',
                borderRadius: '25px',
                backgroundColor: '#073B4C',
                boxShadow: '0px 0px 2px black',
                marginBottom: '20px',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#118AB2',
                  borderRadius: '25px 25px 0px 0px',
                  position: 'relative',
                  top: '-10px',
                  height: '35px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    margin: '10px',
                    textDecoration: 'underline',
                    position: 'relative',
                    textAlign: 'center',
                    textShadow: '2px 1px black',
                    fontSize: '22px',
                  }}
                >
                  {tournament.name}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  textShadow: '2px 1px black',
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                {tournament.description}
              </Typography>
              <Box
                sx={{
                  borderBottom: '2px grey solid',
                  margin: '15px 15px 5px 15px',
                }}
              ></Box>
              <Box
                sx={{
                  width: '95%',
                  display: 'flex',
                  margin: 'auto',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      textShadow: '2px 1px black',
                    }}
                  >
                    Games : {tournament.games}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      textShadow: '2px 1px black',
                    }}
                  >
                    When : {tournament.date}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      textShadow: '2px 1px black',
                    }}
                  >
                    {' '}
                    Mode : {tournament.type}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: 'white',
                      textShadow: '2px 1px black',
                      textAlign: 'right',
                    }}
                  >
                    Prize : R{tournament.prize}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'white',
                      textShadow: '2px 1px black',
                      marginTop: '20px',
                      textAlign: 'right',
                    }}
                  >
                    Host : {tournament.host.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </>
  )
}
export default Tournaments

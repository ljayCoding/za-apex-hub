import { Box, Typography, Button } from '@mui/material';
import CreateNewTournament from '../CreateNewTournament/CreateNewTournament';
import NavBar from '../NavBar/NavBar';
import { useState } from 'react';

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Box>
      <NavBar />
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: '5px' }}
      >
        Tournaments
      </Typography>
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          right: '15px',
          marginTop: '25px',
          fontSize: '12px',
          fontWeight: 'bold',
          width: '110px',
          height: '45px',
          color: '#222222',
          zIndex: '1',
        }}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Create Custom
      </Button>
      {showModal && (
        <CreateNewTournament onClose={handleModalClose} open={showModal} />
      )}
      <Box>
        <Typography
          variant="p1"
          sx={{
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          * COMING SOON! *
        </Typography>
      </Box>
    </Box>
  );
};
export default Tournaments;

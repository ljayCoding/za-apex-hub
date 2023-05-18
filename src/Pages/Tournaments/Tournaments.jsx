import { Box, Typography, Button } from '@mui/material';
import CreateNewTournament from '../../components/CreateNewTournament/CreateNewTournament';
import { useState } from 'react';

const Tournaments = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Box>
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
          width: '110px',
          height: '45px',
          color: '#222222',
          zIndex: '1',
          '&:hover': {
            fontWeight: 'bold',
          },
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

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
} from '@mui/material'

// eslint-disable-next-line react/prop-types
const CreateNewTournament = ({ onClose, open }) => {
  return (
    <Box>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            backgroundColor: '#222222',
          },
        }}
      >
        <DialogTitle sx={{ marginBottom: '-15px', textAlign: 'center' }}>
          CREATE NEW APEX CUSTOM
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              textAlign: 'center',
              marginBottom: '15px',
              color: 'white',
            }}
          >
            Enter tournament details below
          </DialogContentText>
          <Typography sx={{ color: 'white' }}>Tournament Name *</Typography>
          <TextField sx={{ input: { color: '#EF476F' } }}></TextField>
          <Typography sx={{ color: 'white' }}>Prize *</Typography>
          <TextField sx={{ input: { color: '#EF476F' } }}></TextField>
          <FormControl>
            <Typography
              id="demo-row-radio-buttons-group-label"
              sx={{ marginTop: '15px', color: 'white' }}
            >
              Type
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 14,
                  },
                }}
                color="#EF476F"
                value="BR"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#EF476F',
                      },
                    }}
                  />
                }
                label="BR"
              />
              <FormControlLabel
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 14,
                  },
                }}
                value="TDM"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#EF476F',
                      },
                    }}
                  />
                }
                label="TDM"
              />
              <FormControlLabel
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 14,
                  },
                }}
                value="Control"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#EF476F',
                      },
                    }}
                  />
                }
                label="Control"
              />
              <FormControlLabel
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 14,
                  },
                }}
                value="Gun Run"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#EF476F',
                      },
                    }}
                  />
                }
                label="Gun Run"
              />
              <FormControlLabel
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 14,
                  },
                }}
                value="Other"
                control={
                  <Radio
                    sx={{
                      '&.Mui-checked': {
                        color: '#EF476F',
                      },
                    }}
                  />
                }
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{ marginTop: '20px', display: 'flex', justifyContent: 'right' }}
          >
            <Button onClick={onClose}>Cancel</Button>
            <Button
              variant="contained"
              sx={{ color: '#222222', marginLeft: '5px' }}
              onClick={onClose}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}
export default CreateNewTournament

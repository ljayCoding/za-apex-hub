import { Box, Typography } from '@mui/material'
import ClipOfTheWeek from '../../components/ClipOfTheWeek/ClipOfTheWeek'
import NavBar from '../../components/NavBar/NavBar'
import NewestVideo from '../../components/NewestVideo/NewestVideo'

const Home = () => {
  const editorLink = 'https://twitter.com/Redactbtw'
  const editorName = 'redactbtw'
  const src = 'https://www.youtube-nocookie.com/embed/5OcGTFro8CE'

  const tweetId = '1677855575273611264'
  const ownerName = 'apacass'
  const ownerURL = 'https://twitter.com/Apacasslol'

  return (
    <Box>
      <NavBar />
      <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '5px' }}>
        Welcome!
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', color: 'white', padding: '5px' }}
      >
        This is the home to all African tournament, roster and result updates!
        Additional features coming soon...
      </Typography>
      <ClipOfTheWeek
        tweetId={tweetId}
        ownerName={ownerName}
        ownerURL={ownerURL}
      />
      <NewestVideo editorLink={editorLink} editorName={editorName} src={src} />
      <Box sx={{ height: '15px' }} />
    </Box>
  )
}
export default Home

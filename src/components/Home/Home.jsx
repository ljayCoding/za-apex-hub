import { Box } from '@mui/material';
import ClipOfTheWeek from '../ClipOfTheWeek/ClipOfTheWeek';
import NavBar from '../NavBar/NavBar';
import NewestVideo from '../NewestVideo/NewestVideo';

const Home = () => {
  const editorLink = 'https://twitter.com/Redactbtw';
  const editorName = 'redactbtw';
  const src = 'https://www.youtube-nocookie.com/embed/3UewaNNIEc8';

  const tweetId = '1654903694591156231';
  const ownerName = 'ThendoPlays';
  const ownerURL = 'https://www.twitch.tv/thendoplays';

  return (
    <Box>
      <NavBar />
      <NewestVideo
        editorLink={editorLink}
        editorName={editorName}
        src={src}
      />
      <ClipOfTheWeek
        tweetId={tweetId}
        ownerName={ownerName}
        ownerURL={ownerURL}
      />
    </Box>
  );
};
export default Home;

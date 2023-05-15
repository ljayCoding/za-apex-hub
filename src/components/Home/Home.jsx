import { Box } from '@mui/material';
import ClipOfTheWeek from '../ClipOfTheWeek/ClipOfTheWeek';
import NavBar from '../NavBar/NavBar';
import NewestVideo from '../NewestVideo/NewestVideo';

const Home = () => {
  const editorLink = 'https://twitter.com/Redactbtw';
  const editorName = 'redactbtw';
  const src = 'https://www.youtube-nocookie.com/embed/3UewaNNIEc8';

  const tweetId = '1656424927270977537';
  const ownerName = 'apacass';
  const ownerURL = 'https://www.twitch.tv/apacass';

  return (
    <Box>
      <NavBar />
      <ClipOfTheWeek
        tweetId={tweetId}
        ownerName={ownerName}
        ownerURL={ownerURL}
      />
      <NewestVideo
        editorLink={editorLink}
        editorName={editorName}
        src={src}
      />
    </Box>
  );
};
export default Home;

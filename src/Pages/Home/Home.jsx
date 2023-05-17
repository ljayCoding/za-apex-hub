import { Box } from '@mui/material';
import ClipOfTheWeek from '../../components/ClipOfTheWeek/ClipOfTheWeek';
import NavBar from '../../components/NavBar/NavBar';
import NewestVideo from '../../components/NewestVideo/NewestVideo';

const Home = () => {
  const editorLink = 'https://twitter.com/Redactbtw';
  const editorName = 'redactbtw';
  const src = 'https://www.youtube-nocookie.com/embed/3UewaNNIEc8';

  const tweetId = '1657682576696377344';
  const ownerName = 'wrexu';
  const ownerURL = 'https://www.twitch.tv/wrex_u';

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

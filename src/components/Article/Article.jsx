import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import articles from '../../data/articles.json';
import NavBar from '../NavBar/NavBar';

// eslint-disable-next-line react/prop-types
const Article = () => {
  const { id } = useParams();

  const article = articles.find((article) => article.id.toString() === id);

  if (!article) {
    return <Box>Article not found</Box>;
  }
  return (
    <Box>
      <NavBar />
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          textDecoration: 'underline',
          margin: '15px',
        }}
      >
        {article.title}
      </Typography>
      {article.contents?.map((paragraph, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            textAlign: 'center',
            margin: '15px',
            color: 'white',
            textShadow: '2px 1px black',
          }}
        >
          {paragraph}
        </Typography>
      ))}
      <Box sx={{ height: '50px' }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'right',
            margin: '10px',
          }}
        >
          - {article.writer}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'right',
            margin: '10px',
          }}
        >
          {article.date}
        </Typography>
      </Box>
    </Box>
  );
};
export default Article;

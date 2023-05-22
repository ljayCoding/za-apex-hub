import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import articles from '../../data/articles.json';

const News = () => {
  return (
    <Box>
      <NavBar />
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: '5px' }}
      >
        News Page
      </Typography>
      <Box>
        {articles.map((article) => (
          <Box
            key={article.id}
            sx={{
              margin: 'auto',
              marginTop: '20px',
              backgroundColor: '#073B4C',
              borderRadius: '10px',
              width: '90%',
              boxShadow: '0 0 5px 1px black',
              backgroundImage: article.background,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '10px',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                textDecoration: 'underline',
                textShadow: '1px 1px black',
              }}
            >
              {article.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                margin: '5px',
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '2px 1px black',
              }}
            >
              {article.contents[0].substring(0, 200)}-{''}
              <Link
                style={{ color: '#06D6A0', margin: '5px' }}
                to={`/news/${article.id}`}
              >
                Read more
              </Link>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default News;

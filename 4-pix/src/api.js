import axios from 'axios';

const searchImages = async (term, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_MY_API_KEY}`,
    },
    params: {
      query: term,
      page: page,
      per_page: 16,
    },
  });

  return response.data.results;
};

export default searchImages;

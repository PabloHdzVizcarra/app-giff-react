
const apiKey = 'Y3sQL5q2C62I3f3yL7dCOJ8FcnmNv3H1';



export const getGifs = async ({keyword = 'morty'}) => {

  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  const res = await fetch(apiUrl);
  const response = await res.json();
  const { data = [] } = response;
  if (Array.isArray(data)) { // comprobamos si recibimos un array

    const gifs = data.map(image => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;

      return {title, id, url}
    });
    
    return gifs;
  }
}
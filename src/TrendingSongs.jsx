import { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './SongList.jsx';

const TrendingSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const API_KEY = 'TU_API_KEY_AQUI'; // Reemplaza con tu API key de Last.fm
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`)
      .then(response => {
        setSongs(response.data.tracks.track);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Songs</h1>
      <input
        type="text"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <SongList songs={filteredSongs} />
    </div>
  );
};

export default TrendingSongs;

import PropTypes from 'prop-types';

const SongList = ({ songs }) => {
  return (
    <ul>
      {songs.map((song, index) => (
        <li key={index}>
          <strong>{song.name}</strong> by {song.artist.name}
        </li>
      ))}
    </ul>
  );
};

// Define los tipos de las props
SongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artist: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default SongList;

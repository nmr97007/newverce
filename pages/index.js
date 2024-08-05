// pages/index.js
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch data. Please check the URL and try again.');
    }
  };

  return (
    <div>
      <h1>Dynamic Site Fetcher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter site address"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Fetch Data</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;

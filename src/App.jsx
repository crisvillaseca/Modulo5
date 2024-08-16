
import './index.css';
import TrendingSongs from './TrendingSongs';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100 min-h-screen">
        <header className="App-header text-center py-5">
          <h1 className="text-4xl font-bold text-blue-600">Music App</h1>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<TrendingSongs />} />
            </Routes>
          </ErrorBoundary>
        </header>
      </div>
    </Router>
  );
}

export default App;

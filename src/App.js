import ThreejsBackground from './components/ThreejsBackground';
import Dashboard from './components/Dashboard';

function App() {
  const backgroundOn = false;
  return (
    <div className="App">
      {backgroundOn && <ThreejsBackground />}

      <Dashboard />
    </div>
  );
}

export default App;

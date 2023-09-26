import './App.css';
import { Input } from './components/Input/Input';

function App() {
  const handleChange = (event) => {
    console.log(`Your value is ${event.target.value}`);
  }
  return (
    <div className="App">
      <Input onChange={handleChange} />
    </div>
  );
}

export {App};

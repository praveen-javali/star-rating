import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating.component';

function App() {
  return (
    <div className="App">
     
      {[...Array(5)].map(() => {
        return (
          <label>
            <input type="radio" name="rating">
             <StarRating />
          </label>
          </
        );
      })}
    </div>
  );
}

export default App;

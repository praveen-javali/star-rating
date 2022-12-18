import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating.component';

function App() {
  <
  {[...Array(5)].map(() => {
        return (
          <label>
            <input type="radio" name="rating">
              <FaStar size={50} />
            </input>
          </label>
        );
      })}
  );
}

export default App;

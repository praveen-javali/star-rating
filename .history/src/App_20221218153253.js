
import "./App.css";
import StarRating from "./components/StarRating.component";

function App() {
  return (
    <div className="App">
      <StarRating />
      <>
        {[...Array(5)].map(() => {
          return (
            <label>
              <input type="radio" name="rating"></input>
            </label>
          );
        })}
      </>
    </div>
  );
}

export default App;

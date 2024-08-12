import ImageUpload from "./component/ImageUpload";
import "./App.css";
import Buttons from "./component/Buttons";

const App = () => {
  return (
    <div className="App">
      <div className="p-3">
        <Buttons />
      </div>
      <ImageUpload />
    </div>
  );
};

export default App;

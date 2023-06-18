import "../style.css";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Data from "../data";
function App() {
  const data = Data.map(function (item) {
    return <MainContent item={item} />;
  });

  return (
    <div className="container">
      <Navbar />
      <div className="grid-container">
        <div class="grid-item1">{data[0]}</div>
        <div class="grid-item2">{data[1]}</div>
        <div class="grid-item3">{data[2]}</div>
        <div class="grid-item4">{data[3]}</div>
        <div class="grid-item5">{data[4]}</div>
        <div class="grid-item6">{data[5]}</div>
        <div class="grid-item7">{data[6]}</div>
        <div class="grid-item8">{data[7]}</div>
        <div class="grid-item9">{data[8]}</div>
      </div>
    </div>
  );
}

export default App;

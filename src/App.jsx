import useSwitch from "./useSwitch";
import useDate from "./useDate"
function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

  return (
    <>
      <div>
        <h2>Snack 1</h2>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <h2>Snack 2</h2>
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </>

  );
}

export default App;
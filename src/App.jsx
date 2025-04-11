import useSwitch from "./useSwitch";
import useDate from "./useDate"
import useCustomPointer from "./useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch(); //snack 1
  const currentDate = useDate(); //snack 2
  const customPointer = useCustomPointer("🔥"); //snack 3

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

      <h2>Snack 3</h2>
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>
    </>

  );
}

export default App;
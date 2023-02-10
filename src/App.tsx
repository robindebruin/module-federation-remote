import BlaBla from "./components/Button";

function App() {
  return (
    <div>
      <h1>Module federation remote component</h1>
      <div>
        <BlaBla caption="TEST" callback={() => {}} />
      </div>
    </div>
  );
}

export default App;

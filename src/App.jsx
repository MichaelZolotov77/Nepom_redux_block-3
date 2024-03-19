function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Counter />
    </div>
  );
}

const Counter = () => {
  return (
    <div>
      <h2>0</h2>
      <button>-</button>
      <button>+</button>
      <button>reset</button>
    </div>
  );
};

export default App;

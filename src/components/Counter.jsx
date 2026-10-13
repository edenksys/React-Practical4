<div className="counter">
  <h2>Counter Example</h2>
  <h3>{count}</h3>

  <button onClick={() => setCount(count + 1)}>
    Increase
  </button>

  <button onClick={() => setCount(count - 1)}>
    Decrease
  </button>

  <button onClick={() => setCount(0)}>
    Reset
  </button>
</div>
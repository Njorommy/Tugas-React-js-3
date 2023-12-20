import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  }; 

  return (
    <div>
      <h1>Counter</h1>
      <p>Nilai: {count}</p>
      <button onClick={incrementCount}>Tambah</button>
      <button onClick={decrementCount}>Kurangi</button>
    </div>
  );
}

// Komponen Header yang dapat digunakan kembali
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// Komponen Button yang dapat digunakan kembali
function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

export {Counter, Header, Button};







export default Counter;

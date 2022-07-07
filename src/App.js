import React from 'react';
import { createContext, useContext, useState } from 'react';
const MyContext = createContext({
  value: 0,
  incremnet: () => {},
  decremnet: () => {},
});

const MyProvider = ({ children }) => {
  const [value, setValue] = useState(false);
  const state = {
    value,
    incremnet: () => setValue(value + 1),
    decremnet: () => setValue(value - 1),
  };

  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

const Incremnet = () => {
  const { incremnet } = useContext(MyContext);
  return (
    <div>
      <button onClick={incremnet}>Increment</button>
    </div>
  );
};
const Decremnet = () => {
  const { decremnet } = useContext(MyContext);
  return (
    <div>
      <button onClick={decremnet}>Decrement</button>
    </div>
  );
};
const Label = () => {
  const { value } = useContext(MyContext);
  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};
export default function App() {
  return (
    <MyProvider>
      <Incremnet />
      <Decremnet />
      <Label />
    </MyProvider>
  );
}

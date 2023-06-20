import { useState } from "react";
import { Layout } from "./components";

function App() {
  return <Layout />;


//   const [state, setState] = useState(
//     {
//       count1: 1,
//       count2: 19,
//       count3: 1,
//     },
  
//   )
//   return (
//     <>
//       <button onClick={() => setState({ ...state , count1: state.count1 + 1 })}>Click me { state.count1}</button>
//       <button onClick={() => setState({ ...state , count2: state.count2 + 1 })}>Click me { state.count2}</button>
//       <button onClick={() => setState({ ...state , count3: state.count3 + 1 })}>Click me { state.count3}</button>
//     </>
//   )
}

export default App;

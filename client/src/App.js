import {Routes,Route} from "react-router-dom"
import {Home,Login} from './containers/Public'
import {Header} from "./containers/Public"
import {path} from './utils/constant'
import { AiFillInsurance } from "react-icons/ai"
import { useState } from "react"
// function App() {
//   return (
//     <div className="h-screen w-screen bg-primary">
//         <Routes>
//         <Route path={path.HOME} element={<Home />}/>
//             <Route path={path.LOGIN} element={<Login />}>
//         </Route>
//         </Routes>
//     </div>
//   );
// }

// export default App;

export default function App() {
  const [ showLogin, setShowLogin ] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(x => !x);
  };

  return (
    <div className="h-screen w-screen bg-primary">
      <Header onLoginClick={handleLoginClick} />
      <Home />
      {showLogin && <Login />}
    </div>
  )
}
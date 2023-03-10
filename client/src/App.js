import React from 'react'
import 'materialize-css'
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  const routes = useRoutes(true)
  return (
      <BrowserRouter>
          {routes}
      </BrowserRouter>

  )
}

export default App;

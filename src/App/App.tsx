import { BrowserRouter, Routes, Route } from "react-router-dom";

import RecipePage from "./pages/RecipePage";
import RecipesPage from "./pages/RecipesPage";

import "styles/settings.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/recipe">
          <Route path=":id" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

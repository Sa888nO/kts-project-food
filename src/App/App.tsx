import RecipePage from "@pages/RecipePage";
import RecipesPage from "@pages/RecipesPage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import "@styles/settings.scss";

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

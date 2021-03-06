import RecipeListScreen from "./recipe/screens/RecipeListScreen";
import {Route, Routes, Navigate} from "react-router-dom";
import RecipeScreen from "./recipe/screens/RecipeScreen";

function App() {
  return (
    <div >
        <Routes>
            <Route exact path="/" element={<Navigate to="/recipes" />}/>
            <Route exact path="/recipes" element={<RecipeListScreen/>}/>
            <Route exact path="/recipes/:recipeId" element={<RecipeScreen/>}/>
        </Routes>
    </div>
  );
}


export default App;

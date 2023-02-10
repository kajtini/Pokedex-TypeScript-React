import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon/Pokemon";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <div className="flex flex-col items-center bg-primary font-primary text-accent min-h-screen">
      <Navbar />
      <Layout>
        <Routes>
          <Route>
            <Route path="/pokemon">
              <Route index element={<Pokedex />} />
              <Route path=":id" element={<Pokemon />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

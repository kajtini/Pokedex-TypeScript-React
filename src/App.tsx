import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon/Pokemon";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <div className="flex flex-col items-center bg-primary font-primary text-accent min-h-screen">
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon">
            <Route index element={<Pokedex />} />
            <Route path=":id" element={<Pokemon />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

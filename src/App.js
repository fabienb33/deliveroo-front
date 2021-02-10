import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Hero";
import Content from "./Content";
import Header from "./Header";
import Panier from "./Panier";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-front-fab.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p> En cours de chargement...</p>
  ) : (
    <div>
      <Header />
      <Hero data={data.restaurant} />
      <div className="content">
        <div className="contentMenu">
          <Content data={data.categories} />
        </div>
        <Panier />
      </div>
    </div>
  );
}

export default App;

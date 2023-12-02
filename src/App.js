import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./components/navbar/navbar";
import Router from "./router/router";
import "./App.css";
import { useState } from "react";
import { LanguageContext } from "./context/language";
import { ThemeContext } from "./context/theme";

function App() {
  const [contextLang, setContextLang] = useState("EN");
  const [contextTheme, setContextTheme] = useState("Light");
  return (
    <BrowserRouter>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
          <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
            <HeaderNav />
            <div className={contextTheme === 'Light' ? 'container bg-light': "container bg-dark"}>
              <Router/>
            </div>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

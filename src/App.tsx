import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/appRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

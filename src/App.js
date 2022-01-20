import { GameProvider } from "./context/game.context";
import Game from "./components/Game";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Container from "./styles/AppStyles";
import MenuPage from "./components/MenuPage";

function App() {
  const location = useLocation();
  return (
    <Container>
      <GameProvider>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="pageSlider"
            mountOnEnter={false}
            unmountOnExit={true}
          >
            <Routes key={location}>
              <Route path="/" element={<MenuPage />} />
              <Route exact path="/Game" element={<Game />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </GameProvider>
    </Container>
  );
}

export default App;

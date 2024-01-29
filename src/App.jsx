import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Header>Header</Header>
      <div className="wrap1216">
        <Main>Main</Main>
      </div>
      <Footer>Footer</Footer>
    </div>
  );
};

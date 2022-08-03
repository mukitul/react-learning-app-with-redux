import {
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomeScreen from "./components/screens/home/HomeScreen";

const getMainLayout = () => {
  return (<MainLayout>
    <Routes>
      <Route path={"/home"} element={<HomeScreen />} />
      <Route path={"*"} element={<HomeScreen />} />
    </Routes>
  </MainLayout>)

}

function App() {
  return (
    <>
      {getMainLayout()}
    </>
  );
}

export default App;
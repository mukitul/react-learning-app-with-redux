import {
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomeScreen from "./components/screens/home/HomeScreen";
import { AppRoutes } from "./utils/AppRoutes";

const getMainLayout = () => {
  return (<MainLayout>
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomeScreen />} />
      <Route path={AppRoutes.ANY} element={<HomeScreen />} />
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
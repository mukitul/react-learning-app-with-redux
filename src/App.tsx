import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <div className="App">
            <MainLayout>
                    <Routes>
                        <Route path={"/login"}
                               element={<LoginScreen/>}
                        />
                        <Route path={"/home"}
                               element={<HomeScreen/>}
                        />
                    </Routes>
            </MainLayout>

        </div>
    );
}

export default App;

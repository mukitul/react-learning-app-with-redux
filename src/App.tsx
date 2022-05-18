import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <div className="App">
            <MainLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/login'}
                               element={LoginScreen()}
                        />
                        <Route path={'/home'}
                               element={HomeScreen()}
                        />
                    </Routes>
                </BrowserRouter>
            </MainLayout>

        </div>
    );
}

export default App;

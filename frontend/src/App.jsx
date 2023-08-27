import React from "react";

import { ChakraProvider, Card, Text, Button } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./utils/ProtectedRoute";

import theme from "./theme/theme";

import Landing from "./pages/Landing";
import Python from "./pages/Python";
import PythonSetup from "./pages/PythonPages/PythonSetup";
import Login from "./pages/Login";
import Leetcode from "./pages/Leetcode";
import PythonFundamentals from "./pages/PythonPages/PythonFundamentals";
import Conditionals from "./pages/PythonPages/Conditionals";
import Functions from "./pages/PythonPages/Functions";
import ObjectOriented from "./pages/PythonPages/ObjectOriented";
import Modules from "./pages/PythonPages/Modules";
import Test from "./pages/Test";

import Project from "./pages/PythonPages/Project";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import MenuHeader from "./components/MenuHeader";

const App = () => {
  const Wrapper = () => (
    <>
      <MenuHeader />
      <Outlet />
      <Chatbot />
      <Footer fadeTime={500} />
    </>
  );

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" />} />
          <Route
            path="/landing"
            element={
              <ProtectedRoute Component={Landing} redirectRoute="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/leetcode" element={<Leetcode />} /> */}
          <Route element={<Wrapper />}>
            <Route
              path="/python"
              element={
                <ProtectedRoute Component={Python} redirectRoute="/login" />
              }
            />
            <Route
              path="/leetcode"
              element={
                <ProtectedRoute Component={Leetcode} redirectRoute="/login" />
              }
            />
            <Route
              path="/python-setup"
              element={
                <ProtectedRoute
                  Component={PythonSetup}
                  redirectRoute="/login"
                />
              }
            />
            <Route
              path="/python-fundamentals"
              element={
                <ProtectedRoute
                  Component={PythonFundamentals}
                  redirectRoute="/login"
                />
              }
            />
            <Route
              path="/conditionals-and-control-flow"
              element={
                <ProtectedRoute
                  Component={Conditionals}
                  redirectRoute="/login"
                />
              }
            />
            <Route
              path="/functions"
              element={
                <ProtectedRoute Component={Functions} redirectRoute="/login" />
              }
            />
            <Route
              path="/object-oriented"
              element={
                <ProtectedRoute
                  Component={ObjectOriented}
                  redirectRoute="/login"
                />
              }
            />
            <Route
              path="/project"
              element={
                <ProtectedRoute Component={Project} redirectRoute="/login" />
              }
            />
            <Route
              path="/modules"
              element={
                <ProtectedRoute Component={Modules} redirectRoute="/login" />
              }
            />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;

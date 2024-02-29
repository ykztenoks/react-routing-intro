import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import ErrorPage from "./pages/Error.jsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";
import projects from "../projects-data.json";
import QueryStringExample from "./pages/QueryStringExample.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* <Route path="/" element={<HomePageWithNavigate />} /> */}
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<ProjectsPage projects={projects} />}
        />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetailsPage projects={projects} />}
        />
        <Route path="/query" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

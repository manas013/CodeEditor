import React from "react";
import { useRoutes } from "react-router-dom";
import CodeEditor from "pages/CodeEditor";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <CodeEditor /> },
  ]);

  return element;
};

export default ProjectRoutes;

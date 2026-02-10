import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Setup } from "./components/pages/Setup";
import { GameStructure } from "./components/pages/GameStructure";
import { Characters } from "./components/pages/Characters";
import { Enemies } from "./components/pages/Enemies";
import { Items } from "./components/pages/Items";

export const router = createBrowserRouter([
  {
    path: "/depthofdarkness/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "setup", Component: Setup },
      { path: "structure", Component: GameStructure },
      { path: "characters", Component: Characters },
      { path: "enemies", Component: Enemies },
      { path: "items", Component: Items },
    ],
  },
]);

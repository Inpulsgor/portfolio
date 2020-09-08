import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./pages/home/HomePage")),
    private: false,
    restricted: true,
  },
  {
    path: "/about",
    label: "About",
    exact: false,
    component: lazy(() => import("./pages/about/AboutPage")),
    private: true,
    restricted: false,
  },
  {
    path: "/skills",
    label: "Skills",
    exact: false,
    component: lazy(() => import("./pages/skills/SkillsPage")),
    private: true,
    restricted: false,
  },
  {
    path: "/works",
    label: "Works",
    exact: false,
    component: lazy(() => import("./pages/works/WorksPage")),
    private: false,
    restricted: false,
  },
  {
    path: "/contact",
    label: "Contact",
    exact: false,
    component: lazy(() => import("./pages/contact/ContactPage")),
    private: false,
    restricted: false,
  },
];

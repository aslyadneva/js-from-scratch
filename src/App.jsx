import StyleGuide from "./blocks/StyleGuide";
import Header from "./blocks/Header";
import Dashboard from "./blocks/Dashboard";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <Dashboard />;
  },
});

const styleGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/style",
  component: function Style() {
    return <StyleGuide />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, styleGuideRoute]);

const router = createRouter({
  basepath: import.meta.env.BASE_URL,
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;

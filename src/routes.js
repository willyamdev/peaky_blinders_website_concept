import Home from "./pages/home/Home";
import Overview from "./pages/overview/Overview";
import Story from "./pages/story/Story";

const routes = [
    {
        path:"/",
        component: Home,
        exact:true
    },
    {
        path:"/overview",
        component: Overview,
        exact:true
    },
    {
        path:"/story",
        component: Story,
        exact:true
    },
];

export default routes;
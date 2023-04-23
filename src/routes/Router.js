import {Routes, Route} from "react-router-dom";
import routeConfig from "./index";

const Router = () => {
    return (
        <Routes>
            {routeConfig.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
        </Routes>
    )
}

export default Router;
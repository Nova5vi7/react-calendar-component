import ReactDOM from "react-dom";
import App from './App';
import "./styles/styles.scss";

ReactDOM.render(<App />, document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}
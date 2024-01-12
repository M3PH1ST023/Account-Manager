import Get from "./components/Post";
import Post from "./components/Get";
import "./styles.css";

function App() {
    return (
        <div className="container">
            <div className="get-form-container">
                <Get />
            </div>
            <div className="post-container">
                <Post />
            </div>
        </div>
    );
}

export default App;

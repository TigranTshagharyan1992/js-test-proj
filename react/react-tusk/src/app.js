import UserList from './components/userList';
import Post from './components/Post'
import {Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/login" element={<Post/>} />
            </Routes>
        </div>

    );
}

export default App
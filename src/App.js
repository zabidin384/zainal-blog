// Import Packages
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
// Import Files
import "./App.css";
import "./media-query.css";
import "./style.scss";
import About from "./pages/About";
import AddEditBlog from "./pages/AddEditBlog";
import Auth from "./pages/Auth";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	const [active, setActive] = useState("home");
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) setUser(authUser);
			else setUser(null);
		});
	}, []);

	const handleLogout = () => {
		signOut(auth).then(() => {
			setUser(null);
			setActive("login");
			navigate("/auth");
			toast.success("Logout successfully !");
		});
	};

	return (
		<div className="App">
			<Header setActive={setActive} active={active} user={user} handleLogout={handleLogout} />
			<ToastContainer position="top-center" />
			<Routes>
				<Route path="/" element={<Home setActive={setActive} user={user} />} />
				<Route path="/detail/:id" element={<Detail setActive={setActive} />} />
				<Route path="/create" element={user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/" />} />
				<Route path="/update/:id" element={user?.uid ? <AddEditBlog user={user} setActive={setActive} /> : <Navigate to="/" />} />
				<Route path="/about" element={<About />} />
				<Route path="/auth" element={<Auth setActive={setActive} setUser={setUser} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

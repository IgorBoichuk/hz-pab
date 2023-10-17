import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";

import { BeerPreview } from "./modules/Menu/BeerPreview/BeerPreview";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import { Home } from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const Atmosphere = lazy(() => import("./pages/Atmosphere"));
const Contacts = lazy(() => import("./pages/Contacts"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/menu" element={<Menu />}>
					<Route path="bar" element={<BeerPreview />} />
					<Route path="snacks" element={<BeerPreview />} />
					<Route path="kitchen" element={<BeerPreview />} />
					<Route path="souses" element={<BeerPreview />} />
				</Route>
				<Route path="/atmosphere" element={<Atmosphere />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<ErrorPage />} />
			</Route>
		</Routes>
	);
}

export default App;

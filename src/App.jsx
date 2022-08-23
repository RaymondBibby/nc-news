import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Articles from './components/Articles';
import ArticlesById from './components/ArticlesById';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<p>This will always render-- Header -- Nav Bar</p>
				<Routes>
					<Route path="/articles" element ={<Articles />} />
					<Route path="/articles/:article_id" element ={<ArticlesById/>} />
					
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

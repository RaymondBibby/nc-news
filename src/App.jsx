import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Articles from './components/Articles';
import ArticlesById from './components/ArticlesById';
import Homescreen from './components/Homescreen';
import ArticlesByTopic from './components/ArticlesByTopic';
import Users from './components/Users';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Homescreen />} />
					<Route path="/api/articles" element ={<Articles />} />
					<Route path="/api/articles/topics/:topic_slug" element={<ArticlesByTopic/>} />
					<Route path="/api/articles/:article_id" element ={<ArticlesById/>} />
					<Route path="/api/users" element={<Users />} />
					
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

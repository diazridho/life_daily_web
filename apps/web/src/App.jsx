import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import RecipeList from './pages/RecipeList'
import RecipeDetail from './pages/RecipeDetail'
import Inventory from './pages/Inventory'
import DailyPlanner from './pages/DailyPlanner'
import Watchlist from './pages/Watchlist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/planner" element={<DailyPlanner />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="*" element={<div className="p-10 text-center">Page Not Found. <a href="/" className="text-primary underline">Go Home</a></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

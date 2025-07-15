import './App.css'
import MiniProfileList from './components/mini_profile/mini_profile_list'
import Welcome from './components/welcome'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-12">
      <Welcome />
      <MiniProfileList />
    </div>
  )
}


export default App

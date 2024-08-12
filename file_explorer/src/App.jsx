import './App.css'
import FileExplorer from './components/FileExplorer'
import data from './data.json'

const App = () => {
 return (
  <div className='container'>
   <FileExplorer folderData={data}/>
  </div>
 )
}

export default App
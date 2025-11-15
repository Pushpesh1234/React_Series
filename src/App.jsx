import  'bootstrap/dist/css/bootstrap.min.css'
import {Header} from './components/Header'
import{Footer} from './components/Footer'
import { Sidebar } from './components/Sidebar'
import { PostList } from './components/PostList'
import{Form} from './components/CreatePost'
import { useState } from 'react'
import ListPostProvider from './store/PostListStore'
import './App.css'
function App() {
  const [selectedTab,setTab]=useState("Home")
 
  return (
    <ListPostProvider>
      <div className="appFlex">
      <Sidebar selectedTab={selectedTab} setTab={setTab}>
      </Sidebar>
    <div className='content'>
    <Header>
    </Header>
    {selectedTab==="Home"?<PostList/>:<Form/>}
    <Footer></Footer>
    </div>
    </div>
    </ListPostProvider>
    
  )
}

export default App

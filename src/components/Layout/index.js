import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">Proficient in Debugging and Troubleshooting</span>

        <Outlet />
        <span className="tags bottom-tags">
          Proficient in Git, Github, Visual Studio Code, SQL-Server Database management
          <br />
          <span className="bottom-tag-html">Truly yourself Brahima Soumahoro.</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
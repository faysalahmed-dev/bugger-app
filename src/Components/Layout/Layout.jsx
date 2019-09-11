import React,{Fragment} from 'react'
import ToolBar from '../UI/ToolBar/ToolBar'
import './Layout.scss'
const layout = props => (
     <Fragment>
          <ToolBar />
          <main className="main-section">
               {props.children}
          </main>
     </Fragment>
)
export default layout;

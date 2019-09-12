import React,{Fragment} from 'react'
import ToolBar from '../UI/ToolBar/ToolBar'
import './Layout.scss'
import CheckOut from '../../Containers/CheckOut/CheckOut'
const layout = props => (
     <Fragment>
          <ToolBar />
          <main className="main-section">
               {props.children}
          </main>
          <CheckOut />
     </Fragment>
)
export default layout;

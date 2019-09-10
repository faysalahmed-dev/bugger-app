import React,{Fragment} from 'react'
import ToolBar from '../UI/ToolBar/ToolBar'
const layout = props => (
     <Fragment>
          <ToolBar />
          <main>
               {props.children}
          </main>
     </Fragment>
)
export default layout;

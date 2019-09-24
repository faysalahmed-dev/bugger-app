import React from 'react'
import './Page404.scss'
const page404 = () => {
     console.log('from 404 page')
     return (
          <div className="page404">
               <div>
                    <h1 className="page404__title">404</h1>
                    <h1 className="page404__sub-title">Page Is Not Found !!</h1>
               </div>
          </div>
     )
}
export default page404;
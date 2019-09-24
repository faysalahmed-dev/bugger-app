import React, {Suspense} from 'react'
import Loader from '../../Components/UI/Loader/Loader'

const SusHoc = (porps) => {
     return (
          <Suspense fallback={<Loader />}>
               {porps.chidren}
          </Suspense>
     )
}
export default SusHoc;
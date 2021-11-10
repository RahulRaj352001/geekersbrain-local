import React ,{Fragment} from 'react'
import { Metadata } from '../components/layout/Metadata'

export default function ErrorPage() {
    return (
       <Fragment>
           <Metadata title={"404"}/>
             <div>
             404 page not found
        </div>
       </Fragment>
    )
}

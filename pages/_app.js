import '../styles/index.css'
import {SubsProvider} from '../context/SubsContext'
function MyApp({ Component, pageProps }) {
  return( 
    <SubsProvider>
      <div className="container mx-auto my-10 max-w-xl">
        <Component {...pageProps} />

      </div>
    </SubsProvider>
  
  )
}

export default MyApp

import Web from './web';
import 'bootstrap/dist/css/bootstrap.css';
import TopLoader from "react-top-loader";
import Animator from './components/Animator';
import { Helmet } from 'react-helmet';

function App() {
    return (<>

        <Animator
            color="#61d800"
            fixed={false}
            backgroundColor="#ddd"
            progressDuration={400}
        />

    <Helmet>

    <link rel="stylesheet" href="https://www.bootstrapdash.com/demo/skydash/template/vendors/feather/feather.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" />

    </Helmet>


        <Web /></>)
}
export default App;

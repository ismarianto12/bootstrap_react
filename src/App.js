import Web from './web';
import 'bootstrap/dist/css/bootstrap.css';
import TopLoader from "react-top-loader";
import Animator from './components/Animator';

function App() {
    return (<>

        <Animator
            color="#61d800"
            fixed={false}
            backgroundColor="#ddd"
            progressDuration={400}
        />

        <Web /></>)
}
export default App;

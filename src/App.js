import logo from './logo.svg';
import './App.css';
import "./styles.css";
import Image from "./img.png.jfif"
function App() {
  return (
    <div style={{border:"solid 1px black",maxwidth:"100px"}}>
    <h1 className="title red">ELLAFI WASSIM</h1>
    <img src={Image}  alt="img" />
    <br></br>
    <img src="/images/bmw.jfif" />
    <br></br>
    <video width="320" height="240" controls> 
     <source src="myVideo.mp4" type="video/mp4"/>
    </video>

    </div>
   
       
       
   
  );
}

export default App;

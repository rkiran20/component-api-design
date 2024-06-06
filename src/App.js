import './App.css';
import Polymorphism from './components/Polymorphism';
import TextBox from './components/TextBox';
import Toggle from './components/Toggle';
import TypeList from './components/TypeList';
import { productData } from './data';
import {useState} from 'react'
function App() {
  const [isSelected,setIsSelected] = useState(0);
  const [volume,setVolume] = useState(0);
  const [isWifi , setIsWifi] = useState(true);
  const [isPowerMode,setIsPowerMode] = useState(false);
  //console.log(isSelected)
  return (
    <div className="App">
      <div className="productPage">Component Api Design
          <h2>Product Details Page</h2>
          <img src={productData.photos[isSelected]} className='bigImage'></img>
          {productData.photos.map((data,index)=>{
            
            return(
              <button key={index} onClick={()=>setIsSelected(index)}><img src={data} alt="image" key={index} className="mappedImages" ></img></button>
          )})}
          <p>I have written this in App component but the best practise is this should be a different component in the Product page</p>
          <h3>the main thing is i didn't add the product title,discription,....and rating .</h3>
          <h3>for the rating we will give dynamic stars so for that we should create a new component! this is the best practise</h3>
      </div>
      <div>Component Libraries
        <p>Component libraries is a collection of low-level generic components that every application needs</p>
        <p>Honestly, there is no need to use these kind of libraries in most cases </p>
      </div>
      <TextBox label="volume" min={0} max={100} value={volume} onChange={((event)=>{setVolume(event.target.value)})}  />
      <Toggle label="Enable Wifi" checked={isWifi} onClick={(event)=>{setIsWifi(event.target.value)}} />
      <div>
        <h2>How to forward Refs to other components</h2>
        <p>this can't be done as same as all props because ref's and keys are default properties</p>
        <p>so if i give ref{}  as a prop to a component it gets bound to that component and doesnt act like a prop</p>
        <p>so there are 2 ways</p>
        <li>we can give them as a prop by changing its name like instead of ref we give forwardedRef{}</li>
        <p>but this is not the best practise</p>
        <li>to which component we want to give it as a prop then to that component in the export we should write this  export default forwardRef(ComponentName) and inthe props section (props,ref) write like this</li>
      </div>
      <div>
        <h2> what is polymorphism</h2>
        <p>when there is small component's and some act like buttons and some act like liks for these cases we will use polymorphism </p>
        <Polymorphism />
        <p>how does this works we have created a Tag which will be either link or button based on the href </p>
        <p>if we declare the Tag in small letters then react identifies it as a string or else it will be identified as a component, so declare the variable tag with capital one</p>
      </div>
      <TypeList type="ul" text="item1" />
      <TypeList type="ol" text="item2" />
      <TypeList  text="item3" />
    </div>
  );
}

export default App;

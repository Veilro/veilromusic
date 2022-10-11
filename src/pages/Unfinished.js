import { Textfit } from 'react-textfit';

// import silverlining from "../assets/silver.png"
import better from "../assets/better.mp3"
import atfs from "../assets/atfs0.6.mp3"

const Unfinished = () => {

  // function Card(props) {

  //   return (
  //     <>
  //     <div className="card">
  //       <img className="cardimg" src={props.logo} alt={props.desc}/>
  //       <Textfit max={25} className="songtitle" id="title">{props.title}</Textfit>
  //     </div>
  //     </>
  //   )
  // };  

    return ( 
    <>
<div className='centrediv'>
    <h1>Unfinished and Upcoming</h1>
  
  <div className='readmore'>Here you can find the songs that I'm currently working on, and give them a listen and give me feedback on what you think. </div>
  
  <div className='readmore'>Just keep in mind, there's absolutely no guarantee that these will ever be released, and even if they do they may not even sound anything like the iteration presented here.</div>

<div className="grid-container">
<Textfit max={25} className="unfintitle">Better No More/Empty Rain</Textfit>
<audio src={better} controls></audio>
<a className="bn39" href="https://forms.gle/w9zS6UXPLw2RCCeo9"><span className="bn39span">Feedback</span></a>

<Textfit max={25} className="unfintitle">Among The Falling Stars</Textfit>
<audio src={atfs} controls></audio>
<a className="bn39" href="https://forms.gle/aY2gfBfw3bi7Cn857"><span className="bn39span">Feedback</span></a>

  {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc9dRV5NWpUmoFr9yCxxHKYqeUhBBje5bXcSwycFma1gXQQJA/viewform?embedded=true" width="300" height="375" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}


</div>
{/* </div> */}



</div>
  </>
);
};

  
  export default Unfinished;
  
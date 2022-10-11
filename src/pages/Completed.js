import "./Page.css"
import silverlining from "../assets/silver.png"
import movingon from "../assets/moving.png"
import geodecode from "../assets/geode.jpg"

import spotify from "../assets/spotify.png"
import applemusic from "../assets/applemusic.jpg"
import bandcamp from "../assets/bandcamp.png"
import itunes from "../assets/itunes.jpg"
import deezer from "../assets/deezer.jpg"
import amazon from "../assets/amazon.jpg"
import youtube from "../assets/youtube.png"


import { Textfit } from 'react-textfit';


const Completed = () => {

  function Card(props) {

    return (
      <>
      <div className="card">
        <img className="cardimg" src={props.logo} alt={props.desc}/>
        <Textfit max={25} className="songtitle" id="title">{props.title}</Textfit>
      </div>
      </>
    );
  };  

  function Stores(props) {
    return (
      <>
      <a href={props.link} width="50px" height="50px">
      <div className="store">
        <img width="50px" height="50px" src={props.store} alt={props.desc}/>
        
      </div>
      </a>
      </>
    );
  };  

  // function readsilver() {
  //   return (
  //     document.getElementById("silver").textContent = "Silver Linings is the third song I've made, and I wanted it to represent finding the 
  //     good in the bad, just like the title. The piece gradually gets more complex with a melancholy upper melody, then slows down and takes a step back
  //     , to represent taking a deep breath to prevent yourself from becoming overwhelmed. The piece then becomes more complex again, but more measured and 
  //     less melancholic, finally ending with a peaceful and calm resolution. The main inspiration for this piece was
  //     <a href="https://chrischristodoulou.bandcamp.com/track/chanson-dautomne"> Chanson d'Automne 
  //     by Chris Christodolou. </a> "
  //   );
  // };  

    return (
      <>
    <div className="centrediv">
      <h1> My Music </h1>
    <div className="grid-container">
    <Card logo={silverlining} textid="silver" title="Silver Linings" desc="Silver Linings Track Art"></Card>
    <div className="storebox">
          <Stores store={spotify} link="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D3A4349AE-C833-435C-BDEABBADB5897E00/destination:https://open.spotify.com/album/4YbJ6V5Mfj3GDkBeLpxMa2"></Stores>
          <Stores store={bandcamp} link="https://veilromusic.bandcamp.com/track/moving-on"></Stores>
          <Stores store={applemusic} link="https://music.apple.com/us/album/moving-on-single/1625575344?uo=4"></Stores>
          <Stores store={itunes} link="https://music.apple.com/us/album/moving-on-single/1625575344"></Stores>
          <Stores store={deezer} link="https://www.deezer.com/album/321029397"></Stores>
          <Stores store={amazon} link="https://music.amazon.co.uk/albums/B0B1Z737QY?trackAsin=B0B1YZWZ42"></Stores>
          <Stores store={youtube} link="https://youtu.be/KGtiZQi8c1c"></Stores>

      </div>

      <div id="silver" className="textdesc">
          {/* Silver Linings is the third song I've made, and I wanted it to represent finding the 
          good in the bad, just like the title. The piece gradually gets more complex with a melancholy upper melody, then slows down and takes a step back
          , to represent taking a deep breath to prevent yourself from becoming overwhelmed. The piece then becomes more complex again, but more measured and 
          less melancholic, finally ending with a peaceful and calm resolution. The main inspiration for this piece was
          <a href="https://chrischristodoulou.bandcamp.com/track/chanson-dautomne"> Chanson d'Automne 
          by Chris Christodolou. </a>  */}
          Silver Linings is a standalone song about trying to find the good in the bad, and stopping yourself from becoming overwhelmed.
          {/*   */}
        </div>

      
      <Card logo={geodecode} textid="geode" title="The Geode Code" desc="The Geode Code Track Art"></Card>
      <div className="storebox">
          <Stores store={bandcamp} link="https://veilromusic.bandcamp.com/track/the-geode-code"></Stores>
          <Stores store={youtube} link="https://youtu.be/k1ywyI-tF5s"></Stores>
          <div className="empty"></div>

      </div>
      <div id="geode" className="textdesc">
        This song was created as a game soundtrack for a university graphics coursework, where I created a game with the same name.
        {/* This song is my first actual game soundtrack, written for a game I created for a graphics coursework of the same name.
         It is intended to evoke feelings of being in a cave, similar to the game itself, and gets more active and complex as it goes on, 
         representing the player progressing through the levels. The main inspiration for this piece is 
         <a href="https://radicaldreamland.bandcamp.com/track/caves"> Caves by Lena Raine. </a> */}
      </div> 

      <Card logo={movingon} textid="moving" title="Moving On" desc="Moving On Track Art"></Card>
      <div className="storebox">
          <Stores store={spotify} link="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D108B0516-6280-4FC7-AA3DE03D4EDE1DFC/destination:https://open.spotify.com/album/3kKLfHy1M8jfQS4eMuLCvO"></Stores>
          <Stores store={bandcamp} link="https://veilromusic.bandcamp.com/track/silver-linings"></Stores>
          <Stores store={applemusic} link="https://music.apple.com/us/album/silver-linings-single/1642066486?uo=4"></Stores>
          <Stores store={itunes} link="https://music.apple.com/us/album/silver-linings-single/1642066486"></Stores>
          <Stores store={deezer} link="https://www.deezer.com/en/album/350833687"></Stores>
          <Stores store={amazon} link="https://music.amazon.co.uk/albums/B0BC4Q3B2D?trackAsin=B0BC4QM3KB"></Stores>
          <Stores store={youtube} link="https://youtu.be/xA643DEbubs"></Stores>
          
      </div>

      <div id="moving" className="textdesc">
        Moving On is the first song I made, a pretty simple and short piece envisioning somebody moving house after a long time.
  {/* Moving On is the first song I made, hence the pretty simple instrumentation 
  of just piano and electric piano with no percussion or bass. The story envisioned for this song was of someone going over their 
  possessions while moving house, progressing to reliving somewhat painful memories, then finally to acceptance. The primary inspiration for this piece is
  <a href="https://open.spotify.com/track/3ogdvUGpRbiFWODTBHoto7?si=e987144515424459"> The Trans Siberian Express by Luella Gren.</a> */}
</div>
    </div>
    {/* </div> */}



    {/* <div className="flexbox-row">
    <div className="flexbox-column">
      <Card logo={silverlining} title="Silver Linings" desc="Silver Linings Track Art"></Card>
      <Card logo={geodecode} title="The Geode Code" desc="The Geode Code Track Art"></Card>
      <Card logo={movingon} title="Moving On" desc="Moving On Track Art"></Card>
    </div>
    <div className="flexbox-column">
    <div className="storebox">
        <Stores store={spotify} link="https://prf.hn/click/camref:1101ljvYv/pubref:albumuuid%3D3A4349AE-C833-435C-BDEABBADB5897E00/destination:https://open.spotify.com/album/4YbJ6V5Mfj3GDkBeLpxMa2"></Stores>
    </div>
       
    <div className="storebox">
        <Stores store={spotify}></Stores>
    </div>
       
    <div className="storebox">
        <Stores store={spotify}></Stores>
    </div>
       

    </div>
    <div className="flexbox-column">
        <div className="textdesc">
          Silver Linings is the third song I made
        </div>

        <div className="textdesc">

        </div>

        <div className="textdesc">
          Moving On is the first song I made, hence the pretty simple instrumentation 
          of just piano and electric piano with no percussion or bass. Initially it was going to be 
          slow and melancholic, representing a 
        </div>
    </div>
    </div> */}
    </div>
      </>
    );
  };
  
  export default Completed;
  
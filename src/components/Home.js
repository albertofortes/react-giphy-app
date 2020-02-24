import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { APIKey } from '../APIKey';
import SearchBox from './SearchBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faDownload } from '@fortawesome/free-solid-svg-icons'


const Home = (props) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKey}&limit=25`);
    const data = await response.json();
    setGifs(data.data);
    console.log(data.data);
  };

  const loadPopUp = (e) => {
    e.preventDefault();
    const lightboxOverlay = document.getElementById('gifPopUpOverlay');
    const lightbox = document.getElementById('gifPopUp');
    let outHTMLString = e.target.innerHTML;
    outHTMLString += "<span id='gifPopUpClose' class='gif__popup__close'>Close</span>";
    lightbox.innerHTML = outHTMLString;
    lightboxOverlay.style.display = 'block';

    document.getElementById('gifPopUpClose').addEventListener("click", function(ev){
      ev.preventDefault();
      lightbox.innerHTML = "";
      lightboxOverlay.style.display = '';
    }, false);
  };

  const getDataQuery = (data) => {
    // lifted Up states as props!
    setGifs(data.data);
  };

  const getSearchQuery = (msg) => {
    // lifted Up states as props!
    props.queryMsg(msg);
  };

  return (
    <React.Fragment>
      <div>
        <div className="content__gifs">
          {gifs.map(gif => (
            <div className="gifs__gif" key={gif.id} onClick={loadPopUp}>
              <LazyLoadImage src={`https://i.giphy.com/${gif.id}.${gif.type}`} alt={gif.title} className="gif__popup__image" />
              {/*<LazyLoadImage src={`https://i.giphy.com/media/${gif.id}/480w_s.jpg`} alt={gif.title} className="gif__popup__image" />*/}
              <div className='gif__popup__actions'>
                <a href={gif.bitly_gif_url}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a href={`https://i.giphy.com/${gif.id}.${gif.type}`} download rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faDownload} /></a>
              </div>
            </div>
          ))}
        </div>
        <div id='gifPopUp' className='gif__popup'></div>
        <div id='gifPopUpOverlay' className='gif__popup__overlay'></div>
      
        <SearchBox dataQuery={getDataQuery} searchQuery={getSearchQuery} />
      </div>
    </React.Fragment>
  )
};

export default withRouter(Home);

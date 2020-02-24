import React from 'react';
import logoReact from '../../images/logo-react.svg';
import logoGiphy from '../../images/logo-giphy.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="sr-only">ReactJs + Giphy API. Hobby quick project by Alberto Fortes Senior Front-end developer. CSS, JavaScript, React, Gatsby…</h1>
        <div className="header__logos">
          <img src={logoGiphy} className="logo" alt="Giphy logo" />
          <span className="plus"><FontAwesomeIcon icon={faPlusSquare} /></span>
          <img src={logoReact} className="logo logo--animated" alt="React JS logo" />
        </div>
        <div className="header__right">
        <h2>{props.hMsg}</h2>
        </div>
      </div>
    </div>
  )
}

export default Header;
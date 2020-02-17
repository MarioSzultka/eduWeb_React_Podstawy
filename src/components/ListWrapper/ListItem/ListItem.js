import React from 'react'
import PropTypes from 'prop-types'
import './ListItem.css'


const ListItem = ({
  name,
  image,
  description,
  twitterLink }) => (

    <li className="listItem__wrapper">
      <img
        className="listItem__image"
        src={image}
        alt={name}
      />
      <div>
        <h2
          className="listItem__name">{name}
        </h2>
        <p
          className="listItem__description">{description}
        </p>
        <button className="listItem__button">
          <a href={twitterLink}>visit twitter page</a>
        </button>
      </div>
    </li>

  )

ListItem.propTypes = {

  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  twitterLink: PropTypes.string,

}

ListItem.defaultProps = {
  description: "One of the React creators"

}


export default ListItem



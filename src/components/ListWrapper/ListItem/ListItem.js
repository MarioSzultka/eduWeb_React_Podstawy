import React from 'react'
import PropTypes from 'prop-types'
import styles from './ListItem.module.scss'


const ListItem = ({
  name,
  image,
  description,
  twitterLink }) => {

  const ImagesTag = image ? "img" : "div";
  console.log(<ImagesTag />)


  return (

    <li className={styles.wrapper}>
      <ImagesTag
        className={image ? styles.image : styles.imageNone}
        src={image}
        alt={name}
      />
      <div>
        <h2
          className={styles.name}>{name}
        </h2>
        <p
          className={styles.description}>{description}
        </p>
        <button className={styles.button}>
          <a rel="noopener noreferrer" target="_blank" href={twitterLink}>visit twitter page</a>
        </button>
      </div>
    </li>
  )
}

ListItem.propTypes = {

  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,

}

ListItem.defaultProps = {
  image: null,
}


export default ListItem



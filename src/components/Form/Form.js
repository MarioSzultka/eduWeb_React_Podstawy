import React from 'react'
import styles from './Form.module.scss'

const Form = ({ submitFn }) => (

  <div className={styles.wrapper}>
    <h2 style={{ color: "#1E58FF" }}>Add new twitter acocunt</h2>
    <form className={styles.form} onSubmit={submitFn}>
      <div className={styles.item}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          id=""

        />
      </div>
      <div className={styles.item}>
        <input
          placeholder="Link"
          type="text"
          name="link"
          id=""
          required
        />
      </div>
      <div className={styles.item}>
        <input
          placeholder="Image"
          type="text"
          name="image"
          id="" />
      </div>
      <div className={styles.item}>
        <textarea
          placeholder="Description"
          name="description"
          id="" cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <button type="submit">add new item</button>
    </form>
  </div>

)

export default Form
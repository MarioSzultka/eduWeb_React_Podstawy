import React from 'react'

const Form = ({ submitFn, handle }) => (

  <form onClick={submitFn}>

    <input onChange={submitFn} placeholder="name" type="text" name="name" id="" />
    <input onChange={submitFn} placeholder="account link" type="text" name="link" id="" />
    <input onChange={submitFn} placeholder="image url" type="text" name="image" id="" />

    <textarea onChange={submitFn} placeholder="description" name="description" id="" cols="30" rows="10"></textarea>
    <button onClick={handle} type="submit">add new item</button>


  </form>
)

export default Form
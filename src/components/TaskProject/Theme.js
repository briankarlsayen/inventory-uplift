import React, {useState} from 'react'

function Theme({setTheme}) {
  

  return (
    <div>
      <button onClick={()=>setTheme('red')}>Red</button>
      <button onClick={()=>setTheme('blue')}>Blue</button>
      <button onClick={()=>setTheme('yellow')}>Yellow</button>
      <button onClick={()=>setTheme('white')}>White</button>
    </div>
  )
}

export default Theme

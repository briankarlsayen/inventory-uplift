import React from 'react'

function VolumeControl() {
  let num = 1;
  const increment = () => {
    num =+1
  }
  let interval = setInterval(increment, 1000)

 

  console.log(increment)


  return (
    <div>
      
    </div>
  )
}

export default VolumeControl

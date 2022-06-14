import React, { useRef } from 'react'

const Home = React.memo(() => {
    const numShows = useRef(0)
    numShows.current++

  return (
    <div>
        <br />
        Home page for man like stan
        <br />
        <br />
    </div>
  )
});

export default Home
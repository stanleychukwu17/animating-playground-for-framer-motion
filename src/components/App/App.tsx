import { motion } from 'framer-motion';
import { useState } from 'react';

import './app.scss';
import Home from './Home';


const App = () => {
    const [total, setTotal] = useState(0)
    // console.log('we dey re-render')

    return (
        <>
            <div>total: {total}</div>
            <Home />
            <button onClick={() => { setTotal(c => c+ 1) }}> increase the total </button>
        </>
    )
}

export default App;
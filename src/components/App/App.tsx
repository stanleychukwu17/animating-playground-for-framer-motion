import { motion } from 'framer-motion';

import './app.scss';


const App = () => {
    console.log(motion)

    return (
        <motion.div animate={{top:'10%', fontSize:'100px', transition:{type:'spring', bounce:1, duration:10}}} className='AppMain'>
            Am talking to you hellow
        </motion.div>
    )
}

export default App;
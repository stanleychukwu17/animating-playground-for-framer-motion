import { animate, motion } from 'framer-motion';

import './app.scss';

const parentVariant = {
    initial: {
    },
    animate: {
        transition: { staggerChildren: .3, when: "beforeChildren" }
    },
}

const boxVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        'marginTop':'100px',
        opacity: 1,
        scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
        originX:'40%',
        rotateZ:360,
        // borderRadius: '100px',
        transition: {
            ease: 'easeOut',
            duration: .7,
            opacity: {duration:1.2, ease: 'linear'},
            rotateZ: { delay:1, duration: 1.5 },
            scale: { delay:2.2, duration: 2.5 },
        }
    },
}

const box2 = {
    initial: {},
    animate: {
        left:'100px',
        transition: {
            duration: 1.7,
        }
    },
    hover: {
        scale: 1.3, originX:0, color: '#f8e112',
        transition: {
            type: {type:'spring', stiffness: 20}
        }
    }
}

const App = () => {

    return (
        <>
            <motion.div
                variants={parentVariant}
                initial="initial"
                animate='animate'
                className="AppCvr"
            >
                <motion.div className="AppMain"
                    variants={boxVariant}
                >A</motion.div>
                <motion.div className="AppMain"
                    variants={boxVariant}
                >B</motion.div>
                <motion.div className="AppMain"
                    variants={boxVariant}
                >C</motion.div>
            </motion.div>

            <div>
                <motion.div className="AppMain"
                    variants={box2}
                    animate='animate'
                    whileHover='hover'
                >
                    Dj
                </motion.div>
            </div>
        </>

    )

}

export default App;
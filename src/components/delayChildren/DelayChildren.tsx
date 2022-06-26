import { motion, Variants } from 'framer-motion';

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 3,
            delayChildren: 2.5
        }
    }
}

const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export default function DelayChildren() {

    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            style={{background:'green'}}
        >
            <motion.li variants={item}> some items in 1</motion.li>
            <motion.li variants={item}> some items in 1</motion.li>
        </motion.ul>
    )
}


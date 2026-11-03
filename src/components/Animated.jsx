import {motion} from 'motion/react'

const Animated = ({
    children,
    delay = 0,
    y = 50,
    x = 0,
    scale = 1,
    className,
    ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
        {children}
    </motion.div>
  )
}

export default Animated
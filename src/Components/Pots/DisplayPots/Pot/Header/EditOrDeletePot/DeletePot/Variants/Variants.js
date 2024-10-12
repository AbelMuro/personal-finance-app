export const overlayVariant = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0
    }
}

export const dialogVariant = {
    hide: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            damping: 6,
            stiffness: 120, 
        }
    },
    exit: {
        scale: 0
    }
}

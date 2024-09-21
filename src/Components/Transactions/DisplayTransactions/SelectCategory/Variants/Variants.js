export const dropdownVariant = {
    hide: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 6,
        }
    },
    exit: {
        scale: 0
    }
}
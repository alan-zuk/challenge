export const getRemainingTime = (seconds) => {
    
    new Promise(resolve => setTimeout(() => resolve(), seconds * 1000))
}
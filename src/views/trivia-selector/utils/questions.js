import { mockTrivias } from "./mockQuestion"

export const getTrivias = () => {
    return new Promise((resolve => setTimeout(() => resolve(mockTrivias), 3000)))

}
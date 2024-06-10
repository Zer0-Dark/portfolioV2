import { useEffect, useState } from "react"

const useReadingProgress = () => {
    let [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updatedScrollCompletion = () => {
            const scrollProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(
                    Number((scrollProgress / scrollHeight).toFixed(2)) * 100
                )
            }
        }

        window.addEventListener('scroll', updatedScrollCompletion);

        return () => {
            window.removeEventListener('scroll', updatedScrollCompletion)
        }
    }, []);

    return (
        completion
    )
}

export default useReadingProgress
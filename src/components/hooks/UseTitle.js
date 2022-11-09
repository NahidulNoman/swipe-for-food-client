import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - swipe food`
    }, [title])
}

export default useTitle;
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Inventory System`;
    }, [title])
};

export default useTitle;
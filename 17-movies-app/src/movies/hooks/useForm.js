import { useState } from "react"

export const useForm = (initialValue) => {

    const [input, setInput] = useState({
        ...initialValue
    })

    

    return {

    }
}
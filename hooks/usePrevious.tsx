<<<<<<< Updated upstream
import React, { useEffect, useRef } from 'react'

export const usePrevious = value => {

    // 1) Stuff value into a ref for later
    const ref = useRef(value)

    // 2) Runs when consumer has rendered:
    useEffect(() => {
        ref.current = value;
    }, [value]); // 3) Runs again when the value changes

    return ref.current;
}

export default usePrevious
=======
import { useEffect, useRef } from 'react'

export function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef()

    // Store current value in ref
    useEffect(() => {
        ref.current = value
    }, [value]) // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current
}
>>>>>>> Stashed changes

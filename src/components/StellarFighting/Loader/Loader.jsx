import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Loader () {

    const history = useHistory()

    useEffect(()=> setTimeout(history.push('/stellarFighting/winner', 5000)), [])

    return (
        <div id="loader">
            <div class="ls-particles ls-part-1"></div>
            <div class="ls-particles ls-part-2"></div>
            <div class="ls-particles ls-part-3"></div>
            <div class="ls-particles ls-part-4"></div>
            <div class="ls-particles ls-part-5"></div>
            <div class="lightsaber ls-left ls-green"></div>
            <div class="lightsaber ls-right ls-red"></div>
        </div>
    )
}
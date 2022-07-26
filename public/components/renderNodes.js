
import _ from 'lodash'
import { useEffect, useState } from 'react'

function renderNodes(obj) {
    // VER COMO VAI FUNCIONAR, POIS A POSIÇÃO DOS NODES VARIAM


    const [innerWidth, setInnerWidth] = useState('')

    useEffect(() => {
        setInnerWidth(parseInt((window.innerWidth * 0.8) / 1.8))
    }, []);


    _.forEach(obj, function name(v) {
        let prevY = v.position.y
        v.position = { x: setInnerWidth, y: prevY}
    })

    return obj;
}

export default renderNodes;
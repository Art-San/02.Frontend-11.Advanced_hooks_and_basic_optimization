// import React, { useRef } from 'react'
// import CardWrapper from '../../common/Card'
// import Divider from '../../common/Divider'
// import SmallTitle from '../../common/typografy/SmallTitle'
// const ProgrammableActionsExample = () => {
//     const inputRef = useRef()
//     const handleClick = () => {
//         console.log('inputRef', inputRef.current)
//         inputRef.current.focus()
//     }
//     console.log(inputRef)
//     const handleClickWidth = () => {
//         inputRef.current.style.width = '50%'
//         console.log(inputRef.current.style.width)
//     }
//     return (
//         <CardWrapper>
//             <SmallTitle className="card-title">
//                 Программируемые действия и свойства
//             </SmallTitle>
//             <Divider />
//             <label htmlFor="email" className="form-label">
//                 Мыло
//             </label>
//             <input
//                 ref={inputRef}
//                 type="email"
//                 className="form-control"
//                 id="email"
//             />
//             <button className="btn btn-primary m-2" onClick={handleClick}>
//                 Фокус input
//             </button>
//             <button
//                 className="btn btn-secondary m-2"
//                 onClick={handleClickWidth}
//             >
//                 Изменить ширину объекта
//             </button>
//         </CardWrapper>
//     )
// }
// export default ProgrammableActionsExample

import React, { useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/Divider'
import SmallTitle from '../../common/typografy/SmallTitle'

const ProgrammableActionsExample = () => {
    const inputRef = useRef()
    const [width, setWidth] = useState(100) // Храним текущую ширину в состоянии

    const handleClick = () => {
        console.log('inputRef', inputRef.current)
        inputRef.current.focus()
    }

    const handleClickWidth = () => {
        const newWidth = width === 100 ? 50 : 100 // Переключаем между 100px и 200px
        inputRef.current.style.width = `${newWidth}%` // Устанавливаем новую ширину на поле
        setWidth(newWidth) // Обновляем состояние текущей ширины
    }

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Мыло
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary m-2" onClick={handleClick}>
                Фокус input
            </button>
            <button
                className="btn btn-secondary m-2"
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    )
}

export default ProgrammableActionsExample

// import React, { useRef, useState } from 'react'
// import CardWrapper from '../../common/Card'
// import Divider from '../../common/Divider'
// import SmallTitle from '../../common/typografy/SmallTitle'

// const ProgrammableActionsExample = () => {
//     const inputRef = useRef()
//     const [width, setWidth] = useState(100) // Изначальное значение ширины

//     const handleClick = () => {
//         inputRef.current.focus()
//     }

//     const handleClickWidth = () => {
//         // Изменение ширины в зависимости от текущего значения
//         setWidth((prevWidth) => (prevWidth === 100 ? 50 : 100))
//     }

//     return (
//         <CardWrapper>
//             <SmallTitle className="card-title">
//                 Программируемые действия и свойства
//             </SmallTitle>
//             <Divider />
//             <label htmlFor="email" className="form-label">
//                 Мыло
//             </label>
//             <input
//                 ref={inputRef}
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 style={{ width: `${width}%` }}
//             />
//             <button className="btn btn-primary m-2" onClick={handleClick}>
//                 Фокус input
//             </button>
//             <button
//                 className="btn btn-secondary m-2"
//                 onClick={handleClickWidth}
//             >
//                 Изменить ширину объекта
//             </button>
//         </CardWrapper>
//     )
// }

// export default ProgrammableActionsExample

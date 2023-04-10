import React from 'react'
import BlockQuote from '../components/common/BlockQuote'
import CollapseWrapper from '../components/common/Collapse'
import Divider from '../components/common/Divider'
import Subtitle from '../components/common/typografy/Subtitle'
import Title from '../components/common/typografy/Title'
import { ExampleFileInput } from '../components/examples/useRef/ExampleRefRerender'
import PrevStateExample from '../components/examples/useRef/prevState'
import ProgrammableActionsExample from '../components/examples/useRef/programmableActions'
import RenderCountExample from '../components/examples/useRef/renderCount'
import UseRefExercise from '../components/exercises/useRefExercise'
const UseRefExample = () => {
    return (
        <>
            <Title>useRef</Title>
            <p className="text-danger">
                В useRef() можно сохранять любое значение и хранить/изменять его
                в течение всей жизни компонента. При изменении значения не
                произойдет повторный рендер.
            </p>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useRef</code> возвращает изменяемый ref-объект,
                        свойство <code>.current</code> которого инициализируется
                        переданным аргументом <code>(initialValue)</code>.
                        Возвращённый объект будет сохраняться в течение всего
                        времени жизни компонента.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <div>
                <Subtitle>Examples</Subtitle>
                <RenderCountExample />
                <PrevStateExample />
                <h5 className="text-danger">
                    в ProgrammableActionsExample три вариана, два от GPT
                </h5>
                <ProgrammableActionsExample />
                <ExampleFileInput />
            </div>
            <Divider />
            <div>
                <Subtitle>Упражнения</Subtitle>
                <UseRefExercise />
            </div>
        </>
    )
}

export default UseRefExample

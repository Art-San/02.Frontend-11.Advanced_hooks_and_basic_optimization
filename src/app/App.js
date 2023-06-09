import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/NavBar'
import Users from './layouts/Users'
import Login from './layouts/Login'
import ContainerWrapper from './components/common/Container'
import Main from './layouts/Main'
import UseState from './layouts/UseState'
import UseEffect from './layouts/UseEffect'
import UseRefExample from './layouts/UseRef'
import UseMemoExample from './layouts/UseMemo'
import UseCallbackExample from './layouts/UseCallback'
import HOCLayout from './layouts/Hoc'
import MemoExample from './layouts/Memo'
import CloneElement from './layouts/CloneElement'
import ReactChildren from './layouts/ReactChildren'

function App() {
    return (
        <>
            <NavBar />
            <ContainerWrapper>
                <Switch>
                    <Route path="/users/:userId?/:edit?" component={Users} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/children" component={ReactChildren} />
                    <Route path="/cloneElement" component={CloneElement} />
                    <Route path="/memo" component={MemoExample} />
                    <Route path="/hoc" component={HOCLayout} />
                    <Route path="/useCallback" component={UseCallbackExample} />
                    <Route path="/useMemo" component={UseMemoExample} />
                    <Route path="/useRef" component={UseRefExample} />
                    <Route path="/useEffect" exact component={UseEffect} />
                    <Route path="/usestate" exact component={UseState} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </ContainerWrapper>
        </>
    )
}

export default App

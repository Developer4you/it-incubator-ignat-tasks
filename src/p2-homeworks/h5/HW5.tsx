import React from 'react'
import Header from './Header'
import MainRoutes from './MainRoutes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <MainRoutes/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5

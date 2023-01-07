import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";

export const useRoues = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route>
                    <LinksPage />
                </Route>
            </Switch>
        )
    }

    return (
        <Switch>

        </Switch>
    )


}
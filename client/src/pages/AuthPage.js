import React from 'react'

export const AuthPage = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="row card hoverable">
                    <div className="card-content ">
                        <h4 className="center blue-text">Login</h4>
                        <form className="row s12">
                            <div className="col s12">
                                <div className="input-field">
                                    <input type="text" name="" placeholder="Username*"/>
                                </div>
                            </div>
                            <div className="col s12">
                                <div className="input-field">
                                    <input type="password" name="" placeholder="Password*" />
                                </div>
                            </div>
                            <div className="col s12">
                                <p><label><input type="checkbox" /></label></p>
                            </div>
                            <div className="col s12 center">
                                <button type="button" className="btn btn-large waves-effect waves-light blue">Login</button>
                                <button type="button" className="btn btn-large waves-effect waves-light green" style={{marginLeft: 20}}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
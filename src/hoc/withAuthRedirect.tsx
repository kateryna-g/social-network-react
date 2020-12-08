import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";


let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});


type MapPropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {

}

export function withAuthRedirect <WCP> (WrappedComponent: React.ComponentType<WCP>)  {

    const RedirectComponent: React.FC<MapPropsType & MapDispatchPropsType> = (props) => {
        let {isAuth,...restProps} = props

        if (!props.isAuth) return <Redirect to={"/login"}/>

        return <WrappedComponent {...restProps as unknown as WCP}/>
    }


    let ConnectedAuthRedirectComponent = connect<MapPropsType, MapDispatchPropsType, WCP, AppStateType>(
        mapStateToPropsForRedirect, {} )(RedirectComponent)


    return ConnectedAuthRedirectComponent;
}

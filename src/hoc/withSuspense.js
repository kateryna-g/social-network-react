import React from "react";
import Preloader from "../components/common/Preloader/Preloader";
// import Redirect from "react-router-dom/es/Redirect";


export const withSuspense = (Component) => {
    return (props) => {
       return <React.Suspense fallback={<Preloader />}>
       <Component {...props}/>
       </React.Suspense>
    }
}

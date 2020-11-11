import React from "react";
import Paginator from '../common/Paginator/Paginator'
import User from "./User";
import {UserType} from "../../types/types";

type PropsTypes = {
    currentPage: number
    onPageChanged: (pageNumber : number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId:number) => void
    unfollow: (userId:number) => void
}

let Users : React.FC<PropsTypes>  = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User user={u} key={u.id}
                                         followingInProgress={props.followingInProgress}
                                         follow={props.follow}
                                         unfollow={props.unfollow}/>
                    )
                }
            </div>
        </div>)
}


export default Users;

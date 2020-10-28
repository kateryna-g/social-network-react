import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";



let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'I am fine', likesCount: 11},
        {id: 4, message: 'Blabla', likesCount: 11},
    ]
};

it('length of post should be incremented', () => {
    // test data
    let action = addPostActionCreator('it-kamasutra');
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(5);
});



it('message of new post should be correct ', () => {
    // test data
    let action = addPostActionCreator('it-kamasutra');
    // action
    let newState = profileReducer(state, action)
    // expectation

    expect(newState.posts[4].message).toBe('it-kamasutra')
});



it('after deleting length of messages should be decrement ', () => {
    // test data
    let action = deletePost(1);
    // action
    let newState = profileReducer(state, action)
    // expectation

    expect(newState.posts.length).toBe(3)
});



it('after deleting length should not be decrement if id incorrect ', () => {
    // test data
    let action = deletePost(100);
    // action
    let newState = profileReducer(state, action)
    // expectation

    expect(newState.posts.length).toBe(4)
});

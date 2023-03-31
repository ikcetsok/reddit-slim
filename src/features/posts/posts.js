import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectPosts, loadPosts } from "./postsSlice";


export const Posts = () => {

const posts = useSelector(selectPosts);
const dispatch = useDispatch();




    
}
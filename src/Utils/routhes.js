import {BUY, CATEGORIES, DEMOS, FEATURES, POST, SHOP} from "./urls";
import Demos from "../Components/Demos/Demos";
import Post from "../Components/Post/Post";

export const routhes = [
    {id:Math.random(), path: DEMOS, name: "Demos", element: <Demos/>, submenu: []},
    {id:Math.random(), path: POST, name: "Post", element: <Post/>, submenu: [
            {id: Math.random(), name: "Post Header"},
            {id: Math.random(), name: "Post Layout"},
            {id: Math.random(), name: "Share Buttons"},
            {id: Math.random(), name: "Gallery Post"},
            {id: Math.random(), name: "Video Post"}
        ]},
    {id: Math.random(), path: FEATURES, name: "Features", submenu: []},
    {id:Math.random(), path: CATEGORIES, name: "Categories", submenu: []},
    {id:Math.random(), path: SHOP, name: "Shop", submenu: []},
    {id:Math.random(), path: BUY, name: "Buy Now"}
]
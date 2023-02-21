import {createSlice} from "@reduxjs/toolkit";
import img1 from "../Images/Posts/img1.png";
import img2 from "../Images/Posts/img2.png";
import img3 from "../Images/Posts/img3.png";
import img4 from "../Images/Posts/img4.png";
import img5 from "../Images/Posts/img5.png";
import img6 from "../Images/Posts/img6.png";
import img7 from "../Images/Posts/img7.png";
import img8 from "../Images/Posts/img8.png";
import img9 from "../Images/Posts/img9.png";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts : [
            {
                id: Math.random(),
                category: "Lifestyle",
                title: "Eat Right For Your Exercise Regime",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img1,
                imgSet: `${img1} 640w, ${img1} 1024w, ${img1} 1160w`
            },
            {
                id: Math.random(),
                category: "Lifestyle",
                title: "The Look: Perfect Balance",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img2,
                imgSet: `${img2} 640w, ${img2} 1024w, ${img2} 1160w`
            },
            {
                id: Math.random(),
                category: "Lifestyle",
                title: "Fun Things to Do in Rome",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img3,
                imgSet: `${img3} 640w, ${img3}  1024w, ${img3} 1160w`
            },
            {
                id: Math.random(),
                category: "Style",
                title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img4,
                imgSet: `${img4} 640w, ${img4} 1024w, ${img4} 1160w`
            },
            {
                id: Math.random(),
                category: "Lifestyle",
                title: "9 New Songs to Heat Up Your Fall Playlist",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img5,
                imgSet: `${img5} 640w, ${img5} 1024w, ${img5} 1160w`
            },
            {
                id: Math.random(),
                category: "Events",
                title: "What You Need on Your Bedside Table",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img6,
                imgSet: `${img6} 640w, ${img6} 1024w, ${img6} 1160w`
            },
            {
                id: Math.random(),
                category: "Travel",
                title: "When Two Wheels Are Better Than Four",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img7,
                imgSet: `${img7} 640w, ${img7} 1024w, ${img7} 1160w`
            },
            {
                id: Math.random(),
                category: "Travel",
                title: "26 Living Room Ideas from the Homes of Top Designers",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img8,
                imgSet: `${img8} 640w, ${img8} 1024w, ${img8} 1160w`
            },
            {
                id: Math.random(),
                category: "Music",
                title: "What Makes Your City’s Style Unique",
                user: "Niek Bove",
                date: "April 8, 2018",
                views: "3K",
                content: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…",
                img: img9,
                imgSet: `${img9} 640w, ${img9} 1024w, ${img9} 1160w`
            }
        ],
        search: ""
    },
    reducers: {
        searchPosts(state, action){
            state.search = action.payload;
        }
    }
})

export const {searchPosts} = postsSlice.actions;

export default postsSlice.reducer;
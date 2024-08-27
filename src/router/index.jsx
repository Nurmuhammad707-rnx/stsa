import About from "../pages/About";
import Home from "../pages/Home";
import MoreWork from "../pages/Morework";
import Project from "../pages/Project";
import Explore from "../pages/Explore";

// git add .
// git commit -m "asd"
// git push

export const router =[
    {
        path:'/',
        element:<Home/>,
        name:"Home"
    },
    {
        path:'/about',
        element:<About/>,
        name:"About"
    },
    {
        path:'/project',
        element:<Project/>,
        name:"Projects"
    },
   
    
]
export const button =[
    
    {
        path:'/about',
        element:<MoreWork/>,
        name:"More Work"
    }
    
]
export const explore =[
    {
        path:'/project',
        element:<Explore/>,
        name:"Explore More"
    }
]
export const title =[
    {
        path:'/',
        element:<Home/>,
        name:"SHARQ-TRANS-SERVIS"
    }
]

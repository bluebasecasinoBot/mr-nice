import { $, __p, __SYD } from "./sydneyDom_v3.js";

__SYD.gallery = function()
{
    return $(
        "div",
        {
            style:"display:flex;gap:10px;flex-wrap:wrap;justify-content:center;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font2;position:relative;width:100vw;position:relative;background-color:#1A1A1A;",
        },
        [
            __SYD.images(.7 , "g1"),
            __SYD.images(.4 , "g2"),
            __SYD.images(.3 , "g3"),
            __SYD.images(.5 , "g4"),
            __SYD.images(.7 , "g5"),
            __SYD.images(.4 , "g6"),
            __SYD.images(.5 , "g7"),
            __SYD.images(.5 , "g8"),
        ],
        {
            createState:{
                stateName:"gallery",
                state:{useSrc:false}
            }
        }
    )
}

__SYD.images = (flex , vid) =>{
    return $(
        "div",
        {
            style:`height:300px;width:100%;min-width:300px;flex:${flex};background:#000;border-radius:20px;border:1px solid rgba(255,255,255,.2);overflow:hidden;position:relative;`
        },
        [
            $(
                "video",
                {style:"width:100%;height:auto;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);left:0px;" , ...(__p(["gallery","useSrc"],false) ? {src:`./assets/${vid}.mp4`} : {}) , muted:true}
            )
        ],
        {
            events:{
                onmouseover:e=>{
                    e.target.querySelector("video").play();
                    e.target.querySelector("video").muted = true;
                },
                onmouseout:e=>{
                    e.target.querySelector("video").pause();
                }
            }
        }
    )
}

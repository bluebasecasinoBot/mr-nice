import { $, __SYD } from "./sydneyDom_v3.js";

__SYD.footer = function()
{
    return $(
        "div",
        {style:"height:fit-content;width:100%;padding:15px;display:flex;justify-content:center;align-items:cente;background-color:#FFD633;border-top:3px solid #000000;"},
        [
            __SYD.contactBtn_footer()
        ]
    )
}

__SYD.contactBtn_footer = function()
{
    return $(
        "div",
        {style:"display:flex;gap:20px;"},
        [
            $(
                "a",
                {style:`cursor:pointer;height:40px;width:40px;background-image:url(./assets/globe-nav.svg);`,href:"#"},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
            ),
            $(
                "a",
                {style:`cursor:pointer;height:40px;width:40px;background-image:url(./assets/tg-nav.svg);`,href:""},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
            ),
            $(
                "a",
                {style:`cursor:pointer;height:40px;width:40px;background-image:url(./assets/x-nav.png);`,href:""},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
            )
        ]
    )
}
import { $, __p, __sC, __SYD } from "./sydneyDom_v3.js";
import {updateState} from "./stateAssets.js"

__SYD["navbar"] = () => {
  return $(
    "nav",
    {
      style:
        `display:flex;justify-content:${__p(["navbar" , "mobile"],false)?"space-between":"center"};align-items:center;padding:15px 40px;background-color:#F3BA2F;color:#000000;position:fixed;top:${__p(["navbar" , "float"],false) ? "10px" : "0px"};left:50%;transform:translateX(-50%);width:${__p(["navbar" , "float"],false) ? "calc(100% - 20px)" : "100%"};z-index:99999;gap:30px;border-radius:${__p(["navbar" , "float"],false) ? "20px" : "0px"};border-bottom:2px solid #000;`,
    },
    [
      // Left: logo
        $(
            "div",
            { style: "display:flex;align-items:center;gap:10px;width:100%;" },
            [
                $("p", {style:"font-family:font2;font-size:25px;min-width:max-content;"}, ["MR Nice"]),
            ]
        ),

        $(
            "div",
            {
                style:`background-color:inherit;height:fit-content;width:100%;max-width:${__p(["navbar" , "mobile"],false) ? "unset" : "800px"};display:${__p(["navbar" , "mobile"],false)?__p(["navbar","tog"],false)?"flex":"none":"flex"};justify-content:space-between;align-items:${__p(["navbar" , "mobile"],false)?"flex-start":"center"};font-family:font2;flex-direction:${__p(["navbar" , "mobile"],false)?"column":"row"};position:${__p(["navbar" , "mobile"],false)?"absolute":"static"};top:100%;gap:20px;left:0px;padding:${__p(["navbar" , "mobile"],false)?"20px":"0px"};`
            },
            [
                // Center: links
                $(
                    "div",
                    { style: __sC["nav_links"]({method:"add",style:{alignItems:`${__p(["navbar" , "mobile"],false)?"flex-start":"center"}`,flexDirection:`${__p(["navbar" , "mobile"],false)?"column":"row"}`,width:"100%",justifyContent:"center"}}) },
                    [
                        $("a", { href: "#about" , style:__sC["a_style"]()}, ["About"]),
                        $("a", { href: "#why" , style:__sC["a_style"]()}, ["Why $xingsworld"]),
                        $("a", { href: "#community" , style:__sC["a_style"]()}, ["Community"]),
                        $("a", { href: "#faq" , style:__sC["a_style"]()}, ["Faq"]),
                        // $("a", { href: "#" , style:__sC["a_style"]()}, ["Roadmap"]),
                        // $("a", { href: "#" , style:__sC["a_style"]()}, ["API"]),
                    ]
                ),

                // Right: actions
                $(
                    "div",
                    { style: __sC["nav_actions"]() },
                    [
                        $(
                            "button",
                            { style:"padding:15px 20px;background:#fff;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;display:flex;align-items:center;padding-left:15px;font-weight:900;cursor:pointer;min-width:max-content;"},
                            ["Buy Token"]
                        ),
                    ]
                ),
        ]
      ),
      $(
        "div",
        {style:`cursor:pointer;height:40px;width:40px;background-image:url(./assets/menu.svg);display:${__p(["navbar" , "mobile"],false) ? "flex" : "none"};`},
        [],{genericStyle:["bg_cover"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
      )
    ],
    {
        createState:{
            stateName:"navbar",
            state:{ mobile:false,float:false,tog:false }
        },
        mediaQuery:{
            query:[ {size:"<850px" , prop:{mobile:true}} ],
            defState:{mobile:false}
        }
    }
  );
};
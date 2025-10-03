import { updateState } from "./stateAssets.js";
import { $, __p, __sC, __SYD } from "./sydneyDom_v3.js";

__SYD.introPage = function()
{
    return $(
        "div",
        {
            style:`justify-content:center;flex-direction:column;gap:10px;justify-content:center;align-items:center;align-items:center;gap:20px;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font2;position:fixed;top:0px;left:0px;height:100vh;width:100vw;z-index:100000;transition:opacity linear .3s;opacity:${__p(["introPage","opacity"],"1")};display:${__p(["introPage","display"],"flex")};`+__sC["subContainer"]({method:"use",style:["backgroundColor"]})
        },
        [
            $(
                "div",
                {style:"height:fit-content;width:100%;max-width:900px;border-radius:20px;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color: #0f0f0fff;border:1px solid rgba(255,255,255,.1);gap:20px;padding:20px;"},
                [
                    $(
                        "img",
                        {style:"width:100%;height:auto;border-radius:20px;border:2px solid #F3BA2Fc2;",src:"./assets/overlay.jpeg"}
                    ),
                    $(
                        "div",
                        { style: __sC["nav_actions"]() },
                        [
                            $(
                                "button",
                                { style:`padding:15px 20px;background:#F3BA2F;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;display:${__p(["introPage","showEnter"],false)?"flex":"none"};align-items:center;padding-left:15px;font-size:20px;font-weight:300;cursor:pointer;min-width:max-content;font-family:font2;`},
                                ["Enter"],
                                {
                                    events:{
                                        onclick:e=>{        
                                            updateState({name:"introPage",prop:"opacity",value:"0"});
                                            let timer = setTimeout(() => {
                                                clearTimeout(timer);
                                                updateState({name:"introPage",prop:"display",value:"none"});

                                                const vid = document.querySelector("#canva2_vid");
                                                vid.muted = false;
                                                vid.currentTime = 0;
                                            }, 300);
                                        }
                                    }
                                }
                            ),
                        ]
                    ),
                    $(
                        "div",
                        { style:`display:${__p(["introPage","showEnter"],false)?"none":"flex"};height:8px;width:100%;background: #1A1A1A;position:relative;`},
                        [
                            $(
                                "div",
                                {style:`height:80px;width:80px;background-image:url(./assets/cat.gif);position:absolute;bottom:0px;left:0px;`,class:__p(["introPage","animateStart"],false)?"animate_100":"animate_30"},[],{genericStyle:["bg_cover"]}
                            ),
                            $(
                                "div",
                                {style:`height:100%;position:absolute;bottom:0px;left:0px;background:#F3BA2F;`,class:__p(["introPage","animateStart"],false)?"animate_w_100":"animate_w_30"}
                            )
                        ]
                    ),
                ],{}
            ),
        ],
        {
            createState:{
                stateName:"introPage",
                state:{opacity:"1",display:"flex",showEnter:false,animateStart:false}
            }
        }
    )

}

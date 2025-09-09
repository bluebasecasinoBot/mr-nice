import { updateState } from "./stateAssets.js";
import { $, __p, __sC, __SYD } from "./sydneyDom_v3.js";

__SYD.introPage = function()
{
    return $(
        "div",
        {
            style:`justify-content:center;flex-direction:column;gap:10px;justify-content:center;align-items:center;align-items:center;gap:20px;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font2;position:fixed;top:0px;left:0px;height:100vh;width:100vw;background-color:rgba(0,0,0,.9);z-index:100000;transition:opacity linear .3s;opacity:${__p(["introPage","opacity"],"1")};display:${__p(["introPage","display"],"flex")};`
        },
        [
            $(
                "div",
                {style:"height:500px;width:100%;max-width:900px;background-image:url(./assets/overlay.jpeg);border-radius:20px;"},
                [],{genericStyle:["bg_fit"]}
            ),
            $(
                "div",
                { style:`padding:15px 20px;background:#FFD633;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;display:${__p(["introPage","showEnter"],false)?"none":"flex"};align-items:center;padding-left:15px;font-weight:900;cursor:pointer;min-width:max-content;`},
                ["Loading ..."]
            ),
            $(
                "div",
                { style: __sC["nav_actions"]() },
                [
                    $(
                        "button",
                        { style:`padding:15px 20px;background:#FFD633;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;display:${__p(["introPage","showEnter"],false)?"flex":"none"};align-items:center;padding-left:15px;font-weight:900;cursor:pointer;min-width:max-content;`},
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
        ],
        {
            createState:{
                stateName:"introPage",
                state:{opacity:"1",display:"flex",showEnter:false}
            }
        }
    )

}

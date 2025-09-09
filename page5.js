import { $, __p, __sC, __SYD } from "./sydneyDom_v3.js";

__SYD.page5 = function()
{
    return $(
        "div",
        {
            style:"display:flex;justify-content:center;align-items:flex-start;gap:20px;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font2;position:relative;min-height:100vh;width:100vw;position:relative;background-color:transparent;background-image:url(./assets/p5.png);background-position:left;",
            id:'about'
        },
        [
            __SYD.p5_text()
        ],{
            createState:{
                stateName:'page5',
                state:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'30px',__flex:'column-reverse',__font:{1:'30px',2:'17px'}}}],
                defState:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.p5_text = () =>{
    return $('p',{style:`height:fit-content;border-right:5px solid #000000;border-bottom:5px solid #000000;font-size:${__p(['page5' , '__font'],{2:'20px'})['2']};line-height: unset;width:100%;max-width:800px;text-align:center;font-weight:100;padding:${__p(["page5" , "__flex"],"row") === "row" ? "50px" : "20px"};background:#9945FF;border-radius:30px;color:#000000;display:flex;flex-direction:column;gap:15px;`},[
        $("p" , {style:`text-align:left;font-size:16px;`} , [
            `That’s the story. $NICE is here, and it’s only getting bigger. We’re not just another coin — we’re a whole mood.`
        ]),
        $("p" , {style:`text-align:left;font-size:16px;`} , [
            `So hop in, grab some $NICE, share the memes, and let’s ride this wave together.`
        ]),
        $("p" , {style:`text-align:left;font-size:16px;`} , [
            `Be nice. Stay nice. Stack $NICE.`
        ]),

        $(
            "div",
            { style: __sC["nav_actions"]() },
            [
                $(
                    "button",
                    { style:"padding:15px 20px;background:#fff;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;display:flex;align-items:center;padding-left:15px;font-weight:900;cursor:pointer;min-width:max-content;margin:auto;"},
                    ["Join Community"]
                ),
            ]
        ),
    ])
}

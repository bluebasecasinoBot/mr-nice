import { updateState } from "./stateAssets.js";
import { __SYD, $, __sC, __p } from "./sydneyDom_v3.js";


__SYD.page2 = () =>{
    return $(
        'div',
        {
            style:"display:flex;flex-direction:column;gap:20px;width:100%;padding-top:80px;padding-bottom:100px;font-family:font2;position:relative;",
            id:'about'
        },
        [
            __SYD.sliderMain(),
            $('h2',{style:`font-size:2.5rem;font-weight:700;color:#fff;width:100%;text-align:center;`},['ABOUT']),
            $(
                "div",
                {
                    style:"display:flex;flex-direction:row;gap:20px"
                },
                [
                    $(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:15px;perspective:800px;'
                        },
                        [
                            $(
                                "p",
                                {
                                    style:"padding:15px;background:transparent;text-align:center;width:100%;display:flex;justify-content:center;",
                                    // class:"tab_text"
                                },
                                [
                                    __SYD.about_text(),
                                ]
                            ),
                            
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:'page2',
                state:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'30px',__flex:'column-reverse',__font:{1:'30px',2:'17px'}}}],
                defState:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            }
        }
    )
}

__SYD.buyNowBtn = () =>{
    return $('a',{href:'https://tools.smithii.io/launches-list/solana',target:'blank',style:`display:${__p(['navBar','__nav_d'],'flex')};align-items:center;justify-content:center;padding:15px 30px;text-decoration:none;`+__sC["txt_shade3"](),class:'btn_buy'},['Buy Now'],{genericStyle:['bg_fit']})
}


__SYD.about_text = () =>{
    return $('p',{style:`border-right:5px solid #000000;border-bottom:5px solid #000000;font-size:${__p(['page2' , '__font'],{2:'20px'})['2']};line-height: unset;width:100%;max-width:800px;text-align:center;font-weight:100;padding:${__p(["page2" , "__flex"],"row") === "row" ? "50px" : "20px"};background:#14F195;border-radius:30px;color:#000000;display:flex;flex-direction:column;gap:15px;`},[
        $(
            "p",
            {
                style:"font-size:20px;line-height:50px;border-bottom:1px solid;text-align:left;"
            }
            ,[
                "About $xingsworld"
            ]
        ),
        $("p" , {style:`text-align:left;font-size:16px;`} , [
            `Mr. Nice isn’t just any cat—he’s the fluffy superstar who somehow ended up with his own houses, shops, and even VIP rooms (because why not?). While most cats are happy with a cardboard box, Mr. Nice lives in a world of mini-mansions built just for him. From tiny supermarkets to little cinemas, he explores it all with the calm confidence of someone who knows he’s in charge.`
        ]),
        $("p" , {style:`text-align:left;font-size:16px;`} , [
            `This site is our little corner of the internet dedicated to his adventures, his lifestyle, and, honestly, just the pure comedy of watching a cat live better than most humans. Welcome to the world of Mr. Nice—you’re in for a treat.`
        ]),
        __SYD.contactBtn(),
        __SYD.copyCA()
    ])
}

__SYD.contactBtn = function()
{
    return $(
        "div",
        {style:"display:flex;gap:10px;"},
        [
            $(
                "a",
                {style:`cursor:pointer;height:30px;width:30px;background-image:url(./assets/globe.svg);`,href:"#"},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
            ),
            $(
                "a",
                {style:`cursor:pointer;height:30px;width:30px;background-image:url(./assets/tg.svg);`,href:""},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
            ),
            $(
                "a",
                {style:`cursor:pointer;height:30px;width:30px;background-image:url(./assets/x.png);`,href:""},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{updateState({name:"navbar",prop:"tog",value:__p(["navbar","tog"])?false:true})}}}
            )
        ]
    )
}

__SYD.copyCA = function()
{
    return $(
        "div",
        {style:"position:relative;height:60px;width:100%;background:#fff;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;margin-top:15px;display:flex;align-items:center;padding-left:15px;"},
        [
            $(
                "p",{style:"color:#1A1A1A;font-size:16px;font-weight:100;width:calc(100% - 40px);text-align:left;overflow:hidden;"},["0x........................................."]
            ),
            $(
                "div",
                {style:`cursor:pointer;height:30px;width:30px;background-image:url(./assets/copy.svg);position:absolute;transform:translateY(-50%);top:50%;right:15px;`},
                [],{genericStyle:["bg_fit"],events:{onclick:e=>{
                    copyAdx(e , "0x.........................................")
                }}}
            )
        ]
    )
}

function copyAdx(e , txt)
{
    navigator.clipboard.writeText(txt)
    .then(() => e.target.style.backgroundImage = "url(./assets/check.svg)")
    .catch(err => console.error("Failed to copy: ", err));

    let timer = setTimeout(() => {
        e.target.style.backgroundImage = "url(./assets/copy.svg)";
    }, 3000);
}
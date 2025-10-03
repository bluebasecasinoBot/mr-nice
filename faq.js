import { $, __g, __p, __sC, __SYD, __u, SYD_VAR, SYD_VAR_constructor } from "./sydneyDom_v3.js";

SYD_VAR.page2Text1 = new SYD_VAR_constructor({value:"font-size:20px;font-weight:500;text-transform:capitalize;color: rgba(29, 11, 78, 0.68);"});

SYD_VAR.page2Text2 = new SYD_VAR_constructor({value:"color: #fff;font-size:25px;font-weight:900;text-transform:capitalize;font-family:font1;"});

SYD_VAR.pag1SubText = new SYD_VAR_constructor({value:"font-size:16px;font-weight:700;line-height:30px;max-width:600px;color: #16143a;"});

__SYD.faq = () =>{
    return $(
        "div",
        {
            style:"display:flex;justify-content:center;align-items:flex-start;gap:20px;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font2;position:relative;min-height:100vh;width:100vw;position:relative;background-color:transparent;",
            id:"faq"
        },
        [
            __SYD.faqSubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.faqSubHeader = () =>{
    return $(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["faqSubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            __SYD.faq_text1(),
            __SYD.faq_text3(),
            $(
                "div",
                {
                    style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:flex-start;gap:20px;padding:0 ${__p(["faqSubHeader" , "mobilePadState"],false) ? "10px" : "0px"};flex-direction:${__p(["faqSubHeader" , "breakVal"],false) ? "column" : "row"}`
                },
                [
                    $(
                        "div",
                        {
                            style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["faqSubHeader" , "breakVal"],false) ? "100%" : "50%"};border-radius:20px;display:flex;flex-direction:column;gap:20px;background-image:url("./assets/faq.png");background-position:left;border:1px solid rgba(255,255,255,.2);`
                        },[],{genericStyle:["bg_cover"]}
                    ),
                    $(
                        "div",
                        {
                            style:`height:fit-content;width:${__p(["faqSubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                        },
                        [
                            __SYD.faqsQuestionaire()
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"faqSubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false,
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.faq_text1 = () =>{
    return $(
        "div",
        {
            style:"font-size:2.5rem; font-weight:700; color:#F3BA2F; margin-bottom:20px;padding:20px 30px;background-color:#000;border-radius:20px;border:1px solid rgba(255,255,255,.2);text-align:center;"
        },
        [
            $(
                "p",
                {},["Frequently Asked Questions"]
            )
        ]
    )
}


__SYD.faq_text2 = () =>{
    return $(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#16143a;"
        },
        [
            $(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.faq_text3 = () =>{
    return $(
        "div",
        {},
        [
            $("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#ffffff;font-weight:300;`},["You’re not the only one. We put together some quick answers about Mr. Nice, the coin, and what this whole $xingsworld thing is about. Dive in and see what’s up."])
        ]
    )
}

__SYD.faq_text4 = (textContent) =>{
    return $(
        "p",
        {},
        [
            $("p" , {style:`${SYD_VAR.pag1SubText.get()} padding:10px 20px;color:#ffffff;font-weight:300;`},[textContent])
        ]
    )
}

__SYD.faqsQuestionaire = () =>{
    return $(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:700px;display:flex;flex-direction:column;row-gap:10px;"
        },
        [
            __SYD.questionTab({
                question:"Who is Mr. Nice?",
                answer:"Mr. Nice is not just a cat—he’s the cat. The fluffy overlord who inspired Xing Zhilei to build an entire mansion just for him. Now, he’s leveling up with his own meme coin.",
                index:0
            }),
            __SYD.questionTab({
                question:"What is $xingsworld?",
                answer:"$xingsworld is the official BSC-based meme coin dedicated to Mr. Nice and his ever-growing kingdom. It’s more than a token—it’s a movement powered by cat lovers, degens, and dreamers.",
                index:1
            }),
            __SYD.questionTab({
                question:"Why BSC?",
                answer:"Because speed matters! BSC is fast, cheap, and perfect for meme coins that want to go to the moon without gas fees burning your wallet.",
                index:2
            }),
            __SYD.questionTab({
                question:"How do I get $xingsworld?",
                answer:"Easy—head to your favorite BSC DEX (like Raydium or Jupiter), connect your wallet, and swap for $xingsworld. Simple as scratching a post.",
                index:3
            }),
            __SYD.questionTab({
                question:"What’s next for Mr. Nice?",
                answer:"Bigger mansions, stronger community, and more meme-fueled adventures. This is just the beginning of Mr. Nice’s empire.",
                index:4
            })

        ],
        {
            createState:{
                stateName:"faqsQuestionaire",
                state:{
                    currentOpen:-1,
                    height:"0px"
                }
            }
        }
    )
}

__SYD.questionTab = ({
    question = "hello world",
    answer = "answer to hello world",
    index = 0
} = {}) =>{
    return $(
        "div",
        {
            style:"display:flex;flex-direction:column;width:100%;color:#000;font-size:18px;"
        },
        [
            $(
                "div",
                {
                    style:"height:60px;width:100%;cursor:pointer;padding:10px 20px;align-items:center;display:flex;position:relative;font-weight:300;border:3px solid #000000;border-radius:15px;color:#000000;background:#F3BA2F;"
                },
                [
                    question,
                    $(
                        "span",
                        {
                            style:`height:30px;width:30px;position:absolute;top:50%;right:15px;pointer-events:none;transition:transform linear .3s;background-image:url(./assets/plus.svg);transform:translateY(-50%) ${__p(["faqsQuestionaire","currentOpen"]) === index ? "rotate(180deg)" : "rotate(0deg)"};`,
                        },[],{genericStyle:["bg_fit"]}
                    )

                ],
                {
                    events:{
                        onclick:e =>{
                            const state = __g("faqsQuestionaire");
                            state.currentOpen = __p(["faqsQuestionaire","currentOpen"]) === index ? -1 : index;
                            state.height = getComputedStyle(e.target.parentElement.querySelector(".foldTab p")).height
                            __u("faqsQuestionaire" , {type:"a" , value:state});
                        }
                    }
                }
            ),
            $(
                "div",
                {
                    style:`height:${__p(["faqsQuestionaire" , "currentOpen"],0) === index ? __p(["faqsQuestionaire" , "height"],"0px") : "0px"};width:100%;transition:all linear .3s;overflow:hidden;`,
                    class:"foldTab"
                },
                [
                    __SYD.faq_text4(answer)
                ]
            )
        ]
    )
}
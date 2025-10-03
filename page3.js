import { $, __p, __SYD } from "./sydneyDom_v3.js";

__SYD.page3 = function()
{
    return $(
        "div",
        {
            style:"display:flex;flex-direction:column;gap:20px;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font2;position:relative;min-height:100vh;width:100vw;position:relative;background-color:#1A1A1A;",
            id:'about'
        },
        [
            $(
                "div",
                {style:`width:100%;height:fit-content;display:flex;flex-direction:column;align-items:center;position:relative;gap:${__p(["page3","mobile"],false)?"20px":"0px"}`},
                [
                    __SYD.canva1(),
                    __SYD.canva2(),
                ]
            ),
            __SYD.sliderMain2()
        ],
        {
            createState:{
                stateName:"page3",
                state:{ mobile:false }
            },
            mediaQuery:{
                query:[ {size:"<850px" , prop:{mobile:true}} ],
                defState:{mobile:false}
            }
        }
    )
}

__SYD.canva1 = function()
{
    return $(
        "canvas",
        {style:`height:${__p(["page3","mobile"],false)?"300px":"400px"};width:${__p(["page3","mobile"],false)?"100%":"55%"};background:#F3BA2F;border:1px solid #F3BA2F;border-radius:20px;align-self:flex-start;`},[],{type:"canva1"}
    )
}

__SYD.canva2 = function()
{
    return $(
        "canvas",
        {style:`height:${__p(["page3","mobile"],false)?"300px":"500px"};width:${__p(["page3","mobile"],false)?"100%":"55%"};max-width:${__p(["page3","mobile"],false)?"unset":"500px"};background:#F3BA2F;border:1px solid #F3BA2F;border-radius:20px;align-self:flex-end;transform:${__p(["page3","mobile"],false)?"unset":"translateY(-30px)"};`},[],{type:"canva2"}
    )
}
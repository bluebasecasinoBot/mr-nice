import { $, __sC, __SYD } from "./sydneyDom_v3.js";

__SYD["page1"] = () => {
  return $(
    "section",
    { style: "display:flex;flex-direction:column;gap:20px;width:100%;padding-top:80px;padding-bottom:30px;font-family:font2;"},
    [
        $(
            "section",
            {
                style:"height:400px;width:100%;display:flex;justify-content:center;align-items:center;"
            },
            [
                $(
                    "div",
                    {
                        style:"max-height:400px;height:100%;max-width:400px;width:90%;background-image:url(./assets/p1.png);"
                    },[],
                    {
                        genericStyle:["bg_fit"]
                    }
                )
            ]
        ),
        $(
            "div",
            {
                style:__sC["hero_section"]({method:"add",style:{zIndex:"100"}}) , class:"hero_section" 
            },
            [
                // Left column: headline
                $(
                    "div",
                    { style: __sC["hero_left"]() },
                    [
                    $(
                        "h1",
                        { style: __sC["hero_title"]({method:"add",style:{color:"#F3BA2F"}}) , class:"hero_title" },
                        [
                            $("p",{style:__sC["stroked"]()+"padding:20px;background-color:#000;border-radius:20px;border:1px solid rgba(255,255,255,.2);"},["MR NICE"]),
                            $("p",{style:__sC["stroked"]()+"font-size:18px;font-weight:700;"},["$xingsworld"]),
                            $(
                                "div",
                                { style: __sC["nav_actions"]() },
                                [
                                    $(
                                        "div",
                                        { style: __sC["nav_actions"]() },
                                        [
                                            $(
                                                "button",
                                                { style:"padding:15px 20px;background:#fff;border:2px solid #000000;border-radius:15px;border-bottom:5px solid #000000;border-right:5px solid #000000;overflow:hidden;display:flex;align-items:center;padding-left:15px;font-weight:900;cursor:pointer;"},
                                                ["Buy Token"]
                                            ),
                                        ]
                                    ),
                                ]
                            ),
                            // $("p",{},["$xingsworld"])
                        ]
                    ),
                    ]
                ),
            ]
        )
    ]
  );
};
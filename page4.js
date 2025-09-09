import { $, __sC, __SYD } from "./sydneyDom_v3.js"

__SYD["page4"] = () => {
    return $("section", {
    style: "display:flex; flex-direction:column; gap:40px; padding:60px 20px;padding-top:100px;max-width:1200px; margin:0 auto;font-family:font2;",
    id:"why"
    }, [
            $("div", {
                style: "display:flex; flex-direction:column; gap:20px;"
            },
            [
                $("h2", {
                style: "font-size:2.5rem; font-weight:700; color:#ffffff; margin-bottom:20px;"
                }, ["Why Nice $xingsword"]),
                
                $("p", {
                style: "font-size:1.1rem; line-height:1.6; color:#ffffff; max-width:800px;"
                }, ["From TikTok to the blockchain — Mr. Nice has captured hearts by building incredible homes for his pets. Now, that same spirit of creativity, kindness, and fun lives on in $NICE, the meme coin for dreamers and builders."])
            ]),

            $("div", {
                style: "display:flex; flex-wrap:wrap; gap:30px;"
            },[
                $("div", 
                {style: "flex:1; min-width:300px;"},
                [
                    $("ul", {style: "list-style:none; padding:0; display:flex; flex-direction:column; gap:20px;color:#fff;"},
                    [
                        $("li", {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:600;"
                            }, ["Inspired by Viral Culture – Born from the trend that everyone’s talking about"])
                        ]),
                        
                        $("li",
                            {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:600;"
                            }, ["Community-Driven – Powered by the people, growing stronger together."])
                        ]),
                        
                        $("li",
                        {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:600;"
                            }, ["Pets & Positivity – A symbol of care, love, and good vibes."])
                        ]),

                        $("li",
                        {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:600;"
                            }, ["Built for Fun – Memes, rewards, and a movement you can actually enjoy."])
                        ]),

                        $("li",
                        {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:600;"
                            }, ["Giving Back – Future plans to support pet shelters and creative communities."])
                        ])
                    ])
                ]),
                
                // // Image container (purple highlighted section)
                $("div", {
                style: "flex:1; min-width:300px; background-color:transparent; display:flex; align-items:center; justify-content:center; border-radius:8px; padding:unset; height:100%; box-sizing:border-box;"
                }, [
                $("div", {
                    style: "width:100%; height:400px; object-fit:contain;background-image:url(./assets/p4.png);border-radius:20px;"+__sC["stroked_box"]()
                },[],{genericStyle:["bg_cover"]})
                ])
            ])
    ])
}
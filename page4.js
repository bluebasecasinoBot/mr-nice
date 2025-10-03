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
                style: "width:fit-content;font-size:2.5rem; font-weight:700; color:#F3BA2F; margin-bottom:20px;padding:20px 30px;background-color:#000;border-radius:20px;border:1px solid rgba(255,255,255,.2);text-align:center;"
                }, ["Why $xingsworld"]),
                
                $("p", {
                style: "font-size:1.1rem; line-height:1.6; color:#ffffff; max-width:800px;"
                }, ["Xing Zhilei built Xing’s World for his son — a playful universe of tiny houses and pets. At the heart of it is Mr. Nice, the cat who stole the show. Now his spirit lives on in MR NICE $xingsworld, a coin made for fun, community, and good vibes."])
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
                                style: "font-weight:300;"
                            }, ["Built on Culture – Straight from TikTok virality to the blockchain."])
                        ]),
                        
                        $("li",
                            {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:300;"
                            }, ["Community-Powered – No big suits, just people having fun and growing together."])
                        ]),
                        
                        $("li",
                        {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:300;"
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
                                style: "font-weight:300;"
                            }, ["No Overthinking – It’s memes, it’s vibes, it’s good energy."])
                        ]),

                        $("li",
                        {style: "display:flex; align-items:center; gap:10px; font-size:1.1rem;"},
                        [
                            $("span",
                            {
                                style: "min-width:30px;width:30px; height:30px; font-size:20px;background-image:url(./assets/check.svg);"
                            },[],{genericStyle:["bg_cover"]}),
                            $("span", {
                                style: "font-weight:300;"
                            }, ["For the People (and Pets) – A coin that’s about fun first, charts second."])
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
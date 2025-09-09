import { $, __m, __sC, __SYD, __v, manage_mediaQuery } from "./sydneyDom_v3.js"
import "./styles.js";
import "./navBar.js"
import "./page1.js"
import "./page2.js"
import "./sliderEl.js"
import "./page3.js"
import "./page4.js"
import "./page5.js"
import "./footer.js"

__SYD.container = function()
{
    return $(
        "container",
        {style:__sC["subContainer"]()},
        [
            __SYD.tool1(),
            __SYD.tool2(),
            __SYD.tool3(),
            __SYD.navbar(),
            __SYD.page1(),
            __SYD.page2(),
            __SYD.page3(),
            __SYD.page4(),
            __SYD.page5(),
            __SYD.footer()
        ]
    )
}

__SYD.tool1 = function()
{
    return $(
        "div",{class:"tool1",style:"pointer-events:none;"}
    )
}
__SYD.tool2 = function()
{
    return $(
        "div",{class:"tool2",style:"pointer-events:none;"}
    )
}
__SYD.tool3 = function()
{
    return $(
        "div",{class:"tool3",style:"pointer-events:none;"}
    )
}

__m(__SYD.container(),()=>{
    manage_mediaQuery(window.innerWidth);

    //window scroll event
    // addEventListener("scroll",e=>{
    //     console.log(e.target.scrollY)
    // })
    //window scroll event

    const canvas = __v["canva1"];
    const ctx = canvas.getContext("2d");

    const video2 = document.createElement("video");
    const canvas2 = __v["canva2"];
    const ctx2 = canvas2.getContext("2d");

    // Create video element purely in JS
    const video = document.createElement("video");
    video.src = "./assets/canva1.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.play();

    // Wait until metadata loads to size canvas
    video.addEventListener("loadedmetadata", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        drawFrame();
    });

    setTimeout(() => {
        video2.src = "./assets/canva2.mp4";
        video2.autoplay = true;
        video2.loop = true;
        video2.muted = true;
        video2.playsInline = true;
        video2.play();

        // Wait until metadata loads to size canvas
        video2.addEventListener("loadedmetadata", () => {
            canvas2.width = video.videoWidth;
            canvas2.height = video.videoHeight;
        });
    }, 2000);

    function drawFrame() {
        if (!video.paused && !video.ended) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }

        if (!video2.paused && !video2.ended) {
            ctx2.drawImage(video2, 0, 0, canvas2.width, canvas2.height);
        }
        requestAnimationFrame(drawFrame);
    }
})  

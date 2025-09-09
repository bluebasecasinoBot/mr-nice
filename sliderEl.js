import { __SYD, $ } from './sydneyDom_v3.js'

__SYD.sliderMain = () =>{
    const el = () =>{
        const element = [];
        for(let i = 0; i < 15; i++)
        {
            element.push(__SYD.addNavElement())
        }
        return element
    }
    return $(
        'div',
        {
            style:'height:60px;width:100%;position:absolute;bottom:0px;transform-origin:center;transform:rotate(-2deg) translateY(50%);z-index:500;border-bottom:2px solid #171717;user-select:none;'
        },
        [
            $(
                'div',
                {
                    style:'height:100%;min-width:fit-content;background:#9945FF;display:flex;column-gap:30px;padding:0 15px;',
                    class:"slider_anime"
                },
                [
                    ...el()
                ]
            )
        ]
    )
}

__SYD.sliderMain2 = () =>{
    const el = () =>{
        const element = [];
        for(let i = 0; i < 15; i++)
        {
            element.push(__SYD.addNavElement())
        }
        return element
    }
    return $(
        'div',
        {
            style:'height:60px;width:100%;position:absolute;bottom:0px;transform-origin:center;transform:translateY(50%);z-index:500;border-bottom:2px solid #171717;user-select:none;'
        },
        [
            $(
                'div',
                {
                    style:'height:100%;min-width:fit-content;background:#9945FF;display:flex;column-gap:30px;padding:0 15px;',
                    class:"slider_anime"
                },
                [
                    ...el()
                ]
            )
        ]
    )
}

__SYD.addNavElement = () =>{
    return $(
        'div',
        {
            style:'height:100%;width:fit-content;display:flex;column-gap:15px;align-items:center'
        },
        [
            $('div',{height:'50px',width:'50px',style:"border-radius:50%;min-height:50px;min-width:50px;background-image:url(./assets/p1.png);"},[],{genericStyle:["bg_cover"]}),
            $('h2',{style:'font-weight:900;width:max-content;'},['$xingsworld'])
        ]
    )
}
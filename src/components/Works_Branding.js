import React from 'react'

export default function WorksBranding(props) {

    const _arrow = <svg fill='green' width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>

    const _advantages = [
        'Advertising and Brand Strategy',
        'Brand Identity',
        'Marketing Collaterals',
        'Print Ads',
        'Outdoor',
        'PR',
    ]

    const style = {
        shadow:{
            boxShadow:'0px 0px 5px 5px rgba(184, 184, 184, 0.297)',
            padding:'5px',
            borderRadius:'10px',
            backgroundColor:'white'
        },
    }
    

    return (
        <>
            <div className="container ">
                <div className="space-5 bg-light"></div>
                <div className="space-50"></div>
                <div className="h2 text-center text-md-left">
                    {'Branding & Advertising'}
                </div>
                <div className="space-50"></div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-left">
                        <div className="h6">
                            We sign up by understanding a brand’s very reason for existence which helps us evolve a brand promise that 
                            is not just a creative solution, but one that runs deeper and is true to the organisation. 
                            We then devise 360 degree integrated campaigns to reach the target audience through divergent platforms.
                        </div>
                        <div className="space-20"></div>
                    </div>
                    <div className="col-12 col-md-6">
                        {_advantages.map(value =>(
                            <div style={{...style.shadow}} key={value} className='m-2 small'>
                                {_arrow} {value}
                            </div>
                        ))}
                    </div>
                </div>
                

            </div>
        </>
    )
}

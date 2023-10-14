import React from "react";

const Poster = (props) => {
    return (
        <>
            <div className="flex flex-col gap-2 items-start px-4 py-2">
                <div className="h-80">
                    <img src={props.src} alt={props.title} className="w-full rounded-md"/>
                </div>
                
                <div>
                    <h3 className={`text-lg font-bold py-3
                     ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
                    <p className={`text-sm font-bold 
                     ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
                </div>
            </div>
        </>
    )
};

export default Poster;
import React from "react";

const Section = (props)=>{
    return (
        <section className="section-filmes">
            <div>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
               <ul className={props.className}>{props.children}</ul>
               
            </div>
        </section>
    );
} 
export default Section;
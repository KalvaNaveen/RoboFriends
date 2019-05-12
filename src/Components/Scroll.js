import React from 'react';

const Scroll =(prop)=>{
    return(
        <div style={{overflowY:'auto',border:'1px solid lightest-green',height:'78vh'}}>
            {prop.children}
        </div>
    )
}

export default Scroll;
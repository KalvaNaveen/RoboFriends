import React from 'react';

const Card =({UserID,UserName,UserMailId})=>{
      return(
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
                <picture>
                     <img src={`https://robohash.org/${UserID}?150*150`} alt={UserName}/>
                </picture>
                <div>
                    <h2>{UserName}</h2>
                    <p>{UserMailId}</p>
                </div>
            </div>
    );
}
export default Card;
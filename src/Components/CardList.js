import React from 'react';
import Card from '../Components/Card';

const CardList =({usersData})=>{
    return (
       <div>
           {
               usersData.map((user,i)=>{
                return( 
                <Card key={i.toString()} UserID={user.id} UserName={user.name} UserMailId={user.email} />);
              })
            }
            </div>
    ) ;
 
}

export default CardList;
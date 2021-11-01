import React from 'react';




function User({user}){
    return(
        <div>
            <b>{user.userid}</b><span>({user.email})</span>
            <button onClick={()=>onpointermove(user.id)}>
        </div>
    )
}



function UserList(){
    const users =[
        {
            id:1,
            userid:'apple',
            name:'김사과',
            email:'apple@apple.com'
        },
        {
            id:2,
            userid:'banana',
            name:'김사과',
            email:'banana@banana.com'
        },
        {
            id:3,
            userid:'apple',
            name:'김사과',
            email:'melon@melon.com'
        },
        {
            id:4,
            userid:'orange',
            name:'오렌지',
            email:'orange@orange.com'
        },
        {
            id:5,
            userid:'berry',
            name:'박베리',
            email:'berry@berry.com'
        },
    ];
    return (
        <div>
            <div>
                {users.map(user => (
                    <User user={user}/>
                ))}
            </div>
        </div>
    )


}

export default UserList;
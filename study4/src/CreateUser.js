import React from 'react';

/*
    React.memo
    컴포넌트의 props가 바뀌지 않았다면,리랜더링을 방지하여 컴포넌트의 리렌더링 성능
    최적화를 해줄수 있습니다. 이 함수를 사용하면 컴포넌트에서 리랜더링이 필요한 상황에서만
    리랜더링을 하도록 설정합니다.

*/




function CreateUser({ userid, username, email, onChange, onCreate }){
    return (
        <>
        <div>
            <input name="userid" placeholder="아이디" onChange={onChange} value={userid}/>
        </div>
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={username}/>
        </div>
        <div>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
        </div>
        <button onClick={onCreate}>등록하기</button>
        </>
    );
}

export default React.memo(CreateUser);
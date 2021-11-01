// import React, { useRef, useReducer,useMemo,useCallback} from 'react';
// import CreateUser from './CreateUser';
// import UserList from './UserList';



// /*
//   useMemo
//   "memoized" 의미이며,이전에 계산한 값을 재사용한다는 의미로 사용되는 
//   React hook입니다.
//   useMemo의 첫번쨰 파라미터는 어떻게 연산할지 정의하는 함수를 입력하고,두번째
//   파라미터에는 deps 배열을 넣어주면 됩니다. 이 배열 안의 값이 바뀌게되면 우리가 등록한
//   함수를 호출해서 연산해주고 바뀌지않았다면 이전에 그냥 가지고있었던 연산값을 재활용한다는것.
//   use메모는 잘못건드리면 화면이 멈춰버릴수도있으니 잘 건드려야한다.

//   useCallback
//   특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다.

//   useReducer
//   컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.
//   상태 업데이트 로직을 컴포넌트 외부에 작성할 수도 있고,다른 파일에 작성 후 불러와서
//   사용할 수 있습니다.
  

// */

// function countClickUsers(users){
//   console.log('선택한 사용자 카운트');
//   return users.filter(user =>user.isclick).length;


// }

// const initialState = {
//   inputs: {
//     userid: '',
//     name:'',
//     email:'',

//   },
//   users:[
//     {
//       id: 1,
//       userid: 'apple',
//       name: '김사과',
//       email: 'apple@apple.com',
//       isclick: true
//   },
//   {
//       id: 2,
//       userid: 'banana',
//       name: '반하나',
//       email: 'banana@banana.com',
//       isclick: false
//   },
//   {
//       id: 3,
//       userid: 'melon',
//       name: '이메론',
//       email: 'melon@melon.com',
//       isclick: false
//   },
//   {
//       id: 4,
//       userid: 'orange',
//       name: '오렌지',
//       email: 'orange@orange.com',
//       isclick: false
//   },
//   {
//       id: 5,
//       userid: 'berry',
//       name: '박베리',
//       email: 'berry@berry.com',
//       isclick: false
//   }
//   ]

// }
// function reducer(state,action){
//   switch(action.type){
//     case 'CHANGE_INPUT':
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       };
//       case 'CREATE_USER':
//         return {
//           inputs: initialState.inputs,
//           users: state.users.concat(action.user)
//         };
//       case 'TOGGLE_USER':
//         return {
//           ...state,
//           users:state.users.map(user => 
//             user.id === action.id ? {...user,isClick:!user.isClick}:user
//           )
//         };
//         case 'REMOVE_USER':
//           return {
//             ...state,
//             users: state.users.filter(user => user.id !==action.id)
//           };
//       default:
//         return state;
//   }
// }


// function App(){
//   const[state,dispatch] = useReducer(reducer,initialState);
//   const nextId = useRef(6);

//   const{users} = state;
//   const {userid,name,email} = state.inputs;


//   const onChange = useCallback(e =>{
//     const {name,value} = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name,
//       value
//     });
//   },[]);

//   const onCreate = useCallback(()=>{
//     dispatch({
//       type:'CREATE_USER',
//       user:{
//         id:nextId.current,
//         userid,
//         name,
//         email
//       }
//     });
//     nextId.current += 1;
//   },[userid,name,email]);

//   const onToggle = useCallback(id=>{
//     dispatch({
//       typd:'TOGGLE_USER',
//       id
//     });
//   },[]);

//   const onRemove = useCallback(id=>{
//     dispatch({
//       typd:'REMOVE_USER',
//       id
//     });
//   },[]);
  
// const count = useMemo( ()=> countClickUsers(users),[users]);

//   return(
//   <>
//     <CreateUser userid={userid} name={name} email={email} onChange={onChange}onCreate={onCreate}/>
//     <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
//     <div>선택한 사용자 수 : {count}  </div>
    
//     </>
//   );
// }


// export default App;


import React from 'react';
import './App.scss';
import Button from './components/Button';
import CheckBox from './components/CheckBox';


function App(){

  const [check,setCheck] = useState(false);
  const onChange = e=>{
    setCheck(e.target.checked);
  };


  return(
    <>
    <div>
      <CheckBox onChange={onChange}checked={check}>약관 동의</CheckBox>
      <p>
        <b>체크 : {check ? '예':'아니오'}</b>
      </p>
    </div>

    <div className='App'>
      <div className="buttons">
        <Button size="large">버튼</Button>
        <Button>버튼</Button>
        <Button size="small">버튼</Button>
        </div>
        <div className="buttons">
        <Button size="large"color="gray">버튼</Button>
        <Button color="gray">버튼</Button>
        <Button size="small" color="gray">버튼</Button>
        </div>
        <div className="buttons">
        <Button size="large"color="pink">버튼</Button>
        <Button color="pink">버튼</Button>
        <Button size="small" color="pink">버튼</Button>
        </div>
        <div className="buttons">
        <Button size="large" color="pink">버튼</Button>
        <Button color="pink">버튼</Button>
        <Button size="small" color="pink">버튼</Button>
        </div>
        <div className="buttons">
        <Button size="large" color="blue" outline>버튼</Button>
        <Button color="gray" outline>버튼</Button>
        <Button size="small" color="pink" outline>버튼</Button>
        </div>
        <div className="buttons">
        <Button size="large" fullWidth>버튼</Button>
        <Button size="large" color="gray">버튼</Button>
        <Button size="large" color="pink" fullWidth>버튼</Button>
        </div>
      </div>
      </>
  );
}

export default App;
import React,{useRef,useState} from 'react';
import UserList from './UserList2';
// import InputTest3 from './InputTest2';

function App(){
  
  const [inputs,setInputs] = useState({
    userid : '',
    name: '',
    email: '',

  });

  const {userid,name,email} = inputs;

  const onChange = e =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }




  const [users,setUsers] = useState([
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
  ]);

const nextId = useRef(6); //useRef()를 사용할 때 매개변수를 넣어주면 그 값이 .current 값의 기본값이 됩니다.
const onCreate = ()=>{

  const user = {
    id:nextId.current,
    userid,
    name,
    email
  }

  setUsers([...users,user]);
  
  setInputs({
    userid:'',
    name:'',
    email:''
  });

  nextId.current += 1;
}




return(
<>
  <CreateUser
    userid={userid}
    name={name}
    email = {email}
    onChange={onChange}
    onCreate = {onCreate}
  />
  <UserList2 users={users}/>
</>
)
}

export default App;
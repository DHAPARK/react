import React, {useState} from 'react';
//useEffect를 사용하여 컴포넌트가 마운트(처음 나타났을 때)됐을 때 ,언마운트 됐을 때(사라질 때) 그리고 업데이트 될 때(특정props가 바뀔떄)특정 작업을 처리할 수 있습니다.
//


function InputTest2(){

    const [inputs,setInputs] = useState({
        userid : '',
        name: ''
    });

    const {userid,name} = inputs; //비구조화 할당
    

    /*
        리액트에서 객체를 수정할 때에는 
        inputs[name] = value; {X} 이럼안됨

        새로운 객체를 만들어서 새로운 객체에 변화값을 주고, 그 상태로 
        사용해야 한다.
        
    */


    const onChange = (e)=>{
        const {value,name} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const onReset = () =>{
        setInputs({
            userid:'',
            name:'',
        })
    }

    return (
        <div>
            <input name='userid' value={userid} placeholder='아이디' onChange={onChange}/>
            <input name='name' value={name} placeholder='이름' onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({userid})
            </div>
        </div>
    )
}

export default InputTest2;

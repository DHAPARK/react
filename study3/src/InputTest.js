import React, { useState } from 'react';

function InputTest(){
    
    const [text, setText] = useState(''); // text='' 이렇게 되고 setText로 변화시켜주면 그 값으로 변함
    
    const onChange = (e) =>{
        //onChange가 발동되면 e 객체가 만들어지고 함수를 실행
        setText(e.target.value);
        //이 이벤트로 발생하는 value값을 setText에 저장해서  useState으로 넘겨주고 결국엔 text로 들어간다.
        //얘는 input에 걸릴거
    }
    
    const onReset = () =>{
        setText('');
    }


    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :{text}</b>
            </div>
        </div>
    );
}

export default InputTest;
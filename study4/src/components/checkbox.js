import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md';
import React from 'react';
function CheckBox({children,checkd,...rest}){
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked}{...rest}/>
                <div>{checked ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;
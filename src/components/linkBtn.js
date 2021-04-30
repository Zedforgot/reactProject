import './index.less'
import React from 'react'
export default function linkBtn(props){
    // console.log(props)
return(
<button className='linkBtn' {...props}>{props.children}</button>
)
}
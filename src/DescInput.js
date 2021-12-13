import './DescInput.css';
import {Component, useEffect, useRef} from 'react';
function  DescInput(props)  {
    const input =useRef();

    useEffect(() => {
        input.current = document.querySelector('input');
    });
   
        return (
        //form이 제출시키는 역할
        <form className='desc-input'>
        <input type='text' />
        {/* onclick 사용시 직접적으로 <>안에 넣어서! */}
        <button type='submit'
            onClick={(e) => {
                const text = input.current.value;
                props.send(text);
                e.preventDefault();//새로고침 막아줌
            }}>추가</button>
        </form >
        );
        }













// class DescInput extends Component {
//     constructor(props){
//         super(props);
    
//         this.state={
//             title: this.props.title,
//             //rules: this.props.rules
//         }
//     }
//     render() {
//     return (
    
//     //form이 제출시키는 역할
//     <form className='desc-input'>
//     <input type='text' />
//     {/* onclick 사용시 직접적으로 <>안에 넣어서! */}
//     <button type='submit'
//         onClick={(e) => {
//             const text =
//             document.querySelector('input').value;
//             this.props.send(text);
//             e.preventDefault();
//             ;
//         }}>추가</button>
//     </form >
//     );
//     }
//     }
export default DescInput;
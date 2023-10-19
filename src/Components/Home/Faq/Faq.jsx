import React, { useEffect, useState } from 'react';
import SingleFaq from './SingleFaq';

const Faq = () => {
    const [faqs, setFaq] = useState([])

    useEffect(()=>{
        fetch('./faq.json')
        .then(res=>res.json())
        .then(data=>setFaq(data))
    },[])
console.log(faqs);
    return (
        <div className='px-4 grid  md:grid-cols-2'>
     
<div>
<img src="./faq-illustration-transparent-background_565844-258.png" alt="" className='w-[80%]' />
</div>

<div className='my-auto'>

{
    faqs.map((faq,index)=><SingleFaq key={index} faq={faq}/>)
}
</div>

        </div>
    );
};

export default Faq;
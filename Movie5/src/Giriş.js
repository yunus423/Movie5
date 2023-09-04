
import React, { useState } from 'react';






const Giriş = () => {

  const [kul_adi,setKul_adi]=useState("doganyunus@gmail.com");
  const [pass,setPass]=useState("12345678");



  return (

    <div className='div'>
      <div>

        <div>
      <div className='orta'>

<h1 className='hg'>HOŞGELDİNİZ</h1><br></br>

<form  action="/yns" className='di2' >
            
       <label  color='white'>KULANICI ADI : </label>
       <input type="text" className='txt1' value={kul_adi} placeholder="kullanıcı adı giriniz "></input> 
       <br>
       </br><br></br>
       <label>ŞİFRE:  </label>
       <input type="passaword" className='txt2' value={pass} placeholder='şifrenizi giriniz'></input>
       <br></br><br></br>
     {kul_adi==='doganyunus987@gmail.com' && pass==='123456789' ?  <button type='submit' className='btn1'   >giriş</button> 
        : <button type='Text'   className='btn1'>giriş</button>   
        
        
       }

       <h1 className='ki'>KEYİFLİ İZLEMELER </h1> 
       </form>
      </div>
       </div>
       </div>
</div>
 
  )
}
export  default Giriş

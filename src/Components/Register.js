import React from 'react'

function Register() {
  return (
    <div className='register_container'>
        <h1>Register to Attend</h1>
        <div style={{width:"80%"}}>
        <input class="inp" placeholder="Full Name" size={"50"} />
        <input class="inp" placeholder="Mobile" />
        <input class="inp" placeholder="Email" />
        <input class="inp" placeholder="Company Name" />
        <select class="inp" style={{width:"260px" }}>
  <option value="" disabled selected hidden>Select Company</option>
  <option value="company1">Company 1</option>
  <option value="company2">Company 2</option>
  <option value="company3">Company 3</option>
</select>


        </div>

        <button style={{padding: "8px 42px" , borderRadius: "29px" , border: "none" , backgroundColor:"#FF8200" ,color: "white"}}>Submit</button>
    </div>
  )
}

export default Register
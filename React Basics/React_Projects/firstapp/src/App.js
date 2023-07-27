import { useState } from "react";

function RegisterForm(){
  const[form, setForm] = useState({
    firstName: "Amit",
    lastName: "kochar",
    email: "amitkochar91@gmail.com"
  })

  return(
    <>
    <label>
      First Name: <input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})}/>
    </label><br />
    <label>
      Last Name: <input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})}/>
    </label><br />
    <label>
      Email: <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
    </label><br />
    <p>
      {form.firstName}{' '}
      {form.lastName}{' '}<br />
      {form.email}{' '}<br />
    </p>
    </>
  )
}

export default RegisterForm;
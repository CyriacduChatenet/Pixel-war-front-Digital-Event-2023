import { useState } from "react"
import { resetPassword } from "../../setup/utils/useApi"

const ResetPassword = () => {
    const [credentials, setCredentials] = useState('')

    const handleChange = (e) => {
        setCredentials(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        resetPassword(credentials)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onInput={handleChange}/>
            <button type="submit">Envoyer la demande</button>
        </form>
     );
}
 
export default ResetPassword;
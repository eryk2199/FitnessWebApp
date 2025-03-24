import { useState } from "react";
import { useNavigate } from "react-router";

export default function WeigthForm() {
    const [form, setForm] = useState({currentWeigth: "", desiredWeigth: "", calories: ""});
    const [errors, setErrors] = useState({currentWeigth: "", desiredWeigth: "", calories: ""});

    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setForm(prev => ({
            ...prev, [event.target.name]: event.target.value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("user-weigth", JSON.stringify(form));
        localStorage.setItem("weigth", JSON.stringify([{date: new Date(), weigth: form.currentWeigth}]));
        navigate("/weigth");
    }
    
    return(
        <>
            <h1>Create your weigth lose plan</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Your current weigth</label>
                    <input type="number" name="currentWeigth" onChange={handleInputChange} value={form.currentWeigth}/>
                </div>
                <div>
                    <label>Your desired weigth</label>
                    <input type="number" name="desiredWeigth" onChange={handleInputChange} value={form.desiredWeigth}/>
                </div>
                <div>
                    <label>What will be your daily calorie intake</label>
                    <input type="number" name="calories" onChange={handleInputChange} value={form.calories}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
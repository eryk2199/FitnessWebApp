import { useEffect, useState } from "react";

export default function WeigthModal({onSubmit, onClose, weigth}) {
    const [weigthForm, setWeigthForm] = useState({date: new Date().toLocaleDateString("en-CA"), weigth: ""});

    useEffect(() => {
        if(weigth) {
            setWeigthForm(weigth)
        }
    },[weigth]);
    
    const handleWeigthFormChange = (event) => {
        setWeigthForm(prev => ({
            ...prev, [event.target.name]: event.target.value
        }));
    };

    const handleWeigthFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(weigthForm);
        setWeigthForm({date: new Date().toLocaleDateString("en-CA"), weigth: ""});
    }

    return(
        <>
            <div className="backdrop"></div>
            <div className="modal">
                <h1 className="modal__title">Add weigth</h1>
                <form onSubmit={handleWeigthFormSubmit}>
                    <div className="form__group">
                        <label>Date</label>
                        <input type="date" className="input--text" name="date" value={weigthForm.date} onChange={handleWeigthFormChange} required/>
                    </div>
                    <div className="form__group">
                        <label>Weigth(kg)</label>
                        <input type="number" className="input--text" name="weigth" value={weigthForm.weigth} onChange={handleWeigthFormChange} required></input>
                    </div>
                    <div className="form__actions">
                        <button className="button button--danger" type="button" onClick={() => onClose()}>Cancel</button>
                        <button type="submit" className="button button--success">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}
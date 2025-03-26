import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

export default function WeigthModal({onSubmit, onClose, weigth}) {
    const [weigthForm, setWeigthForm] = useState({date: new Date().toLocaleDateString("en-CA"), value: ""});
    const form = useRef(null);

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
        setWeigthForm({date: new Date().toLocaleDateString("en-CA"), value: ""});
    }

    const submitForm = () => {
        console.log('a')
        form.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true}))
    }

    return(
        <Modal title="Add weight" confirmText="Add" onClose={() => onClose()} onConfirm={submitForm}>
            <form onSubmit={handleWeigthFormSubmit} ref={form}>
                <div className="form__group">
                    <label>Date</label>
                    <input type="date" className="input--text" name="date" value={weigthForm.date} onChange={handleWeigthFormChange} required/>
                </div>
                <div className="form__group">
                    <label>Weigth(kg)</label>
                    <input type="number" className="input--text" name="value" value={weigthForm.value} onChange={handleWeigthFormChange} required></input>
                </div>
            </form>
        </Modal>
    )
}
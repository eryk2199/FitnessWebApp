import { useEffect, useState } from "react";

export default function WeigthDashboard() {
    const [weigthData, setWeigthData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [weigthForm, setWeigthForm] = useState({date: new Date().toLocaleDateString("en-CA"), weigth: ""});

    useEffect(() => {
        const data = localStorage.getItem("weigths");
        if(!data) {
            return;
        }
        setWeigthData(JSON.parse(data));
    }, []);

    const handleWeigthFormChange = (event) => {
        setWeigthForm(prev => ({
            ...prev, [event.target.name]: event.target.value
        }));
    };

    const handleWeigthFormSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("weigths", JSON.stringify([...weigthData, weigthForm]));
        setWeigthData(prev => ([
            ...prev, weigthForm
        ]));
        setWeigthForm({date: new Date().toLocaleDateString("en-CA"), weigth: ""});
        setShowModal(false);
    }

    return(
        <div className="dashboard">
            <button className="button" onClick={() => setShowModal(true)}>Add</button>

            <table className="weigth-table">
                <thead>
                    <tr>
                        <th>date</th>
                        <th>weigth(kg)</th>
                    </tr>
                </thead>
                <tbody>
                    {weigthData.map(w => 
                    <tr>
                        <td>{w.date}</td>
                        <td>{w.weigth}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            {showModal && 
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
                            <button className="button button--danger" type="button" onClick={() => setShowModal(false)}>Cancel</button>
                            <button type="submit" className="button button--success">Add</button>
                        </div>
                    </form>
                </div>
            </>
            }
        </div>
    );
}
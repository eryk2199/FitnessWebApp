import { useEffect, useState } from "react";
import WeigthModal from "./WeigthModal";

export default function WeigthDashboard() {
    const [weigthData, setWeigthData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedWeigth, setSelectedWeigth] = useState();

    useEffect(() => {
        const data = localStorage.getItem("weigths");
        if(!data) {
            return;
        }
        setWeigthData(JSON.parse(data));
    }, []);

    const handleWeigthFormSubmit = (weigth) => {
        localStorage.setItem("weigths", JSON.stringify([...weigthData, weigth]));
        setWeigthData(prev => ([
            ...prev, weigth
        ]));
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
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {weigthData.map(w => 
                    <tr>
                        <td>{w.date}</td>
                        <td>{w.weigth}</td>
                        <td className="weigth-table__actions"> 
                            <button className="button">Edit</button>
                            <button className="button">Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            {showModal && 
                <WeigthModal onSubmit={handleWeigthFormSubmit} onClose={() => setShowModal(false)} weigth={selectedWeigth}/>
            }
        </div>
    );
}
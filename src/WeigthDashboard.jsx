import { useEffect, useState } from "react";
import WeigthModal from "./WeigthModal";
import Modal from "./Modal";

export default function WeigthDashboard() {
    const [weigthData, setWeigthData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedWeigth, setSelectedWeigth] = useState();
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async() => {
        const req = await fetch("https://localhost:7148/weights");
        const data = await req.json();
        setWeigthData(data);
    }

    const addData = async(weight) => {
        const req = await fetch("https://localhost:7148/weights", {
            headers: {
                "Content-Type": "application/json",
              },
            method: "POST",
            body: JSON.stringify(weight)
        });
        const res = await req.json();
        setWeigthData(prev => ([...prev, res]));
    }

    const editData = async(weight) => {
        const req = await fetch("https://localhost:7148/weights/" + weight.id, {
            headers: {
                "Content-Type": "application/json",
              },
            method: "PUT",
            body: JSON.stringify(weight)
        });
        if(req.status === 204) {
            setWeigthData(prev => {
                const item = prev.find(w => w.id === weight.id);
                const index = prev.indexOf(item);
                if(index >= 0) {
                    return [...prev.slice(0, index),
                         {id: weight.id, date: weight.date, value: weight.value},
                        ...prev.slice(index+1)]
                }
                console.error("Something went wrong");
            })
        }
    }

    const deleteData = async(id) => {
        const req = await fetch("https://localhost:7148/weights/" + id, {
            headers: {
                "Content-Type": "application/json",
              },
            method: "DELETE",
        });
        if(req.status === 200) {
            setWeigthData(prev => {
                const item = prev.find(w => w.id === id);
                const index = prev.indexOf(item);
                if(index >= 0) {
                    return [...prev.slice(0, index), ...prev.slice(index+1)]
                }
                console.error("Something went wrong");
            })
        }
    }

    const handleWeigthFormSubmit = (weight) => {
        if(weight.id) {
            editData(weight);
        }
        else {
            addData(weight) 
        }
        setShowModal(false);
    }

    const handleEdit = (weight) => {
        setSelectedWeigth(weight);
        setShowModal(true);
    }

    const handleDelete = (w) => {
        setSelectedWeigth(w);
        setShowConfirmDelete(true);
    }

    const handleConfirmDelete = () => {
        if(!selectedWeigth) {
            return;
        }
        deleteData(selectedWeigth.id);
        setSelectedWeigth(undefined);
        setShowConfirmDelete(false);
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
                    <tr key={w.id}>
                        <td>{w.date}</td>
                        <td>{w.value}</td>
                        <td className="weigth-table__actions"> 
                            <button className="button" onClick={() => handleEdit(w)}>Edit</button>
                            <button className="button" onClick={() => handleDelete(w)}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            {showModal && 
                <WeigthModal onSubmit={handleWeigthFormSubmit} onClose={() => setShowModal(false)} weigth={selectedWeigth}/>
            }
            {showConfirmDelete &&
                <Modal title="Remove weight" confirmText="Delete" onClose={() => setShowConfirmDelete(false)} onConfirm={handleConfirmDelete}>
                    <p>Are you sure you want to delete?</p>
                </Modal>
            }
        </div>
    );
}
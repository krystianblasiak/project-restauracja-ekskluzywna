import styles from "./Booking.module.scss";
import Calendar from "../Calendar/Calendar";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addReservation, resetStatus, sendReservation } from "../../redux/reservationSlice";

const Booking = () => {
    const dispatch = useDispatch();

    const { tables = [], reservations = [], timeSlots = [], selectedDate, success } = useSelector(
    (state) => state.reservations || {});
    const [dataForm, setDataForm] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        tableId: '',
        date: '',
        time: ''
    });

    const [selectedTime, setSelectedTime] = useState("");

    const occupiedIds = reservations.filter(r => r.date === selectedDate && r.time === dataForm.time).map(r => r.tableId);
    const filtered = tables.map(table => ({
        ...table,
        available: !occupiedIds.includes(table.id)
    }));

    const occupiedTime = reservations.filter(r => r.date === selectedDate && r.time === dataForm.time).map(r => r.time);
    const filteredTime = timeSlots.map(t => ({
        ...t,
        available: !occupiedTime.includes(t.time)
    }));

    const [availableTables, setAvailableTables] = useState(filtered);
    const [availableTime, setAvailableTime] = useState(filteredTime);
    const [status, setStatus] = useState('');
    
    useEffect(() => {
        const occupiedIds = reservations.filter(r => r.date === selectedDate && r.time === dataForm.time).map(r => r.tableId);
        const filtered = tables.map(table => ({
            ...table,
            available: !occupiedIds.includes(table.id)
        }));

        setAvailableTables(filtered);
    }, [selectedDate, dataForm, reservations, tables]);

    useEffect(() => {
        for(let i = 0; i < reservations.length; i++){
            const occupiedTime = reservations.filter(r => r.date === selectedDate && r.tableId === dataForm.tableId ).map(r => r.time);
            const filteredTime = timeSlots.map(t => ({
                ...t,
                available: !occupiedTime.includes(t.time)
            }));
            setAvailableTime(filteredTime);
        }
        
        
    }, [selectedDate, dataForm.time, dataForm.tableId, reservations, timeSlots]);

    useEffect(() => {
        if(success){
            const timer = setTimeout(() => dispatch(resetStatus()) , 600);
            return () => clearTimeout(timer);
        }
    }, [success, dispatch]);

    useEffect(() => { setDataForm({ ...dataForm, date: selectedDate})}, [selectedDate, dataForm.date]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedTable = tables.find(t => t.id  === Number(dataForm.tableId));

        dispatch(addReservation({
            name: dataForm.name,
            surname: dataForm.surname,
            email: dataForm.email,
            phone: dataForm.phone,
            tableId: dataForm.tableId,
            date: String(selectedDate),
            time: dataForm.time,
            tableName: selectedTable.name
        }));

        dispatch(sendReservation(dataForm));

        setStatus(`✅ Zarezerwowano stolik nr ${dataForm.tableId} na ${dataForm.time} dnia ${selectedDate}`);
        setDataForm({
            name: '', surname: '', email: '', phone: '', tableId: '', time: ''
        });

        setSelectedTime("");
    };

    const handleTimeClick = (t, tId) => {
        setDataForm({ ...dataForm, time: t});
        setSelectedTime(tId);
    };

    return (
        <div className={styles.booking}>
            <Container>
                <h2 className={styles.h2}>Rezerwacja</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input1} placeholder="Imię" type="text" value={dataForm.name} onChange={e => setDataForm({ ...dataForm, name: e.target.value})} required></input>
                    <input className={styles.input1} placeholder="Nazwisko" type="text" value={dataForm.surname} onChange={e => setDataForm({ ...dataForm, surname: e.target.value})} required></input><br />
                    <input className={styles.input} placeholder="E-mail" type="email" value={dataForm.email} onChange={e => setDataForm({ ...dataForm, email: e.target.value})} required></input><br />
                    <input className={styles.input} placeholder="Telefon kontaktowy" type="tel" value={dataForm.phone} onChange={e => setDataForm({ ...dataForm, phone: e.target.value})} required></input> <br />
                    <select className={styles.input2} value={dataForm.tableId} onChange={e => setDataForm({ ...dataForm, tableId: e.target.value})} required>
                        <option value="" disabled selected>Nr stolika</option>
                        {availableTables.map(table => (<option key={table.id} value={table.id} disabled={!table.available}>
                            {table.name} ({table.seats} os.)
                        </option>))}
                    </select>
                    <div className={styles.wrapper}>
                        <Calendar />
                        <div className={styles.box}>
                            <div className={styles.box1}>
                                {availableTime.map(t => <button key={t.id} type="button" className={`${styles.btn1} ${!t.available ? styles.isActive : ''} ${t.id === Number(selectedTime) ? styles.isClick : ''}`} disabled={!t.available} onClick={(e) => {e.preventDefault(); handleTimeClick(t.time, t.id)}}>{t.time}</button>)}
                            </div>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className={styles.btn} disabled={!dataForm.time || !dataForm.tableId}>Rezerwuj</button>
                    <br /> <br /> <br />{status && <p>{status}</p>}
                </form>
            </Container>
        </div>
    );
};

export default Booking;
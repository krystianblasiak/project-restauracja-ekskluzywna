import { useState } from "react";
import styles from "./Calendar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../../redux/reservationSlice";

const Calendar = () => {
    const dispatch = useDispatch();
    const [currentDate, setCurrentDate] = useState(new Date());
    const selectedDate = useSelector(state => state.reservations.selectedDate);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysOfWeek = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Niedz'];
    const monthName = currentDate.toLocaleString('pl-PL', { month: 'long', year: 'numeric' });

    // Generowanie dni
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();


    const days = [];

    // Puste komórki na początku
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        days.push({ day: '', isCurrentMonth: false });
    }
    // Dni miesiąca
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = dateStr === new Date().toISOString().split('T')[0];
        const isPast = new Date(dateStr) < new Date().setHours(0,0,0,0);

        days.push({
        day,
        dateStr,
        isCurrentMonth: true,
        isToday,
        isPast,
        });
    }

    const handleDateClick = (dateStr) => {
        if (!dateStr) return;
        dispatch(setSelectedDate(dateStr));
    };

    const prevMonth = (e) => {
        e.preventDefault();
        setCurrentDate(new Date(year, month - 1, 1));
    }
    const nextMonth = (e) => {
        e.preventDefault();
        setCurrentDate(new Date(year, month + 1, 1));
    }

    return (
        <div className={styles.calendarContainer}>
        <div className={styles.calendarHeader}>
            <button onClick={prevMonth} className={styles.navBtn}>←</button>
            <h3 className={styles.monthTitle}>{monthName}</h3>
            <button onClick={nextMonth} className={styles.navBtn}>→</button>
        </div>

        <div className={styles.weekdays}>
            {daysOfWeek.map(day => <div key={day} className={styles.weekday}>{day}</div>)}
        </div>

        <div className={styles.datesGrid}>
            {days.map((item, index) => (
            <div
                key={index}
                className={`date-cell ${!item.isCurrentMonth ? 'other-month' : ''}
                ${item.isToday ? 'today' : ''}
                ${item.dateStr === selectedDate ? 'selected' : ''}
                ${item.isPast ? 'past' : ''}`}
                onClick={() => !item.isPast && handleDateClick(item.dateStr)}>
                {item.day}
            </div>
            ))}
        </div>

        <style jsx>{`
            .date-cell {
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            border-radius: 10px;
            margin: 5px;
            text-align: center;
            border: 1px solid #f0f0f0;
            color: #000;
            cursor: pointer;
            position: relative;
            transition: all 0.2s ease;
            min-height: 30px;
            }
            .date-cell:hover:not(.past):not(.other-month) {
            background: #0652DD;
            color: #fff;
            transform: scale(1.1);
            }
            .date-cell.today {
            background: #e3f2fd;
            font-weight: bold;
            }
            .date-cell.selected {
            background: #0652DD;
            color: white;
            font-weight: bold;
            }
            .date-cell.occupied {
            color: #e74c3c;
            }
            .date-cell.past {
            color: #ccc;
            cursor: not-allowed;
            }
            .date-cell.other-month {
            color: #ddd;
            }
            .occupied-dot {
            position: absolute;
            bottom: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            background: #e74c3c;
            border-radius: 50%;
            }
        `}</style>
        </div>
    );
}

export default Calendar;
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import styles from "./Calendar.module.css";
import "./calendar.css";

const Calendar = () => {
  const path = process.env.PUBLIC_URL;
  const location = useLocation();
  const { purchaseDate } = location.state || {};

  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const savedList = localStorage.getItem("foodList");
    const foodList = savedList ? JSON.parse(savedList) : [];

    // FullCalendar에서 사용할 이벤트 배열 생성
    const eventArray = foodList.map((item) => {
      const endDay = new Date(item.expirationDate);
      const today = new Date();
      const timeDiff = endDay.getTime() - today.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

      return {
        category: item.category,
        title: item.foodName,
        start: item.purchaseDate,
        quantity: item.quantity,
        endDay: item.expirationDate,
        dDay: daysDiff >= 0 ? `D-${daysDiff}` : `D+${Math.abs(daysDiff)}`,
      };
    });

    setEvents(eventArray);
  }, []);

  const handleDayClick = (arg) => {
    const selectedEvents = events.filter(
      (event) => event.start === arg.dateStr
    );
    setSelectedDate(selectedEvents);
  };

  const categoryIMG = {
    냉장: "/images/category_fridge.svg",
    냉동: "/images/category_freezer.svg",
    실온: "/images/category_room.svg",
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.container}>
        <div className="calendarBox">
          <h2 className={styles.mainTitle}>싱싱고 채운 날</h2>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: "prev",
              center: "title",
              right: "next",
            }}
            dateClick={handleDayClick}
            height={400}
          />
        </div>
        {selectedDate && selectedDate.length > 0 ? (
          <div className={styles.listBox}>
            {/* <h2 className={styles.underDate}>{`${selectedDate[0].start}`}</h2> */}
            <ul>
              {selectedDate.map((event, index) => (
                <li key={index} className={styles.itemBox}>
                  <p className={styles.category}>
                    <img
                      src={path + categoryIMG[event.category]}
                      alt={event.category}
                    />
                    {`${event.category}`}
                  </p>
                  <div className={styles.textBox}>
                    <p className={styles.name}>
                      {`${event.title}`}({`${event.quantity}`})
                    </p>
                    <p
                      className={
                        styles.endDay
                      }>{`소비기한: ${event.endDay}`}</p>
                  </div>

                  <p className={styles.dDay}>{` ${event.dDay}`}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={styles.emptyBox}>
            <h2 className={styles.empty}>
              <img
                src={path + "/images/shopping_list.svg"}
                alt="food-category-img"
                className={styles.emptyImg}
              />
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;

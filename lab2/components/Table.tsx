import React from 'react'
import styles from '../styles/Home.module.css'

const Table = () => {
  return (
    <table>
        <tbody>
            <tr>
                <td colSpan={2}>
                  <div className={styles.inputElem}>
                      Фамилия: <input type="text" name="lastName" />
                  </div>
                  <div className={styles.inputElem}>
                    Имя: <input type="text" name='firstName' /> 
                  </div>
                  <div className={styles.inputElem}>
                    Отчество: <input type="text" name='middleName' />
                  </div>
                  <br />
                  <div className={styles.inputElem}>
                    Дата начала: <input type="date" name="startDate" />
                  </div>
                  <div className={styles.inputElem}>
                    Дата конца: <input type="date" name="endDate" />
                  </div>
                  <br />
                  <div className={styles.inputElem}>
                    Email: <input type="email" name="email" />
                  </div>
                  <div className={styles.inputElem}>
                    Телефон: <input type="text" name="phoneNumber" />
                  </div>     
                </td>
            </tr>
            <tr>
              <td rowSpan={2}>
              Вид транспорта: <br />
                <select name="via" aria-label="Вид транспорта">
                    <option value="plane" selected>Самолёт</option>
                    <option value="train">Поезд</option>
                    <option value="bus">Автобус</option>
                    <option value="ship">Корабль</option>
                </select>
                <br />
                Тип тура:
                <div>
                  <div>
                    <input type="radio" name="tourType" value="buisness" /> Бизнес-поездка
                  </div>
                  <div>
                    <input type="radio" name="tourType" value="beach" /> Пляжный отдых
                  </div>
                  <div>
                    <input type="radio" name="tourType" value="excursion" /> Экскурсия
                  </div>
                  <div>
                    <input type="radio" name="tourType" value="mountain" /> Горнолыжный
                  </div>
                  <div>
                    <input type="radio" name="tourType" value="health" /> Оздоровление
                  </div>
                </div>
                <div>
                  Количество туристов:
                  <div>
                    1 <input type="range" name="touristCount" min={1} max={100} step={1} /> 100
                  </div>
                </div>
              </td>
              <td className={styles.centerCell}>
                Дополнительные услуги:
                <div>
                  Трансфер до отеля <input type="checkbox" name="transferToHotel" />
                </div>
                <div>
                  Ранний заезд <input type="checkbox" name="earlyArrival" />
                </div>
                <div>
                  Экскурсия с гидом <input type="checkbox" name="guidedExcursion" />
                </div>
                <div>
                  Страховка <input type="checkbox" name="insurance" />
                </div>
                <div>
                  Аренда автомобиля <input type="checkbox" name="carRent" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Максимальная цена (в тысячах):
                <div>
                  30 <input type="range" name="maxPrice" step={5} /> 1000
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.centerCell}>
                <input type="reset" value="Очистить" />
              </td>
              <td className={styles.centerCell}>
                <input type="submit" value="Отправить" />
              </td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table
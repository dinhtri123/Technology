import React, { useEffect, useState } from 'react';
import styles from "./CountdownStyles.module.css"
import Title from '../Title/Title';
import Button from '../Button/Button';
import {Link} from "react-router-dom"

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  
  const endTime = new Date("Tue Mar 30 2024 21:09:30 GMT+0700").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date().getTime();
      const timer = endTime - newDate;
      const days = Math.floor(timer / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (timer % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((timer % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((timer % (60 * 1000)) / 1000);

      if (timer < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [endTime]);

    return (
      <div className={styles.productFlashSale}>
        <div className={`container`}>
          <div className={styles.productFlashSaleInner}>
            <div className={styles.productFlashSaleTop}>
              <span className={styles.productFlashSaleImage}>
                <img src="/flashsale.png" alt="" />
              </span>
              <div className={styles.countdownTime}>
                <span>
                  Kết thúc sau <b>{timerDays}</b> ngày :
                </span>
                <span>
                  {timerHours < 10 ? `0${timerHours}` : `${timerHours}`}
                </span>
                <span>
                  {timerMinutes < 10 ? `0${timerMinutes}` : `${timerMinutes}`}
                </span>
                <span>
                  {timerSeconds < 10 ? `0${timerSeconds}` : `${timerSeconds}`}
                </span>
                <div className="countdown">
                  <div className="bloc-time hours" data-init-value="24">
                    <div className="figure hours hours-1">
                      <span className="top">2</span>
                      <span className="top-back">
                        <span>2</span>
                      </span>
                      <span className="bottom">2</span>
                      <span className="bottom-back">
                        <span>2</span>
                      </span>
                    </div>

                    <div className="figure hours hours-2">
                      <span className="top">4</span>
                      <span className="top-back">
                        <span>4</span>
                      </span>
                      <span className="bottom">4</span>
                      <span className="bottom-back">
                        <span>4</span>
                      </span>
                    </div>
                  </div>

                  <div className="bloc-time min" data-init-value="0">
                    <div className="figure min min-1">
                      <span className="top">0</span>
                      <span className="top-back">
                        <span>0</span>
                      </span>
                      <span className="bottom">0</span>
                      <span className="bottom-back">
                        <span>0</span>
                      </span>
                    </div>

                    <div className="figure min min-2">
                      <span className="top">0</span>
                      <span className="top-back">
                        <span>0</span>
                      </span>
                      <span className="bottom">0</span>
                      <span className="bottom-back">
                        <span>0</span>
                      </span>
                    </div>
                  </div>

                  <div className="bloc-time sec" data-init-value="0">
                    <div className="figure sec sec-1">
                      <span className="top">0</span>
                      <span className="top-back">
                        <span>0</span>
                      </span>
                      <span className="bottom">0</span>
                      <span className="bottom-back">
                        <span>0</span>
                      </span>
                    </div>

                    <div className="figure sec sec-2">
                      <span className="top">0</span>
                      <span className="top-back">
                        <span>0</span>
                      </span>
                      <span className="bottom">0</span>
                      <span className="bottom-back">
                        <span>0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Countdown;
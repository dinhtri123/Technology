import React, { useEffect, useState } from 'react';
import styles from "./CountdownStyles.module.css"
import Title from '../Title/Title';
import Button from '../Button/Button';
import {Link} from "react-router-dom";
import { TweenMax, Quart } from "gsap";

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

const [values, setValues] = useState({
  hours: parseInt(document.querySelector(".bloc-time.hours").dataset.initValue),
  minutes: parseInt(document.querySelector(".bloc-time.min").dataset.initValue),
  seconds: parseInt(document.querySelector(".bloc-time.sec").dataset.initValue),
});
const [totalSeconds, setTotalSeconds] = useState(
  values.hours * 60 * 60 + values.minutes * 60 + values.seconds
);

useEffect(() => {
  const interval = setInterval(() => {
    if (totalSeconds > 0) {
      setValues((prevValues) => {
        let newSeconds = prevValues.seconds - 1;
        let newMinutes = prevValues.minutes;
        let newHours = prevValues.hours;

        if (prevValues.minutes >= 0 && newSeconds < 0) {
          newSeconds = 59;
          newMinutes--;
        }

        if (prevValues.hours >= 0 && newMinutes < 0) {
          newMinutes = 59;
          newHours--;
        }

        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds - 1);
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    } else {
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval);
}, [totalSeconds]);

const animateFigure = ($el, value) => {
  const $top = $el.querySelector(".top");
  const $bottom = $el.querySelector(".bottom");
  const $back_top = $el.querySelector(".top-back");
  const $back_bottom = $el.querySelector(".bottom-back");

  $back_top.querySelector("span").innerHTML = value;
  $back_bottom.querySelector("span").innerHTML = value;

  TweenMax.to($top, 0.8, {
    rotationX: "-180deg",
    transformPerspective: 300,
    ease: Quart.easeOut,
    onComplete: () => {
      $top.innerHTML = value;
      $bottom.innerHTML = value;
      TweenMax.set($top, { rotationX: 0 });
    },
  });

  TweenMax.to($back_top, 0.8, {
    rotationX: 0,
    transformPerspective: 300,
    ease: Quart.easeOut,
    clearProps: "all",
  });
};

const checkHour = (value, $el_1, $el_2) => {
  const val_1 = value.toString().charAt(0);
  const val_2 = value.toString().charAt(1);
  const fig_1_value = $el_1.querySelector(".top").innerHTML;
  const fig_2_value = $el_2.querySelector(".top").innerHTML;

  if (value >= 10) {
    if (fig_1_value !== val_1) animateFigure($el_1, val_1);
    if (fig_2_value !== val_2) animateFigure($el_2, val_2);
  } else {
    if (fig_1_value !== "0") animateFigure($el_1, 0);
    if (fig_2_value !== val_1) animateFigure($el_2, val_1);
  }
};

useEffect(() => {
  const $hour_1 = document.querySelector(".bloc-time.hours .figure")
    .children[0];
  const $hour_2 = document.querySelector(".bloc-time.hours .figure")
    .children[1];
  const $min_1 = document.querySelector(".bloc-time.min .figure").children[0];
  const $min_2 = document.querySelector(".bloc-time.min .figure").children[1];
  const $sec_1 = document.querySelector(".bloc-time.sec .figure").children[0];
  const $sec_2 = document.querySelector(".bloc-time.sec .figure").children[1];

  const countdownInterval = setInterval(() => {
    if (totalSeconds > 0) {
      setValues((prevValues) => {
        checkHour(prevValues.hours, $hour_1, $hour_2);
        checkHour(prevValues.minutes, $min_1, $min_2);
        checkHour(prevValues.seconds, $sec_1, $sec_2);
        return prevValues;
      });
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);

  return () => clearInterval(countdownInterval);
}, [totalSeconds]);

    return (
      <div className={styles.productFlashSale}>
        <div className={`container`}>
          <div className={styles.productFlashSaleInner}>
            <div className={styles.productFlashSaleTop}>
              <span className={styles.productFlashSaleImage}>
                <img src="../../../public/flashsale.png" alt="" />
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
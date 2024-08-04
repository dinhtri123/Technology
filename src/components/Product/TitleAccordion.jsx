import React from 'react';
import { Icon } from "@iconify/react";
import { useMedia } from '../../hooks/useMedia';

const iconPlus = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"></path></svg>`;
const iconMinus = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"></path></svg>`;

const TitleAccordion = ({ text }) => {
      const handleAccordion = (e) => {

        const getNextElm = e.target.nextElementSibling;
        const getElmChildren = e.currentTarget.children[0];
        if (getNextElm.style.maxHeight == "0px") {
          getNextElm.style.maxHeight = getNextElm.scrollHeight + "px";
          getNextElm.style.marginTop = "10px";
          getElmChildren.innerHTML = iconMinus;
        } else {
          getNextElm.style.maxHeight = "0px";
          getNextElm.style.marginTop = "0px";
          getElmChildren.innerHTML = iconPlus;
        }
      };
  return (
    <h4 onClick={handleAccordion}>
      {text}
      <span>
        <Icon icon="ic:round-minus" />
      </span>
    </h4>
  );
};

export default TitleAccordion;
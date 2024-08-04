import styles from "./CartPopupStyles.module.css"
import { Icon } from "@iconify/react";
import Button from "../../../components/Button/Button";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../../utils/request";
import { useToggle } from "../../../hooks/useToggle";
import { useMedia, useMediaMobile } from "../../../hooks/useMedia";

const CartPopup = () => {
  const [activeCart, cart, setCart] = useToggle();
  const [productCart, setProductCart] = useState([]);
  const [isMobile] = useMediaMobile();
  const [isTablet] = useMedia();
  const cartRef = useRef(null);
  const cartWrapperRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get("addToCart");
      setProductCart(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div onClick={() => setCart(true)} ref={cartWrapperRef}>
        <Icon icon="solar:bag-4-outline" />
        <span className={styles.headerRightInforItemText}>Giỏ hàng</span>
      </div>
      <div
        className={`popupWrapper ${styles.inforCartWrapper} ${
          activeCart ? `active ${styles.active}` : ""
        }`}
        ref={cartRef}
      >
        {isTablet && <div className={`bg-opacity`}></div>}
        <div className={`popupContent ${styles.inforCartContainer}`}>
          <h3 className={styles.inforCartTitle}>
            <span onClick={() => setCart(false)}>
              <Icon icon="ph:caret-left-bold" />
            </span>
            Giỏ hàng
            {productCart.length > 0 && (
              <span>
                <Icon icon="fluent:delete-48-regular" />
              </span>
            )}
          </h3>
          <div className={styles.inforCartContent}>
            {productCart.length > 0 &&
              productCart.map((item) => (
                <div className={styles.inforCartProduct} key={item.id}>
                  <div className={styles.inforCartProductLeft}>
                    <img
                      src={item.image}
                      width={80}
                      height={80}
                      alt="Product"
                    />
                  </div>
                  <div className={styles.inforCartProductRight}>
                    <span className={styles.inforCartProductLeftIcon}>
                      <Icon icon="solar:close-circle-bold" />
                    </span>
                    <div className={styles.inforCartProductTitle}>
                      <h4>{item.title}</h4>
                      <p>
                        SKU: {item.sku} - {item.option}
                      </p>
                    </div>
                    <div className={styles.inforCartProductPrice}>
                      <span>
                        <p>{item.priceNew}</p>
                        <p>{item.priceOld}</p>
                      </span>
                      <div className={styles.inforCartProductQuantity}>
                        <span>
                          <Icon icon="fa6-solid:minus" />
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          id="quantity"
                          value={item.quantity}
                          disabled
                        />
                        <span>
                          <Icon icon="fa6-solid:plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {productCart.length == 0 && (
              <p className={styles.emptyCart}>
                <img src="..//emptyCart.png" alt="" />
              </p>
            )}
          </div>
          {productCart.length > 0 && (
            <div className={styles.inforCartSumary}>
              <div className={styles.inforCartTotal}>
                {isMobile && (
                  <>
                    <p>45.990.000 đ</p>
                    <Button>Tiếp tục</Button>
                  </>
                )}
                {isTablet && (
                  <>
                    <div className={styles.inforCartTotalMoney}>
                      <p>Tổng tiền</p>
                      <p>45.990.000 đ</p>
                    </div>
                    <div
                      className={`${styles.inforCartTotalAction} btnTwoAction`}
                    >
                      <Button>Mua sắm tiếp</Button>
                      <Button>Giỏ hàng</Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPopup;

import styles from "./CartPopupStyles.module.css"
import { Icon } from "@iconify/react";
import Button from "../../../components/Button/Button";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../../utils/request";
import { useToggle } from "../../../hooks/useToggle";

const CartPopup = () => {
  const [activeCart, cart, setCart] = useToggle();
  const [product, setProduct] = useState([]);
  const cartRef = useRef(null);
  const cartWrapperRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get("addToCart");
      setProduct(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div onClick={() => setCart(true)} ref={cartWrapperRef}>
        <Icon icon="ion:cart-outline" />
        <span className={styles.headerRightInforItemText}>Giỏ hàng</span>
      </div>
      <div
        className={`popupWrapper ${styles.inforCartWrapper} ${
          activeCart ? `active ${styles.active}` : ""
        }`}
        ref={cartRef}
      >
        <div className={`bg-opacity`}></div>
        <div className={`popupContent ${styles.inforCartContainer}`}>
          <h3 className={styles.inforCartTitle}>
            Giỏ hàng
            <span onClick={() => setCart(false)}>
              <Icon icon="iconamoon:close" />
            </span>
          </h3>
          <div className={styles.inforCartContent}>
            {product.length > 0 &&
              product.map((item) => (
                <div className={styles.inforCartProduct} key={item.id}>
                  <div className={styles.inforCartProductLeft}>
                    <div className={styles.inforCartProductLeftIcon}>
                      <Icon icon="iconamoon:close" />
                    </div>
                    <img
                      src={item.image}
                      width={80}
                      height={80}
                      alt="Product"
                    />
                  </div>
                  <div className={styles.inforCartProductRight}>
                    <div className={styles.inforCartProductTitle}>
                      <h4>{item.title}</h4>
                      <p>{item.option}</p>
                    </div>
                    <div className={styles.inforCartProductPrice}>
                      <p>{item.price}</p>
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
            {product.length == 0 && (
              <p className={styles.emptyCart}>
                <img src="../../../../public/emptyCart.png" alt="" />
              </p>
            )}
          </div>
          {product.length > 0 && (
            <div className={styles.inforCartSumary}>
              <div className={styles.inforCartTotal}>
                <h4>Tổng tiền: </h4>
                <p>15.990.000 đ</p>
              </div>
              <div className={"btnDoubleCustom"}>
                <span>
                  <Link to="/thanhtoan" onClick={() => setCart(false)}>
                    <Button>Thanh Toán</Button>
                  </Link>
                </span>
                <span>
                  <Link to="/giohang" onClick={() => setCart(false)}>
                    <Button>Giỏ hàng</Button>
                  </Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPopup;

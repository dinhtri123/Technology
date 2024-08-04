import React, { useContext, useRef, useState } from 'react';
import styles from './ProductList.module.css'
import { ThemeContext } from '../../../../context/ThemeContext';
import { Icon } from "@iconify/react";
import {Link} from "react-router-dom"

const ProductList = () => {
    const themes = useContext(ThemeContext);
    const sortRef = useRef();
    const sortActiveRef = useRef();
    const [activeItemSort, setActiveItemSort] = useState(1);
    const handleShowActiveSort = () => {
      if (sortRef.current.style.maxHeight) {
        sortRef.current.style.maxHeight = null;
      } else {
        sortRef.current.style.maxHeight = `${sortRef.current.scrollHeight}px`;
      }
    }
    const handleClickSort = (e) => {
      const getText = e.target.textContent;
      setActiveItemSort(e.target.dataset.id)
      sortActiveRef.current.textContent = getText;
      sortRef.current.style.maxHeight = null;
      
    }
    return (
      <div
        className={`tabWrapper ${styles.productList} ${
          themes.activeSidebar ? 'activeSidebar' : ""
        }`}
      >
        <h2>Quản lý sản phẩm</h2>
        <div className={styles.productListAction}>
          <div className={styles.actionSearch}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Tìm kiếm sản phẩm..."
            />
            <span className={styles.actionSearchIcon}>
              <Icon icon="prime:search" />
            </span>
          </div>
          <div className={styles.actionSort}>
            <div
              className={styles.actionSortActive}
              onClick={handleShowActiveSort}
            >
              <span ref={sortActiveRef}>Sản phẩm mới nhất</span>
              <Icon icon="ep:arrow-down" />
            </div>
            <div className={styles.actionSortList} ref={sortRef}>
              <span
                className={`${activeItemSort == 1 ? styles.activeSort : ""}`}
                onClick={handleClickSort}
                data-id="1"
              >
                Sản phẩm mới nhất
              </span>
              <span
                className={`${activeItemSort == 2 ? styles.activeSort : ""}`}
                onClick={handleClickSort}
                data-id="2"
              >
                Sản phẩm cũ nhất
              </span>
              <span
                className={`${activeItemSort == 3 ? styles.activeSort : ""}`}
                onClick={handleClickSort}
                data-id="3"
              >
                Sắp xếp theo Tên: A - Z
              </span>
              <span
                className={`${activeItemSort == 4 ? styles.activeSort : ""}`}
                onClick={handleClickSort}
                data-id="4"
              >
                Sắp xếp theo Tên: Z - A
              </span>
              <span
                className={`${activeItemSort == 5 ? styles.activeSort : ""}`}
                onClick={handleClickSort}
                data-id="5"
              >
                Sắp xếp theo Giá: Thấp - Cao
              </span>
              <span
                className={`${activeItemSort == 6 ? styles.activeSort : ""}`}
                onClick={handleClickSort}
                data-id="6"
              >
                Sắp xếp theo Giá: Cao - Thấp
              </span>
            </div>
          </div>
        </div>
        <div className={styles.productListTable}>
          <table>
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Hình ảnh</th>
                <th className={styles.productName}>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Thêm</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>
                  Loa Bluetooth Rezo Pulse E20
                </td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <Link to={"/admin/dashboard/addProduct"}>
                    <span>Thêm</span>
                  </Link>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>
                  Laptop Legion 5 Pro 512GB
                </td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>iPhone 15 Promax</td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>Laptop Dell Vostro 15</td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>Headphone Asus</td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>
                  Loa Bluetooth Rezo Pulse E20
                </td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>
                  Laptop Legion 5 Pro 512GB
                </td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
              <tr>
                <td>LP001</td>
                <td className={styles.productImage}>
                  <img src="../../../../../public/headphone1.png" alt="" />
                </td>
                <td className={styles.productName}>iPhone 15 Promax</td>
                <td className={styles.productPrice}>
                  <span>3.290.000</span> đ
                </td>
                <td className={styles.productAdd}>
                  <span>Thêm</span>
                </td>
                <td className={styles.productEdit}>
                  <span>Sửa</span>
                </td>
                <td className={styles.productDelete}>
                  <span>Xóa</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination">
            <span>
              <Icon icon="formkit:left" />
            </span>
            <ul>
              <li className="activePagi">1</li>
              <li>2</li>
            </ul>
            <span>
              <Icon icon="formkit:right" />
            </span>
          </div>
        </div>
      </div>
    );
};

export default ProductList;
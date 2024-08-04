import React, { useEffect, useState } from 'react';
import styles from "../AccountStyles.module.css"
import Button from '../../Button/Button';
import request from '../../../utils/request';
import SkeletonOrder from '../../Skeleton/SkeletonOrder';
import { formatPrice } from '../../Product/FormatPrice';

const Order = () => {
  const [order, setOrder] = useState();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      
      const getData = async () => {
        try {
          setLoading(true);
          const repsonse = await request.get("order");
          setOrder(repsonse.data);
          setLoading(false);
        } catch (error) {
          setLoading(true);
        }
      };
      getData();
  },[])
    return (
      <div className={styles.order}>
        <table>
          <tr>
            <th>ID</th>
            <th>Ngày đặt hàng</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
            <th>Hành động</th>
          </tr>
          {loading ? (
            <>
              <SkeletonOrder />
              <SkeletonOrder />
              <SkeletonOrder />
            </>
          ) : (
            <>
              {order.length > 0 &&
                order.map((item) => (
                  <tr key={item.id}>
                    <td>#{item.id}</td>
                    <td>{item.date}</td>
                    <td
                      className={`${
                        item.status == "Đang xử lý"
                          ? styles.orderStatusProcessing
                          : item.status == "Đã giao"
                          ? styles.orderStatusComplete
                          : styles.orderStatusNoProcess
                      }`}
                    >
                      {item.status}
                    </td>
                    <td>{formatPrice(item.total)} đ</td>
                    <td>Xem chi tiết</td>
                  </tr>
                ))}
            </>
          )}
        </table>
      </div>
    );
};

export default Order;
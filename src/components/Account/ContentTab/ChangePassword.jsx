import React, { useState } from 'react';
import styles from "../AccountStyles.module.css";
import { Icon } from "@iconify/react";
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import SkeletonChangePass from '../../Skeleton/SkeletonChangePass';
const ChangePassword = () => {
  const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => {
      setShowPass(!showPass);
    };
    return (
      <>
        {loading ? (
          <SkeletonChangePass />
        ) : (
          <div className={styles.password}>
            <form action="">
              <div className={styles.passwordItem}>
                <label htmlFor="passwordOld">Mật khẩu cũ</label>
                <Input
                  type={showPass ? "text" : "password"}
                  name={"passwordOld"}
                  placeholder={"Nhập lại mật khẩu cũ"}
                  IconPass={true}
                  handleShowPass={handleShowPass}
                  showPass={showPass}
                >
                  <Icon icon="simple-line-icons:lock" />
                </Input>
              </div>
              <div className={styles.passwordItem}>
                <label htmlFor="passwordNew">Mật khẩu mới</label>
                <Input
                  type={showPass ? "text" : "password"}
                  name={"passwordNew"}
                  placeholder={"Nhập mật khẩu mới"}
                  IconPass={true}
                  handleShowPass={handleShowPass}
                  showPass={showPass}
                >
                  <Icon icon="simple-line-icons:lock" />
                </Input>
              </div>
              <div className={styles.passwordItem}>
                <label htmlFor="passwordNewVerify">Xác nhận mật khẩu</label>
                <Input
                  type={showPass ? "text" : "password"}
                  name={"passwordNewVerify"}
                  placeholder={"Nhập lại mật khẩu mới"}
                  IconPass={true}
                  handleShowPass={handleShowPass}
                  showPass={showPass}
                >
                  <Icon icon="simple-line-icons:lock" />
                </Input>
              </div>
              <Button className="btnCustom">Cập nhật</Button>
            </form>
          </div>
        )}
      </>
    );
};

export default ChangePassword;
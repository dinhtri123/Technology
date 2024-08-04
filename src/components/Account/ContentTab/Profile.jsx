import React, {useState} from 'react';
import styles from "../AccountStyles.module.css";
import { Icon } from "@iconify/react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import SkeletonProfile from "../../Skeleton/SkeletonProfile"

const Profile = () => {
  const [loading, setLoading] = useState(false);
    return (
      <>
        {loading ? (
          <SkeletonProfile />
        ) : (
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <img
                src="..//user-2.png"
                width={160}
                height={160}
                alt=""
              />
              <span>
                <Icon icon="solar:camera-broken" />
              </span>
            </div>
            <form className={styles.profileContent}>
              <div className={styles.profileContentItem}>
                <label htmlFor="fullName">Họ và tên</label>
                <Input name={"fullName"} placeholder={"Phạm Đình Trí"}>
                  <Icon icon="solar:user-broken" />
                </Input>
              </div>
              <div className={styles.profileContentItem}>
                <label htmlFor="email">Email</label>
                <Input
                  type=""
                  name={"email"}
                  placeholder={"dinhtriqs111@gmail.com"}
                >
                  <Icon icon="dashicons:email-alt" />
                </Input>
              </div>
              <div className={styles.profileContentItem}>
                <label htmlFor="phone">Số điện thoại</label>
                <Input name={"phone"} placeholder={"0385396473"}>
                  <Icon icon="solar:phone-broken" />
                </Input>
              </div>
              <Button className={"btnCustom"}>Cập nhật</Button>
            </form>
          </div>
        )}
      </>
    );
};

export default Profile;
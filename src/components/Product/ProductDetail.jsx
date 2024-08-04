import React, { useEffect, useState } from "react";
import styles from "./ProductStyles.module.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";

import { Icon } from "@iconify/react";


import Button from "../Button/Button";
import ProductDetailTop from "./ProductDetailTop";
import request from "../../utils/request";

const ProductDetail = () => {
  let { userId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("Thông tin sản phẩm");
  const [activeTabPopup, setActiveTabPopup] = useState("Thông tin sản phẩm");
  const [activePopupInfor, setActivePopupInfor]  = useState(false);
  const [activePopupWriteReview, setActivePopupWriteReview] = useState(false)
  const [starNumber, setStarNumber] = useState();
  const [hasStar, setHasStar] = useState(false)

 useEffect(() => {
   const getData = async () => {
     try {
      setLoading(true)
      const repsonse = await request.get(`product?idProduct=${userId}`);
      setProduct(repsonse.data);
      setLoading(false);
     } catch (error) {
      setLoading(true);
     }
   };
   getData();
 }, []);
 
  const handleClickTab = (e) => {
    const getContent = e.target.textContent
    setActiveTab(getContent)
  }
  const handleClickTabPopup = (e) => {
    const getContent = e.target.textContent;
    setActiveTabPopup(getContent);
  };
  const handleClosePopup = () => {
    setActivePopupInfor(!activePopupInfor);
  }
  const handlePopupInfor = (e)  => {
    setActivePopupInfor(!activePopupInfor);
    const getDataTitle = e.currentTarget.dataset.title;
    setActiveTabPopup(getDataTitle);
  }
  const handlePopupWriteReview = () => {
    setActivePopupWriteReview(!activePopupWriteReview)
  }
  const handleClosePopupWriteReview = () => {
    setActivePopupWriteReview(!activePopupWriteReview);
    setHasStar(false);
  }
  const handleClickStar = (e) => {
    const getContent = e.currentTarget.textContent;
    setStarNumber(getContent);
    setHasStar(!hasStar);
  }
  return (
    <div>
      <Breadcrumb
        title={product.map((item) => item.category)}
        titleChildren={product.map((item) => item.title)}
      ></Breadcrumb>
      <div className={`container ${styles.productDetailWrapper}`}>
        <ProductDetailTop
          loading={loading}
          idProduct={product}
        ></ProductDetailTop>
        <div className={styles.productDetailContent}>
          <div className={styles.productDetailContentLeft}>
            <div className={styles.productDetailContentLeftTab}>
              <span
                className={`${
                  activeTab == "Thông tin sản phẩm" ? styles.active : ""
                } `}
                onClick={handleClickTab}
              >
                Thông tin sản phẩm
              </span>
              <span
                className={`${
                  activeTab == "Đánh giá từ khách hàng" ? styles.active : ""
                } `}
                onClick={handleClickTab}
              >
                Đánh giá từ khách hàng
              </span>
            </div>
            {activeTab == "Thông tin sản phẩm" && (
              <div className={styles.productDetailContentLeftDetail}>
                <p>
                  Tai nghe Bluetooth Chụp Tai JBL Tune 520BT là dạng tai nghe
                  chụp tai (tai nghe on ear) với diện mạo thời thượng, nhiều gam
                  màu đẹp mắt, âm thanh phong phú và sống động, kết nối nhanh
                  chóng, dung lượng pin khủng, hứa hẹn mang đến cho bạn những
                  trải nghiệm tối ưu. • Tai nghe JBL được thiết kế với phần đệm
                  tai bằng da cao cấp tạo cảm giác mềm mịn, không gây đau tai
                  khi sử dụng thời gian dài. • Tích hợp công nghệ JBL Pure Bass
                  Sound cho âm thanh bắt tai và mạnh mẽ, nâng cấp âm trầm giúp
                  bản nhạc thêm phần sống động, mang đến cho bạn không gian âm
                  nhạc tuyệt vời. • Dễ dàng kiểm soát âm thanh và quản lý cuộc
                  gọi từ các nút bấm trên tai nghe nhanh chóng. Ngoài ra, người
                  dùng có thể tải ứng dụng JBL Headphones để tùy chỉnh nâng cao
                  các thông số liên quan đến chất lượng âm thanh khi phát nhạc.
                  • Kết nối cùng lúc với 2 thiết bị nhanh chóng và mượt mà thông
                  qua Bluetooth 5.3 giúp người dùng dễ dàng luân chuyển thiết bị
                  phát nhạc ngay lập tức. • Thoải mái tận hưởng âm nhạc mà không
                  lo gián đoạn với thời lượng nghe nhạc lên đến 57 tiếng (tương
                  đương bạn có thể sử dụng được 1 tuần nếu nghe 1 ngày 8 tiếng)
                  mà chỉ cần sạc đầy trong 2 tiếng. Ngoài ra, tai nghe còn tích
                  hợp sạc nhanh 5 phút và sử dụng được 3 tiếng. • Tai nghe tương
                  thích với các hệ điều hành phổ biến hiện nay như: iOS,
                  Android, Windows, macOS. • Bạn có thể gấp gọn tai nghe lại và
                  bỏ vào balo hay túi xách mà không lo chiếm quá nhiều diện
                  tích, bảo vệ tai nghe khỏi bị gãy, vỡ.
                </p>
                <p>
                  Tai nghe Bluetooth Chụp Tai JBL Tune 520BT là dạng tai nghe
                  chụp tai (tai nghe on ear) với diện mạo thời thượng, nhiều gam
                  màu đẹp mắt, âm thanh phong phú và sống động, kết nối nhanh
                  chóng, dung lượng pin khủng, hứa hẹn mang đến cho bạn những
                  trải nghiệm tối ưu. • Tai nghe JBL được thiết kế với phần đệm
                  tai bằng da cao cấp tạo cảm giác mềm mịn, không gây đau tai
                  khi sử dụng thời gian dài. • Tích hợp công nghệ JBL Pure Bass
                  Sound cho âm thanh bắt tai và mạnh mẽ, nâng cấp âm trầm giúp
                  bản nhạc thêm phần sống động, mang đến cho bạn không gian âm
                  nhạc tuyệt vời. • Dễ dàng kiểm soát âm thanh và quản lý cuộc
                  gọi từ các nút bấm trên tai nghe nhanh chóng. Ngoài ra, người
                  dùng có thể tải ứng dụng JBL Headphones để tùy chỉnh nâng cao
                  các thông số liên quan đến chất lượng âm thanh khi phát nhạc.
                  • Kết nối cùng lúc với 2 thiết bị nhanh chóng và mượt mà thông
                  qua Bluetooth 5.3 giúp người dùng dễ dàng luân chuyển thiết bị
                  phát nhạc ngay lập tức. • Thoải mái tận hưởng âm nhạc mà không
                  lo gián đoạn với thời lượng nghe nhạc lên đến 57 tiếng (tương
                  đương bạn có thể sử dụng được 1 tuần nếu nghe 1 ngày 8 tiếng)
                  mà chỉ cần sạc đầy trong 2 tiếng. Ngoài ra, tai nghe còn tích
                  hợp sạc nhanh 5 phút và sử dụng được 3 tiếng. • Tai nghe tương
                  thích với các hệ điều hành phổ biến hiện nay như: iOS,
                  Android, Windows, macOS. • Bạn có thể gấp gọn tai nghe lại và
                  bỏ vào balo hay túi xách mà không lo chiếm quá nhiều diện
                  tích, bảo vệ tai nghe khỏi bị gãy, vỡ.
                </p>
                <div onClick={handlePopupInfor} data-title="Thông tin sản phẩm">
                  <Button className={`btnCustom ${styles.btnMore}`}>
                    Xem thêm <Icon icon="uiw:swap-right" />
                  </Button>
                </div>
              </div>
            )}
            {activeTab == "Đánh giá từ khách hàng" && (
              <div className={styles.productDetailContentLeftReview}>
                <div className={styles.reviewOverview}>
                  <h4>Xếp hạng và đánh giá</h4>
                  <div className={styles.reviewOverviewNumber}>
                    <p>4.5</p>
                    <div className={styles.productContentReview}>
                      <span className={styles.productContentReviewIcon}>
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                        <Icon icon="ic:round-star" />
                      </span>
                      <span>(60 đánh giá)</span>
                    </div>
                  </div>
                  <div className={styles.reviewOverviewList}>
                    <div className={styles.reviewOverviewListItem}>
                      <span>5</span>
                      <span>
                        <Icon icon="ic:round-star" />
                      </span>
                      <span className={styles.reviewOverviewListItemProgress}>
                        <span></span>
                      </span>
                      <span>80%</span>
                    </div>
                    <div className={styles.reviewOverviewListItem}>
                      <span>4</span>
                      <span>
                        <Icon icon="ic:round-star" />
                      </span>
                      <span className={styles.reviewOverviewListItemProgress}>
                        <span></span>
                      </span>
                      <span>80%</span>
                    </div>
                    <div className={styles.reviewOverviewListItem}>
                      <span>3</span>
                      <span>
                        <Icon icon="ic:round-star" />
                      </span>
                      <span className={styles.reviewOverviewListItemProgress}>
                        <span></span>
                      </span>
                      <span>80%</span>
                    </div>
                    <div className={styles.reviewOverviewListItem}>
                      <span>2</span>
                      <span>
                        <Icon icon="ic:round-star" />
                      </span>
                      <span className={styles.reviewOverviewListItemProgress}>
                        <span></span>
                      </span>
                      <span>80%</span>
                    </div>
                    <div className={styles.reviewOverviewListItem}>
                      <span>1</span>
                      <span>
                        <Icon icon="ic:round-star" />
                      </span>
                      <span className={styles.reviewOverviewListItemProgress}>
                        <span></span>
                      </span>
                      <span>80%</span>
                    </div>
                  </div>
                  <div className={styles.reviewList}>
                    <div className={styles.reviewListItem}>
                      <div className={styles.reviewListItemTop}>
                        <div className={styles.reviewListItemTopThumbnail}>
                          <img src="../../../public/user-2 1.png" alt="" />
                        </div>
                        <div className={styles.reviewListItemTopContent}>
                          <div className={styles.reviewListItemTopContentTitle}>
                            <h3>Anh Lâm</h3>
                            <span></span>
                            <p>20/10/2023</p>
                          </div>
                          <span className={styles.productContentReviewIcon}>
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                          </span>
                        </div>
                      </div>
                      <p className={styles.reviewListItemDesc}>
                        Đối với asus i5 thì tất nhiên là nó không bằng rồi,
                        nhưng về giá cả và chất lượng của con máy này thì rõ quá
                        là ok
                      </p>
                      <div className={styles.reviewListItemImage}>
                        <span>
                          <img src="../../../public/headphone1.png" alt="" />
                        </span>
                        <span>
                          <img src="../../../public/headphone1.png" alt="" />
                        </span>
                      </div>
                    </div>
                    <div className={styles.reviewListItem}>
                      <div className={styles.reviewListItemTop}>
                        <div className={styles.reviewListItemTopThumbnail}>
                          <img src="../../../public/user-2 1.png" alt="" />
                        </div>
                        <div className={styles.reviewListItemTopContent}>
                          <div className={styles.reviewListItemTopContentTitle}>
                            <h3>Anh Lâm</h3>
                            <span></span>
                            <p>20/10/2023</p>
                          </div>
                          <span className={styles.productContentReviewIcon}>
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                            <Icon icon="ic:round-star" />
                          </span>
                        </div>
                      </div>
                      <p className={styles.reviewListItemDesc}>
                        Đối với asus i5 thì tất nhiên là nó không bằng rồi,
                        nhưng về giá cả và chất lượng của con máy này thì rõ quá
                        là ok
                      </p>
                      <div className={styles.reviewListItemImage}>
                        <span>
                          <img src="../../../public/headphone1.png" alt="" />
                        </span>
                        <span>
                          <img src="../../../public/headphone1.png" alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"btnDoubleCustom"}>
                    <span onClick={handlePopupWriteReview}>
                      <Button>Viết đánh giá</Button>
                    </span>
                    <span>
                      <Button>Xem tất cả đánh giá</Button>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.productDetailContentRight}>
            <div className={styles.productDetailContentRightTab}>
              <span>Thông số kỹ thuật</span>
            </div>
            <div className={styles.productDetailContentRightContent}>
              <div>
                <span>CPU</span>
                <span>i3, 1115G4, 3GHz</span>
              </div>
              <div>
                <span>RAM</span>
                <span>
                  8 GB, DDR4 2 khe (1 khe 8 GB onboard + 1 khe trống), 3200 MHz
                </span>
              </div>
              <div>
                <span>Ổ cứng</span>
                <span>
                  Hỗ trợ khe cắm HDD SATA 2.5 inch mở rộng, 256 GB SSD NVMe PCIe
                </span>
              </div>
              <div>
                <span>Màn hình</span>
                <span>14", Full HD (1920 x 1080)</span>
              </div>
              <div>
                <span>Card màn hình</span>
                <span>Card tích hợp, Intel UHD</span>
              </div>
              <div>
                <span>Cổng kết nối</span>
                <span>
                  HDMI2 x USB 2.0USB Type-C1 x USB 3.2Jack tai nghe 3.5 mm
                </span>
              </div>
              <div>
                <span>Hệ điều hành</span>
                <span>Windows 11 Home SL</span>
              </div>
              <div>
                <span>Thiết kế</span>
                <span>Vỏ nhựa</span>
              </div>
              <div>
                <span>Kích thước, khối lượng</span>
                <span>
                  Dài 325.4 mm - Rộng 216 mm - Dày 19.9 mm - Nặng 1.55 kg
                </span>
              </div>
              <div>
                <span>Thời điểm ra mắt</span>
                <span>2022</span>
              </div>
            </div>
            <div
              className={styles.productDetailContentRightBtn}
              onClick={handlePopupInfor}
              data-title="Thông số kỹ thuật"
            >
              <Button>Xem thêm cấu hình chi tiết</Button>
            </div>
          </div>
        </div>
        {activePopupInfor && (
          <div className={styles.productDetailPopup}>
            <div className={`bg-opacity ${styles.quickviewOpacity}`}></div>
            <div
              className={styles.productDetailPopupBtnClose}
              onClick={handleClosePopup}
            >
              <Icon icon="iconamoon:close-bold" />
              Đóng
            </div>
            <div className={styles.productDetailPopupContent}>
              <div className={styles.productDetailPopupTab}>
                <span
                  className={`${
                    activeTabPopup == "Thông tin sản phẩm" ? styles.active : ""
                  } `}
                  onClick={handleClickTabPopup}
                >
                  Thông tin sản phẩm
                </span>
                <span
                  className={`${
                    activeTabPopup == "Thông số kỹ thuật" ? styles.active : ""
                  } `}
                  onClick={handleClickTabPopup}
                >
                  Thông số kỹ thuật
                </span>
              </div>
              <div className={styles.productDetailPopupTabContent}>
                {activeTabPopup == "Thông tin sản phẩm" && (
                  <div className={styles.productDetailPopupTabContentInfor}>
                    <p>
                      Tai nghe Bluetooth Chụp Tai JBL Tune 520BT là dạng tai
                      nghe chụp tai (tai nghe on ear) với diện mạo thời thượng,
                      nhiều gam màu đẹp mắt, âm thanh phong phú và sống động,
                      kết nối nhanh chóng, dung lượng pin khủng, hứa hẹn mang
                      đến cho bạn những trải nghiệm tối ưu. • Tai nghe JBL được
                      thiết kế với phần đệm tai bằng da cao cấp tạo cảm giác mềm
                      mịn, không gây đau tai khi sử dụng thời gian dài. • Tích
                      hợp công nghệ JBL Pure Bass Sound cho âm thanh bắt tai và
                      mạnh mẽ, nâng cấp âm trầm giúp bản nhạc thêm phần sống
                      động, mang đến cho bạn không gian âm nhạc tuyệt vời. • Dễ
                      dàng kiểm soát âm thanh và quản lý cuộc gọi từ các nút bấm
                      trên tai nghe nhanh chóng. Ngoài ra, người dùng có thể tải
                      ứng dụng JBL Headphones để tùy chỉnh nâng cao các thông số
                      liên quan đến chất lượng âm thanh khi phát nhạc. • Kết nối
                      cùng lúc với 2 thiết bị nhanh chóng và mượt mà thông qua
                      Bluetooth 5.3 giúp người dùng dễ dàng luân chuyển thiết bị
                      phát nhạc ngay lập tức. • Thoải mái tận hưởng âm nhạc mà
                      không lo gián đoạn với thời lượng nghe nhạc lên đến 57
                      tiếng (tương đương bạn có thể sử dụng được 1 tuần nếu nghe
                      1 ngày 8 tiếng) mà chỉ cần sạc đầy trong 2 tiếng. Ngoài
                      ra, tai nghe còn tích hợp sạc nhanh 5 phút và sử dụng được
                      3 tiếng. • Tai nghe tương thích với các hệ điều hành phổ
                      biến hiện nay như: iOS, Android, Windows, macOS. • Bạn có
                      thể gấp gọn tai nghe lại và bỏ vào balo hay túi xách mà
                      không lo chiếm quá nhiều diện tích, bảo vệ tai nghe khỏi
                      bị gãy, vỡ. Tai nghe Bluetooth Chụp Tai JBL Tune 520BT là
                      dạng tai nghe chụp tai (tai nghe on ear) với diện mạo thời
                      thượng, nhiều gam màu đẹp mắt, âm thanh phong phú và sống
                      động, kết nối nhanh chóng, dung lượng pin khủng, hứa hẹn
                      mang đến cho bạn những trải nghiệm tối ưu. • Tai nghe JBL
                      được thiết kế với phần đệm tai bằng da cao cấp tạo cảm
                      giác mềm mịn, không gây đau tai khi sử dụng thời gian dài.
                      • Tích hợp công nghệ JBL Pure Bass Sound cho âm thanh bắt
                      tai và mạnh mẽ, nâng cấp âm trầm giúp bản nhạc thêm phần
                      sống động, mang đến cho bạn không gian âm nhạc tuyệt vời.
                      • Dễ dàng kiểm soát âm thanh và quản lý cuộc gọi từ các
                      nút bấm trên tai nghe nhanh chóng. Ngoài ra, người dùng có
                      thể tải ứng dụng JBL Headphones để tùy chỉnh nâng cao các
                      thông số liên quan đến chất lượng âm thanh khi phát nhạc.
                      • Kết nối cùng lúc với 2 thiết bị nhanh chóng và mượt mà
                      thông qua Bluetooth 5.3 giúp người dùng dễ dàng luân
                      chuyển thiết bị phát nhạc ngay lập tức. • Thoải mái tận
                      hưởng âm nhạc mà không lo gián đoạn với thời lượng nghe
                      nhạc lên đến 57 tiếng (tương đương bạn có thể sử dụng được
                      1 tuần nếu nghe 1 ngày 8 tiếng) mà chỉ cần sạc đầy trong 2
                      tiếng. Ngoài ra, tai nghe còn tích hợp sạc nhanh 5 phút và
                      sử dụng được 3 tiếng. • Tai nghe tương thích với các hệ
                      điều hành phổ biến hiện nay như: iOS, Android, Windows,
                      macOS. • Bạn có thể gấp gọn tai nghe lại và bỏ vào balo
                      hay túi xách mà không lo chiếm quá nhiều diện tích, bảo vệ
                      tai nghe khỏi bị gãy, vỡ.
                    </p>
                    <img src="../../../public/headphone1.png" alt="" />
                    <p>
                      Tai nghe Bluetooth Chụp Tai JBL Tune 520BT là dạng tai
                      nghe chụp tai (tai nghe on ear) với diện mạo thời thượng,
                      nhiều gam màu đẹp mắt, âm thanh phong phú và sống động,
                      kết nối nhanh chóng, dung lượng pin khủng, hứa hẹn mang
                      đến cho bạn những trải nghiệm tối ưu. • Tai nghe JBL được
                      thiết kế với phần đệm tai bằng da cao cấp tạo cảm giác mềm
                      mịn, không gây đau tai khi sử dụng thời gian dài. • Tích
                      hợp công nghệ JBL Pure Bass Sound cho âm thanh bắt tai và
                      mạnh mẽ, nâng cấp âm trầm giúp bản nhạc thêm phần sống
                      động, mang đến cho bạn không gian âm nhạc tuyệt vời. • Dễ
                      dàng kiểm soát âm thanh và quản lý cuộc gọi từ các nút bấm
                      trên tai nghe nhanh chóng. Ngoài ra, người dùng có thể tải
                      ứng dụng JBL Headphones để tùy chỉnh nâng cao các thông số
                      liên quan đến chất lượng âm thanh khi phát nhạc. • Kết nối
                      cùng lúc với 2 thiết bị nhanh chóng và mượt mà thông qua
                      Bluetooth 5.3 giúp người dùng dễ dàng luân chuyển thiết bị
                      phát nhạc ngay lập tức. • Thoải mái tận hưởng âm nhạc mà
                      không lo gián đoạn với thời lượng nghe nhạc lên đến 57
                      tiếng (tương đương bạn có thể sử dụng được 1 tuần nếu nghe
                      1 ngày 8 tiếng) mà chỉ cần sạc đầy trong 2 tiếng. Ngoài
                      ra, tai nghe còn tích hợp sạc nhanh 5 phút và sử dụng được
                      3 tiếng. • Tai nghe tương thích với các hệ điều hành phổ
                      biến hiện nay như: iOS, Android, Windows, macOS. • Bạn có
                      thể gấp gọn tai nghe lại và bỏ vào balo hay túi xách mà
                      không lo chiếm quá nhiều diện tích, bảo vệ tai nghe khỏi
                      bị gãy, vỡ. Tai nghe Bluetooth Chụp Tai JBL Tune 520BT là
                      dạng tai nghe chụp tai (tai nghe on ear) với diện mạo thời
                      thượng, nhiều gam màu đẹp mắt, âm thanh phong phú và sống
                      động, kết nối nhanh chóng, dung lượng pin khủng, hứa hẹn
                      mang đến cho bạn những trải nghiệm tối ưu. • Tai nghe JBL
                      được thiết kế với phần đệm tai bằng da cao cấp tạo cảm
                      giác mềm mịn, không gây đau tai khi sử dụng thời gian dài.
                      • Tích hợp công nghệ JBL Pure Bass Sound cho âm thanh bắt
                      tai và mạnh mẽ, nâng cấp âm trầm giúp bản nhạc thêm phần
                      sống động, mang đến cho bạn không gian âm nhạc tuyệt vời.
                      • Dễ dàng kiểm soát âm thanh và quản lý cuộc gọi từ các
                      nút bấm trên tai nghe nhanh chóng. Ngoài ra, người dùng có
                      thể tải ứng dụng JBL Headphones để tùy chỉnh nâng cao các
                      thông số liên quan đến chất lượng âm thanh khi phát nhạc.
                      • Kết nối cùng lúc với 2 thiết bị nhanh chóng và mượt mà
                      thông qua Bluetooth 5.3 giúp người dùng dễ dàng luân
                      chuyển thiết bị phát nhạc ngay lập tức. • Thoải mái tận
                      hưởng âm nhạc mà không lo gián đoạn với thời lượng nghe
                      nhạc lên đến 57 tiếng (tương đương bạn có thể sử dụng được
                      1 tuần nếu nghe 1 ngày 8 tiếng) mà chỉ cần sạc đầy trong 2
                      tiếng. Ngoài ra, tai nghe còn tích hợp sạc nhanh 5 phút và
                      sử dụng được 3 tiếng. • Tai nghe tương thích với các hệ
                      điều hành phổ biến hiện nay như: iOS, Android, Windows,
                      macOS. • Bạn có thể gấp gọn tai nghe lại và bỏ vào balo
                      hay túi xách mà không lo chiếm quá nhiều diện tích, bảo vệ
                      tai nghe khỏi bị gãy, vỡ.
                    </p>
                  </div>
                )}
                {activeTabPopup == "Thông số kỹ thuật" && (
                  <div className={styles.productDetailPopupTabContentTech}>
                    <div className={styles.productDetailContentRightContent}>
                      <div>
                        <span>CPU</span>
                        <span>i3, 1115G4, 3GHz</span>
                      </div>
                      <div>
                        <span>RAM</span>
                        <span>
                          8 GB, DDR4 2 khe (1 khe 8 GB onboard + 1 khe trống),
                          3200 MHz
                        </span>
                      </div>
                      <div>
                        <span>Ổ cứng</span>
                        <span>
                          Hỗ trợ khe cắm HDD SATA 2.5 inch mở rộng, 256 GB SSD
                          NVMe PCIe
                        </span>
                      </div>
                      <div>
                        <span>Màn hình</span>
                        <span>14", Full HD (1920 x 1080)</span>
                      </div>
                      <div>
                        <span>Card màn hình</span>
                        <span>Card tích hợp, Intel UHD</span>
                      </div>
                      <div>
                        <span>Cổng kết nối</span>
                        <span>
                          HDMI2 x USB 2.0USB Type-C1 x USB 3.2Jack tai nghe 3.5
                          mm
                        </span>
                      </div>
                      <div>
                        <span>Hệ điều hành</span>
                        <span>Windows 11 Home SL</span>
                      </div>
                      <div>
                        <span>Thiết kế</span>
                        <span>Vỏ nhựa</span>
                      </div>
                      <div>
                        <span>Kích thước, khối lượng</span>
                        <span>
                          Dài 325.4 mm - Rộng 216 mm - Dày 19.9 mm - Nặng 1.55
                          kg
                        </span>
                      </div>
                      <div>
                        <span>Thời điểm ra mắt</span>
                        <span>2022</span>
                      </div>
                      <div>
                        <span>CPU</span>
                        <span>i3, 1115G4, 3GHz</span>
                      </div>
                      <div>
                        <span>RAM</span>
                        <span>
                          8 GB, DDR4 2 khe (1 khe 8 GB onboard + 1 khe trống),
                          3200 MHz
                        </span>
                      </div>
                      <div>
                        <span>Ổ cứng</span>
                        <span>
                          Hỗ trợ khe cắm HDD SATA 2.5 inch mở rộng, 256 GB SSD
                          NVMe PCIe
                        </span>
                      </div>
                      <div>
                        <span>Màn hình</span>
                        <span>14", Full HD (1920 x 1080)</span>
                      </div>
                      <div>
                        <span>Card màn hình</span>
                        <span>Card tích hợp, Intel UHD</span>
                      </div>
                      <div>
                        <span>Cổng kết nối</span>
                        <span>
                          HDMI2 x USB 2.0USB Type-C1 x USB 3.2Jack tai nghe 3.5
                          mm
                        </span>
                      </div>
                      <div>
                        <span>Hệ điều hành</span>
                        <span>Windows 11 Home SL</span>
                      </div>
                      <div>
                        <span>Thiết kế</span>
                        <span>Vỏ nhựa</span>
                      </div>
                      <div>
                        <span>Kích thước, khối lượng</span>
                        <span>
                          Dài 325.4 mm - Rộng 216 mm - Dày 19.9 mm - Nặng 1.55
                          kg
                        </span>
                      </div>
                      <div>
                        <span>Thời điểm ra mắt</span>
                        <span>2022</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {activePopupWriteReview && (
          <div className={styles.popupWriteReview}>
            <div className={`bg-opacity ${styles.quickviewOpacity}`}></div>
            {!hasStar && (
              <div className={`${styles.popupPickReivew}`}>
                <div
                  className={styles.popupWriteReviewBtnClose}
                  onClick={handleClosePopupWriteReview}
                >
                  <Icon icon="iconamoon:close-bold" />
                </div>
                <h3>Đánh giá sản phẩm</h3>
                <div className={styles.popupWriteReviewThumbnail}>
                  <img src="../../../public/headphone1.png" alt="" />
                </div>
                <h4>Tai nghe Bluetooth Chụp Tai Zadez GP-803B</h4>
                <div className={styles.popupWriteReviewStar}>
                  <div className={styles.productContentReviewIcon}>
                    <span onClick={handleClickStar}>
                      <Icon icon="ph:star-light" />
                      Rất tệ
                    </span>
                    <span onClick={handleClickStar}>
                      <Icon icon="ph:star-light" />
                      Tệ
                    </span>
                    <span onClick={handleClickStar}>
                      <Icon icon="ph:star-light" />
                      Tạm ổn
                    </span>
                    <span onClick={handleClickStar}>
                      <Icon icon="ph:star-light" />
                      Tốt
                    </span>
                    <span onClick={handleClickStar}>
                      <Icon icon="ph:star-light" />
                      Rất tốt
                    </span>
                  </div>
                </div>
              </div>
            )}
            {hasStar && (
              <div className={styles.popupWriteReviewContent}>
                <div
                  className={styles.popupWriteReviewBtnClose}
                  onClick={handleClosePopupWriteReview}
                >
                  <Icon icon="iconamoon:close-bold" />
                </div>
                <h3>Đánh giá sản phẩm</h3>
                <div className={styles.popupWriteReviewThumbnail}>
                  <img src="../../../public/headphone1.png" alt="" />
                </div>
                <h4>Tai nghe Bluetooth Chụp Tai Zadez GP-803B</h4>
                <div className={styles.popupWriteReviewStar}>
                  <span className={styles.productContentReviewIcon}>
                    {starNumber == "Rất tệ" && (
                      <>
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-light" />
                        <Icon icon="ph:star-light" />
                        <Icon icon="ph:star-light" />
                        <Icon icon="ph:star-light" />
                      </>
                    )}
                    {starNumber == "Tệ" && (
                      <>
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-light" />
                        <Icon icon="ph:star-light" />
                        <Icon icon="ph:star-light" />
                      </>
                    )}
                    {starNumber == "Tạm ổn" && (
                      <>
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-light" />
                        <Icon icon="ph:star-light" />
                      </>
                    )}
                    {starNumber == "Tốt" && (
                      <>
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-light" />
                      </>
                    )}
                    {starNumber == "Rất tốt" && (
                      <>
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                        <Icon icon="ph:star-fill" />
                      </>
                    )}
                  </span>
                  <span>{starNumber} !!</span>
                </div>
                <div className={styles.popupWriteReviewComment}>
                  <label htmlFor="comment">Nhận xét</label>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder="Chia sẻ cảm nhận của bạn..."
                  ></textarea>
                </div>
                <div className={styles.popupWriteReviewPhotos}>
                  <span>
                    <Icon icon="bi:camera-fill" />
                    Gửi ảnh thực tế <span>(Tối đa 3 ảnh)</span>
                  </span>
                </div>
                <div className={styles.popupWriteReviewForm}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Họ và tên *"
                    autoComplete="off"
                  />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Số điện thoại *"
                    autoComplete="off"
                  />
                </div>
                <div className={styles.popupWriteReviewSubmit}>
                  <Button>Gửi đánh giá</Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "./ProductAdd.module.css";
import { Icon } from "@iconify/react";
import Input from '../../Components/Input/Input';
import DropdownCategory from '../../Components/Dropdown/DropdownCatgory';
import Button from '../../Components/Button/Button';

// link editor
import { Editor } from "@tinymce/tinymce-react";
import { ThemeContext } from '../../../../context/ThemeContext';


const ProductAdd = () => {
  const themes = useContext(ThemeContext);
  const [contentEditor, setContentEditor] = useState("");
    const handleShowParamsItem = (e) => {
        if(e.currentTarget.lastChild.classList.contains(styles.active)) {
            e.currentTarget.lastChild.className = "";
        }else {
            e.currentTarget.lastChild.className = styles.active;
        }
        if(e.currentTarget.parentNode.lastChild.style.display == 'block') {
          e.currentTarget.parentNode.lastChild.style.display = "none";
        }else {
          e.currentTarget.parentNode.lastChild.style.display = 'block' 
        }
    }

    const handleShowAttrItem = (e) => {
      if (e.currentTarget.lastChild.className == styles.active) {
        e.currentTarget.lastChild.className = '';
      } else {
        e.currentTarget.lastChild.className = styles.active;
      }
      if(e.currentTarget.parentNode.lastChild.style.display == 'block') {
        e.currentTarget.parentNode.lastChild.style.display = 'none';

      }else {
        e.currentTarget.parentNode.lastChild.style.display = 'block';
      }
    }
    const handleEditorChange = (content, editor) => {
      setContentEditor(content);
    };
    return (
      <div
        className={`tabWrapper ${styles.productAdd} ${
          themes.activeSidebar ? "activeSidebar" : ""
        }`}
      >
        <h2>Thêm sản phẩm</h2>
        <DropdownCategory />
        <form>
          <div className={styles.attrCommon}>
            <Input
              label={"Tên sản phẩm"}
              name={"name"}
              placeholder={"Nhập tên sản phẩm..."}
            />
            <Input
              label={"Mã sản phẩm"}
              name={"code"}
              placeholder={"Nhập mã sản phẩm..."}
            />
          </div>
          <div className={styles.paramsCommon}>
            <h3 className={styles.titleCommon} onClick={handleShowParamsItem}>
              <span>Thông số kĩ thuật</span>
              <span>
                <Icon icon="icon-park-outline:down" />
              </span>
            </h3>
            <div className={styles.paramsListWrapper}>
              <div className={styles.paramsItem}>
                <h4 className={styles.titleCommon} onClick={handleShowAttrItem}>
                  <span>Bộ xử lý</span>
                  <span>
                    <Icon icon="icon-park-outline:down" />
                  </span>
                </h4>
                <div className={styles.paramsAttr}>
                  <div className={styles.paramsList}>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="congnghe">Công nghệ CPU :</label>
                      <input type="text" name="congnghe" id="congnghe" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="sonhan">Số nhân :</label>
                      <input type="text" name="sonhan" id="sonhan" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="soluong">Số luồng :</label>
                      <input type="text" name="soluong" id="soluong" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="tocdo">Tốc độ CPU :</label>
                      <input type="text" name="tocdo" id="tocdo" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="tocdotoida">Tốc độ tối đa :</label>
                      <input type="text" name="tocdotoida" id="tocdotoida" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="bonhodem">Bộ nhớ đệm :</label>
                      <input type="text" name="bonhodem" id="bonhodem" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.paramsCommon} ${styles.paramsCommonOption}`}
          >
            <h3 className={styles.titleCommon} onClick={handleShowParamsItem}>
              <span>Tuỳ chọn</span>
              <span>
                <Icon icon="icon-park-outline:down" />
              </span>
            </h3>
            <div className={styles.paramsListWrapper}>
              <div className={styles.paramsItem}>
                <h4 className={styles.titleCommon} onClick={handleShowAttrItem}>
                  <span>Tuỳ chọn 1</span>
                  <span>
                    <Icon icon="icon-park-outline:down" />
                  </span>
                </h4>
                <div className={styles.paramsAttr}>
                  <div className={styles.paramsList}>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="color">Màu sắc :</label>
                      <input type="text" name="color" id="color" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="memory">RAM - ROM :</label>
                      <input type="text" name="memory" id="memory" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="priceOld">Giá cũ :</label>
                      <input type="text" name="priceOld" id="priceOld" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="priceNew">Giá mới :</label>
                      <input type="text" name="priceNew" id="priceNew" />
                    </div>
                    <div className={styles.paramsListItem}>
                      <label htmlFor="quantity">Số lượng :</label>
                      <input type="number" name="quantity" id="quantity" />
                    </div>
                  </div>
                </div>
              </div>
              <Button>Thêm tùy chọn</Button>
            </div>
          </div>
          <div className={styles.descShort}>
            <h3 className={styles.titleCommon} onClick={handleShowParamsItem}>
              <span>Mô tả ngắn</span>
              <span>
                <Icon icon="icon-park-outline:down" />
              </span>
            </h3>
            <textarea
              name="descShort"
              id="descShort"
              cols="30"
              rows="10"
              className={styles.descShortText}
            ></textarea>
          </div>
          <div className={styles.addetailInfor}>
            <h3 className={styles.titleCommon} onClick={handleShowParamsItem}>
              <span>Thông tin sản phẩm</span>
              <span>
                <Icon icon="icon-park-outline:down" />
              </span>
            </h3>
            <div className={styles.addetailInforEditor}>
              <Editor
                apiKey="56x5lp9n0evmqvw8ekvbv8e0hp9npy5vnytek58mr2pv4h6t"
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                }}
                initialValue=""
                value={contentEditor}
                onEditorChange={handleEditorChange}
              />
            </div>
          </div>
          <Button>Thêm sản phẩm</Button>
        </form>
      </div>
    );
};

export default ProductAdd;
import React from "react";
import styles from "./style";

const imageSlider = props => (
  <div className={styles.slider}>
    <input type="radio" name="slide_switch" id="id1" defaultChecked="checked" />
    <label htmlFor="id1">
      <img src={`../../public/img/${props.picsForSlider}/1.jpg`} width="100" />
    </label>
    <img src={`../../public/img/${props.picsForSlider}/1.jpg`} />

    <input type="radio" name="slide_switch" id="id2" />
    <label htmlFor="id2">
      <img src={`../../public/img/${props.picsForSlider}/2.jpg`} width="100" />
    </label>
    <img src={`../../public/img/${props.picsForSlider}/2.jpg`} />

    <input type="radio" name="slide_switch" id="id3" />
    <label htmlFor="id3">
      <img src={`../../public/img/${props.picsForSlider}/3.jpg`} width="100" />
    </label>
    <img src={`../../public/img/${props.picsForSlider}/3.jpg`} />

    <input type="radio" name="slide_switch" id="id4" />
    <label htmlFor="id4">
      <img src={`../../public/img/${props.picsForSlider}/4.jpg`} width="100" />
    </label>
    <img src={`../../public/img/${props.picsForSlider}/4.jpg`} />

    <input type="radio" name="slide_switch" id="id5" />
    <label htmlFor="id5">
      <img src={`../../public/img/${props.picsForSlider}/5.jpg`} width="100" />
    </label>
    <img src={`../../public/img/${props.picsForSlider}/5.jpg`} />
  </div>
);

export default imageSlider;

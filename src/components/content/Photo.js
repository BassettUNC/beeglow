import React, {Component} from 'react';
import '../../primaryStyles.css';
import num0 from "../../assets/040427_004.jpg";
import num1 from "../../assets/DSCN1738.JPG";
import num2 from "../../assets/gallery7746.jpg";
import num3 from "../../assets/IMG_0322.jpg";
import num4 from "../../assets/IMG_1737.jpg";
import num5 from "../../assets/IMG_1747.jpg";
import num6 from "../../assets/IMG_1995.jpg";
import num7 from "../../assets/IMG_4096_mod.jpg";
import num8 from "../../assets/IMG_4016_bw.jpg";
import num9 from "../../assets/P1100459.jpg";
import num10 from "../../assets/P_HERO1.jpg";


class Photo extends Component {

        state = {
                index: 0,
                picList: [num10, num9, num8, num7, num3, num2, num1, num0, num4, num5, num6]
        }

        onClickNext = () => {
                if (this.state.index + 1 === this.state.picList.length) {
                        this.setState({
                                index: 0
                        })
                } else {
                        this.setState({
                                index: this.state.index + 1
                        })
                }
        }
        onClickPrevious = () => {
                if (this.state.index - 1 === -1) {
                        this.setState({
                                index: this.state.picList.length - 1
                        })
                } else {
                        this.setState({
                                index: this.state.index - 1
                        })
                }
        }
        render() {
                return (
                    <div>
                            <img id="selectedPic" src={this.state.picList[this.state.index]} alt="from gallery"/>
                            <div id="gallerySelections">
                                    <button id="photoBack" onClick={this.onClickPrevious}> Previous</button>
                                    <button id="photoNext" onClick={this.onClickNext}> Next</button>
                            </div>
                    </div>
                );
        }
}
export default Photo;
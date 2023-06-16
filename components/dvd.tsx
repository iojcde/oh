import { Component } from "react";
import * as React from "react";

interface DVDLogoState {
  x: number;
  y: number;
  xSpeed: number;
  ySpeed: number;
  r: number;
  g: number;
  b: number;
}

interface DVDLogoProps {
  width: number;
  height: number;
  speed: number;
  resizing: boolean;
  color: boolean;
}

const images = [
  {
    url: "https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202104/fcb5b7b3-a72e-4cdd-8d07-0f9675912284.jpg",
    width: 250,
    height: 165,
  },
  {},
];

const widthDVDLogo = 250;
const heightDVDLogo = 165;

class DVDLogo extends Component<DVDLogoProps, DVDLogoState> {
  constructor(props: DVDLogoProps) {
    super(props);

    this.state = {
      x: DVDLogo.getRandomNumber(0, this.props.width - widthDVDLogo),
      y: DVDLogo.getRandomNumber(0, this.props.height - heightDVDLogo),
      xSpeed: this.props.speed,
      ySpeed: this.props.speed,
      r: DVDLogo.getRandomNumber(100, 256),
      g: DVDLogo.getRandomNumber(100, 256),
      b: DVDLogo.getRandomNumber(100, 256),
    };
  }

  setRandomColors() {
    this.setState({
      r: DVDLogo.getRandomNumber(100, 256),
      g: DVDLogo.getRandomNumber(100, 256),
      b: DVDLogo.getRandomNumber(100, 256),
    });
  }

  static getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    const moveDVDLogo = () => {
      if (this.props.resizing) {
        this.setState({
          x: 100,
          y: 100,
        });
      }
      this.setState({
        x: this.state.x + this.state.xSpeed,
        y: this.state.y + this.state.ySpeed,
      });

      if (
        this.state.x + widthDVDLogo >= this.props.width ||
        this.state.x <= 0
      ) {
        this.setState({ xSpeed: -this.state.xSpeed });
        this.setRandomColors();
      }

      if (
        this.state.y + heightDVDLogo >= this.props.height ||
        this.state.y <= 0
      ) {
        this.setState({ ySpeed: -this.state.ySpeed });
        this.setRandomColors();
      }
      window.requestAnimationFrame(moveDVDLogo);
    };

    window.requestAnimationFrame(moveDVDLogo);
  }

  render() {
    const { r, g, b, x, y } = this.state;

    return (
      <image
        className=" z-50 relative"
        width={250}
        height={165}
        style={{ filter: this.props.color && `hue-rotate(${r}deg)` }}
        href="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202104/fcb5b7b3-a72e-4cdd-8d07-0f9675912284.jpg"
        transform={`translate(${x}, ${y})`}
      ></image>
    );
  }
}

export default DVDLogo;

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
  image: string;
  widthDVDLogo: number;
  heightDVDLogo: number;
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
  {
    url: "https://edudonga.com/data/article/1604/1935588662_u6pyd59o.jpg",
    width: 350,
    height: 196.5,
  },
  {
    url: "http://news.naeil.com/AttachFile/PREV/2016/02/18/00072392_P.jpg",
    width: 141.5,
    height: 220,
  },
  {
    url: "https://cdn.veritas-a.com/news/photo/201504/39843_24588_4259.JPG",
    width: 272.5,
    height: 181,
  },
];

class DVDLogo extends Component<DVDLogoProps, DVDLogoState> {
  constructor(props: DVDLogoProps) {
    super(props);
    const image = images[Math.floor(Math.random() * images.length)];
    this.state = {
      image: image.url,
      widthDVDLogo: image.width,
      heightDVDLogo: image.height,
      x: DVDLogo.getRandomNumber(0, this.props.width - image.width),
      y: DVDLogo.getRandomNumber(0, this.props.height - image.height),
      xSpeed: this.props.speed,
      ySpeed: this.props.speed,
      r: DVDLogo.getRandomNumber(100, 256),
      g: DVDLogo.getRandomNumber(100, 256),
      b: DVDLogo.getRandomNumber(100, 256),
    };
  }

  setRandomColors() {
    const image = images[Math.floor(Math.random() * images.length)];
    this.setState({
      r: DVDLogo.getRandomNumber(100, 256),
      g: DVDLogo.getRandomNumber(100, 256),
      b: DVDLogo.getRandomNumber(100, 256),
      image: image.url,
      widthDVDLogo: image.width,
      heightDVDLogo: image.height,
    });
  }

  static getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    const moveDVDLogo = () => {
      if (this.props.resizing) {
        this.setState({
          x: 0,
          y: 0,
        });
      }
      this.setState({
        x: this.state.x + this.state.xSpeed,
        y: this.state.y + this.state.ySpeed,
      });

      if (
        this.state.x + this.state.widthDVDLogo >= this.props.width ||
        this.state.x <= 0
      ) {
        this.setState({ xSpeed: -this.state.xSpeed });
        this.setRandomColors();
      }

      if (
        this.state.y + this.state.heightDVDLogo >= this.props.height ||
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
      <>
        <image
          className=" z-50 relative cursor-pointer"
          width={this.state.widthDVDLogo}
          height={this.state.heightDVDLogo}
          style={{ filter: this.props.color && `hue-rotate(${r}deg)` }}
          href={this.state.image}
          transform={`translate(${x}, ${y})`}
          onClick={() => {
            const song = document.getElementById(
              "schoolsong"
            ) as HTMLAudioElement;
            song.playbackRate = this.props.speed / 2;
            song.paused ? song.play() : song.pause();
          }}
        ></image>
      </>
    );
  }
}

export default DVDLogo;

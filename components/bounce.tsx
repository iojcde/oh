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
}

const MS_PER_FRAME = 5;
const widthDVDLogo = 307;
const heightDVDLogo = 80;

class DVDLogo extends Component<DVDLogoProps, DVDLogoState> {

    constructor(props: DVDLogoProps) {
        super(props);
        this.state = {
            x: DVDLogo.getRandomNumber(0, this.props.width - widthDVDLogo),
            y: DVDLogo.getRandomNumber(0, this.props.height - heightDVDLogo),
            xSpeed: 1,
            ySpeed: 1,
            r: DVDLogo.getRandomNumber(100, 256),
            g: DVDLogo.getRandomNumber(100, 256),
            b: DVDLogo.getRandomNumber(100, 256)


        }

    }

    setRandomColors() {
        this.setState({
            r: DVDLogo.getRandomNumber(100, 256),
            g: DVDLogo.getRandomNumber(100, 256),
            b: DVDLogo.getRandomNumber(100, 256)
        })
    }

    static getRandomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    componentDidMount() {
        setInterval(() => this.moveDVDLogo(), MS_PER_FRAME);
    }

    moveDVDLogo() {
        this.setState({
            x: this.state.x + this.state.xSpeed,
            y: this.state.y + this.state.ySpeed
        });

        if (this.state.x + widthDVDLogo >= this.props.width || this.state.x <= 0) {
            this.setState({ xSpeed: -this.state.xSpeed });
            this.setRandomColors();
        }

        if (this.state.y + heightDVDLogo >= this.props.height || this.state.y <= 0) {
            this.setState({ ySpeed: -this.state.ySpeed });
            this.setRandomColors();
        }
    }

    render() {
        const { r, g, b, x, y } = this.state;

        return <g>
            <g fill={`rgb(${r}, ${g}, ${b})`} transform={`translate(${x}, ${y})`}>

                <text className="text-6xl">hammy wtf</text>
            </g>
        </g>

    }
}

export default DVDLogo;
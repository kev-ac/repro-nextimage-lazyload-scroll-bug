import Image from "next/image";
import i1 from "../assets/1.png";
import i2 from "../assets/2.png";
import i3 from "../assets/3.png";
import i4 from "../assets/4.png";
import i5 from "../assets/5.png";
import i6 from "../assets/6.png";
import i7 from "../assets/7.png";
import i8 from "../assets/8.png";
import i9 from "../assets/9.png";
import i10 from "../assets/10.png";

const LOGOS = [
  i1, i2, i3, i4, i5, i6, i7, i8, i9, i10
];

const Page = () => {
  return (
    <div style={{maxWidth: '1500px'}}>
      <div
        style={{
          width: "100%",
          display: "inline-flex",
          flexWrap: "nowrap",
          overflow: "hidden",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            animation: 'horizontal-scroll 30s linear infinite'
          }}
        >
          {LOGOS.map((logo, index) => {
            return (
              <div key={index} style={{marginLeft: '2rem'}}>
                <Image src={logo} alt={"Logo"} style={{
                  width: "15rem",
                  height: "auto",
                  maxWidth: "none"
                }}/>
              </div>
            )
          })}
        </div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            animation: 'horizontal-scroll 30s linear infinite'
          }}>
          {LOGOS.map((logo, index) => {
            return (
              <div key={index} style={{marginLeft: '2rem'}}>
                <Image src={logo} alt={"Logo"} style={{
                  width: "15rem",
                  height: "auto",
                  maxWidth: "none"
                }}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Page;

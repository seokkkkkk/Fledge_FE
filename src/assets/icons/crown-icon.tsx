type CrownIconProps = {
    type?: number;
};

const CrownIcon = ({ type = 1 }: CrownIconProps) => {
    const colorList = ["#EEC65D", "#D3D0C6", "#B28652"];
    return (
        <svg
            width="39"
            height="25"
            viewBox="0 0 39 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27.1007 6.88057L21.1648 0.70716C20.258 -0.23572 18.742 -0.23572 17.8352 0.70716L11.8993 6.88345C11.08 7.73695 9.73306 7.82922 8.80301 7.09394L3.73294 3.09463C2.02446 1.74808 -0.442062 3.29936 0.0681519 5.40137L4.40642 23.2584C4.65424 24.2791 5.57846 25 6.6397 25H32.3603C33.4215 25 34.3458 24.2791 34.5936 23.2584L38.9318 5.40137C39.4421 3.29936 36.9755 1.74808 35.2671 3.09463L30.197 7.09106C29.2669 7.82633 27.9229 7.73406 27.1007 6.88057Z"
                fill={colorList[type - 1]}
            />
        </svg>
    );
};

export default CrownIcon;
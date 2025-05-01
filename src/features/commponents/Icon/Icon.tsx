type iconIdPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewbox?: string,
    fill?: string
    stroke?: string
}

export const Icon = (props: iconIdPropsType) => {
    return (
        <svg
            width={props.width || "78"}
            height={props.height || "78"}
            viewBox={props.viewbox || "0 0 78 78"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <use href={`/sprite.svg#${props.iconId}`} fill={props.fill} stroke={props.stroke}/>
        </svg>
    );
};

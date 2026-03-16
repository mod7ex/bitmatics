const Styles = {
    "fontFamily": "Arial",
    "fontSize": "28px",
    "fontWeight": "900",
    "letterSpacing": "-1.1px",
    "whiteSpace": "pre",
    "transformBox": "fill-box" as const,
    "transformOrigin": "50% 50%",
}

interface SVGLOGOTYPE extends React.ComponentProps<"svg"> {
    bitColor: string,
    maticsColor: string
}

export default function SVGLogo({ bitColor, maticsColor, ...props }: SVGLOGOTYPE = { bitColor: "rgb(125, 125, 125)", maticsColor: "#1a1f71;" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 105" {...props}>
            <text
                style={{ "fill": bitColor, ...Styles }}
                transform="matrix(3.45554, 0.000001, 0, 4.298935, -2.206918, -176.204468)"
            >
                <tspan x="183.384" y="233.231">Bit</tspan><tspan style={{ "fill": maticsColor }}>matics</tspan>
            </text>
        </svg>
    )
}
import React from "react";
interface ProgressCircleBarProps {
    value: number;
    remainingValueColor?: string;
    size?: number;
    width?: number;
    gradientColors?: string[];
    innerCircleColor?: string;
    clockwise?: boolean;
    text?: string;
    fontSize?: number;
    fontColor?: string;
    fontWeight?: number | string;
}
declare const ProgressCircleBar: React.FC<ProgressCircleBarProps>;
export default ProgressCircleBar;

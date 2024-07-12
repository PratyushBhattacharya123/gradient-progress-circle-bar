import React from "react";

interface ProgressCircleBarProps {
  value: number;
  remainingColor?: string;
  size?: number;
  strokeWidth?: number;
  progressColors?: string[];
  innerColor?: string;
  clockwise?: boolean;
  label?: string;
  fontSize?: number;
  fontColor?: string;
  fontWeight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "normal"
    | "bold"
    | "bolder"
    | "lighter";
}

const ProgressCircleBar: React.FC<ProgressCircleBarProps> = ({
  size = 100,
  strokeWidth = 10,
  progressColors = ["#ffffff", "#b3c0ff", "#b3e0ff", "#4d16ff"],
  innerColor = "white",
  remainingColor = "white",
  clockwise = true,
  value,
  label = "",
  fontSize = 16,
  fontColor = "black",
  fontWeight = "normal",
}) => {
  const newSize = size * 4;
  const newStrokeWidth = strokeWidth * 4;

  const totalArc = 360;
  const currentArc = (value / 100) * totalArc;
  const remainingArc = totalArc - (value / 100) * totalArc;

  // Adjust gradient direction based on clockwise prop
  const adjustedProgressColors = clockwise
    ? progressColors
    : progressColors.slice().reverse();

  return (
    // Background conic gradient
    <div
      style={{
        width: newSize,
        height: newSize,
        borderRadius: "50%",
        background: `conic-gradient(from 0deg, ${adjustedProgressColors})`,
        position: "relative",
      }}
    >
      {/* Remaining value div */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "50%",
          background: clockwise
            ? `conic-gradient(from 0deg, transparent ${currentArc}deg, ${remainingColor} ${currentArc}deg)`
            : `conic-gradient(from 0deg, ${remainingColor} ${remainingArc}deg, transparent ${remainingArc}deg)`,
        }}
      />
      {/* Inner circle */}
      <div
        style={{
          width: newSize - newStrokeWidth * 2,
          height: newSize - newStrokeWidth * 2,
          borderRadius: "50%",
          top: newStrokeWidth,
          left: newStrokeWidth,
          background: innerColor,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: fontColor,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default ProgressCircleBar;

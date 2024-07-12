"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProgressCircleBar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 100 : _b, _c = _a.width, width = _c === void 0 ? 10 : _c, _d = _a.gradientColors, gradientColors = _d === void 0 ? ["#ffffff", "#b3c0ff", "#b3e0ff", "#4d16ff"] : _d, _e = _a.innerCircleColor, innerCircleColor = _e === void 0 ? "white" : _e, _f = _a.remainingValueColor, remainingValueColor = _f === void 0 ? "white" : _f, _g = _a.clockwise, clockwise = _g === void 0 ? true : _g, value = _a.value, _h = _a.text, text = _h === void 0 ? "" : _h, _j = _a.fontSize, fontSize = _j === void 0 ? 16 : _j, _k = _a.fontColor, fontColor = _k === void 0 ? "black" : _k, _l = _a.fontWeight, fontWeight = _l === void 0 ? "normal" : _l;
    var newSize = size * 4;
    var newWidth = width * 4;
    var totalArc = 360;
    var currentArc = (value / 100) * totalArc;
    var remainingArc = totalArc - (value / 100) * totalArc;
    // Adjust gradient direction based on clockwise prop
    var adjustedGradientColors = clockwise
        ? gradientColors
        : gradientColors.slice().reverse();
    return (
    //Background conic gradient
    react_1.default.createElement("div", { style: {
            width: newSize,
            height: newSize,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, ".concat(adjustedGradientColors, ")"),
            position: "relative",
        } },
        react_1.default.createElement("div", { style: {
                width: "100%",
                height: "100%",
                position: "absolute",
                borderRadius: "50%",
                background: clockwise
                    ? "conic-gradient(from 0deg, transparent ".concat(currentArc, "deg, ").concat(remainingValueColor, " ").concat(currentArc, "deg)")
                    : "conic-gradient(from 0deg, ".concat(remainingValueColor, " ").concat(remainingArc, "deg, transparent ").concat(remainingArc, "deg)"),
            } }),
        react_1.default.createElement("div", { style: {
                width: newSize - newWidth * 2,
                height: newSize - newWidth * 2,
                borderRadius: "50%",
                top: newWidth,
                left: newWidth,
                background: innerCircleColor,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: fontColor,
                fontSize: fontSize,
                fontWeight: fontWeight,
            } }, text)));
};
exports.default = ProgressCircleBar;

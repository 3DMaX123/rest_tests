import {Easing} from "framer-motion";

export interface IAnimOpacity {
    opacityInitial?: number;
    opacityAnimate?: number;
    opacityExit?: number;
}

export interface IAnimDuration {
    duration?: number;
}

export interface IAnimEase {
    ease?: Easing | Easing[];
}

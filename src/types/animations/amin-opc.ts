import {IChildren, IClassName} from "@t/root";
import {IAnimDuration, IAnimEase, IAnimOpacity} from "@t/animations/animations";

export interface IAnimOpc extends
 IChildren,
 IClassName,
 IAnimOpacity,
 IAnimDuration,
 IAnimEase
 {}

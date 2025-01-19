import {ICheckListUiPropsLOC} from "@t/ui/check-list-ui";
import {ChangeEvent} from "react";

export interface ICheckListAdaptationProps extends ICheckListUiPropsLOC {
    localSelected: Set<string>;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
}

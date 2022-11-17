import css from "./GeneralInfo.module.css";

export const GeneralInfo = ({children}) => (
    <div className={css.general__information}>
        {children}
    </div>
);
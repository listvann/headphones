import classNames from "classnames";
import styles from "./styles.module.scss";
import {SIZES} from "../../constants/sizes.js";

export const Button = ({
    children,
    onClick,
    disabled,
    className,
    viewVariant = "primary",
    size = SIZE.m,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            classNames={classNames(
                styles.root,
                styles[size],
                styles[viewVariant],
                className,
                {
                    [styles.disabled]: disabled,
                }
            )}
        >
            {children}
        </button>
    );
};
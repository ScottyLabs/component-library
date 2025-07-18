import { cva, type VariantProps } from "cva";
import styles from "./styles.module.css";

const button = cva({
    base: styles.base,
    variants: {
        disabled: {},
        size: {},
        mode: {},
        category: {},
    },
});

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
    className,
    size,
    mode,
    category,
    disabled,
    ...props
}) => (
    <button
        className={button({ className, disabled, size, mode, category })}
        disabled={disabled}
        {...props}
    />
);

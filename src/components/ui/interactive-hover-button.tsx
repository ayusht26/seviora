import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./interactive-hover-button.module.css";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  as?: "button";
}

interface InteractiveHoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  as: "a";
  href: string;
}

type Props = InteractiveHoverButtonProps | InteractiveHoverLinkProps;

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ text = "Button", className = "", as: Tag = "button", ...props }, ref) => {
    const classes = `${styles.btn} ${className}`;

    const inner = (
      <>
        <span className={styles.label}>{text}</span>
        <div className={styles.hoverContent}>
          <span>{text}</span>
          <ArrowRight size={18} />
        </div>
        <div className={styles.blob} />
      </>
    );

    if (Tag === "a") {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {inner}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {inner}
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
export { InteractiveHoverButton };

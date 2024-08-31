import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Prop {
  children: ReactNode;
}
type Props = Prop;

export const Text: FC<Props> = ({ children }) => {
  return <p className={styles["text"]}>{children}</p>;
};

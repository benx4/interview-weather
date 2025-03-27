import { FC } from "react";

type WarnProps = {
  message: string;
  onDismiss: () => void;
};

const WarnBox: FC<WarnProps> = ({ message, onDismiss }) => {
  return (
    <div className="warn-box">
      <div className="content">
        <header>
          <span>警告</span>
          <i
            onClick={() => {
              onDismiss && onDismiss();
            }}
          >
            X
          </i>
        </header>
        <main>{message || "No message"}</main>
      </div>
    </div>
  );
};

export default WarnBox;

import styles from "../InfoItem/InfoItem.module.scss"

export type InfoItemProps = {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
};

export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || "not Avaliable";
  let currentHref = "";
  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? "" : `${styles.empty}`}`}>
      {icon}
      {isLink && text ? (
        <a
          href={currentHref}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          {currentText}
        </a>
      ) : (
        currentText
      )}
    </div>
  );
};

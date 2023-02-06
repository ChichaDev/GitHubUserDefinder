import { LocalGithubUser } from "../../types";
import styles from "../UserStatistic/UserStatistic.module.scss";

export type UserStatisticProps = Pick<
  LocalGithubUser,
  "repos" | "followers" | "following"
>;

export const UserStatistic = ({
  repos,
  followers,
  following,
}: UserStatisticProps) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repos}</div>
      </div>

      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>

      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
    </div>
  );
};

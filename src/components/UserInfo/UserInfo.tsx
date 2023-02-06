import { LocalGithubUser } from "../../types";
import { InfoItem, InfoItemProps } from "../InfoItem/InfoItem";
import styles from "../UserInfo/UserInfo.module.scss";

import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as WebsiteIcon } from "../../assets/icon-website.svg";

type UserInfoProps = Pick<
  LocalGithubUser,
  "blog" | "company" | "location" | "twitter"
>;

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <CompanyIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <WebsiteIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

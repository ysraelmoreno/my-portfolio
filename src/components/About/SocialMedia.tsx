import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

interface SocialMediaProps {
  socialMedias: {
    linkedin: string;
    github: string;
    youtube: string;
  };
}

function SocialMedia({ socialMedias }: SocialMediaProps) {
  const socialMediaLinks = {
    linkedin: <BsLinkedin />,
    github: <BsGithub />,
    youtube: <BsYoutube />,
  };

  const listOfSocialMediaLowerCase: ("linkedin" | "github" | "youtube")[] =
    Object.keys(socialMedias).map(
      (media): "linkedin" | "github" | "youtube" => {
        /* @ts-ignore */
        return media.toLowerCase();
      }
    );

  const listOfSocialMedia = listOfSocialMediaLowerCase.map(
    (key: "linkedin" | "github" | "youtube") => (
      <a target="_blank" rel="noreferrer" href={socialMedias[key]}>
        {socialMediaLinks[key]}
      </a>
    )
  );
  return <>{listOfSocialMedia}</>;
}

export default SocialMedia;

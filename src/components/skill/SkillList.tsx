import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoAws,
} from 'react-icons/bi';
import { PiFigmaLogoFill } from 'react-icons/pi';
import { SiStyledcomponents, SiVercel, SiGit, SiGithub } from 'react-icons/si';
import SkillItem from './SkillItem';

interface propTypes {
  monitorCenterCoor: {
    top: number;
    left: number;
  };
}

export default function SkillList({ monitorCenterCoor }: propTypes) {
  return (
    <>
      {skillList.map((skill, i) => (
        <SkillItem
          key={i}
          name={skill.name}
          items={skill.items}
          coor={skill.coor}
          monitorCenterCoor={monitorCenterCoor}
        />
      ))}
    </>
  );
}

const skillList = [
  {
    name: 'mark up',
    coor: { top: -150, left: -380 },
    items: [
      {
        name: 'HTML',
        icon: <BiLogoHtml5 />,
      },
      {
        name: 'CSS',
        icon: <BiLogoCss3 />,
      },
    ],
  },
  {
    name: 'language',
    coor: { top: -310, left: -98 },
    items: [
      {
        name: 'Javascript',
        icon: <BiLogoJavascript />,
      },
      {
        name: 'Typescript',
        icon: <BiLogoTypescript />,
      },
    ],
  },
  {
    name: 'library',
    coor: { top: -150, left: 180 },
    items: [
      {
        name: 'React',
        icon: <BiLogoReact />,
      },
      {
        name: 'Redux',
        icon: <BiLogoRedux />,
      },
      {
        name: 'TailwindCSS',
        icon: <BiLogoTailwindCss />,
      },
      {
        name: 'Styled-Components',
        icon: <SiStyledcomponents />,
      },
    ],
  },
  {
    name: 'tool',
    coor: { top: 170, left: 50 },
    items: [
      {
        name: 'Git',
        icon: <SiGit />,
      },
      {
        name: 'GitHub',
        icon: <SiGithub />,
      },
      {
        name: 'Figma',
        icon: <PiFigmaLogoFill />,
      },
    ],
  },
  {
    name: 'deployment',
    coor: { top: 140, left: -300 },
    items: [
      {
        name: 'Vercel',
        icon: <SiVercel />,
      },
      {
        name: 'AWS S3',
        icon: <BiLogoAws />,
      },
    ],
  },
];

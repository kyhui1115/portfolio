import { useParams } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import BackBtn from '../components/projectDetail/BackBtn';
import ProjectTitle from '../components/projectDetail/ProjectTitle';
import ProjectBody from '../components/projectDetail/ProjectBody';
import locationFlow from '../assets/locationFlow.png';

export default function ProjectDetail() {
  const id = Number(useParams().id);
  const project = projects[id];

  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-gray-500">
      <ProjectTitle title={project.title} />
      <ProjectBody project={project} />
      <BackBtn />
    </div>
  );
}

const projects = [
  {
    title: 'ART FRIENDLY',
    term: '2024. 04 ~ 2024. 06',
    links: [
      {
        icon: <BsGithub className="text-2xl hover:text-red-100" />,
        url: 'https://github.com/art-friendly-project/front-end',
      },
      {
        icon: <CgWebsite className="text-3xl hover:text-red-100" />,
        url: 'https://front-end-seven-eta.vercel.app',
      },
    ],
    intro: {
      name: '소개',
      text: '전시 정보와 리뷰 등을 제공하는 서비스 입니다.',
    },
    team: {
      name: '구성',
      text: '서비스 기획자 1  /  디자이너 1  /  마케터 1  /  프론트엔드 1  /  백엔드 1',
    },
    skill: {
      name: '기술',
      text: 'React  /  React-native  /  Typescript  /  Redux  /  TailwindCSS  /  Vercel  /  React-native-webView',
    },
    devs: [
      {
        title: '하이브리드 앱 구현',
        body: (
          <>
            <li className="mb-2">
              전시 정보를 제공해 주는 서비스의 특성상 모바일 사용자의 비율이
              높을 것으로 예측되어 모바일 앱 제작의 필요성을
              <br />
              느꼈습니다.
            </li>
            <li className="mb-2">
              웹 개발 지식 및 경험밖에 없어 이를 최대한 활용하여 낮은 러닝
              커브로 앱 제작을 할 수 있는 하이브리드 앱 개발 방식을
              채택하였습니다.
            </li>
            <li className="mb-2">
              React-native-webView를 사용하여 React로 제작한 웹 사이트를 웹뷰를
              통해 모바일에 띄우는 방식으로
              <br />
              개발하였습니다.
            </li>
            <li>
              PostMessage와 injectJavascript를 통해 웹뷰와 React-native 간의
              데이터 통신을 가능하게 하여 단순히 웹뷰를
              <br />
              넘어서 모바일 앱으로서 기능을 할 수 있도록 하였습니다.
            </li>
          </>
        ),
      },
      {
        title: '웹뷰에서 모바일 뒤로가기 물리 버튼 문제 해결',
        body: (
          <>
            <li className="mb-2">
              모바일에서 웹뷰 자체를 하나의 히스토리 스택으로 관리하여 뒤로가기
              물리 버튼 클릭 시 앱이 종료되는 문제가
              <br />
              발생하였습니다.
            </li>
            <li className="mb-2">
              모바일 사용자라면 필수적으로 뒤로가기를 사용하기 때문에 치명적인
              문제라고 판단하였습니다.
            </li>
            <li className="mb-2">
              React-native의 BackHandler API를 사용하여 뒤로가기 물리 버튼을
              감지하여 PostMessage로 웹뷰에 신호를 보내
              <br />
              뒤로가기의 기능을 할 수 있도록 하였습니다.
            </li>
            <li>
              이를 통해 웹뷰에서도 네이티브 앱과 같은 사용자 경험을 느낄 수
              있도록 하였습니다.
            </li>
          </>
        ),
      },
      {
        title: '웹뷰에서 모바일 위치 서비스 구현',
        body: (
          <>
            <li className="mb-2">
              웹의 경우 사이트 자체에서 위치 권한 및 정보를 받아 처리하면
              됐지만, 앱의 경우 모바일 기기의 위치 권한 및 정보를
              <br />
              웹뷰에 전달하여 처리하는 과정이 필요했습니다.
            </li>
            <li className="mb-2">
              사용자와 서비스 간의 상호작용은 웹뷰로 구현하였고 이 과정에서 위치
              권한 및 정보 전달은 React-native를 통해
              <br />
              구현하였습니다.
            </li>
            <li>사용자 - 웹뷰 - React-native의 흐름</li>
            <img className="-ml-4 h-200" src={locationFlow} alt="" />
          </>
        ),
      },
    ],
  },
  {
    title: 'DEV SHOP',
    term: '2023. 06 ~ 2023. 09',
    links: [
      {
        icon: <BsGithub className="text-2xl hover:text-red-100" />,
        url: 'https://github.com/devstoreproject/devstore',
      },
    ],
    intro: {
      name: '소개',
      text: '개발자에게 필요한 장비를 판매하는 서비스 입니다.',
    },
    team: {
      name: '구성',
      text: '프론트엔드 4  /  백엔드 2',
    },
    skill: {
      name: '기술',
      text: 'React  /  Typescript  /  Redux  /  TailwindCSS  /  AWS S3  /  Recharts',
    },
    devs: [
      {
        title: '',
        body: (
          <>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li></li>
          </>
        ),
      },
      {
        title: '',
        body: (
          <>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li></li>
          </>
        ),
      },
      {
        title: '',
        body: (
          <>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li></li>
          </>
        ),
      },
    ],
  },
  {
    title: 'HELL START UP',
    term: '2023. 03 ~ 2023. 04',
    links: [
      {
        icon: <BsGithub className="text-2xl hover:text-red-100" />,
        url: 'https://github.com/codestates-seb/seb42_main_012',
      },
    ],
    intro: {
      name: '소개',
      text: '헬스장 추천 및 커뮤니티 서비스 입니다.',
    },
    team: {
      name: '구성',
      text: '프론트엔드 3  /  백엔드 3',
    },
    skill: {
      name: '기술',
      text: 'React  /  Javascript  /  Zustand  /  TailwindCSS  /  AWS S3  /  Kakao Map API',
    },
    devs: [
      {
        title: '',
        body: (
          <>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li></li>
          </>
        ),
      },
      {
        title: '',
        body: (
          <>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li></li>
          </>
        ),
      },
      {
        title: '',
        body: (
          <>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li></li>
          </>
        ),
      },
    ],
  },
];

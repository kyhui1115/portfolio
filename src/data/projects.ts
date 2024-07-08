import project1 from '../assets/project1.png';
import project1Shadow from '../assets/project1Shadow.png';
import project2 from '../assets/project2.png';
import project2Shadow from '../assets/project2Shadow.png';
import project3 from '../assets/project3.png';
import project3Shadow from '../assets/project3Shadow.png';

export const projects = [
  {
    id: 0,
    image: project1,
    shadow: project1Shadow,
    title: 'ART FRIENDLY',
    typeAndTerm: '팀 프로젝트  /  2024. 04 ~',
    intro: '전시 정보와 리뷰 등을 제공하는 서비스',
    skill: [
      'react',
      'react-native',
      'typescript',
      'redux',
      'tailwindcss',
      'vercel',
      'webview',
      'swiper',
    ],
    review:
      ' 프로젝트의 프론트를 혼자 개발해야 했고 모바일 앱 개발 경험도 없었기 때문에' +
      ' 웹뷰를 사용한 하이브리드 앱 개발 방식을 사용하였습니다.' +
      ' UI의 대부분은 React를 통해 제작하고 React-native를 통해 모바일과 연결하여' +
      ' 웹뷰로 보여주기만 하면 됐기 때문에 러닝커브가 낮았고, 안드로이드 / IOS 모두 호환이 되기 때문에' +
      ' 이번 프로젝트에 적용하기에 적합하였습니다.' +
      ' 또한 PostMessage를 사용하여 웹뷰와 React-native 간의 데이터를 주고받아 네이티브 앱처럼 이벤트를 처리할 수 있었습니다.',
  },
  {
    id: 1,
    image: project2,
    shadow: project2Shadow,
    title: 'DEV SHOP',
    typeAndTerm: '팀 프로젝트  /  2023. 06 ~ 2023. 09',
    intro: '개발자에게 필요한 장비를 판매하는 서비스',
    skill: [
      'react',
      'typescript',
      'redux',
      'tailwindcss',
      'aws s3',
      'recharts',
    ],
    review:
      ' 프로젝트 진행 중 팀원이 나가거나 바뀌고, 프론트엔드 개발자가 많아 유지보수에 신경을 쓴 프로젝트였습니다.' +
      ' Ajax 요청이나 함수 중에 중복되고 자주 쓰이는 코드를 모듈화하여 별도로 관리하고 필요한 곳에서 사용할 수 있도록 하였습니다.' +
      ' 또한 버튼이나 페이지 등 중복되는 컴포넌트도 공통 컴포넌트로 모듈화하여 재사용하였습니다.' +
      '\n 하지만 팀원의 이탈 및 변동으로 기능이나 페이지들이 일부 미구현되었습니다. ' +
      '핵심 기능 위주로 프로젝트의 볼륨을 축소하여 진행하고, 부가 기능들은 추후에 구현했다면 완성도 높은 프로젝트가 되었을 것 같다는 생각이 들었습니다.',
  },
  {
    id: 2,
    image: project3,
    shadow: project3Shadow,
    title: 'HELL START UP',
    typeAndTerm: '팀 프로젝트  /  2023. 03 ~ 2023. 04',
    intro: '헬스장 추천 및 커뮤니티 서비스',
    skill: [
      'react',
      'javascript',
      'zustand',
      'tailwindcss',
      'aws s3',
      'kakao map api',
    ],
    review:
      ' 지도로 헬스장 위치를 표시하고, 사용자의 위치를 기반으로 주변 헬스장을 추천해주는 등 서비스의 핵심 UI 및 기능을 구현하려 노력하였습니다. ' +
      '\n 하지만 웹 페이지를 모바일 화면에 맞춰 제작하였는데, 웹 페이지라 모바일 환경에서 제한적이고, PC에서는 작은 화면으로 인해 ' +
      '보여줄 수 있는 콘텐츠가 적어 모바일과 PC 환경에서 모두 애매한 서비스가 된 것 같아 아쉬웠습니다.' +
      ' 모바일은 앱으로 제작하고 PC는 웹 화면에 맞게 제작하는 것이 적합할 것 같다는 생각이 들었습니다.',
  },
];

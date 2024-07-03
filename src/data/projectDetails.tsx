import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import locationFlow from '../assets/locationFlow.png';

export const projectDetails = [
  {
    title: 'ART FRIENDLY',
    term: '2024. 04 ~',
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
      text: 'React  /  React-native  /  Typescript  /  Redux  /  TailwindCSS  /  Vercel  /  WebView  /  Swiper',
    },
    role: {
      title: '담당',
      body: (
        <>
          <li className="mb-2">
            메인, 전시 목록, 관심 목록, 취향 테스트, 프로필 페이지 UI, 기능 구현
          </li>
          <li className="mb-2">
            카카오 로그인, 로그아웃, 회원탈퇴 등 사용자 인증 기능 구현
          </li>
          <li>모바일 위치 서비스, 캘린더 일정 등록 기능 구현</li>
        </>
      ),
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
              프론트엔드는 혼자 개발해야 했고, 두달 정도 기간 내에 개발해야 했기
              때문에 웹 개발(React) 경험을 활용할 수 있고
              <br />
              러닝커브가 낮은 React와 React-native를 사용하여 웹뷰를 통해
              모바일에 웹 화면을 띄우는 방식으로 하이브리드 앱을 구현하였습니다.
            </li>
            <li className="mb-2">
              또한 PostMessage와 injectJavascript를 통해 웹뷰와 React-native
              간의 데이터 통신을 가능하게 하여 단순히
              <br />
              웹뷰를 넘어서 모바일 앱으로서 기능을 할 수 있도록 하였습니다.
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
              내 주변 지역에서 진행하는 전시를 보여주기 위해 위치 서비스를
              구현해야 했습니다.
            </li>
            <li className="mb-2">
              웹의 경우 사이트 자체에서 위치 권한 및 정보를 받아 처리하면
              됐지만, 앱의 경우 모바일 기기의 위치 권한 및 정보를
              <br />
              웹뷰에 전달하여 처리하는 과정이 필요했습니다.
            </li>
            <li className="mb-2">
              사용자와 서비스 간의 상호작용은 웹뷰를 통해 이루어지므로 웹
              페이지에 위치 서비스 관련 UI를 구현하였고, 위치 서비스 관련 기능은
              React-native에서 구현하였습니다.
            </li>
            <li className="mb-2">
              사용자가 웹뷰에서 위치 서비스를 요청하면 PostMessage로 요청 신호를
              React-native로 전달합니다.
              <br />
              React-native는 모바일 기기의 위치 권한 및 정보를 받아
              PostMessage를 통해 웹뷰로 전달하여 위치에 맞는 데이터를 화면에
              띄웁니다.
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
    role: {
      title: '담당',
      body: (
        <>
          <li className="mb-2">관리자 페이지, 마이 페이지 UI, 기능 구현</li>
          <li>회원가입, 로그인 등 사용자 인증 기능 구현</li>
        </>
      ),
    },
    devs: [
      {
        title: '중복된 서버 데이터 요청으로 인한 코드 개선',
        body: (
          <>
            <li className="mb-2">
              페이지별로 사용자 정보나, 상품 정보 조회 등 서버에 데이터를
              요청하는 코드를 작성하였으나 같은 정보를 요청하는
              <br />
              코드가 여러 페이지에 중복으로 작성되는 것을 파악하였습니다.
            </li>
            <li className="mb-2">
              서버에서 데이터 요청 시 필요한 정보나 endpoint 등이 변경될 경우
              각각의 페이지에서 변경해야 하므로 여러 번<br />
              작업해야 하고 이 과정에서 실수가 발생할 수 있을 것이라고
              예측하였습니다.
            </li>
            <li className="mb-2">
              서버 데이터 요청 중 자주 사용되는 코드를 custom hook으로
              모듈화하여 15 ~ 30줄 정도의 코드를 한 줄로 불러와
              <br />
              여러 페이지에서 사용하여 유지보수성 및 재사용성을 높일 수
              있었습니다.
            </li>
          </>
        ),
      },
      {
        title: '드롭다운 UI를 통한 UX 개선',
        body: (
          <>
            <li className="mb-2">
              마이 페이지의 주문 목록 탭에서 사용자가 주문한 상품의 목록을
              조회하는 UI와 기능을 구현하였는데 주문 목록이 많을
              <br />
              경우 데이터가 늦게 로딩되어 빈 화면이 보였습니다.
            </li>
            <li className="mb-2">
              주문 목록이 많거나 네트워크 환경이 좋지 않을 경우 빈 화면이 오래
              보여 사용자 경험이 저하될 것이라고 예측하였습니다.
            </li>
            <li className="mb-2">
              이를 해결하기 위해 최소한의 정보로 전체 목록을 화면에 띄우고, 상세
              정보는 드랍다운 UI를 통해 클릭하여 확인할 수<br />
              있도록 하여 빠르게 주문 목록을 확인할 수 있게 되었습니다.
            </li>
          </>
        ),
      },
      {
        title: 'localStorage를 활용한 UX 개선',
        body: (
          <>
            <li className="mb-2">
              관리자 페이지에 정보가 많다 보니 메뉴 접기/펼치기(아코디언 UI)를
              구현하여 정보를 더 쾌적하게 확인할 수 있도록
              <br />
              하였는데, 재접속 및 새로고침 시 메뉴의 상태가 유지되지 않아 매번
              다시 설정해야 했습니다.
            </li>
            <li>
              이를 해결하기 위해 브라우저 저장소인 localStorage에 메뉴의 상태를
              저장하여 사용자가 지정한 메뉴의 상태가
              <br />
              계속해서 유지될 수 있도록 하였습니다.
            </li>
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
    role: {
      title: '담당',
      body: (
        <>
          <li className="mb-2">헬스장 목록, 상세, 리뷰 페이지 UI, 기능 구현</li>
          <li className="mb-2">Mock API 구현</li>
          <li>Kakao Map API를 통한 지도 서비스 구현</li>
        </>
      ),
    },
    devs: [
      {
        title: '안정적인 Form 데이터 관리',
        body: (
          <>
            <li className="mb-2">
              헬스장 등록 시 헬스장 이름, 이미지, 편의시설, 가격 등 다양한
              데이터를 입력하고 validation 기능도 추가하다 보니
              <br />
              코드가 복잡해지는 것을 파악하였습니다.
            </li>
            <li className="mb-2">
              복잡한 코드 때문에 Form을 수정하거나 입력할 데이터를 수정할 때
              여러 테스트를 진행하고 계속해서 코드를 확인해야 했습니다.
            </li>
            <li className="mb-2">
              React-hook-form을 도입하여 Form 상태를 통합하여 관리하고,
              validation도 내장 기능으로 간단하게 구현하여 Form 데이터를
              안정적으로 관리하였습니다.
            </li>
          </>
        ),
      },
      {
        title: 'Mock API 구현을 통한 작업시간 단축',
        body: (
          <>
            <li className="mb-2">
              백엔드 개발자와 프론트엔드 개발자 간의 작업 시간대가 다른 경우가
              많아 API 작업이 완료되지 않거나 서버에 오류가
              <br />
              발생했을 때 확인 및 테스트의 어려움을 겪었습니다. 또한 서버와
              클라이언트를 연결하기 위한 추가 작업을 하다보니
              <br />
              일정이 계속해서 지연되었습니다.
            </li>
            <li className="mb-2">
              최대한 서로 간의 일정을 맞추려 노력하여 작업 시간대를 맞출 수
              있었지만 언제든지 작업 시간대가 달라질 수 있고,
              <br />
              서버에 오류가 발생했을 때 작업이 지연되는 문제를 해결할 필요가
              있었습니다.
            </li>
            <li className="mb-2">
              MSW 기반으로 Mock API를 구현하여 프론트에서 자체적으로 작업 및
              테스트를 가능할 수 있도록 하였습니다.
            </li>
          </>
        ),
      },
    ],
  },
];

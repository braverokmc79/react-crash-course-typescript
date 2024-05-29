# React + TypeScript + Vite

이 템플릿은 Vite에서 HMR과 몇 가지 ESLint 규칙을 사용하여 React를 최소한으로 설정할 수 있는 환경을 제공합니다.

현재 두 가지 공식 플러그인이 있습니다:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): [Babel](https://babeljs.io/)을 사용하여 Fast Refresh를 지원합니다.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): [SWC](https://swc.rs/)를 사용하여 Fast Refresh를 지원합니다.

## ESLint 설정 확장

프로덕션 애플리케이션을 개발하는 경우, 타입 인식 린트 규칙을 활성화하도록 설정을 업데이트하는 것을 권장합니다:

- 상위 수준의 `parserOptions` 속성을 다음과 같이 구성합니다:

  ```js
  export default {
    // 다른 규칙들...
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
    },
  }

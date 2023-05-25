# 🛠️ components-ts-legacy

### Next.js, TypeScript, MUI(Google Material UI), Storybook 을 사용하여 개발한 컴포넌트 모음집

![main](https://media.giphy.com/media/O6jnT5Yccxu4ISboss/giphy.gif)


2019년경 [**McKinley Rice**](https://mckinleyrice.com/) 에서 현재 배포되어있는 **[CareerChat](https://careerchat.me/)의 MVP 개발에 참여**하여, [**Atomic Design Pattern**](https://bradfrost.com/blog/post/atomic-web-design/)에 따라 UI 레벨 컴포넌트부터 그 상위 레벨인 layout 레벨 컴포넌트 개발을 진행했습니다.

<hr />

```
⚠️ 2019년 당시 개발했던 컴포넌트들만 개별적으로 끌어온 형태이므로 기능들은 구현되어 있지 않고, 컴포넌트들의 Storybook의 코드가(Story) 해당 버전(2019년경)의 형태 및 컨벤션으로 쓰여있습니다.
```


Storybook을 보고 싶으시다면 다음 커맨드들을 원하는 디렉토리에서 순차적으로 실행해주시면 됩니다.

```
git clone https://github.com/ggkim0614/components-ts-legacy.git
```
```
yarn
```
```
yarn storybook
```


아래 이미지들은 **Story들 중 일부의 예시 이미지**들입니다.

<div style="flex;margin-bottom:16px">
  <img align="top" width="500" alt="Screenshot 2023-05-19 at 3 13 12 PM" src="https://github.com/ggkim0614/components-ts-legacy/assets/37966668/396d4de8-0cfe-4d74-aea5-a10193d02942">
  <img align="top" width="500" alt="Screenshot 2023-05-19 at 3 13 24 PM" src="https://github.com/ggkim0614/components-ts-legacy/assets/37966668/a2a0f27a-23ad-40f7-a4a7-b8f9bbd59b8d">
</div>
<div style="flex">
  <img align="top" width="500" alt="Screenshot 2023-05-19 at 3 13 57 PM" src="https://github.com/ggkim0614/components-ts-legacy/assets/37966668/2cf33b2f-bf97-4d7d-8dae-0e6289666d46">
  <img align="top" width="500" alt="Screenshot 2023-05-19 at 3 14 17 PM" src="https://github.com/ggkim0614/components-ts-legacy/assets/37966668/8649b0c1-e188-47fd-8a95-96a7288547fe">
</div>

스택은 **Next.js + TypeScript**를 사용했으며, 페이지를 개발하기 이전에 **Storybook으로 컴포넌트별 개발을 선행**했으며, 스타일링은 **MUI**를 끌어오고 테마에 맞게 아래 코드와 같이 override 및 커스텀하여 사용하였습니다.


```
import { createTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export default createTheme({
	palette: {
		primary: {
			main: '#03CCCC',
		},
		secondary: {
			main: '#FEB42B',
		},
		text: {
			secondary: grey[700],
			disabled: grey[400],
		},
	},
	shape: {
		borderRadius: 5,
	},
	typography: {
		h1: {
			// 20 px + bold
			fontSize: '1.25rem',
			fontWeight: 'bold',
		},
		h2: {
			// 16 px + bold
			fontSize: '1rem',
			fontWeight: 'bold',
		},
		h3: {
			// 15 px + bold
			fontSize: '0.9375rem',
			fontWeight: 'bold',
		},
		h4: {
			// 14 px + bold
			fontSize: '0.875rem',
			fontWeight: 'bold',
		},
		subtitle1: {
			// 15 px + grey[700]
			fontSize: '0.9375rem',
			color: grey[700],
		},
		subtitle2: {
			// 14 px + grey[500]
			fontSize: '0.875rem',
			color: grey[500],
		},
		body1: {
			// 14 px
			fontSize: '0.875rem',
		},
		body2: {
			// 13 px
			fontSize: '0.8125rem',
		},
		caption: {
			// 11 px
			color: grey[500],
			fontSize: '0.6875rem',
		},
	},
	overrides: {
		MuiButton: {
			containedPrimary: {
				color: 'white',
			},
		},
	},
});
```


프로젝트에서 개발하는 제품이 MVP이고, Agile방식으로 개발했던 만큼 Pivoting이 필수불가결한 만큼 최하위 레벨의 컴포넌트들부터 커스터마이징 및 변경이 최대한 가능하도록 변경 가능한 값(prop)을 많이 정의하며 제작하였습니다. 

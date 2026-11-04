# Sidewalk — 스트리트 스타일 매거진

정적 사이트(HTML/CSS/JS)입니다. 서버나 빌드 없이 GitHub Pages로 바로 올릴 수 있습니다.

## 파일 구조
- `index.html` 페이지 구조
- `style.css` 디자인
- `script.js` 표지 슬라이드, 밸런스 게임, 월별 Issues, 메뉴 이동
- `images/2026-01` ~ `images/2026-10` 월별 사진 폴더

## 사진 넣는 법
해당 월 폴더에 아래 이름으로 저장하면 자동으로 표시됩니다. (확장자: jpg, jpeg, png, webp)

```
images/2026-03/men-01.jpg    ...  men-10.jpg     (남자 10장)
images/2026-03/women-01.jpg  ...  women-10.jpg   (여자 10장)
```

사진이 없는 칸은 Pinterest 검색 링크로 표시됩니다.
사진은 직접 촬영했거나 사용 허락을 받은 것, 무료 라이선스 사진만 사용하세요.
사진 1장당 500KB~1MB 이하로 줄이면 페이지가 빨라집니다.

## GitHub Pages 배포
1. GitHub에서 새 저장소를 만들고 이 폴더의 파일들을 업로드합니다. (index.html이 저장소 최상위에 있어야 합니다)
2. Settings → Pages → Branch를 `main` / `/ (root)`로 선택하고 Save를 누릅니다.
3. 잠시 후 `https://아이디.github.io/저장소이름/` 에서 확인합니다.

## 이름 바꾸기
`script.js` 맨 위 `var NAME="Sidewalk";` 한 줄만 고치면 워드마크와 제목, 푸터가 바뀝니다.

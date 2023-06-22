# 프로젝트 ReadMe

### Node version 18.16.0 LTS
### yarn version 1.22.19

```bash
  yarn install
```

yarn install 중 에러 발생시 ``` UNABLE_TO_VERIFY_LEAF_SIGNATURE ```
```bash
  yarn config set "strict-ssl" false -g
```

로컬용으로 실행 
```bash
  yarn local
```

개발계로 실행
```bash
  yarn dev
```

운용계로 실행
```bash
  yarn prod
```

### 필수 vsCode extension
1. EditorConfig for VS Code
2. TypeScript Vue Plugin (Volar)
3. Vue Language Features (Volar)

### IntelliJ EditorConfig 적용
https://www.jetbrains.com/help/idea/editorconfig.html

### vscode extensions 설치
cat extensions.list |% {code --install-extensions $_}

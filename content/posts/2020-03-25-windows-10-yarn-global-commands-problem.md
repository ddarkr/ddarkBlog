---
date: 2020-03-25
title: "Windows 10, Yarn 에서 global 명령어 문제"
template: post
thumbnail: "../thumbnails/gatsby.png"
slug: windows-10-yarn-global-commands-problem
categories:
  - 문제 해결
tags:
  - yarn
  - windows
---

최근 노트북 개발이 증가하면서, 자연스럽게 Windows 환경에서 개발하는 경우가 많아졌다. 따라서 기존에는 macOS에서 처리하던 작업도 모두 Windows에서 병행하게 되었다.

근데 이상하게 예전에도 그랬는데 yarn global 명령어로 설치한 바이너리들이라던가, 명령어들이 먹지를 않는다.

## 해결 방법

![](../images/2020-03-25-03-58-04.png)

🔼 `yarn global bin` 명령어로 Yarn 의 bin 폴더를 확인하고, 복사해준다.

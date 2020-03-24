---
date: 2020-02-07
title: "libquic (BoringSSL): Could not find Go"
template: post
thumbnail: "../thumbnails/terminal.png"
slug: libquic-BoringSSL-Could-not-find-Go
categories:
  - 문제 해결
tags:
  - ubuntu
---

```bash
CMake Error at boringssl/CMakeLists.txt:26 (message):
Could not find Go
```

## 문제점

그냥 GoLang이 없는것, GoLang을 설치해주면 된다.

## 해결

Ubuntu:

```bash
sudo apt-get install golang
```

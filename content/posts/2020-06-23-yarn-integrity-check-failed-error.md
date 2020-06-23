---
date: 2020-06-23
title: "yarn, Integrity check failed 오류"
template: post
thumbnail: "../thumbnails/yarn.png"
slug: yarn-integrity-check-failed-error
categories:
  - 문제 해결
tags:
  - yarn
---

오랫만에 예전 프로젝트를 리팩토링하려고 `yarn install` 하던 도중, 오류가 났다.


## 문제점

```shell
error https://registry.yarnpkg.com/regjsgen/-/regjsgen-0.5.2.tgz: Integrity check failed for "regjsgen" (computed integrity doesn't match our records, got "sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEe`tclvCVXOPoN3A== sha1-kv8pX7He7L9uzaslQ9IH6RqjNzM=")
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```

## 해결 방법

### yarn 캐시 삭제

```shell
yarn cache clean
```

yarn의 패키지 캐시를 삭제하는 명령어이다.

### `yarn.lock` 파일 삭제

나는 캐시 삭제로 끝나지 않아서, yarn.lock 파일을 삭제했다.

해결!
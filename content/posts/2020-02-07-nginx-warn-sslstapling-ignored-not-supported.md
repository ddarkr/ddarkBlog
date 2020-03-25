---
date: 2020-02-07
title: 'nginx: [warn] "ssl_stapling" ignored, not supported'
template: post
thumbnail: "../thumbnails/nginx.png"
slug: nginx-warn-sslstapling-ignored-not-supported
categories:
  - 문제 해결
tags:
  - nginx
---

```bash
nginx[3046]: nginx: [warn] "ssl_stapling" ignored, not supported
```

## 문제점

Nginx에 BoringSSL과 함께 사용할 때, 발생하는 경고.

BoringSSL과 함께 사용할때는 OCSP stapling이 지원되지 않는건지...

## 해결

우선 nginx의 설정에서 `ssl_stapling` 관련은 모두 삭제하자.

> 추가적으로 패치나 해결법이 나오면 수정하도록 하겠음.

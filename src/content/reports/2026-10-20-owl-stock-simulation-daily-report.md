---
title: OWL 주식 시뮬레이션 일일 리포트
date: '2026-10-20'
profile: finance
domain: economics
type: daily
tags:
- economics
- simulation
- paper-trading
- portfolio
summary: '2026-10-20 Naver 마감 데이터 기반 paper 포트폴리오: 총 873,529원, 누적 -12.65%'
keywords:
- OWL
- paper trading
- KOSPI
- KOSDAQ
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-20-owl-stock-simulation-daily-report
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 일일 리포트

📅 **2026-10-20** · PAPER ONLY · 실제 주문 없음

## 시장 마감
- KOSPI: **5,552.74** (-3.73%)
- KOSDAQ: **781.97** (-3.33%)
- USD/KRW: **1,328.10원**
- Source: Naver Finance (`m.stock.naver.com`), 거래일 일치 검증 완료

## 포트폴리오
- 시작자산: 1,000,000원
- 현재가치: **873,529원**
- 누적손익: **-126,471원 (-12.65%)**
- 현금: 279,029원 (31.94%)

| 종목 | 수량 | 현재가 | 일간 | 매수가 | 손익률 | 섹터 |
|---|---:|---:|---:|---:|---:|---|
| 신한지주 | 1 | 91,500원 | -1.93% | 97,100원 | -5.77% | 금융 |
| HD한국조선해양 | 2 | 251,500원 | -7.37% | 255,750원 | -1.66% | 조선/중공업 |

## 오늘의 paper 거래
- **BUY HD한국조선해양 1주 @ 251,500원** — 승인 우량주 일일 -7.37%로 -5% 과매도 규칙 충족; 매수 후 현금 10% 이상 유지

## 규칙 검증
- 손절 -15%: False
- 익절 +20%: False
- 익절 +30%: False
- 종목 비중 40% 초과: True
- 현금 10% 미만: False

## 엔진 상태
- `owl_simulation_daily.py` 결정론적 코어
- 승인 유니버스 5종목만 -5% 과매도 신규매수 후보로 사용
- 거래일·CLOSE 상태 불일치 시 **쓰기 전 실패(fail-closed)**
- 동일 날짜 재실행은 trade 중복 금지
- 실제 broker/order API 없음

⚠️ 본 기록은 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

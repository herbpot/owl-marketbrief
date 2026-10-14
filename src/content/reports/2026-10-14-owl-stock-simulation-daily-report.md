---
title: OWL 주식 시뮬레이션 일일 리포트
date: '2026-10-14'
profile: finance
domain: economics
type: daily
tags:
- economics
- simulation
- paper-trading
- portfolio
summary: '2026-10-14 Naver 마감 데이터 기반 paper 포트폴리오: 총 917,269원, 누적 -8.27%'
keywords:
- OWL
- paper trading
- KOSPI
- KOSDAQ
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-14-owl-stock-simulation-daily-report
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 일일 리포트

📅 **2026-10-14** · PAPER ONLY · 실제 주문 없음

## 시장 마감
- KOSPI: **6,008.81** (-0.44%)
- KOSDAQ: **823.88** (-1.57%)
- USD/KRW: **1,336.90원**
- Source: Naver Finance (`m.stock.naver.com`), 거래일 일치 검증 완료

## 포트폴리오
- 시작자산: 1,000,000원
- 현재가치: **917,269원**
- 누적손익: **-82,731원 (-8.27%)**
- 현금: 478,669원 (52.18%)

| 종목 | 수량 | 현재가 | 일간 | 매수가 | 손익률 | 섹터 |
|---|---:|---:|---:|---:|---:|---|
| 신한지주 | 1 | 95,400원 | -4.31% | 97,100원 | -1.75% | 금융 |
| 삼성전자 | 1 | 234,500원 | +1.08% | 245,500원 | -4.48% | 반도체/IT |
| 기아 | 1 | 108,700원 | +0.37% | 124,400원 | -12.62% | 자동차 |

## 오늘의 paper 거래
- **SELL 삼성전자 1주 @ 234,500원** — 규칙 기반 REBALANCE_OVER40: 51.10% → 25.57%

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

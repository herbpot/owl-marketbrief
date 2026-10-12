---
title: OWL 주식 시뮬레이션 일일 리포트
date: '2026-10-12'
profile: finance
domain: economics
type: daily
tags:
- economics
- simulation
- paper-trading
- portfolio
summary: '2026-10-12 Naver 마감 데이터 기반 paper 포트폴리오: 총 937,378원, 누적 -6.26%'
keywords:
- OWL
- paper trading
- KOSPI
- KOSDAQ
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-12-owl-stock-simulation-daily-report
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 일일 리포트

📅 **2026-10-12** · PAPER ONLY · 실제 주문 없음

## 시장 마감
- KOSPI: **6,384.24** (-3.65%)
- KOSDAQ: **849.19** (-4.83%)
- USD/KRW: **1,333.60원**
- Source: Naver Finance (`m.stock.naver.com`), 거래일 일치 검증 완료

## 포트폴리오
- 시작자산: 1,000,000원
- 현재가치: **937,378원**
- 누적손익: **-62,622원 (-6.26%)**
- 현금: 478,778원 (51.08%)

| 종목 | 수량 | 현재가 | 일간 | 매수가 | 손익률 | 섹터 |
|---|---:|---:|---:|---:|---:|---|
| 신한지주 | 1 | 100,100원 | +0.60% | 97,100원 | +3.09% | 금융 |
| 삼성전자 | 1 | 251,000원 | -4.20% | 257,000원 | -2.33% | 반도체/IT |
| 기아 | 1 | 107,500원 | +0.66% | 124,400원 | -13.59% | 자동차 |

## 오늘의 paper 거래
- **SELL HD한국조선해양 1주 @ 279,000원** — 규칙 기반 STOP_LOSS_-15: 매수가 341,500원 대비 -18.30%

## 규칙 검증
- 손절 -15%: True
- 익절 +20%: False
- 익절 +30%: False
- 종목 비중 40% 초과: False
- 현금 10% 미만: False

## 엔진 상태
- `owl_simulation_daily.py` 결정론적 코어
- 승인 유니버스 5종목만 -5% 과매도 신규매수 후보로 사용
- 거래일·CLOSE 상태 불일치 시 **쓰기 전 실패(fail-closed)**
- 동일 날짜 재실행은 trade 중복 금지
- 실제 broker/order API 없음

⚠️ 본 기록은 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

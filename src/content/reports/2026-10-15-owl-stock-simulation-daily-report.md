---
title: OWL 주식 시뮬레이션 일일 리포트
date: '2026-10-15'
profile: finance
domain: economics
type: daily
tags:
- economics
- simulation
- paper-trading
- portfolio
summary: '2026-10-15 Naver 마감 데이터 기반 paper 포트폴리오: 총 886,666원, 누적 -11.33%'
keywords:
- OWL
- paper trading
- KOSPI
- KOSDAQ
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-15-owl-stock-simulation-daily-report
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 일일 리포트

📅 **2026-10-15** · PAPER ONLY · 실제 주문 없음

## 시장 마감
- KOSPI: **5,554.22** (-7.57%)
- KOSDAQ: **760.82** (-7.65%)
- USD/KRW: **1,344.90원**
- Source: Naver Finance (`m.stock.naver.com`), 거래일 일치 검증 완료

## 포트폴리오
- 시작자산: 1,000,000원
- 현재가치: **886,666원**
- 누적손익: **-113,334원 (-11.33%)**
- 현금: 530,566원 (59.84%)

| 종목 | 수량 | 현재가 | 일간 | 매수가 | 손익률 | 섹터 |
|---|---:|---:|---:|---:|---:|---|
| 신한지주 | 1 | 96,100원 | +1.16% | 97,100원 | -1.03% | 금융 |
| HD한국조선해양 | 1 | 260,000원 | -5.80% | 260,000원 | +0.00% | 조선/중공업 |

## 오늘의 paper 거래
- **SELL 삼성전자 1주 @ 207,500원** — 규칙 기반 STOP_LOSS_-15: 매수가 245,500원 대비 -15.48%
- **SELL 기아 1주 @ 105,200원** — 규칙 기반 STOP_LOSS_-15: 매수가 124,400원 대비 -15.43%
- **BUY HD한국조선해양 1주 @ 260,000원** — 승인 우량주 일일 -5.80%로 -5% 과매도 규칙 충족; 매수 후 현금 10% 이상 유지

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

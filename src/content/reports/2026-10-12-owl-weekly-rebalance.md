---
title: OWL 주식 시뮬레이션 주간 리밸런싱
date: '2026-10-12'
profile: finance
domain: economics
type: weekly
tags:
- economics
- simulation
- weekly
- rebalance
- paper-trading
summary: 2026-10-05~2026-10-12 paper 포트폴리오 주간 -7.10%, 현재 937,378원
keywords:
- OWL
- paper trading
- weekly rebalance
- KOSPI
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-12-owl-weekly-rebalance
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 주간 리밸런싱

📅 **2026-10-05 ~ 2026-10-12** · PAPER ONLY · 실제 주문 없음

## 주간 성과
- 시작 NAV: 1,009,060원 (2026-10-06)
- 현재 NAV: **937,378원** (2026-10-12)
- 주간 수익률: **-7.10%**
- KOSPI 구간 수익률: -8.03%
- KOSDAQ 구간 수익률: -7.69%
- 베스트 공통 보유종목: 신한지주 (-3.56%)
- 워스트 공통 보유종목: 삼성전자 (-8.06%)

## 리밸런싱 판정
- 시장 regime: **약세장 — 방어주/현금 비중 확대 검토**
- 현금 10% 이상: **True** (51.08%)
- 섹터 수: **3** (금융, 반도체/IT, 자동차)
- 40% 초과 종목: **없음**
- 일일 엔진 손절/익절/현금 트리거 상태: `{"cash_below_10pct": false, "stop_loss_minus15": true, "take_profit_plus20": false, "take_profit_plus30": false, "weight_over_40pct": false}`

## 월요일 일일 엔진에서 실행된 paper 거래
- **SELL HD한국조선해양 1주 @ 279,000원** — 규칙 기반 STOP_LOSS_-15: 매수가 341,500원 대비 -18.30%

## 현재 포트폴리오
| 종목 | 수량 | 현재가 | 손익률 | 비중 | 섹터 |
|---|---:|---:|---:|---:|---|
| 신한지주 | 1 | 100,100원 | +3.09% | 10.68% | 금융 |
| 삼성전자 | 1 | 251,000원 | -2.33% | 26.78% | 반도체/IT |
| 기아 | 1 | 107,500원 | -13.59% | 11.47% | 자동차 |

## 엔진 정책
- 매매 state mutation은 `owl_simulation_daily.py` 단일 소유
- 주간 job은 verified snapshot 집계/감사/report만 수행
- 월요일 일일 job 완료 전에는 fail-closed
- broker/order API 없음

⚠️ 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

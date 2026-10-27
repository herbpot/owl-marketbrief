---
title: OWL 주식 시뮬레이션 주간 리밸런싱
date: '2026-10-26'
profile: finance
domain: economics
type: weekly
tags:
- economics
- simulation
- weekly
- rebalance
- paper-trading
summary: 2026-10-19~2026-10-26 paper 포트폴리오 주간 -3.00%, 현재 864,297원
keywords:
- OWL
- paper trading
- weekly rebalance
- KOSPI
- portfolio
canonical: https://herbpot.github.io/owl-marketbrief/reports/2026-10-26-owl-weekly-rebalance
proOnly: false
cross-profile: false
---

# 📊 OWL 주식 시뮬레이션 주간 리밸런싱

📅 **2026-10-19 ~ 2026-10-26** · PAPER ONLY · 실제 주문 없음

## 주간 성과
- 시작 NAV: 891,066원 (2026-10-19)
- 현재 NAV: **864,297원** (2026-10-26)
- 주간 수익률: **-3.00%**
- KOSPI 구간 수익률: -5.18%
- KOSDAQ 구간 수익률: -10.10%
- 베스트 공통 보유종목: 신한지주 (-6.59%)
- 워스트 공통 보유종목: HD한국조선해양 (-10.07%)

## 리밸런싱 판정
- 시장 regime: **약세장 — 방어주/현금 비중 확대 검토**
- 현금 10% 이상: **True** (62.12%)
- 섹터 수: **2** (금융, 조선/중공업)
- 40% 초과 종목: **없음**
- 일일 엔진 손절/익절/현금 트리거 상태: `{"cash_below_10pct": false, "stop_loss_minus15": false, "take_profit_plus20": false, "take_profit_plus30": false, "weight_over_40pct": false}`

## 월요일 일일 엔진에서 실행된 paper 거래
- **없음 — 주간 job은 중복매매를 하지 않음**

## 현재 포트폴리오
| 종목 | 수량 | 현재가 | 손익률 | 비중 | 섹터 |
|---|---:|---:|---:|---:|---|
| 신한지주 | 1 | 86,400원 | -11.02% | 10.00% | 금융 |
| HD한국조선해양 | 1 | 241,000원 | -5.77% | 27.88% | 조선/중공업 |

## 엔진 정책
- 매매 state mutation은 `owl_simulation_daily.py` 단일 소유
- 주간 job은 verified snapshot 집계/감사/report만 수행
- 월요일 일일 job 완료 전에는 fail-closed
- broker/order API 없음

⚠️ 가상투자 시뮬레이션이며 투자 권유가 아닙니다.

## 관련 노트

<!-- wiki-auto-link:start -->
[[2026-09-07-owl-weekly-rebalance]]
[[2026-09-21-owl-weekly-rebalance]]
[[2026-09-28-owl-weekly-rebalance]]
<!-- wiki-auto-link:end -->

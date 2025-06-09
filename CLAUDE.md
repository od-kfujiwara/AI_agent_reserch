# CLAUDE.md

このファイルは、このリポジトリでコードを操作する際のClaude Code (claude.ai/code) への指針を提供します。

## プロジェクト概要

AIコーディングエージェントの研究結果を紹介するWebページです。バニラHTML、CSS、JavaScriptで構築され、TailwindCSSとChart.jsを使用しています。

## アーキテクチャ

### ファイル構成
- **index.html**: アプリケーションのメインファイル。UI構造とインラインスタイルを含む
- **scripts.js**: SPAナビゲーション、データ読み込み、UIインタラクション処理
- **styles.css**: 外部CSSファイル（現在は空、スタイルはHTML内にインライン記述）
- **data/**: JSONデータファイル格納ディレクトリ
  - **agents.json**: AIエージェントの詳細情報（10エージェント）
  - **comparison.json**: 比較テーブル用データ（12エージェント）
  - **differentiation-factors.json**: 選定要因データ（7要因）
- **README.md**: プロジェクト説明（現在は空）

## 主要機能

### データ構造とローディング
JavaScriptでは外部JSONファイルから非同期でデータを読み込みます：
- `agentsData`: data/agents.json から読み込み。AIコーディングエージェント詳細情報
- `comparisonData`: data/comparison.json から読み込み。比較テーブル用の簡略化データ
- `differentiationFactors`: data/differentiation-factors.json から読み込み。選定要因データ

データ読み込みは `loadData()` 関数でPromise.all()を使用し、すべてのJSONファイルを並列読み込みします。

### UIコンポーネント
- エージェント詳細用モーダルシステム
- ソート機能付きインタラクティブ比較テーブル
- フィルタシステム（名前、IDE、価格モデル）
- 要因説明用アコーディオンコンポーネント
- セクション切り替え機能付きナビゲーション

## 開発方針

CDNライブラリ（TailwindCSS、Chart.js）以外にランタイム依存関係のない静的Webアプリケーションです。データとロジックが分離されており、保守性が向上しています。

### 技術スタック
- **フロントエンド**: バニラHTML、CSS、JavaScript
- **スタイリング**: TailwindCSS（CDN）、インラインCSS
- **データ**: 分離されたJSONファイル
- **開発ツール**: Prettier、HTMLHint、EditorConfig

## 言語とコンテンツ

すべてのコンテンツは日本語で、AIコーディングアシスタントを研究する日本の開発者を対象としています。価格、機能、IDE対応、GitHub連携機能の包括的な比較を提供します。

## ブランチ命名規則

- mainから生やすブランチ: `dev/` プレフィックスを使用
- devから生やすブランチ: `feat/` プレフィックスを使用

例：
- `dev/new-feature`
- `feat/user-authentication`

## プルリクエスト作成時の注意事項

プルリクエストを作成する際は、必ずPRの本文の上下に以下のコメントを付けること：
```
<!-- I want to review in Japanese. -->
```
注意：バックスラッシュは含めず必ず `<!--` の形で記述すること。PR作成後`</!--`となっていないか再度確認を行うこと
zshの履歴展開機能を避けるため、シングルクォートで囲むようにすると良い。

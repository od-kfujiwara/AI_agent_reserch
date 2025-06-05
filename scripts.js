const agentsData = [
  {
    name: "GitHub Copilot (Microsoft/OpenAI)",
    short_desc: "AIペアプログラマーの元祖。主要IDEに統合。OpenAIのCodex/GPTモデルベース。",
    ideal_for: "日常的な開発効率向上、定型タスク自動化、新言語/フレームワーク学習支援。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> コード補完 (行/ブロック単位)、チャット (Copilot Chat)、エージェントモードによる自動修正、MCP連携</div>
                    <div class="detail-item"><strong>使用モデル:</strong> OpenAI Codex, GPT-4</div>
                    <div class="detail-item"><strong>対応IDE:</strong> VS Code, Visual Studio, JetBrains IDEs</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドホスト型</div>
                    <div class="detail-item"><strong>価格モデル:</strong> サブスクリプション</div>
                    <div class="detail-item"><strong>詳細料金:</strong> <ul><li>個人向け: Copilot Individual 約$10/月 または $100/年。</li><li>ビジネス向け: Copilot Business 約$19/ユーザー/月</li><li>エンタープライズ向け: Copilot Enterprise 約$39/ユーザー/月。</li><li>学生・教師・OSSメンテナーは無料プランあり</li></ul> (出典: GitHub Copilot公式サイト)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> GitHub Issuesにタスクを割り当て、PRとして成果物を提出可能。Copilot ChatやVS CodeからPR作成指示も可能(出典: GitHub Copilot公式サイト)</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> ビジネス版でポリシー制御、コード非保持設定オプションあり</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> GitHubエコシステムとの深い連携、高い提案品質、導入容易性</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                            <li><a href="https://github.com/features/copilot" target="_blank">GitHub Copilot 公式</a></li>
                            <li><a href="https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-individual" target="_blank">Copilot Individual について</a></li>
                            <li><a href="https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business" target="_blank">Copilot Business について</a></li>
                            <li><a href="https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise" target="_blank">Copilot Enterprise について</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Amazon Q Developer (AWS)",
    short_desc: "AWS環境に特化したAIコーディングアシスタント。旧CodeWhisperer。",
    ideal_for: "AWSクラウドサービスを多用する企業/開発者、クラウドネイティブアプリ開発。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> AWS特化コード生成/補完、セキュリティ脆弱性検出、/devエージェントによるマルチファイル変更、/docエージェント、/reviewエージェント。</div>
                    <div class="detail-item"><strong>使用モデル:</strong> Amazon Bedrock上の複数の基盤モデル (例: Amazon Titan, Anthropic Claude, Meta Llamaなど) を活用。特定のタスクに最適なモデルを選択。(出典: AWS公式ドキュメント)</div>
                    <div class="detail-item"><strong>対応IDE:</strong> JetBrains IDEs, VS Code, AWS Cloud9, CLIエージェント</div>
                    <div class="detail-item"><strong>対応言語:</strong> Python, Java, JavaScript, TypeScript, C#など15+言語</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドホスト型 (AWSサービス)</div>
                    <div class="detail-item"><strong>価格モデル:</strong> マネージドサービス (利用ベース)</div>
                    <div class="detail-item"><strong>詳細料金:</strong> <ul><li>無料利用枠あり (制限付き)。</li><li>Proプラン: $19/ユーザー/月。</li><li>機能によっては追加料金が発生する場合あり (例: Javaアップグレード変換)。</li></ul>(出典: AWS公式サイト)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> Amazon CodeCatalyst経由でPRサマリー機能あり。直接的なPR作成機能はレポートに明記なし</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> エンタープライズグレード、IAM制御、コード非保持設定オプションあり</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> AWSサービスとの深い連携と最適化、AWSベストプラクティス組込</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                            <li><a href="https://aws.amazon.com/q/developer/" target="_blank">Amazon Q Developer 公式</a></li>
                            <li><a href="https://aws.amazon.com/q/developer/pricing/" target="_blank">Amazon Q Developer 料金</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Google Gemini Code Assist (Google)",
    short_desc: "GoogleのGemini LLMを基盤とするAI支援。Duet AIの一部。",
    ideal_for: "Google Cloud顧客、GoogleのAI能力を信頼する開発者、コード出所の透明性重視チーム。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> コード補完、チャット、コード生成</div>
                    <div class="detail-item"><strong>使用モデル:</strong> Google Gemini LLM (コードに最適化されたバージョン)Jules (GoogleのAIエージェント) はGemini ProまたはFlashを使用するとされる</div>
                    <div class="detail-item"><strong>対応IDE:</strong> Google Cloudツール, VS Code, JetBrains IDEs等へのプラグイン</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドホスト型 (Google Cloudサービス)</div>
                    <div class="detail-item"><strong>価格モデル:</strong> 無料枠あり、エンタープライズ向けプラン</div>
                    <div class="detail-item"><strong>詳細料金:</strong> <ul><li>個人開発者向け無料プランあり (月額制限付き)。</li><li>Standard版: 約$19/ユーザー/月 (年間契約)。</li><li>Enterprise版: 約$29/ユーザー/月 (年間契約)。</li></ul>(出典: Google Cloud公式サイト)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> JulesはGitHub連携し、PRとしてレビューできる形でブランチにプッシュ可能。Gemini Code Assist自体の直接PR作成機能はレポートに明記なし。</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> Google Cloud環境のセキュリティ基準に準拠</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> 提案コードの引用提供機能、個人向け無料プラン、エンタープライズ管理機能</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                            <li><a href="https://cloud.google.com/products/gemini/code-assist" target="_blank">Google Gemini Code Assist 公式</a></li>
                            <li><a href="https://cloud.google.com/products/gemini/pricing" target="_blank">Gemini for Google Cloud 料金</a></li>
                             <li><a href="https://qiita.com/nokonoko_1203/items/7c66435c73672b447928" target="_blank">生成AI × コーディングのツール・エージェントまとめ (Julesに関する情報源)</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Windsurf (Codeium)",
    short_desc: "VS CodeベースのAI開発環境。軽快な動作とインテリジェントなコード提案が特徴。",
    ideal_for: "軽量で高速なAI支援を求める開発者、複数のAIモデルを統合的に利用したいユーザー、初心者から中級者。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> Supercomplete (差分ボックスプレビュー付きのインテリジェントなコード提案)、Cascade (リアルタイムのワークスペース同期と反復的な問題解決)、包括的なプロジェクト理解と自動コンテキスト更新。</div>
                    <div class="detail-item"><strong>使用モデル:</strong> レポートに記載なし (Codeiumによって開発、複数AIモデルを活用と記載)。</div>
                    <div class="detail-item"><strong>対応IDE:</strong> VS Code。</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応。</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドホスト型。</div>
                    <div class="detail-item"><strong>価格モデル:</strong> フリーミアム (将来Proプラン)。</div>
                    <div class="detail-item"><strong>詳細料金:</strong> 無料プランあり。将来的なProプランは月額約$15程度。(レポートに記載)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> レポートにPR直接作成機能の明記なし。リアルタイムのワークスペース同期や複数ファイルにまたがるコード修正支援は開発ワークフローに寄与。</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> レポートに記載なし。</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> 動作が軽快、特にタブボタンでのインライン修正、直感的なUIと対話型エージェント機能。</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                            <li><a href="https://www.codeium.com/blog/introducing-windsurf" target="_blank">Codeium Blog (Windsurf紹介)</a></li>
                            <li><a href="https://www.codeium.com/" target="_blank">Codeium 公式 (親会社)</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Cursor (Anysphere)",
    short_desc: "VS Codeベースの対話型AI補完ツール。プロジェクト全体を理解。",
    ideal_for: "高度な制御と精度を求める上級者、プロジェクト全体のコンテキストを深く理解して作業したい開発者。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> 高度なコード補完、Composer、エージェントモード、コンテキスト認識チャット、バグ検出/修正。</div>
                    <div class="detail-item"><strong>使用モデル:</strong> GPT-4, GPT-4o, Claude 3 Opus, Claude 3.5 Sonnet など、複数の先進モデルを選択可能。(出典: Cursor公式サイト)</div>
                    <div class="detail-item"><strong>対応IDE:</strong> VS Codeベースの独自エディタ</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドホスト型</div>
                    <div class="detail-item"><strong>価格モデル:</strong> フリーミアム、サブスクリプション</div>
                    <div class="detail-item"><strong>詳細料金:</strong> <ul><li>無料プランあり (制限付き)。</li><li>Proプラン: $20/月。</li><li>Businessプラン: $40/ユーザー/月。</li></ul>(出典: Cursor公式サイト)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> PRのコード差分識別やAIによるPRレビュー作成支援機能あり。自律的なPR作成機能はレポートに明記なし。</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 高</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> ローカルモード、エンタープライズ版でのプライバシー設定あり。</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> プロジェクト全体理解、「思考してから実行する」アプローチ、高精度な提案</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                            <li><a href="https://cursor.sh/" target="_blank">Cursor 公式</a></li>
                            <li><a href="https://cursor.sh/pricing" target="_blank">Cursor 料金</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Devin (Cognition Labs)",
    short_desc: "自律型AIソフトウェアエンジニア。新機能実装、バグ修正、PR作成をオフロード。",
    ideal_for: "自律的な開発タスク実行を期待するユーザー、最先端AIエージェント技術に関心のある開発者。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> 新機能実装、バグ修正、PR作成を含むタスク全体をオフロード。Devin IDE, Devin Search, Devin Wiki機能など。</div>
                    <div class="detail-item"><strong>使用モデル:</strong> Cognition Labs独自のAIモデル (詳細は非公開)。</div>
                    <div class="detail-item"><strong>対応IDE:</strong> Devin IDE (Devin独自の環境)。</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応 (タスクの性質による)。</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドベース。</div>
                    <div class="detail-item"><strong>価格モデル:</strong> 従量課金制 (ACUベース)、サブスクリプション。</div>
                    <div class="detail-item"><strong>詳細料金:</strong> <ul><li>Core (従量課金): 最低$20から ($2.25/ACU)。</li><li>Team: $500/月 (250 ACU含む)。</li><li>Enterprise: カスタム価格。</li></ul>(出典: Devin公式サイト)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> GitHub組織と連携し、PRの作成、PRコメントの読み取り・応答が可能。自律的にPRを作成・管理できる。</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 非常に高 (レポートの言及に基づく)</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> GitHub連携時のリポジトリアクセス権限管理、GPGキー生成。</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> 高度な自律性によるソフトウェア開発タスクの実行、エンドツーエンドのコーディングプロセス処理。</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                            <li><a href="https://devin.ai/" target="_blank">Devin AI 公式</a></li>
                            <li><a href="https://devin.ai/pricing" target="_blank">Devin AI 料金</a></li>
                            <li><a href="https://docs.devin.ai/integrations/gh" target="_blank">Devin GitHub Integration</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Codex (OpenAI)",
    short_desc: "OpenAI製のコード生成モデル。GitHub連携でブランチ・PR作成が可能。",
    ideal_for: "自然言語からのコード生成とGitHubワークフローの自動化を試したい開発者。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> 自然言語タスク入力からのコード修正、ブランチ作成、PR作成。AGENTS.mdによる制約/規約注入</div>
                    <div class="detail-item"><strong>使用モデル:</strong> OpenAI Codexモデル (例: codex-1)現在はOpenAI APIを通じてより新しいモデル (GPT-3.5-turbo, GPT-4など) が利用可能。</div>
                    <div class="detail-item"><strong>対応IDE:</strong> WebUI、Codex CLIAPI経由で各種環境に統合可能。</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応</div>
                    <div class="detail-item"><strong>提供形態:</strong> APIベース (クラウド)</div>
                    <div class="detail-item"><strong>価格モデル:</strong> API利用料ベース</div>
                    <div class="detail-item"><strong>詳細料金:</strong> OpenAI APIの利用料金に依存。</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> GitHubと連携し、PR作成が可能。Codex CLIはGitHub Actionsを利用してissue処理やPR作成を行う</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中〜高</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> OpenAI APIの利用規約・プライバシーポリシーに準拠。</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> 自然言語からの自律的なコード生成とGitHubワークフローへの統合</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                             <li><a href="https://platform.openai.com/docs/models/codex" target="_blank">OpenAI Codex (Legacy)</a></li>
                             <li><a href="https://platform.openai.com/docs/guides/code" target="_blank">OpenAI Code generation</a></li>
                             <li><a href="https://qiita.com/nokonoko_1203/items/7c66435c73672b447928" target="_blank">生成AI × コーディングのツール・エージェントまとめ (情報源)</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Jules (Google)",
    short_desc: "Google製のAIエージェント。GitHub連携と実装計画提示が特徴。",
    ideal_for: "Google Geminiの能力を活用し、実装計画からコード生成までを試したい開発者。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> GitHub連携、リポジトリ接続しWebUIから指示。実装計画提示、承認後のコード生成、テスト実行、プレビュー環境立ち上げまで自動化</div>
                    <div class="detail-item"><strong>使用モデル:</strong> Gemini Pro または Flash。</div>
                    <div class="detail-item"><strong>対応IDE:</strong> WebUI</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドベース</div>
                    <div class="detail-item"><strong>価格モデル:</strong> ベータ版では無料</div>
                    <div class="detail-item"><strong>詳細料金:</strong> ベータ版で1日5リクエストの制限あり。</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> GitHubリポジトリと連携し、WebUIから指示。変更をブランチにプッシュし、PRとしてレビュー可能。</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中〜高</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> Googleのプライバシーポリシーに準拠。</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> 実装計画の提示と承認プロセス、Geminiの強力なモデル活用</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                             <li><a href="https://qiita.com/nokonoko_1203/items/7c66435c73672b447928" target="_blank">生成AI × コーディングのツール・エージェントまとめ (情報源)</a></li>
                             <li><a href="https://jules.ai/" target="_blank">Jules AI 公式 (※アクセス注意: ドメインがAIエージェントJulesと異なる可能性あり)</a></li>
                             <li><a href="https://www.zdnet.com/article/i-let-googles-jules-ai-agent-into-my-code-repo-and-it-did-four-hours-of-work-in-an-instant/" target="_blank">ZDNet記事: I let Google's Jules AI agent into my code repo</a></li>
                        </ul>
                    </div>
                `
  },
  {
    name: "Claude Code (Anthropic)",
    short_desc: "Anthropic製のAIエージェント。CLIからのコード修正とIDE連携が可能。",
    ideal_for: "CLIベースでのコード修正や、GitHub Actionsと連携してAIを活用したい開発者。",
    details_html: `
                    <div class="detail-item"><strong>主な機能:</strong> CLIからのLLM指示によるコード修正、IDE拡張機能、ヘッドレスモードでのCIサーバー/Actionsからの実行</div>
                    <div class="detail-item"><strong>使用モデル:</strong><li>Claude Sonnet 4</li><li>Claude Opus 4 ※Maxプランのみ提供</li></div>
                    <div class="detail-item"><strong>対応IDE:</strong> IDE拡張機能あり</div>
                    <div class="detail-item"><strong>対応言語:</strong> 複数言語対応</div>
                    <div class="detail-item"><strong>提供形態:</strong> クラウドベース (API)</div>
                    <div class="detail-item"><strong>価格モデル:</strong>サブスクリプション</div>
                    <div class="detail-item"><strong>詳細料金:</strong> <ul><li>Pro：$20/月</li><li>Max 5×：$100/月（Pro比5倍の利用枠）</li><li>Max 20×：$200/月（Pro比20倍の利用枠）</li><li>Team：$30/月1ユーザ（年払いの場合は$25）※最低5名から利用可能</li></ul>(2025/6/5更新)</div>
                    <div class="detail-item"><strong>GitHub連携(PR作成):</strong> GitHub Actions利用はAPIキーが必要。Claude Code ActionはGitHubアプリとして追加可能</div>
                    <div class="detail-item"><strong>自律性レベル:</strong> 中</div>
                    <div class="detail-item"><strong>プライバシー/セキュリティ:</strong> Anthropicの利用規約・プライバシーポリシーに準拠。</div>
                    <div class="detail-item"><strong>ユニークな強み:</strong> CLIからの強力なコード修正能力、洗練されたUI、GitHub Actionsとの連携</div>
                    <div class="detail-item"><strong>参考URL:</strong>
                        <ul>
                             <li><a href="https://www.anthropic.com/claude" target="_blank">Anthropic Claude 公式</a></li>
                             <li><a href="https://www.anthropic.com/pricing" target="_blank">Anthropic 料金</a></li>
                             <li><a href="https://qiita.com/nokonoko_1203/items/7c66435c73672b447928" target="_blank">生成AI × コーディングのツール・エージェントまとめ (情報源)</a></li>
                        </ul>
                    </div>
                `
  }
];

const comparisonData = [
  { name: "GitHub Copilot (Microsoft/OpenAI)", ide: "VS Code, Visual Studio, JetBrains", pricing: "サブスクリプション (個人: 約$10/月, ビジネス: 約$19/ユーザー/月, エンタープライズ: 約$39/ユーザー/月)", autonomy: "中", github_integration: "PR作成・管理機能あり", strength: "GitHub連携、高い提案品質" },
  { name: "Amazon Q Developer (AWS)", ide: "JetBrains, VS Code, CLI", pricing: "利用ベース (Pro: $19/ユーザー/月)", autonomy: "中", github_integration: "PRサマリーあり (CodeCatalyst経由)", strength: "AWSエコシステム連携" },
  { name: "Google Gemini Code Assist (Google)", ide: "Google Cloudツール, IDEプラグイン", pricing: "フリーミアム（Standard:約$19/月, Enterprise:約$29/月）", autonomy: "中", github_integration: "Jules連携でPR作成可", strength: "コード引用提供、個人無料プラン" },
  { name: "Cursor (Anysphere)", ide: "VS Codeベース独自エディタ", pricing: "フリーミアム (Pro: $20/月)", autonomy: "高", github_integration: "PRレビュー支援あり", strength: "プロジェクト全体理解" },
  { name: "Devin (Cognition Labs)", ide: "Devin IDE", pricing: "従量課金 (ACUベース), Team: $500/月", autonomy: "非常に高", github_integration: "PR作成・管理機能あり", strength: "高度な自律開発" },
  { name: "Codex (OpenAI)", ide: "WebUI, Codex CLI", pricing: "OpenAI API利用料", autonomy: "中〜高", github_integration: "PR作成機能あり", strength: "自然言語からのGitHubワークフロー統合" },
  { name: "Jules (Google)", ide: "WebUI", pricing: "無料 (ベータ版)", autonomy: "中〜高", github_integration: "PRとしてレビュー可能な形でブランチプッシュ", strength: "実装計画提示、Gemini活用" },
  { name: "Claude Code (Anthropic)", ide: "IDE拡張あり, CLI", pricing: "フリーミアム (Pro: $20/月)", autonomy: "中", github_integration: "GitHub Actions連携", strength: "CLIからのコード修正" },
  { name: "Tabnine (Tabnine)", ide: "主要IDE全て", pricing: "フリーミアム (Dev: $9/月)", autonomy: "低〜中", github_integration: "コードレビューエージェント (PRレビュー支援)", strength: "プライバシー重視, カスタムモデル" },
  { name: "Cline (Open-source)", ide: "VS Code", pricing: "無料 (LLM API利用料別途)", autonomy: "76%", github_integration: "PRレビュー支援、Issue/PR提出可", strength: "Plan/Actモード, MCP拡張性" },
  { name: "Roo Code (RooCodeInc)", ide: "VS Code", pricing: "無料 (LLM API利用料別途)", autonomy: "89%", github_integration: "関連操作可、直接PR作成は不明瞭", strength: "高自律性, ジュニア開発者模倣" },
  { name: "Windsurf (Codeium)", generative_ai_model: "情報なし (Codeium独自モデル)", ide: "VS Code", pricing: "フリーミアム (将来Proプラン)", autonomy: "中", github_integration: "リアルタイムワークスペース同期、複数ファイル修正可", strength: "動作軽快、直感的なUI" },
];

const differentiationFactors = [
  { title: "自律性 (Autonomy)", content: "エージェントがどれだけ人間からの介入なしにタスクを完了できるかは、生産性向上に直結する重要な要素です。Cline（76%）やRoo Code（89%）のようなエージェントは、計画立案から実行、デバッグまでを自律的に行える能力を備えています。自律性の高さは効率を最大化する一方、AI出力の信頼性や制御の必要性も考慮すべき点です。" },
  { title: "プライバシーとセキュリティ (Privacy & Security)", content: "コードデータがどのように扱われるかは、特に企業にとって最重要視される要因です。Tabnineはゼロデータ保持ポリシーとオンプレミス運用で、CodeGeeXは自己ホスティングでデータ管理の完全なコントロールを提供します。GitHub Copilotビジネス版やAmazon Qもエンタープライズ向けのセキュリティ機能を強化しています。" },
  { title: "クラウド連携とエコシステム (Cloud Integration & Ecosystem)", content: "特定のクラウドプロバイダーとの統合の深さは、そのクラウドを主要インフラとする企業にとって大きなメリットです。Amazon Q DeveloperはAWSに、Google Gemini Code AssistはGoogle Cloudに深く統合され、それぞれのサービス利用者に特化した機能を提供します。" },
  { title: "カスタマイズ性と拡張性 (Customization & Extensibility)", content: "特定のコードベースや開発プロセスに合わせて調整可能かは、複雑な要件を持つ組織にとって重要です。Tabnineはカスタムモデル訓練が可能。ClineやRoo CodeはMCPを通じて外部ツール連携やカスタムツール追加が可能です。CodeGeeXもオープンソースであるため高いカスタマイズ性を持ちます。" },
  { title: "学習曲線と使いやすさ (Learning Curve & Usability)", content: "ツールの導入の容易さ、直感的なUI、初心者への配慮は普及の鍵です。Replit Ghostwriterやbolt.newは環境構築不要で直感的に利用でき、コーディング経験のない初心者でもアクセスしやすい設計です。Windsurfも学習コストが低いと評価されています。" },
  { title: "価格体系 (Pricing Model)", content: "無料プランの有無、個人向け・企業向けティア、利用量ベース課金など、価格体系は導入の大きな判断材料です。オープンソースのツールは初期費用を抑えられますが、運用コストやサポート体制も考慮に入れる必要があります。サブスクリプションモデルが一般的ですが、機能制限のある無料プランを提供するサービスも増えています。" },
  { title: "GitHub連携 (GitHub Integration)", content: "リポジトリの読み書き、ブランチ操作、そしてプルリクエストの自動作成・提案といったGitHubとの連携の深さは、開発ワークフローの自動化レベルを左右します。多くのツールがコードの読み取りや基本的な編集機能を提供しますが、PR作成まで自律的に行うエージェントはまだ限定的です。Devinのような次世代エージェントにはこの能力が期待されていますが、既存ツールの多くは開発者の指示やレビューを介した操作が中心です。" }
];

document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('#mainNav button');
  const contentSections = document.querySelectorAll('.content-section');
  const agentCardsContainer = document.getElementById('agentCardsContainer');
  const modal = document.getElementById('agentModal');
  const modalAgentName = document.getElementById('modalAgentName');
  const modalAgentDetails = document.getElementById('modalAgentDetails');
  const differentiationFactorsContainer = document.getElementById('differentiationFactorsContainer');
  const comparisonTableBody = document.getElementById('comparisonTableBody');
  const tableHeaders = document.querySelectorAll('#comparisonTable th');

  let currentSort = { column: null, direction: 'asc' };

  function showSection(sectionId) {
    contentSections.forEach(section => {
      section.classList.remove('hidden');
    });
    const currentSection = document.getElementById(sectionId);
    if (currentSection) {
      currentSection.classList.remove('hidden');
    }
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      showSection(button.dataset.section);
    });
  });

  function populateAgentCards() {
    agentCardsContainer.innerHTML = '';
    agentsData.forEach(agent => {
      const card = document.createElement('div');
      card.className = 'card cursor-pointer overflow-hidden';
      card.innerHTML = `
                        <div class="card-content">
                            <h3 class="text-xl font-semibold text-sky-700 mb-2">${agent.name}</h3>
                            <p class="text-sm text-slate-600 mb-3 h-20 overflow-y-auto">${agent.short_desc}</p>
                            <p class="text-xs text-slate-500"><strong>対象:</strong> ${agent.ideal_for}</p>
                        </div>
                        <div class="card-footer">
                            <button class="text-sm bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">詳細を見る</button>
                        </div>
                    `;
      card.addEventListener('click', () => openModal(agent));
      agentCardsContainer.appendChild(card);
    });
  }

  window.openModal = (agent) => {
    modalAgentName.textContent = agent.name;
    modalAgentDetails.innerHTML = agent.details_html;
    modal.style.display = 'block';
  }

  window.closeModal = () => {
    modal.style.display = 'none';
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      closeModal();
    }
  }

  function populateDifferentiationFactors() {
    differentiationFactorsContainer.innerHTML = '';
    differentiationFactors.forEach(factor => {
      const div = document.createElement('div');
      div.className = 'mb-2 rounded-md overflow-hidden shadow-sm';
      const button = document.createElement('button');
      button.className = 'accordion-button';
      button.innerHTML = `${factor.title} <span class="plus-minus text-sky-600 font-bold text-xl">+</span>`;

      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.innerHTML = `<p class="py-4 px-2 text-sm text-slate-700">${factor.content}</p>`;

      button.addEventListener('click', () => {
        button.classList.toggle('active');
        const plusMinus = button.querySelector('.plus-minus');
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
          content.style.maxHeight = '0px';
          plusMinus.textContent = '+';
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          plusMinus.textContent = '-';
        }
      });

      div.appendChild(button);
      div.appendChild(content);
      differentiationFactorsContainer.appendChild(div);
    });
  }

  function renderTable(data) {
    comparisonTableBody.innerHTML = '';
    data.forEach(item => {
      const row = comparisonTableBody.insertRow();
      row.insertCell().textContent = item.name;
      row.insertCell().textContent = item.ide;
      row.insertCell().textContent = item.pricing;
      row.insertCell().textContent = item.autonomy;
      row.insertCell().textContent = item.github_integration;
      row.insertCell().textContent = item.strength;
    });
  }

  function sortData(data, column, direction) {
    return [...data].sort((a, b) => {
      let valA = a[column] || '';
      let valB = b[column] || '';

      if (column === 'autonomy') {
        const numA = parseFloat(valA);
        const numB = parseFloat(valB);
        if (!isNaN(numA) && !isNaN(numB)) {
          return direction === 'asc' ? numA - numB : numB - numA;
        }
        if (!isNaN(numA)) return direction === 'asc' ? -1 : 1;
        if (!isNaN(numB)) return direction === 'asc' ? 1 : -1;
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return direction === 'asc' ? valA.localeCompare(valB, 'ja') : valB.localeCompare(valA, 'ja');
      }
      return 0;
    });
  }

  tableHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const column = header.dataset.sort;
      if (!column) return;
      if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
      }
      const sortedData = sortData(getFilteredData(), column, currentSort.direction);
      renderTable(sortedData);
    });
  });

  const nameFilterInput = document.getElementById('nameFilter');
  const ideFilterSelect = document.getElementById('ideFilter');
  const pricingFilterSelect = document.getElementById('pricingFilter');
  const resetFiltersButton = document.getElementById('resetFilters');

  function populateFilters() {
    const ideOptions = new Set();
    const pricingOptions = new Set();
    comparisonData.forEach(item => {
      if (item.ide) item.ide.split(',').map(s => s.trim()).forEach(ide => ideOptions.add(ide));
      if (item.pricing) pricingOptions.add(item.pricing.split('(')[0].trim());
    });

    ideFilterSelect.innerHTML = '<option value="">対応IDE (全て)</option>';
    pricingFilterSelect.innerHTML = '<option value="">価格モデル (全て)</option>';


    Array.from(ideOptions).sort().forEach(opt => {
      ideFilterSelect.add(new Option(opt, opt));
    });
    Array.from(pricingOptions).sort().forEach(opt => {
      pricingFilterSelect.add(new Option(opt, opt));
    });
  }

  function getFilteredData() {
    const nameFilter = nameFilterInput.value.toLowerCase();
    const ideFilter = ideFilterSelect.value;
    const pricingFilter = pricingFilterSelect.value;

    return comparisonData.filter(item => {
      const nameMatch = item.name ? item.name.toLowerCase().includes(nameFilter) : true;
      const ideMatch = ideFilter ? (item.ide ? item.ide.includes(ideFilter) : false) : true;
      const pricingMatch = pricingFilter ? (item.pricing ? item.pricing.split('(')[0].trim().includes(pricingFilter) : false) : true;
      return nameMatch && ideMatch && pricingMatch;
    });
  }

  function applyFilters() {
    const filteredData = getFilteredData();
    const sortedData = sortData(filteredData, currentSort.column, currentSort.direction);
    renderTable(sortedData);
  }

  nameFilterInput.addEventListener('input', applyFilters);
  ideFilterSelect.addEventListener('change', applyFilters);
  pricingFilterSelect.addEventListener('change', applyFilters);

  resetFiltersButton.addEventListener('click', () => {
    nameFilterInput.value = '';
    ideFilterSelect.value = '';
    pricingFilterSelect.value = '';
    currentSort = { column: null, direction: 'asc' };
    renderTable(comparisonData);
  });

  function renderAutonomyChart() {
    const autonomyChartCanvas = document.getElementById('autonomyChart');
    if (!autonomyChartCanvas) return;
    const ctx = autonomyChartCanvas.getContext('2d');

    const chartData = comparisonData
      .map(agent => ({
        name: agent.name,
        level: agent.autonomy ? parseFloat(agent.autonomy.replace('%', '')) : NaN
      }))
      .filter(agent => !isNaN(agent.level));

    chartData.sort((a, b) => b.level - a.level);

    if (window.myAutonomyChart instanceof Chart) {
      window.myAutonomyChart.destroy();
    }

    window.myAutonomyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.map(agent => agent.name.length > 20 ? agent.name.substring(0, 18) + '...' : agent.name),
        datasets: [{
          label: '自律性レベル (%)',
          data: chartData.map(agent => agent.level),
          backgroundColor: '#38bdf8',
          borderColor: '#0c4a6e',
          borderWidth: 1,
          borderRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: { beginAtZero: true, max: 100, title: { display: true, text: '自律性レベル (%)' } },
          y: { title: { display: false } }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) { label += ': '; }
                if (context.parsed.x !== null) { label += context.parsed.x + '%'; }
                const originalAgent = chartData.find(d => (d.name.length > 20 ? d.name.substring(0, 18) + '...' : d.name) === context.label);
                return `${originalAgent ? originalAgent.name : context.label}: ${context.parsed.x}%`;
              }
            }
          },
          legend: { display: false }
        }
      }
    });
  }

  populateAgentCards();
  populateDifferentiationFactors();
  renderTable(comparisonData);
  populateFilters();
  renderAutonomyChart();
  showSection('intro');
});
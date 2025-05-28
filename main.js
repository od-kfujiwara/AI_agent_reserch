const agentsData = [
    { name: "GitHub Copilot (Microsoft/OpenAI)", short_desc: "AIペアプログラマーの元祖。主要IDEに統合。", details: "<strong>主な機能:</strong> コード補完、チャット、自動修正、MCP連携<br><strong>対応IDE:</strong> VS Code, Visual Studio, JetBrains<br><strong>対応言語:</strong> 複数言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> サブスクリプション (個人/企業)<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> データ共有懸念 (ビジネス版でポリシー制御)<br><strong>ユニークな強み:</strong> GitHub連携、高い提案品質、導入容易性", ideal_for: "日常的な開発効率の向上、定型的なタスクの自動化、新しい言語やフレームワークの学習支援。" },
    { name: "Amazon Q Developer (AWS)", short_desc: "AWS環境に特化したAIコーディングアシスタント。", details: "<strong>主な機能:</strong> AWS特化コード生成、セキュリティ検出、マルチファイル変更、ドキュメント/レビューエージェント<br><strong>対応IDE:</strong> JetBrains IDEs, VS Code, CLI<br><strong>対応言語:</strong> Python, Java, JavaScript, TypeScript, C#<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> マネージドサービス (利用ベース)<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> エンタープライズグレード、コード非保持設定<br><strong>ユニークな強み:</strong> AWSエコシステムとの深い連携", ideal_for: "AWSクラウドサービスを多用する企業や開発者、クラウドネイティブなアプリケーション開発。" },
    { name: "Google Gemini Code Assist (Google)", short_desc: "GoogleのGemini LLMを基盤とするAI支援。", details: "<strong>主な機能:</strong> コード補完、チャット、コード生成<br><strong>対応IDE:</strong> Google Cloudツール, IDEプラグイン<br><strong>対応言語:</strong> 複数言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> 無料 (個人), エンタープライズ<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> Google Cloud環境のセキュリティ<br><strong>ユニークな強み:</strong> コード引用提供、個人向け無料プラン", ideal_for: "Google Cloudの顧客、GoogleのAI能力を信頼する開発者、コードの出所の透明性を重視するチーム。" },
    { name: "Tabnine (Tabnine)", short_desc: "プライバシーとパーソナライゼーション重視のAIアシスタント。", details: "<strong>主な機能:</strong> コード補完、関数/テスト生成<br><strong>対応IDE:</strong> 主要IDE全て<br><strong>対応言語:</strong> 30+言語<br><strong>提供形態:</strong> クラウドホスト型, オンプレミス<br><strong>価格モデル:</strong> フリーミアム, サブスクリプション<br><strong>自律性レベル:</strong> 低〜中<br><strong>プライバシー/セキュリティ:</strong> ゼロデータ保持、オンプレミス、カスタムモデル<br><strong>ユニークな強み:</strong> プライバシー重視、カスタマイズ性", ideal_for: "厳格なセキュリティとプライバシー要件を持つ企業、プロプライエタリコードを扱うチーム。" },
    { name: "Cline (Open-source)", short_desc: "Plan/Actモードを持つオープンソースAIアシスタント。", details: "<strong>主な機能:</strong> Plan/Actモード、ファイル編集、ターミナル実行、ブラウザ自動化<br><strong>対応IDE:</strong> VS Code<br><strong>対応言語:</strong> 複数LLM対応<br><strong>提供形態:</strong> オープンソース (自己ホスティング)<br><strong>価格モデル:</strong> 無料<br><strong>自律性レベル:</strong> 76%<br><strong>プライバシー/セキュリティ:</strong> 自己管理<br><strong>ユニークな強み:</strong> 段階的計画、高い自律性、MCPによる拡張性", ideal_for: "高度な自動化とカスタマイズを求める開発者、多様なLLMを柔軟に利用したいユーザー。" },
    { name: "Roo Code (RooCodeInc)", short_desc: "高い自律性を持つ自律型コーディングエージェント。", details: "<strong>主な機能:</strong> コード生成/デバッグ/進化、ファイル読み書き、ターミナル実行、ブラウザ操作<br><strong>対応IDE:</strong> VS Code<br><strong>対応言語:</strong> 複数言語<br><strong>提供形態:</strong> オープンソース (自己ホスティング)<br><strong>価格モデル:</strong> 無料<br><strong>自律性レベル:</strong> 89%<br><strong>プライバシー/セキュリティ:</strong> 自己管理<br><strong>ユニークな強み:</strong> 高い自律性、ジュニア開発者ワークフロー模倣、カスタムモード", ideal_for: "反復的なプログラミングタスクの自動化、自律型ソフトウェア開発ワークフローのテスト。" },
    { name: "Windsurf (Codeium)", short_desc: "軽快な動作が特徴のVS CodeベースAI開発環境。", details: "<strong>主な機能:</strong> コード提案 (Supercomplete)、リアルタイム同期 (Cascade)<br><strong>対応IDE:</strong> VS Code<br><strong>対応言語:</strong> 複数言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> フリーミアム (将来Proプラン)<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> 動作軽快、インライン修正、直感的UI", ideal_for: "軽量で高速なAI支援を求める開発者、初心者から中級者。" },
    { name: "Codeium (Codeium)", short_desc: "GitHub Copilotの無料代替を目指すAIアシスタント。", details: "<strong>主な機能:</strong> コード補完、複数プラットフォーム対応<br><strong>対応IDE:</strong> 複数IDE<br><strong>対応言語:</strong> 70+言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> 完全無料 (個人), 有料プラン<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> GitHub Copilotの無料代替、幅広い言語サポート", ideal_for: "コスト効率の良いAIコーディング支援を求める個人開発者や小規模チーム。" },
    { name: "Cursor (Independent/VS Code-based)", short_desc: "プロジェクト全体を理解する対話型AI補完ツール。", details: "<strong>主な機能:</strong> コード補完、Composer、エージェントモード、チャット、バグ検出<br><strong>対応IDE:</strong> VS Codeベース<br><strong>対応言語:</strong> 複数言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> フリーミアム, サブスクリプション<br><strong>自律性レベル:</strong> 高<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> プロジェクト全体理解、「思考してから実行する」アプローチ", ideal_for: "高度な制御と精度の高い提案を求める上級者・技術者。" },
    { name: "Replit Ghostwriter (Replit, Inc.)", short_desc: "ブラウザベースIDE「Replit」内蔵のAIアシスタント。", details: "<strong>主な機能:</strong> リアルタイム補完、エラーチェック、デバッグ支援<br><strong>対応IDE:</strong> ブラウザベースIDE<br><strong>対応言語:</strong> 50+言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> フリーミアム, サブスクリプション<br><strong>自律性レベル:</strong> 低〜中<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> 環境構築不要、初心者向け、ブラウザコラボレーション", ideal_for: "初心者開発者、手軽に開発環境を立ち上げたいユーザー。" },
    { name: "bolt.new (StackBlitz team)", short_desc: "自然言語からWebアプリを生成するブラウザベースビルダー。", details: "<strong>主な機能:</strong> フルスタックWebアプリ生成、自動修正、ブラウザ操作<br><strong>対応IDE:</strong> ブラウザベース<br><strong>対応言語:</strong> React, Vueなど<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> 無料<br><strong>自律性レベル:</strong> 高<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> ノーコードに近い体験、迅速なプロトタイピング、Figma連携", ideal_for: "Webアプリの迅速なプロトタイピング、非開発者やデザイナーによるWebサイト/アプリ構築。" },
    { name: "v0 (Vercel)", short_desc: "React/Next.jsコンポーネント生成に特化したAIアシスタント。", details: "<strong>主な機能:</strong> React/Next.jsコンポーネント生成、視覚化<br><strong>対応IDE:</strong> ブラウザベース<br><strong>対応言語:</strong> React, Next.js<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> フリーミアム, 有料プラン<br><strong>自律性レベル:</strong> 高<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> React/Next.js特化、デザインからのコード生成", ideal_for: "React/Next.jsエコシステムで開発を行うWeb開発者、UIコンポーネントの迅速な生成。" },
    { name: "CodeGeeX (Open-source)", short_desc: "オープンソースのAIプログラミングアシスタント。", details: "<strong>主な機能:</strong> コード補完、コメント生成、コード翻訳、チャットボット<br><strong>対応IDE:</strong> VS Code, IntelliJ IDEA, PyCharm<br><strong>対応言語:</strong> Python, Java, C++, JavaScript, Goなど<br><strong>提供形態:</strong> オープンソース (自己ホスティング)<br><strong>価格モデル:</strong> 無料 (オープンソース), 有料プラン<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> 自己ホスティングで完全制御<br><strong>ユニークな強み:</strong> オープンソース、高いカスタマイズ性", ideal_for: "コストを抑えたい個人開発者、フルコントロールとカスタマイズ性を求める開発者。" },
    { name: "Sourcegraph Cody (Sourcegraph)", short_desc: "大規模プロジェクトのコード検索とリファクタリング支援。", details: "<strong>主な機能:</strong> リポジトリ横断検索、リファクタリング支援<br><strong>対応IDE:</strong> 複数IDE<br><strong>対応言語:</strong> 複数言語<br><strong>提供形態:</strong> クラウドホスト型<br><strong>価格モデル:</strong> フリーミアム, サブスクリプション<br><strong>自律性レベル:</strong> 中<br><strong>プライバシー/セキュリティ:</strong> - <br><strong>ユニークな強み:</strong> 大規模プロジェクト向け、全体像把握", ideal_for: "大規模なモノレポや複数のリポジトリを扱う企業、上級者・技術者。" }
];

const comparisonData = [
    { name: "GitHub Copilot (Microsoft/OpenAI)", ide: "VS Code, Visual Studio, JetBrains", pricing: "サブスクリプション (個人/企業)", autonomy: "中", privacy: "データ共有懸念 (ビジネス版でポリシー制御)", strength: "GitHub連携、高い提案品質、導入容易性" },
    { name: "Amazon Q Developer (AWS)", ide: "JetBrains IDEs, VS Code, CLI", pricing: "マネージドサービス (利用ベース)", autonomy: "中", privacy: "エンタープライズグレード、コード非保持設定", strength: "AWSエコシステムとの深い連携" },
    { name: "Google Gemini Code Assist (Google)", ide: "Google Cloudツール, IDEプラグイン", pricing: "無料 (個人), エンタープライズ", autonomy: "中", privacy: "Google Cloud環境のセキュリティ", strength: "コード引用提供、個人向け無料プラン" },
    { name: "Tabnine (Tabnine)", ide: "主要IDE全て", pricing: "フリーミアム, サブスクリプション", autonomy: "低〜中", privacy: "ゼロデータ保持、オンプレミス、カスタムモデル", strength: "プライバシー重視、カスタマイズ性" },
    { name: "Cline (Open-source)", ide: "VS Code", pricing: "無料", autonomy: "76%", privacy: "自己管理", strength: "段階的計画、高い自律性、MCPによる拡張性" },
    { name: "Roo Code (RooCodeInc)", ide: "VS Code", pricing: "無料", autonomy: "89%", privacy: "自己管理", strength: "高い自律性、ジュニア開発者ワークフロー模倣" },
    { name: "Windsurf (Codeium)", ide: "VS Code", pricing: "フリーミアム (将来Proプラン)", autonomy: "中", privacy: "-", strength: "動作軽快、インライン修正、直感的UI" },
    { name: "Codeium (Codeium)", ide: "複数IDE", pricing: "完全無料 (個人), 有料プラン", autonomy: "中", privacy: "-", strength: "GitHub Copilotの無料代替" },
    { name: "Cursor (Independent/VS Code-based)", ide: "VS Codeベース", pricing: "フリーミアム, サブスクリプション", autonomy: "高", privacy: "-", strength: "プロジェクト全体理解" },
    { name: "Replit Ghostwriter (Replit, Inc.)", ide: "ブラウザベースIDE", pricing: "フリーミアム, サブスクリプション", autonomy: "低〜中", privacy: "-", strength: "環境構築不要、初心者向け" },
    { name: "bolt.new (StackBlitz team)", ide: "ブラウザベース", pricing: "無料", autonomy: "高", privacy: "-", strength: "ノーコードに近い体験、迅速なプロトタイピング" },
    { name: "v0 (Vercel)", ide: "ブラウザベース", pricing: "フリーミアム, 有料プラン", autonomy: "高", privacy: "-", strength: "React/Next.js特化" },
    { name: "CodeGeeX (Open-source)", ide: "VS Code, IntelliJ IDEA, PyCharm", pricing: "無料 (オープンソース), 有料プラン", autonomy: "中", privacy: "自己ホスティングで完全制御", strength: "オープンソース、高いカスタマイズ性" },
    { name: "Sourcegraph Cody (Sourcegraph)", ide: "複数IDE", pricing: "フリーミアム, サブスクリプション", autonomy: "中", privacy: "-", strength: "大規模プロジェクト向け" }
];

const differentiationFactors = [
    { title: "自律性 (Autonomy)", content: "エージェントがどれだけ人間からの介入なしにタスクを完了できるかは、生産性向上に直結する重要な要素です。Cline（76%）やRoo Code（89%）のようなエージェントは、計画立案から実行、デバッグまでを自律的に行える能力を備えています。自律性の高さは効率を最大化する一方、AI出力の信頼性や制御の必要性も考慮すべき点です。" },
    { title: "プライバシーとセキュリティ (Privacy & Security)", content: "コードデータがどのように扱われるかは、特に企業にとって最重要視される要因です。Tabnineはゼロデータ保持ポリシーとオンプレミス運用で、CodeGeeXは自己ホスティングでデータ管理の完全なコントロールを提供します。GitHub Copilotビジネス版やAmazon Qもエンタープライズ向けのセキュリティ機能を強化しています。" },
    { title: "クラウド連携とエコシステム (Cloud Integration & Ecosystem)", content: "特定のクラウドプロバイダーとの統合の深さは、そのクラウドを主要インフラとする企業にとって大きなメリットです。Amazon Q DeveloperはAWSに、Google Gemini Code AssistはGoogle Cloudに深く統合され、それぞれのサービス利用者に特化した機能を提供します。" },
    { title: "カスタマイズ性と拡張性 (Customization & Extensibility)", content: "特定のコードベースや開発プロセスに合わせて調整可能かは、複雑な要件を持つ組織にとって重要です。Tabnineはカスタムモデル訓練が可能。ClineやRoo CodeはMCPを通じて外部ツール連携やカスタムツール追加が可能です。CodeGeeXもオープンソースであるため高いカスタマイズ性を持ちます。" },
    { title: "学習曲線と使いやすさ (Learning Curve & Usability)", content: "ツールの導入の容易さ、直感的なUI、初心者への配慮は普及の鍵です。Replit Ghostwriterやbolt.newは環境構築不要で直感的に利用でき、コーディング経験のない初心者でもアクセスしやすい設計です。Windsurfも学習コストが低いと評価されています。" }
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

    // スムーズスクロール機能
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.getElementById(button.dataset.section);
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Intersection Observerでactiveタブ切り替え
    const sectionIds = Array.from(navButtons).map(btn => btn.dataset.section);
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navButtons.forEach(btn => btn.classList.remove('active'));
                const activeBtn = Array.from(navButtons).find(btn => btn.dataset.section === entry.target.id);
                if (activeBtn) activeBtn.classList.add('active');
            }
        });
    }, observerOptions);
    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) sectionObserver.observe(section);
    });

    function populateAgentCards() {
        agentsData.forEach(agent => {
            const card = document.createElement('div');
            card.className = 'card p-6 cursor-pointer';
            card.innerHTML = `
                <h3 class="text-xl font-semibold text-sky-600 mb-2">${agent.name}</h3>
                <p class="text-sm text-slate-600 mb-3">${agent.short_desc}</p>
                <p class="text-xs text-slate-500">理想的なユーザー: ${agent.ideal_for}</p>
            `;
            card.addEventListener('click', () => openModal(agent));
            agentCardsContainer.appendChild(card);
        });
    }

    window.openModal = (agent) => {
        modalAgentName.textContent = agent.name;
        modalAgentDetails.innerHTML = agent.details + `<br><p class="mt-3"><strong>理想的なユースケース:</strong> ${agent.ideal_for}</p>`;
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
        differentiationFactors.forEach(factor => {
            const div = document.createElement('div');
            div.className = 'mb-2';
            const button = document.createElement('button');
            button.className = 'accordion-button';
            button.innerHTML = `${factor.title} <span class="plus-minus">+</span>`;

            const content = document.createElement('div');
            content.className = 'accordion-content';
            content.innerHTML = `<p class="py-4">${factor.content}</p>`;

            button.addEventListener('click', () => {
                button.classList.toggle('active');
                const plusMinus = button.querySelector('.plus-minus');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
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
            row.insertCell().textContent = item.privacy;
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
            item.ide.split(',').map(s => s.trim()).forEach(ide => ideOptions.add(ide));
            pricingOptions.add(item.pricing);
        });

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
            const nameMatch = item.name.toLowerCase().includes(nameFilter);
            const ideMatch = ideFilter ? item.ide.includes(ideFilter) : true;
            const pricingMatch = pricingFilter ? item.pricing === pricingFilter : true;
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
        const autonomyChartCanvas = document.getElementById('autonomyChart').getContext('2d');
        const autonomyData = comparisonData.filter(agent => agent.autonomy.includes('%')).map(agent => ({
            name: agent.name,
            level: parseFloat(agent.autonomy)
        }));
        autonomyData.sort((a,b) => b.level - a.level);

        new Chart(autonomyChartCanvas, {
            type: 'bar',
            data: {
                labels: autonomyData.map(agent => agent.name.length > 16 ? agent.name.substring(0, 16) + '...' : agent.name),
                datasets: [{
                    label: '自律性レベル (%)',
                    data: autonomyData.map(agent => agent.level),
                    backgroundColor: ['#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985'],
                    borderColor: '#0c4a6e',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, max: 100, title: { display: true, text: '自律性レベル (%)'} },
                    x: { title: { display: true, text: 'AIコーディングエージェント'} }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y + '%';
                                }
                                const fullLabel = autonomyData.find(d => (d.name.length > 16 ? d.name.substring(0,16) + '...' : d.name) === context.label)?.name || context.label;
                                return `${fullLabel}: ${context.parsed.y}%`;
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
});

    const jobData = {
    'software-engineer': {
        title: 'ソフトウェアエンジニア',
        img: './img/software_engineer.png',
        description: [
            `ソフトウェアエンジニアは、ソフトウェア開発に特化した専門家です。彼らは、コンピュータやスマートフォン、タブレット、組み込みシステムなどのさまざまなプラットフォームにソフトウェアを開発するために、プログラミング言語を使ってアプリケーションを設計、開発、テスト、デプロイすることを担当します。`,
            `ソフトウェアエンジニアは、ソフトウェアの設計、コーディング、テスト、デバッグ、保守などの作業を行います。彼らは、要件定義、設計仕様書の作成、アプリケーションの機能の開発、ユーザーインターフェースの設計、データベースの設計、ネットワークの設計、アルゴリズムの最適化など、さまざまな作業に従事します。`,
            `また、ソフトウェアエンジニアは、プロジェクトのマネジメント、チームのリーダーシップ、コードレビュー、品質管理、ドキュメンテーションの作成、ユーザーサポートなども行います。彼らは、時にはシステム全体の設計に携わることもあります。`,
            `ソフトウェアエンジニアは、様々な業界で需要があり、ビジネスアプリケーション、Webアプリケーション、ゲーム開発、組み込みシステム、AI、機械学習、ビッグデータ分析などの分野で活躍することができます。彼らは、新しい技術や開発手法に常に関心を持ち、ソフトウェア開発の分野でのキャリアの成長を追求することが多いです。`
        ],
        example: '事例：オペレーティングシステム、ウェブアプリケーション、モバイルアプリ',
        memo: "Software engineerは幅広いジャンルを網羅しています。(Webアプリケーションからモバイルや組み込みなど) 特に拘りがなければ、Webアプリケーションから始めることをお勧めします。",
        learning: [
            {
                title:'Recursion',
                url:'https://recursionist.io/',
            },
            {
                title: 'Codecademy/(英)',
                url: 'https://join.codecademy.com/learn/paths/computer-science/'
            },
            {
                title: 'Cousera/(英)',
                url: 'https://www.coursera.org/'
            },
            {
                title: 'Educative.io/(英)/How to became a software engineer',
                url: 'https://www.educative.io/blog/how-to-become-a-software-engineer'
            }
        ],
      },
      'frontend-engineer': {
        title:'フロントエンドエンジニア',
        img:'./img/frontend_engineer.png',
        description:[
            `フロントエンドエンジニアは、ウェブアプリケーションのユーザーインターフェース（UI）とユーザーエクスペリエンス（UX）の開発に特化した専門家です。彼らは、HTML、CSS、JavaScriptを使って、Webページのデザインや機能を開発、設計、実装することを担当します。`,
            `フロントエンドエンジニアは、ウェブデザインに関する知識やスキルを持ち、UI/UXの設計、Webページのレスポンシブデザイン、アニメーションの開発、ブラウザの互換性の確認など、さまざまな作業に従事します。`,
            `また、フロントエンドエンジニアは、JavaScriptフレームワークやライブラリ（React、Angular、Vueなど）を使って、Webアプリケーションの機能や動的なUIを実装することもあります。彼らは、コードの最適化や、バグのデバッグなども行い、高品質なウェブアプリケーションを開発することを目指します。`,
            `フロントエンドエンジニアは、デザイナーやバックエンドエンジニアと密接に協力し、プロジェクト全体の成功に貢献します。彼らは、ユーザーが快適に使用できるように、ウェブページのインタラクションやパフォーマンスに重点を置いて作業を行います。`,
            `フロントエンドエンジニアは、ウェブアプリケーション開発の分野で求人が多く、企業や組織によっては、フルタイムの雇用のほか、フリーランスやコンサルタントとして活躍することもできます。彼らは、最新のウェブ技術に関心を持ち、コミュニティに参加し、キャリアを発展させることが多いです。`
        ],
        example:'事例：レスポンシブデザイン、アニメーション、パフォーマンス最適化',
        memo:'フロントエンドでは、クライアント画面にフォーカスした学習がメインとなります。APIデータ表示からデザインなどの理解を深めてください',
        learning: [
            {
                title:'Recursion / フロントエンドロードマップ',
                url:'https://recursionist.io/dashboard/roadmap/frontend',
            },
            {
                title: 'Codecademy/(英)/Front-end Engineer',
                url: 'https://join.codecademy.com/learn/paths/front-end-engineer-career-path-b/'
            },
            {
                title: 'Cousera/(英)/Frontend Engineer by Meta',
                url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer'
            },
            {
                title: 'Educative.io/(英)/How to became a frontend engineer',
                url: 'https://www.educative.io/path/become-front-end-developer'
            }
        ]
      },
      'backend-engineer': {
        title:'バックエンドエンジニア',
        img:'./img/backend_engineer.png',
        description:[
            `バックエンドエンジニアは、Webアプリケーションのサーバーサイドの設計、開発、実装、管理を担当する専門家です。彼らは、データの処理、アプリケーションの機能、データベースの管理、セキュリティの実装など、ウェブアプリケーションのバックエンドに関する作業に従事します。`,
            `バックエンドエンジニアは、Python、Ruby、Java、PHPなどのプログラミング言語や、データベース、Webサーバー、フレームワーク、API、クラウドプラットフォーム、コンテナ技術、デプロイメントツールなどの技術に精通しています。彼らは、Webアプリケーションのロジックを実装し、データベースにデータを格納するためのクエリを作成します。また、彼らは、Webサーバーの設定、APIの開発、セキュリティの実装、スケーラビリティの向上、ユーザーのアクションに応じたデータの処理など、さまざまな作業を行います。`,
            `バックエンドエンジニアは、フロントエンドエンジニアやデータベース管理者など、他のエンジニアと協力して作業を行います。彼らは、Webアプリケーション全体の設計にも携わり、プロジェクトの要件を理解し、開発プロセスを管理することがあります。`,
            `バックエンドエンジニアは、様々な業界で求人があり、特に大規模なWebアプリケーションやSaaSプラットフォームの開発において、重要な役割を果たします。彼らは、常に新しい技術に関心を持ち、ウェブアプリケーション開発の分野でのキャリアの成長を追求することが多いです。`
        ],
        example:'事例：RESTful API、認証・認可、データベース管理',
        memo:'バックエンドでは、サーバーサイドの処理やデータベース操作学習にフォーカスします。API構築方法やバックエンドモデルなど理解を深めてください。',
        learning: [
            {
                title:'Recursion / バックエンドロードマップ',
                url:'https://recursionist.io/dashboard/roadmap/backend',
            },
            {
                title: 'Codecademy/(英)/Backend Engineer',
                url: 'https://join.codecademy.com/learn/paths/back-end-engineer-career-path-b/'
            },
            {
                title: 'Cousera/(英)/backend engineer by Meta',
                url: 'https://www.coursera.org/professional-certificates/meta-back-end-developer'
            },
            {
                title: 'Educative.io/(英)/How to became a backend engineer',
                url: 'https://www.educative.io/path/zero-to-hero-in-back-end-web-development'
            }
        ]
      },
      'fullstack-engineer': {
        title:'フルスタックエンジニア',
        img:'./img/fullstack_engineer.png',
        description:[
            `フルスタックエンドエンジニアは、Webアプリケーション全体の設計、開発、実装を担当する専門家です。彼らは、ウェブアプリケーションのフロントエンドとバックエンドの両方を理解し、設計、開発、実装することができます。`,
            `フルスタックエンドエンジニアは、HTML、CSS、JavaScriptを使って、Webページのデザインや機能を開発、設計、実装することができます。また、バックエンドの部分にも精通しており、Webアプリケーションのサーバーサイドの設計、開発、実装、管理を担当することができます。`,
            `彼らは、Python、Ruby、Java、PHPなどのプログラミング言語や、データベース、Webサーバー、フレームワーク、API、クラウドプラットフォーム、コンテナ技術、デプロイメントツールなどの技術に精通しています。彼らは、Webアプリケーションの設計と実装の両方を理解し、Webアプリケーション全体の開発プロセスを管理することができます。`,
            `フルスタックエンドエンジニアは、ユーザーインターフェースの開発、APIの開発、セキュリティの実装、データの処理、アプリケーションの機能、データベースの管理、スケーラビリティの向上など、さまざまな作業を行います。彼らは、フロントエンドエンジニアやバックエンドエンジニアなど、他のエンジニアと協力して作業を行い、Webアプリケーション全体の成功に貢献します。`,
            `フルスタックエンドエンジニアは、ウェブアプリケーション開発の分野で求人があり、企業や組織によっては、フルタイムの雇用のほか、フリーランスやコンサルタントとして活躍することもできます。彼らは、最新のウェブ技術に関心を持ち、コミュニティに参加し、キャリアを発展させることが多いです。`
        ],
        exapmle:'事例：MERNスタック、MEANスタック、ウェブアプリケーション開発',
        memo:'フルスタックエンドはフロントエンドとバックエンドとインフラの3点の理解が重要です。主に中小企業など一人あたりの裁量幅が広いポジションや副業でアウトソーシングを目指す方に適しています。',
        learning: [
            {
                title:'Udemy / フルスタックwebエンジニア講座',
                url:'https://www.udemy.com/course/completeweb2_jp/',
            },
            {
                title:'Progate / Web開発コース(Node.js)',
                url:'https://prog-8.com/paths/node',
            },
            {
                title:'Dotinstall / Webサービスを作ろう',
                url:'https://dotinstall.com/lessons/search#!/filter/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E6%A7%8B%E7%AF%89+%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/premium',
            },
            {
                title: 'Codecademy/(英)/Fullstack Engineer',
                url: 'https://join.codecademy.com/learn/paths/full-stack-engineer-career-path-b/'
            },
            {
                title: 'Cousera/(英)/Fullstack engineer by IBM',
                url: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer'
            },
            {
                title: 'Educative.io/(英)/How to became a fullstack engineer',
                url: 'https://www.educative.io/answers/guide---how-to-become-a-full-stack-developer'
            }
        ]
      },
      'web-developer': {
        title: 'ウェブデベロッパー',
        img: './img/web_engineer.png',
        description: [
            `Webデベロッパーは、Webアプリケーションの開発に特化した専門家です。彼らは、フロントエンドエンジニアやバックエンドエンジニアなど、さまざまなスキルを持ったエンジニアと協力して、Webアプリケーション全体の設計、開発、実装を担当します。`,
            `Webデベロッパーは、HTML、CSS、JavaScriptを使って、Webページのデザインや機能を開発、設計、実装することができます。また、バックエンドの部分にも精通しており、Webアプリケーションのサーバーサイドの設計、開発、実装、管理を担当することもできます。`,
            `彼らは、Python、Ruby、Java、PHPなどのプログラミング言語や、データベース、Webサーバー、フレームワーク、API、クラウドプラットフォーム、コンテナ技術、デプロイメントツールなどの技術に精通しています。彼らは、Webアプリケーションの設計と実装の両方を理解し、Webアプリケーション全体の開発プロセスを管理することができます。`,
            `Webデベロッパーは、ユーザーインターフェースの開発、APIの開発、セキュリティの実装、データの処理、アプリケーションの機能、データベースの管理、スケーラビリティの向上など、さまざまな作業を行います。彼らは、フロントエンドエンジニアやバックエンドエンジニアなど、他のエンジニアと協力して作業を行い、Webアプリケーション全体の成功に貢献します。`,
            `Webデベロッパーは、様々な業界で求人があり、特に大規模なWebアプリケーションやSaaSプラットフォームの開発において、重要な役割を果たします。彼らは、常に新しい技術に関心を持ち、ウェブアプリケーション開発の分野でのキャリアの成長を追求することが多いです。`
        ],
        example: '事例：コーポレートウェブサイト、ECサイト、SNSプラットフォーム',
        memo:'Webデベロッパーは、フロントエンドとバックエンドのことをいい、ウェブアプリ開発全般のことを指します。',
        learning: [
            {
                title:'Udemy / フルスタックwebエンジニア講座',
                url:'https://www.udemy.com/course/completeweb2_jp/',
            },
            {
                title:'Progate / Web開発コース(Node.js)',
                url:'https://prog-8.com/paths/node',
            },
            {
                title:'Dotinstall / Webサービスを作ろう',
                url:'https://dotinstall.com/lessons/search#!/filter/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E6%A7%8B%E7%AF%89+%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9/premium',
            },
            {
                title: 'Codecademy/(英)/Fullstack Engineer',
                url: 'https://join.codecademy.com/learn/paths/full-stack-engineer-career-path-b/'
            },
            {
                title: 'Cousera/(英)/Fullstack engineer by IBM',
                url: 'https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer'
            },
            {
                title: 'Educative.io/(英)/How to became a fullstack engineer',
                url: 'https://www.educative.io/answers/guide---how-to-become-a-full-stack-developer'
            }
        ]
      },
      'mobile-engineer': {
        title:'モバイルアプリエンジニア',
        img:'./img/mobile_engineer.png',
        description:[
            `モバイルエンジニアは、モバイルアプリケーションの設計、開発、実装を担当する専門家です。彼らは、iOSやAndroidなどのモバイルプラットフォームに精通しており、モバイルアプリケーションのフロントエンド部分を開発、設計、実装することができます。`,
            `モバイルエンジニアは、モバイルアプリケーションのユーザーインターフェースの開発、APIの開発、セキュリティの実装、データの処理など、さまざまな作業を行います。彼らは、SwiftやJavaなどのモバイルアプリケーション開発に使用される言語や、モバイルアプリケーション開発に必要なフレームワーク、ライブラリ、プラグインなどの技術に精通しています。`,
            `モバイルエンジニアは、モバイルアプリケーションのフロントエンド部分を開発するだけでなく、バックエンドの部分にも精通しています。彼らは、Webサーバーやデータベースなどのバックエンド技術にも精通しており、モバイルアプリケーションのバックエンド部分を設計、開発、実装することもできます。`,
            `モバイルエンジニアは、モバイルアプリケーション全体の設計、開発、実装を担当し、ユーザーにとって使いやすいモバイルアプリケーションを開発することが求められます。彼らは、モバイルアプリケーションの特性に応じて、オフラインでの使用に対応するなど、さまざまな課題に対応するために常に最新技術に興味を持ち、研究を続けることが多いです。`,
            `モバイルエンジニアは、さまざまな業界で求人があり、特にモバイルアプリケーションの開発において、重要な役割を果たします。彼らは、モバイルアプリケーションの開発に熱心であり、最新技術の研究と開発を通じてキャリアを発展させることが多いです。`
        ],
        example:'事例：iOSアプリ、Androidアプリ、クロスプラットフォームアプリ',
        memo:'モバイルアプリケーションでは、使用する言語によってモデルが異なり、構築方法が異なる場合があります。IOSならSwift, androidならJava,どちらも使えるようにしたい場合、Fullutterなどあります。ご自身の目指すキャリアによってどの言語で学習を深めるか決めることをお勧めします。',
        learning: [
            {
                title:'Recursion / Swiftコース',
                url:'https://recursionist.io/dashboard/course/27',
            },
            {
                title:'Udemy / モバイルアプリ開発コース',
                url:'https://www.udemy.com/ja/topic/mobile-development/',
            },
            {
                title:'Dotinstall / スマートフォンアプリケーションを作ろう',
                url:'https://dotinstall.com/lessons/search#!/filter/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%B3%E3%82%A2%E3%83%97%E3%83%AA',
            },
            {
                title: 'Codecademy/(英)/Moblie Application Developer',
                url: 'https://www.codecademy.com/catalog/subject/mobile-development'
            },
            {
                title: 'Cousera/(英)/Mobile Application Engineer',
                url: 'https://www.coursera.org/search?query=mobile%20application%20developer'
            },
            {
                title: 'Educative.io/(英)/How to became a Mobile Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Mobile+&free=false&pageNo=1'
            }
        ]
      },
      'embedded-engineer': {
        title:'組み込みシステムエンジニア',
        img:'./img/embedded_engineer.png',
        description:[
            "組み込みエンジニアは、組み込みシステムやデバイスのソフトウェア開発に特化した専門家です。",
            "彼らは、マイクロコントローラーやリアルタイムオペレーティングシステムを使って、自動車、家電、産業機器などの製品に組み込まれるソフトウェアを開発します。",
            "組み込みエンジニアは、リソース制約のある環境で効率的なアルゴリズムや最適化技術を用いて、高いパフォーマンスを実現することが求められます。"
            ],
        example:'事例：IoTデバイス、自動車制御システム、航空システム',
        memo:'組み込みエンジニアは、主に家電業界など、特定のデバイスや機器にソフトウェアを組み込む作業のことを指します。この職種はトレーニングは難しいので、ソフトウェア開発を中心に進め、電子工学の知識も学習するとなお良いです。',
        learning: [
            {
                title:'Udemy / 初心者向け組み込みシステム開発技術入門',
                url:'https://www.udemy.com/course/rtrhephu/',
            },
            {
                title:'Dotinstall / 電子工作',
                url:'https://dotinstall.com/lessons/search#!/filter/%E9%9B%BB%E5%AD%90%E5%B7%A5%E4%BD%9C',
            },
            {
                title: 'Cousera/(英)/Embedded Engineer',
                url: 'https://www.coursera.org/search?query=embedded%20engineer'
            },
            {
                title: 'Educative.io/(英)/How to became a Mobile Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=embedded+engineer&free=false&pageNo=1'
            }
        ]
      },
      'data-engineer': {
        title: 'データエンジニア',
        img: './img/data_engineer.png',
        description:  [
            "データエンジニアは、データの収集、変換、保存、分析のためのシステムやプロセスを設計・構築・管理する専門家です。",
            "彼らは、ビッグデータ技術やデータウェアハウス、データパイプラインの設計・実装に携わります。",
            "データエンジニアは、データの品質や信頼性を確保し、データサイエンティストや分析チームが効果的にデータを利用できるようにサポートします。"
            ],
        example: '事例：データウェアハウス、データレイク、リアルタイムデータ処理システム',
        memo:'データエンジニアは定義が広く、分析やデータを操作したりと幅広い作業があります。データに関する仕事をしたい場合、まずこの枠から始め、機械学習やデータベースやデータサイエンティストなど好みの職種へ絞ることをお勧めします。',
        learning: [
            {
                title:'キカガク / データエンジニアリング実践コース',
                url:'https://www.kikagaku.co.jp/course/data-engineering-practice',
            },
            {
                title: 'Codecademy/(英)/Data Science Foundations',
                url: 'https://www.codecademy.com/learn/paths/data-science-foundations'
            },
            {
                title: 'Cousera/(英)/Data Engineer by Meta',
                url: 'https://www.coursera.org/professional-certificates/meta-database-engineer'
            },
            {
                title: 'Educative.io/(英)/How to became a Data Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Data+engineer&free=false&pageNo=1'
            }
        ]
      },
      'data-scientist': {
        title: 'データサイエンティスト',
        img: './img/data_scientist.png',
        description:  [
            "データサイエンティストは、ビジネスや研究目的のために、大量のデータから価値ある情報を抽出・分析する専門家です。",
            "彼らは、統計学、機械学習、データマイニングなどの技術を用いて、データからインサイトを得ることができます。",
            "データサイエンティストは、データドリブンな意思決定をサポートし、ビジネス戦略の策定や問題解決に貢献します。"
            ],
        example: '事例：顧客セグメンテーション、株価予測、自然言語処理',
        learning: [
            {
                title:'キカガク / データエンジニアリング実践コース',
                url:'https://www.kikagaku.co.jp/course/data-engineering-practice',
            },
            {
                title: 'Codecademy/(英)/Data Science Foundations',
                url: 'https://www.codecademy.com/learn/paths/data-science-foundations'
            },
            {
                title: 'Codecademy/(英)/Data Scientist: Machine Learning Specialist',
                url: 'https://join.codecademy.com/learn/paths/data-science-b/'
            },
            {
                title: 'Codecademy/(英)/Data Scientist: Natural Language Processing Specialist',
                url: 'https://join.codecademy.com/learn/paths/data-science-nlp-b/'
            },
            {
                title: 'Cousera/(英)/Data Engineer by Meta',
                url: 'https://www.coursera.org/professional-certificates/meta-database-engineer'
            },
            {
                title: 'Educative.io/(英)/How to became a Data Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Data+engineer&free=false&pageNo=1'
            }
        ]
      },
      'database-engineer': {
        title:'データベースエンジニア',
        img:'./img/database_engineer.png',
        description: [
            "データベースエンジニアは、データベースシステムの設計、構築、運用、保守に特化した専門家です。",
            "彼らは、リレーショナルデータベースやNoSQLデータベースなどのさまざまなデータベース技術を利用して、効率的なデータ管理システムを実現します。",
            "データベースエンジニアは、データベースのパフォーマンスチューニングやセキュリティ対策、バックアップ・リカバリ計画の策定など、データベースシステムの安定性と信頼性を確保するための業務に従事します。"],
        example:'事例：ネットワーク構築、仮想化技術、ストレージ管理',
        learning: [
            {
                title:'キカガク / データエンジニアリング実践コース',
                url:'https://www.kikagaku.co.jp/course/data-engineering-practice',
            },
            {
                title: 'Codecademy/(英)/Data Science Foundations',
                url: 'https://www.codecademy.com/learn/paths/data-science-foundations'
            },
            {
                title: 'Cousera/(英)/Data Engineer by Meta',
                url: 'https://www.coursera.org/professional-certificates/meta-database-engineer'
            },
            {
                title: 'Educative.io/(英)/How to became a Data Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Data+engineer&free=false&pageNo=1'
            }
        ]
      },
      'machine-learning-engineer': {
        title: '機械学習エンジニア',
        img: './img/machine_learning_engineer.png',
        description: [
            "機械学習エンジニアは、AIシステムやアプリケーションに機械学習アルゴリズムを実装・適用する専門家です。",
            "彼らは、データの前処理、特徴抽出、モデルの選択・訓練・評価・最適化など、機械学習プロジェクトの一連のプロセスに携わります。",
            "機械学習エンジニアは、画像認識、自然言語処理、音声認識などの分野で活躍し、自動化や最適化などの技術革新を推進します。"],
        example: '事例：自動運転車、音声認識システム、画像認識アプリ',
        learning: [
            {
                title:'Udemy / 機械学習コース',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92',
            },
            {
                title:'AI Academy Bootcamp / 機械学習エンジニアコース',
                url:'https://aiacademy.jp/bootcamp/course/?id=ml',
            },
            {
                title: 'Kaggle/(英)/ Machine Learning Learn',
                url: 'https://www.kaggle.com/learn'
            },
            {
                title: 'Codecademy/(英)/AI Engineer',
                url: 'https://join.codecademy.com/learn/paths/machine-learning-engineer-b/'
            },
            {
                title: 'Codecademy/(英)/Data Scientist: Machine Learning Specialist',
                url: 'https://join.codecademy.com/learn/paths/data-science-b/'
            },
            {
                title: 'Codecademy/(英)/Data Scientist: Natural Language Processing Specialist',
                url: 'https://join.codecademy.com/learn/paths/data-science-nlp-b/'
            },
            {
                title: 'Cousera/(英)/Mobile Application Engineer',
                url: 'https://www.coursera.org/search?query=mobile%20application%20developer'
            },
            {
                title: 'Educative.io/(英)/How to became a Mobile Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Mobile+&free=false&pageNo=1'
            }
        ]

      },
      'network-engineer': {
        title: 'ネットワークエンジニア',
        img: './img/network_engineer.png',
        description: [
            "ネットワークエンジニアは、コンピュータネットワークの設計、構築、運用、保守に特化した専門家です。",
            "彼らは、LAN、WAN、インターネット、VPNなどのネットワークインフラストラクチャを構築・管理し、ネットワークのパフォーマンスやセキュリティを最適化します。",
            "ネットワークエンジニアは、障害対応やトラブルシューティング、ネットワーク監視などの業務を通じて、組織の情報通信システムの安定運用を支えます。"],
        example: '事例：LAN、WAN、インターネット接続、ネットワークセキュリティ',
        learning: [
            {
                title:'Udemy / ネットワークエンジニア',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2',
            },
            {
                title:'Schoo / ネットワークエンジニアコース',
                url:'https://schoo.jp/class/category/engineer/151',
            },
            {
                title: 'Cousera/(英)/Network Engineer',
                url: 'https://www.coursera.org/search?query=network%20engineer&'
            },
            {
                title: 'Educative.io/(英)/Network Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Network+engineer&free=false&pageNo=1'
            }
        ]
      },
      'security-engineer': {
        title: 'セキュリティエンジニア',
        img: './img/security_engineer.png',
        description:  [
            "セキュリティエンジニアは、コンピュータシステムやネットワークのセキュリティ対策を専門とするエンジニアです。",
            "彼らは、セキュリティポリシーの策定、脆弱性評価、侵入検知・防御システムの設計・運用など、情報セキュリティのさまざまな側面に携わります。",
            "セキュリティエンジニアは、組織のデータやシステムをサイバー攻撃や内部犯行から保護するための戦略と技術を開発・実装し、情報セキュリティのリスクを軽減します。"],

        example: '事例：ファイアウォール、侵入検知システム、暗号化技術',
        learning: [
            {
                title:'Udemy / セキュリティエンジニア',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2',
            },
            {
                title:'Envader /',
                url:'https://envader.plus/',
            },
            {
                title: 'Codecademy/(英)/Security Engineer',
                url: 'https://www.codecademy.com/catalog/subject/cybersecurity'
            },
            {
                title: 'Cousera/(英)/Security Engineer',
                url: 'https://www.coursera.org/search?query=security%20engineer'
            },
            {
                title: 'Educative.io/(英)/Security Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Security+engineer&free=false&pageNo=1'
            }
        ]
      },
      'devops-engineer': {
        title: 'デブオプスエンジニア',
        img: './img/devops_engineer.png',
        description:  [
            "DevOpsエンジニアは、開発（Development）と運用（Operations）の両方の業務に携わる専門家で、ソフトウェア開発プロセスの効率化と自動化を目指します。",
            "彼らは、コンテナ技術、CI/CDパイプライン、インフラストラクチャ・アズ・コードなどの技術を活用して、開発と運用の連携を強化し、迅速なリリースと安定した運用を実現します。",
            "DevOpsエンジニアは、システム監視、障害対応、パフォーマンス最適化などの運用業務にも携わり、システムの信頼性と効率性を向上させます。"],
        example: '事例：CI/CDパイプライン、クラウドインフラ管理、コンテナオーケストレーション',
        learning: [
            {
                title:'Udemy / Dev ops エンジニア',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=Devops+engineer',
            },
            {
                title:'Envader /',
                url:'https://envader.plus/',
            },
            {
                title: 'Codecademy/(英)/Devops Engineer',
                url: 'https://www.codecademy.com/catalog/subject/devops'
            },
            {
                title: 'Cousera/(英)/Devops Engineer',
                url: 'https://www.coursera.org/search?query=devops%20engineer'
            },
            {
                title: 'Educative.io/(英)/Devops Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=devops+engineer&free=false&pageNo=1'
            }
        ]

      },
      'infrastructure-engineer': {
        title:'インフラエンジニア',
        img:'./img/infrastructure_engineer.png',
        description: [
            "インフラストラクチャエンジニアは、コンピュータシステムやネットワークのハードウェアとソフトウェアの基盤を設計・構築・管理する専門家です。",
            "彼らは、サーバー、ストレージ、仮想化技術、ネットワークデバイスなどのITインフラストラクチャを最適化し、システムのパフォーマンスや信頼性を確保します。",
            "インフラストラクチャエンジニアは、コスト効率やスケーラビリティを考慮したクラウドインフラの導入・運用や、セキュリティ対策の実施などの業務にも従事します。"],
        example:'事例：ネットワーク構築、仮想化技術、ストレージ管理',
        learning: [
            {
                title:'Udemy / インフラエンジニア',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9%E3%82%B9%E3%83%88%E3%83%A9%E3%82%AF%E3%83%81%E3%83%A3%E3%83%BC',
            },
            {
                title:'Envader /',
                url:'https://envader.plus/',
            },
            {
                title: 'Codecademy/(英)/Infrastructure Engineer',
                url: 'https://www.codecademy.com/catalog/subject/cybersecurity'
            },
            {
                title: 'Cousera/(英)/Security Engineer',
                url: 'https://www.coursera.org/search?query=security%20engineer'
            },
            {
                title: 'Educative.io/(英)/Security Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=Security+engineer&free=false&pageNo=1'
            },
            {
                title:'Udemy / Dev ops エンジニア',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=Devops+engineer',
            },
            {
                title: 'Codecademy/(英)/Devops Engineer',
                url: 'https://www.codecademy.com/catalog/subject/devops'
            },
            {
                title: 'Cousera/(英)/Devops Engineer',
                url: 'https://www.coursera.org/search?query=devops%20engineer'
            },
            {
                title: 'Educative.io/(英)/Devops Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=devops+engineer&free=false&pageNo=1'
            }
        ]
      },
      'qa-engineer': {
        title: '品質保証エンジニア',
        img: './img/qa_engineer.png',
        description:  [
            "QAエンジニア（品質保証エンジニア）は、ソフトウェアやシステムの品質を確保するためのテストや検証を行う専門家です。",
            "彼らは、ユニットテスト、システムテスト、パフォーマンステストなどのテスト手法を用いて、ソフトウェアのバグや不具合を特定・報告し、修正をサポートします。",
            "QAエンジニアは、品質基準やテストプロセスの策定、自動化テストの導入・運用などの業務を通じて、プロジェクトの品質管理と向上に貢献します。"],
        example: '事例：ユニットテスト、統合テスト、システムテスト、回帰テスト',
        learning: [
            {
                title:'academy /(英) QA engineer course',
                url:'https://beetrootacademy.com/courses/qa-manual',
            },
            {
                title: 'Codemify/(英)/QA Engineer Engineer',
                url: 'https://codemify.com/'
            },
            {
                title: 'Cousera/(英)/QA Engineer',
                url: 'https://www.coursera.org/search?query=QA%20engineer&'
            },
            {
                title: 'Educative.io/(英)/QA Engineer',
                url: 'https://www.educative.io/explore?search=true&search_string=QA+engineer&free=false&pageNo=1'
            }
        ]

      },
      'game-engineer': {
        title:'ゲーム開発エンジニア',
        img: './img/game_engineer.png',
        description: [
            "ゲームエンジニアは、コンピュータゲームやモバイルゲームの開発に特化した専門家です。",
            "彼らは、ゲームエンジンを使用して、ゲームプレイのロジック、グラフィックス、物理演算、AI、ネットワーク機能などを実装し、ゲームの機能や性能を最適化します。",
            "ゲームエンジニアは、クリエイティブなゲームデザインやチームのアーティスト、サウンドデザイナーと連携して、プレイヤーに魅力的なゲーム体験を提供するための技術的な解決策を開発します。"],
        example: '事例：コンシューマーゲーム、モバイルゲーム、VR/ARゲーム',
        learning: [
            {
                title:'Udemy / Game エンジニア',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=%E3%82%B2%E3%83%BC%E3%83%A0%E9%96%8B%E7%99%BA%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2',
            },
            {
                title:'tech stadium /ゲーム開発コース',
                url:'https://tech-sta.com/',
            },
            {
                title: 'Codecademy/(英)/Game Engineer',
                url: 'https://www.codecademy.com/catalog/subject/game-development'
            },
            {
                title: 'Cousera/(英)/Game Engineer',
                url: 'https://www.coursera.org/search?query=Game%20engineer'
            },
            {
                title: 'FutureLearn/(英)/Game Engineer',
                url: 'https://www.futurelearn.com/subjects/it-and-computer-science-courses/game-development'
            }
        ]
      },
      'uxui-designer': {
        title:'UX/UIデザイナー',
        img:'./img/uxui_designer.png',
        description: [
            "UX/UIデザイナーは、ユーザーエクスペリエンス（UX）とユーザーインターフェース（UI）の設計に特化した専門家です。",
            "彼らは、ユーザーのニーズやタスクを理解し、使いやすく魅力的なインターフェースや画面レイアウトをデザインすることで、製品やサービスの利用者にとって最適なエクスペリエンスを提供します。",
            "UX/UIデザイナーは、ワイヤーフレームやプロトタイプの作成、ユーザビリティテスト、デザインガイドラインの策定などの業務を通じて、開発チームと協力して製品の品質向上に貢献します。"],
        example:'事例：ウェブアプリケーションデザイン、スマートフォンアプリデザイン、プロトタイピング',
        learning: [
            {
                title:'Udemy / UX UI デザイナー',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=ux+ui',
            },
            {
                title:'Codecademy /(英)/ Web designer',
                url:'https://www.codecademy.com/catalog/subject/web-design',
            },

            {
                title: 'Cousera/(英)/UX UI Designer',
                url: 'https://www.coursera.org/search?query=uxui'
            },
            {
                title: 'Carrer foundry/(英)/UX UI Designer',
                url: 'https://careerfoundry.com/en/blog/ux-design/ux-design-course-online/'
            }
        ]
      },
      'cloud-engineer': {
        title:'クラウドエンジニア',
        img:'./img/cloud_engineer.png',
        description: [
            "クラウドエンジニアは、クラウドコンピューティングのインフラストラクチャとサービスを設計・構築・管理する専門家です。",
            "彼らは、Amazon Web Services（AWS）、Microsoft Azure、Google Cloud Platform（GCP）などのクラウドプロバイダーのサービスを活用して、スケーラブルで効率的なシステムを実現します。",
            "クラウドエンジニアは、サーバーレスアーキテクチャ、コンテナオーケストレーション、ストレージ・データベース管理などのクラウドネイティブな技術を用いて、ビジネス要件に応じた最適なソリューションを提供します。"],
        example:'事例：AWS、Google Cloud Platform、Microsoft Azure',
        learning: [
            {
                title:'AWS / AWSコース',
                url:'https://aws.amazon.com/jp/getting-started/?nc2=h_ql_le_gs',
            },
            {
                title:'GCP / GCPコース',
                url:'https://cloud.google.com/training?hl=ja',
            },
            {
                title:'Azure / Azureコース',
                url:'https://learn.microsoft.com/ja-jp/training/azure/',
            },
            {
                title:'Codecademy /(英)/ Cloud computing',
                url:'https://www.codecademy.com/learn/foundations-of-cloud-computing',
            },
        ]
      },
      'system-architect': {
        title:'システムアーキテクト',
        img:'./img/system_architect.png',
        description: [
            "システムアーキテクトは、情報システム全体の設計と構築に関わる専門家です。",
            "彼らは、ビジネス要件や技術的な制約を考慮して、システムの構成要素やインターフェース、データベース設計、ネットワーク設計などを策定し、組織のIT戦略に沿ったシステムの最適化を図ります。",
            "システムアーキテクトは、プロジェクトマネジメントやリスク評価、技術選定、ガバナンスポリシーの策定などの業務を通じて、システム開発プロジェクトの成功を支援します。"],
        example:'事例：エンタープライズアーキテクチャ、マイクロサービス設計、システム最適化',
        learning: [
            {
                title:'Udemy /(英) System architect',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=system+design',
            },
            {
                title: 'Cousera/(英)/System architect',
                url: 'https://www.coursera.org/search?query=system%20architect'
            },
            {
                title: 'Educative.io/(英)/System Designer',
                url: 'https://www.educative.io/explore?search=true&search_string=System+architect&free=false&pageNo=1'
            }
        ]
      },
      'hardware-engineer': {
        title:'ハードウェアエンジニア',
        img:'./img/hardware_engineer.png',
        description: [
            "ハードウェアエンジニアは、コンピュータや電子機器のハードウェア設計、開発、テストに従事する専門家です。",
            "彼らは、電子回路やプリント基板（PCB）の設計、マイクロプロセッサーやメモリデバイスの選定、製造プロセスの最適化など、ハードウェア製品の性能や信頼性を向上させるための技術的な解決策を開発します。",
            "ハードウェアエンジニアは、コンシューマー向け製品や産業用機器、自動車や航空宇宙などの分野で活躍し、技術革新や市場競争力の向上に貢献します。"],
        example:'事例：プロセッサ設計、メモリデバイス、ロボット工学',
        learning: [
            {
                title:'Udemy /(英) System architect',
                url:'https://www.udemy.com/courses/search/?src=ukw&q=Hardware+engineer',
            },
            {
                title: 'Cousera/(英)/Hardware engineer',
                url: 'https://www.coursera.org/search?query=hardware%20engineer'
            },
            {
                title: 'Educative.io/(英)/System Designer',
                url: 'https://www.educative.io/explore?search=true&search_string=Hardware+enigneer&free=false&pageNo=1'
            }
        ]

      },
    };

    const category = {
        'All':{
            memo:'',
            jobs: []
        },
        'Software':{
            memo:'ソフトウェアはソフトウェアにおける設計、開発',
            jobs: ['software-engineer','frontend-engineer','backend-engineer',
                     'fullstack-engineer', 'web-developer', 'mobile-engineer', 'embedded-engineer', 
                     'data-engineer', 'data-scientist', 'database-engineer', 'machine-learning-engineer', 
                     'security-engineer', 'devops-engineer','game-engineer',],
        },
        'Hardware':{
            memo:'',
            jobs: ['hardware-engineer','embedded-engineer', 'infrastructure-engineer', 'network-engineer'],
        },
        'Data':{ 
            memo:"",
            jobs: ['data-engineer', 'data-scientist', 'database-engineer', 'machine-learning-engineer'],
        },
        'Design':{ 
            memo:"",
            jobs: ['uxui-designer', 'system-architect'],
        },
        'Game':{ 
            memo:"",
            jobs: ['game-engineer'],
        },
        'Engineering':{ 
            memo:"",
            jobs: ['software-engineer','hardware-engineer','devops-engineer','system-architect', 'qa-engineer'],
        },
        'Infrastracture':{ 
            memo:"",
            jobs: [ 'infrastructure-engineer', 'network-engineer', 'security-engineer', 'devops-engineer'],
        }

    }
    
    const categoryContainer = document.getElementById('category-container')
    const container = document.getElementById('container')
    let jobCards = document.querySelectorAll('.job-card');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content')
    const modalTitle = document.getElementById('modal-title');
    const modalImg = document.getElementById('modal-img');
    let modalDescription = document.getElementById('modal-description');
    const modalExample = document.getElementById('modal-example');
    const modalMemo = document.getElementById('modal-memo')
    const modalUrl = document.getElementById('modal-url')
    const modalLearning = document.getElementById('modal-learning')

    for (let categoryK in category) {
        categoryContainer.innerHTML += `
            <button class="category-btn" >${categoryK}</button>
        `
    }
   
    categoryBtns = document.querySelectorAll(".category-btn")
    categoryBtns.forEach((categoryBtn) => {
        categoryBtn.addEventListener('click', ()=>{
            changeCategoryBtn(categoryBtn.innerHTML)
        })
    })

    container.innerHTML = allJobDis()

    addModalFeature()

    document.querySelector(".modal").addEventListener('click', ()=>{
        modal.style.display = 'none'
    })

    function changeCategoryBtn(key) {
        if ('All' == key) {
            container.innerHTML = allJobDis()
        } else {
            container.innerHTML = partJobDis(category[key])
        }
        addModalFeature()
    }

    function allJobDis() {
        let html = ''
        for (let jobKey in jobData){
            html += createCard(jobKey, jobData[jobKey])
        }
        return html
    }

    function partJobDis(categoryData){
        keys = categoryData.jobs

        let html = ''
        keys.forEach(key => {
            html += createCard(key, jobData[key])
        })
        return html
    }

    function createCard(id, data) {
        randomValue = getRandomInRange(0.2, 0.6)
        return `
        <div class="job-card animate" data-job-id="${id}" style='animation-delay: ${randomValue}s'>
            <img src="${data.img}" alt="${data.title}" width="100%" style="object-fit: cover; ">
            <h5>${data.title}</h5>
        </div>
        `
    }

    function createDescription(descriptions, id) {
        return `<p>${descriptions[0]}</p>
                <button id="read-more" class="read-more-btn" onclick="addDescription(event, '${id}')">Read more...</button>
        `
    }


    function addDescription(event, id) {
                
        event.stopPropagation();

        const descriptions = jobData[id].description
        let html = ``
        descriptions.forEach((des, idx) => {
            if (idx !== 0) {
                html += `
                <p>${des}</p>
                `
            }
        })

        let modalDescription = document.getElementById('modal-description')
        modalDescription.innerHTML = html
    }

    function createMemo(memo) {
        return `
        <div class="modal-learning-memo">
            ${memo}
        </div>
        `
    }

    function createModalLearnings(learnings, memo){
        let html = '<div class="modal-label">お勧めの学習サイト</div>\n'

        if (memo !== undefined) {
            html += createMemo(memo)
        } 

        learnings.forEach((learning, index) => {
            html += `
                <div class="modal-learning-card">
                    <div class="score">${index + 1}</div>
                    <div class="name">${learning.title}</div>
                    <div class="btn">
                        <a href="${learning.url}" target="_brank">学習GO!</a>
                    </div>
                </div>
            `
        })
        return html
    }

    function addModalFeature(){
        jobCards = document.querySelectorAll('.job-card');

        jobCards.forEach((jobCard) => {
        jobCard.addEventListener('click', () => {

            const jobId = jobCard.getAttribute('data-job-id');
            const id = jobCard.getAttribute('data-job-id')
            const data = jobData[id];

            modalTitle.textContent = data.title;
            modalImg.src = data.img;
            modalImg.alt = data.title;
            modalDescription.innerHTML = createDescription(data.description, id);
            modalExample.textContent = data.example;

            // learning
            if (Array.isArray(data.learning)){
                modalLearning.innerHTML = createModalLearnings(data.learning, data.memo)
            } else {
                modalLearning.innerHTML = ""
            }
            
            modal.style.display = 'flex';

            const readMoreBtn = document.getElementById('read-more')
            readMoreBtn.addEventListener('click', addDescription(id))
            

        });
        });
    }
    

    function getRandomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
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
    
    const portfolio = {
        "software-engineer": [
            {
                "title": "ToDoリストアプリ",
                "url": "https://qiita.com/bookma/items/aba1c616a518235edc4d",
                "description": "タスク管理ができるシンプルなアプリケーション。タスクの追加、削除、完了の機能がある。"
            },
            {
                "title": "簡易的なチャットアプリ",
                "url": "https://qiita.com/TowelMan-public/items/ace6cf893c3799445a4c",
                "description": "複数のユーザーがリアルタイムでチャットできるアプリケーション。WebSocketを使用して通信を行う。"
            },
            {
                "title": "ブログ投稿プラットフォーム",
                "url": "https://qiita.com/kimihiro_n/items/86e0a9e619720e57ecd8",
                "description": "ユーザーが記事を投稿・編集・削除できるブログプラットフォーム。記事の閲覧機能もある。"
            }
        ],
        "frontend-engineer": [
            {
                "title": "ポートフォリオWebサイト",
                "url": "https://qiita.com/OnodaSan/items/21cbb371bf1381fa5380",
                "description": "自分のスキルや経験を紹介するポートフォリオ用のウェブサイト。レスポンシブデザインでデバイスに適応。"
            },
            {
                "title": "イベント管理Webアプリ",
                "url": "https://qiita.com/mugendai23/items/cc7c609c572668ec1f3d",
                "description": "イベントの作成、編集、削除ができるイベント管理アプリ。参加者管理機能もある。"
            },
            {
                "title": "レスポンシブデザインのECサイトテンプレート",
                "url": "https://qiita.com/wadakatu/items/e9e9ff3a69a4228f967c",
                "description": "商品の閲覧・購入ができる電子商取引サイトのテンプレート。スマートフォンやタブレットにも対応。"
            }
        ],
        "backend-engineer": [
            {
                "title": "RESTful APIを使用した簡易的なWebサービス",
                "url": "https://qiita.com/mserizawa/items/1d7e5c97bb5cc8df917f",
                "description": "RESTful APIを使用してデータの作成、読み込み",
            },
            {
                "title": "リアルタイムチャットアプリ",
                "url": "https://qiita.com/dossy007/items/3ca1f2d270a0c909aba9",
                "description": "WebSocketを使用してリアルタイムにメッセージの送受信が可能なチャットアプリケーションのバックエンド開発。"
            },
            {
                "title": "GraphQL API開発",
                "url": "https://qiita.com/ryu_sei/items/731b96f9968da5e7ac88",
                "description": "GraphQLを使用したAPI開発。柔軟なクエリ言語により効率的なデータ取得が可能なバックエンドシステム。"
            }
        ],
        "fullstack-engineer": [
            {
                "title": "簡易的なECサイト",
                "url": "https://qiita.com/TsutomuNakamura/items/4986350c6df1f92c8fbb",
                "description": "商品の閲覧・購入ができる簡易的なECサイト。フロントエンドとバックエンドの両方を実装。"
            },
            {
                "title": "個人向け財務管理アプリ",
                "url": "https://qiita.com/higeaaa/items/3eae75c0d4545d920f2c",
                "description": "収入・支出を記録し、グラフで可視化する個人向け財務管理アプリ。カテゴリ別の集計も可能。"
            },
            {
                "title": "タスク管理ツール",
                "url": "https://techacademy.jp/magazine/21852",
                "description": "タスクの追加、削除、完了の機能があるシンプルなタスク管理ツール。フロントエンドとバックエンドを実装。"
            }
        ],
        "web-developer": [
            {
                "title": "自動ニュース集約サイト",
                "url": "https://qiita.com/higeaaa/items/b186k32e7d9cb0a78431",
                "description": "複数のニュースサイトから最新記事を自動で取得し、一覧表示するニュース集約サイト。"
            },
            {
                "title": "天気予報Webアプリ",
                "url": "https://www.webcreatorbox.com/tech/weather-app",
                "description": "現在地の天気情報や予報を表示する天気予報Webアプリ。外部APIを利用してデータを取得。"
            },
            {
                "title": "短縮URLサービス",
                "url": "https://qiita.com/mserizawa/items/1d7e5c97bb5cc8df917f",
                "description": "長いURLを短縮するサービス。生成された短縮URLから元のURLにリダイレクトされる。"
            }
        ],
        "mobile-engineer": [
            {
                "title": "簡単なゲームアプリ",
                "url": "https://codezine.jp/article/detail/7883",
                "description": "シンプルなゲームアプリ。例として、タップするとジャンプするキャラクターを操作するアプリ",
            },
            {
                "title": "音楽プレイヤーアプリ",
                "url": "https://tech.recruit-mp.co.jp/mobile/remember_iphone_music_player/",
                "description": "スマートフォン上で音楽を再生・管理するアプリケーション。プレイリスト機能や再生コントロールを実装。"
            },
            {
                "title": "ランニングトラッキングアプリ",
                "url": "https://developers-jp.googleblog.com/2018/10/maps-sdk-for-ios-242.html",
                "description": "GPSを利用してランニングルートや距離、速度を記録するアプリケーション。リアルタイムでの位置情報の取得とデータ分析。"
            }

        ],
        "embedded-engineer": [
            {
                "title": "温度センサーデータの表示",
                "url": "https://www.mgo-tec.com/blog-entry-raspberry-pi-adc.html",
                "description": "温度センサーを使って実際の温度データを取得し、ディスプレイに表示する組み込みシステム。"
            },
            {
                "title": "自動植物水やりシステム",
                "url": "https://deviceplus.jp/hobby/automatic-watering-system-for-plants/",
                "description": "土壌の湿度センサーを利用して、植物に水を自動で与えるシステム。マイコンボードを使用。"
            },
            {
                "title": "スマートホーム制御システム",
                "url": "https://www.rs-online.com/designspark/smart-home-jp",
                "description": "組み込みデバイスを使って家電や照明を制御するスマートホームシステム。スマートフォンから操作可能。"
            }
        ],
        "data-engineer": [
            {
                "title": "データ収集・分析・可視化ツール",
                "url": "https://qiita.com/keisuke-umezawa/items/6d2ff6d073c8a4aa6c25",
                "description": "外部APIやスクレイピングでデータを収集し、分析して可視化するデータエンジニアリング用のツール。"
            },
            {
                "title": "リアルタイムダッシュボード",
                "url": "https://qiita.com/ishizakiiii/items/29e860f607a02052e129",
                "description": "リアルタイムデータを収集・分析し、ダッシュボードで可視化するシステム。Webフロントエンドを使用。"
            },
            {
                "title": "データベース最適化ツール",
                "url": "https://www.atmarkit.co.jp/ait/articles/1606/10/news016.html",
                "description": "データベースのパフォーマンスを測定・最適化するためのツール。クエリやインデックスの改善提案。"
            }
        ],
        "data-scientist": [
            {
                "title": "機械学習による画像分類",
                "url": "https://qiita.com/icoxfog417/items/5fd55fad152231d706c1",
                "description": "機械学習を使用して画像を分類するアプリケーション。画像データセットを学習し、新しい画像を識別。"
            },
            {
                "title": "自然言語処理による文章要約",
                "url": "https://qiita.com/shibuiwilliam/items/d27e14fca0e1d0a3b2e2",
                "description": "自然言語処理技術を用いて長い文章を要約するアプリケーション。抽出型要約や生成型要約が可能。"
            },
            {
                "title": "時系列データ予測",
                "url": "https://www.procrasist.com/entry/15-time_series_forecasting",
                "description": "時系列データを分析し、将来のデータを予測するアプリケーション。株価や気象データなどの予測に利用。"
            }
        ],
        "database-engineer": [
            {
                "title": "データベース管理ツール",
                "url": "https://www.atmarkit.co.jp/ait/articles/1703/01/news039.html",
                "description": "データベースの管理や監視を行うためのツール。パフォーマンスチューニングやクエリ最適化のサポート。"
            },
            {
                "title": "データマイグレーションスクリプト",
                "url": "https://qiita.com/tarosa/items/9a2f98e1dbb1d8e26a7a",
                "description": "異なるデータベースシステム間でデータを移行するためのスクリプト。データ構造の変換やエラー処理。"
            },
            {
                "title": "データベースバックアップツール",
                "url": "https://www.atmarkit.co.jp/ait/articles/1801/22/news018.html",
                "description": "データベースの定期的なバックアップを行うためのツール。差分バックアップや圧縮機能をサポート。"
            }
        ],
        "machine-learning-engineer": [
            {
                "title": "手書き数字認識アプリ",
                "url": "https://qiita.com/kurumen-b/items/236c625f33dd10a8fd3f",
                "description": "機械学習を用いて手書き数字を認識するアプリケーション。MNISTデータセットを学習して識別。"
            },
            {
                "title": "レコメンデーションエンジン",
                "url": "https://qiita.com/keitakurita/items/df3a073d447c10450b2f",
                "description": "機械学習を利用してユーザーの嗜好に合った商品やコンテンツを推薦するレコメンデーションエンジン。"
            },
            {
                "title": "異常検出システム",
                "url": "https://qiita.com/FukuharaYohei/items/13d13b1ec0f66bc6b17d",
                "description": "機械学習を利用してデータの異常を検出するシステム。センサーデータやログデータの異常を検出。"
            }
        ],
        "network-engineer": [
            {
                "title": "ネットワーク監視ダッシュボード",
                "url": "https://qiita.com/suin/items/8ac3c3b3e1a7b3f3d2ff",
                "description": "ネットワークの状況をリアルタイムで監視し、ダッシュボードで表示するシステム。トラフィック量やエラーを可視化。"
            },
            {
                "title": "VPN構築ツール",
                "url": "https://qiita.com/terassyi/items/86f25035d7e3b3d8de37",
                "description": "企業内ネットワークへの安全なアクセスを提供するためのVPN構築ツール。セキュリティやパフォーマンスを考慮。"
            },
            {
                "title": "ネットワークトポロジー可視化",
                "url": "https://qiita.com/konabuta/items/4b0c8f22d1b63d73e4f0",
                "description": "ネットワーク機器間の接続状況を自動で検出し、ネットワークトポロジーを可視化するツール。効率的なネットワーク管理を支援。"
            }
        ],
        "security-engineer": [
            {
                "title": "Webアプリケーションファイアウォール",
                "url": "https://qiita.com/hnw/items/3f3d1d66fd4e4dbbb04d",
                "description": "Webアプリケーションへの不正なアクセスを検出・防御するためのファイアウォール機能を実装。"
            },
            {
                "title": "脆弱性スキャナー",
                "url": "https://qiita.com/sawanoboly/items/dce7d83952c4f4a1334e",
                "description": "システムの脆弱性を自動で検出し、修正案を提案するセキュリティスキャナー。"
            },
            {
                "title": "二要素認証システム",
                "url": "https://www.ipentec.com/document/two-step-authentication-implementation",
                "description": "ユーザーアカウントのセキュリティを強化するための二要素認証システム。パスワードとワンタイムパスワードを組み合わせた認証。"
            }
        ],
        "devops-engineer": [
            {
                "title": "CI/CDパイプライン構築",
                "url": "https://qiita.com/awakia/items/6497c1e2e7d1c6e9f7b5",
                "description": "コードの自動テストとデプロイを行うCI/CDパイプラインを構築。効率的な開発プロセスを実現。"
            },
            {
                "title": "自動インフラ構築ツール",
                "url": "https://qiita.com/minamijoyo/items/1f57c62bed781ab8f4d7",
                "description": "クラウド上のインフラ構成をコードで管理し、自動的に構築・更新するためのツール。インフラ管理の効率化。"
            },{
                "title": "ログ分析ツール",
                "url": "https://www.sbbit.jp/article/cont1/34888",
                "description": "システムのログを収集・分析し、異常やパフォーマンス問題を検出するためのツール。効果的な運用監視を支援。"
            }
        ],
        "infrastructure-engineer": [
            {
                "title": "サーバーレスアーキテクチャ構築",
                "url": "https://qiita.com/ijufumi/items/9ad9b4d971c3a0713e15",
                "description": "サーバーレス技術を利用して、スケーラブルで効率的なインフラアーキテクチャを構築。"
            },
            {
                "title": "コンテナオーケストレーション",
                "url": "https://qiita.com/y-ohgi/items/0c6a7e4d61e11737bb1e",
                "description": "コンテナ技術を活用し、アプリケーションのデプロイやスケーリングを効率化するオーケストレーションシステム。"
            },
            {
                "title": "分散ストレージシステム",
                "url": "https://qiita.com/nejiko96/items/91aa4b4f142d5c041b97",
                "description": "分散されたノード上でデータを効率的に管理するための分散ストレージシステム。データ耐久性と可用性の向上。"
            }
        ],
        "qa-engineer": [
            {
                "title": "自動テストフレームワーク",
                "url": "https://qiita.com/shimajiri/items/cf7ccf69d184fdb2fb26",
                "description": "アプリケーションの自動テストを行うためのテストフレームワーク。バグの早期発見と品質の向上。"
            },
            {
                "title": "パフォーマンステストツール",
                "url": "https://www.sbbit.jp/article/cont1/38766",
                "description": "システムのパフォーマンスを評価するための負荷テストツール。レスポンスタイムや同時接続数を測定。"
            },
            {
                "title": "モバイルアプリテスト環境",
                "url": "https://qiita.com/takeshi_sorimachi/items/ee486c653f9ec0490df0",
                "description": "モバイルアプリのテストを効率化するための環境構築。複数のデバイスやOSに対応したテストを実施。"
            }
        ],
        "game-engineer": [
            {
                "title": "2Dアクションゲーム",
                "url": "https://qiita.com/taptappun/items/0f8e997c6d5494236c8f",
                "description": "シンプルな2Dアクションゲームの開発。キャラクターの操作や敵キャラクター、アイテムの実装。"
            },
            {
                "title": "パズルゲーム",
                "url": "https://qiita.com/sorairo_111/items/6f12d6e11b6f1ebe5e5d",
                "description": "簡単なパズルゲームの開発。ボード上のピースを操作し、目標に合わせて消すゲーム。"
            },
            {
                "title": "シューティングゲーム",
                "url": "https://qiita.com/2dgames_jp/items/11bb76167fb44b1f6f1e",
                "description": "縦スクロールシューティングゲームの開発。プレイヤーの操作、敵キャラクター、アイテム、弾の実装。"
            }
        ],
        "uxui-designer": [
            {
                "title": "ウェブサイトリデザイン",
                "url": "https://www.webcreatorbox.com/tech/redesign",
                "description": "既存のウェブサイトのUI/UXを改善し、ユーザビリティとデザイン性を向上させるリデザインプロジェクト。"
            },
            {
                "title": "モバイルアプリUIデザイン",
                "url": "https://www.webcreatorbox.com/tech/mobile-ui-design",
                "description": "モバイルアプリのUIデザインを行う。画面遷移やアイコン、カラースキームの設計。"
            },
            {
                "title": "ダッシュボードデザイン",
                "url": "https://note.com/motchyslide/n/n5a5482e1ff8a",
                "description": "データを視覚化するダッシュボードのデザイン。情報を分かりやすく伝えるレイアウトやグラフの設計。"
            }
        ],
        "cloud-engineer": [
            {
                "title": "サーバーレスAPI開発",
                "url": "https://qiita.com/kai_kou/items/c47b8f1a0dfc6d1c6b9d",
                "description": "クラウド上でサーバーレス環境を利用したAPIの開発。スケーラブルでコスト効率の良いシステム構築。"
            },
            {
                "title": "IoTデータ収集・分析システム",
                "url": "https://qiita.com/r-wakatsuki/items/2aa7b4a4d4a7f8df35e4",
                "description": "クラウド上でIoTデバイスからデータを収集・分析するシステム。リアルタイムにデータを扱うアプリケーション。"
            },
            {
                "title": "クラウドネイティブアプリケーション開発",
                "url": "https://www.atmarkit.co.jp/ait/articles/1806/25/news035.html",
                "description": "クラウド環境に最適化されたアプリケーションの開発。スケーラビリティや運用効率の向上。"
            }
        ],
        "system-architect": [
            {
                "title": "マイクロサービスアーキテクチャ設計",
                "url": "https://qiita.com/NagaokaKenichi/items/1aa7cf3e0d0e7e9d9a21",
                "description": "マイクロサービスアーキテクチャを採用したシステム設計。独立したサービス間で連携し、スケーラブルで柔軟なシステム構築。"
            },
            {
                "title": "分散データベース設計",
                "url": "https://qiita.com/nejiko96/items/91aa4b4f142d5c041b97",
                "description": "データを複数のノードに分散させることで、耐障害性とパフォーマンスを向上させる分散データベースの設計。"
            },
            {
                "title": "APIゲートウェイ設計",
                "url": "https://qiita.com/TsuyoshiUshio@github/items/8c3e3c2dd075dcbcfaee",
                "description": "複数のAPIを統合し、効率的に管理・運用するためのAPIゲートウェイの設計。セキュリティやパフォーマンスの向上。"
            }
        ],
        "hardware-engineer": [
            {
                "title": "IoTデバイス開発",
                "url": "https://www.makershub.jp/learn/iot",
                "description": "インターネットに接続可能なIoTデバイスの開発。センサーやアクチュエータを組み合わせたハードウェア設計。"
            },
            {
                "title": "ロボット制御システム",
                "url": "https://qiita.com/rukihena/items/d165b6f9d6e3bd6b2e6e",
                "description": "モーターやセンサーを利用したロボットの制御システムの開発。アクチュエータの駆動やセンサーデータの処理。"
            },
            {
                "title": "組み込みシステム開発",
                "url": "https://qiita.com/denkiuo604/items/3e60b2c3e9d7b9f129d8",
                "description": "特定の機能を持つ組み込みシステムの開発。"
            },
        ]
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
    const modalPortfolio = document.getElementById('modal-portfolio')

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

    function createPortfolio(portfolios){
        let html = '<div class="modal-label">ポートフォリオ例</div>\n'

        portfolios.forEach((portfolio, index) => {
            html += `
            <div class="modal-portfolio-card">
                <div class="title">${index + 1}. ${portfolio.title}</div>
                <div class="description">${portfolio.description}</div>
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
            
            // portfolio
            if (Array.isArray(portfolio[id])){
                modalPortfolio.innerHTML = createPortfolio(portfolio[id])
            } else {
                modalPortfolio.innerHTML = ""
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
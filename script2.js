// ===================================================
// script2.js — 資訊圖 Prompt 生成器 v2
// ---------------------------------------------------
// DATA 說明
//   options.items：[值, 說明]
//   ex：範例圖，id 對應 images/C{id}.jpg（ChatGPT）與 images/G{id}.jpg（Gemini）
//       ai 預設 "CG"（兩張都有）；只有一張時寫 "C" 或 "G"
//   新增範例圖：在該風格的 ex 加一行 { id:"x-x-x", t:"小標", d:"說明" } 即可
// ===================================================
const GROUPS = ["精準資訊視覺化","手工溫度","3D 立體造型","插畫敘事","版面結構"];
const SIZES  = ["橫向 16:9","直式 3:4","方形 1:1","A4 直式"];

const STYLES = [
  { id:1, name:"極簡向量插畫風格", group:"精準資訊視覺化", cover:"C1-1-1",
    short:"SVG 圖示感，適合 SOP 流程", desc:"幾何平整、線條簡潔，適合企業報告與數據說明",
    options:[
      { g:"整體風格", type:"radio", key:"style_main", items:[
        ["幾何平整構成","以幾何形狀為主體，結構清晰"],["極簡線條","線條構成為主，去除多餘裝飾"],
        ["企業曼非斯風","配色柔和無輪廓線，具科技新創的極簡感"],["可愛粉嫩風","線條圓潤，色調粉嫩溫馨，加入卡通圖案元素"]]},
      { g:"配色方案", type:"radio", key:"color", items:[
        ["三色限定","全圖不超過三個主色，視覺乾淨俐落"],["莫蘭迪色調","低飽和、灰調柔和，優雅沉穩"],["高對比雙色","強烈對比，視覺衝擊力強"]]},
      { g:"細節修飾", type:"checkbox", key:"detail", items:[
        ["無陰影無漸層","保持純平面感，避免立體效果"],["SVG 圖示質感","圖示乾淨銳利，適合數位輸出"]]}
    ],
    ex:[
      { id:"1-1-1", t:"幾何平整構成：幾何形狀為主體，線條清晰，色塊平整無漸層", d:"【主題：2026企業數位轉型趨勢 / 副標題：AI × 自動化 × 雲端】<br>【版面：網格矩陣 / 補充描述：科技企業、藍白色系、專業圖示】" },
      { id:"1-1-2", t:"企業曼非斯風：配色柔和無輪廓線，具科技新創的極簡感", d:"【主題：電商會員消費分析 / 副標題：新客 vs 舊客比較】<br>【版面：左右對比 / 補充描述：KPI、圖表、商業報告感】" },
      { id:"1-1-3", t:"可愛粉嫩風：線條圓潤，色調粉嫩溫馨，加入卡通圖案元素", d:"【主題：新創品牌識別設計指南 / 副標題：色彩、字型、空間的科技美學】<br>【版面：中心對焦 / CTA：追蹤我們獲取更多設計靈感】" },
      { id:"1-1-4", t:"可愛粉嫩風：線條圓潤，色調粉嫩溫馨，加入卡通圖案元素", d:"【主題：兒童健康飲食指南 / 副標題：多吃蔬果少糖飲】<br>【版面：中心對焦 / 補充描述：追蹤我們獲取更多設計靈感】" }
    ]},
  { id:2, name:"專業科學繪圖風格", group:"精準資訊視覺化", cover:"G1-2-2",
    short:"剖面與分解，學術研究專用", desc:"精確標注、圖解清晰，適合技術說明與學術用途",
    options:[
      { g:"圖解類型", type:"radio", key:"diagram_type", items:[
        ["剖面分解圖","展示內部結構，拆解元件關係"],["技術說明圖","步驟流程、系統架構說明"],["生物醫學圖解","人體、細胞、分子等醫學視覺化"]]},
      { g:"標示風格", type:"checkbox", key:"annotation", items:[
        ["箭頭標注","以引線指向各部位說明"],["圖例說明","附上色彩或符號對照說明"]]},
      { g:"視覺風格", type:"radio", key:"visual_style", items:[
        ["黑白線稿","純線條繪製，學術論文風格"],["功能性配色","以色彩區分功能區域或類別"]]}
    ],
    ex:[
      { id:"1-2-1", t:"剖面分解圖：步驟流程、系統架構說明", d:"【主題：工業馬達結構全解析 / 副標題：轉子、定子、軸承一次看懂】<br>【版面：步驟分解版型 / 補充描述：索取技術規格手冊】" },
      { id:"1-2-2", t:"技術說明圖：展示內部結構，拆解元件關係，箭頭標注清晰", d:"【主題：半導體製程 12 道工序 / 副標題：從矽晶圓到封裝測試全紀錄】<br>【版面：蛇形流程 / CTA：聯絡工程顧問團隊】" },
      { id:"1-2-3", t:"生物醫學圖解：人體、細胞、分子等醫學視覺化，功能性配色", d:"【主題：心臟血管疾病預防指南 / 副標題：認識動脈硬化 × 三高管理】<br>【版面：AI自動排版 / CTA：預約免費健康諮詢】" }
    ]},
  { id:3, name:"現代數據儀表板風", group:"精準資訊視覺化", cover:"C1-3-2",
    short:"UI/UX 感，發光數據節點", desc:"Dashboard UI 風格，適合呈現 KPI、數據報告",
    options:[
      { g:"介面風格", type:"radio", key:"ui_theme", items:[
        ["深色儀表板","深底色，數字醒目，科技感強"],["淺色儀表板","白底清爽，商務報告常用"],["科技介面感","帶科幻感線框，未來感強烈"]]},
      { g:"圖表元件", type:"checkbox", key:"chart_type", items:[
        ["折線圖 / 曲線圖","趨勢變化、時間序列"],["圓餅圖 / 環形圖","比例分配、結構呈現"],
        ["數字卡片（KPI）","大字顯示關鍵數字指標"],["長條圖","類別比較、排行呈現"]]}
    ],
    ex:[
      { id:"1-3-1", t:"深色儀表板：深底色，數字醒目，科技感強，適合 KPI 展示", d:"【主題：Q3 電商銷售 KPI 總覽 / 副標題：GMV、轉換率、客單價三大指標】<br>【版面：便當盒排版 / CTA：查看完整季度報告】" },
      { id:"1-3-2", t:"淺色儀表板：白底清爽，商務報告常用，圓餅圖與長條圖組合", d:"【主題：年度人資數據全盤點 / 副標題：留任率、滿意度、培訓時數】<br>【版面：網格矩陣 / 重點訊息：下載 HR Dashboard 模板】" },
      { id:"1-3-3", t:"科技介面感：帶科幻感線框，未來感強烈", d:"【主題：AI 監控系統即時數據流 / 副標題：99.97% 精準度 × 0.3s 響應】<br>【版面：中心對焦 / 重點訊息：申請 30 天免費試用】" }
    ]},
  { id:4, name:"微霧玻璃質感（Glassmorphism）", group:"精準資訊視覺化", cover:"C1-4-2",
    short:"高階質感，半透明磨砂效果", desc:"磨砂半透明效果，現代感強，適合科技品牌",
    options:[
      { g:"材質效果", type:"checkbox", key:"material", items:[
        ["磨砂半透明","毛玻璃模糊效果，層次通透"],["層疊堆疊感","多層卡片疊放，空間深度感"],["柔和背光","邊緣發光，輕微光暈氛圍"]]},
      { g:"背景搭配", type:"radio", key:"bg", items:[
        ["深色漸層背景","深色底色更突顯玻璃通透感"],["柔色背景","淡色調背景，輕盈優雅"]]}
    ],
    ex:[
      { id:"1-4-2", ai:"C", t:"層疊堆疊感：多層卡片疊放，空間深度感", d:"【主題：正念冥想入門 5 步驟 / 副標題：每天 10 分鐘找回內心平靜】<br>【版面：便當盒排版 / 補充描述：加入每日冥想挑戰】" },
      { id:"1-4-1", ai:"G", t:"磨砂半透明：毛玻璃模糊效果", d:"【主題：雲端 SaaS 解決方案 / 副標題：安全、彈性、隨時擴充】<br>【版面：中心對焦 / CTA：立即體驗 Demo】" }
    ]},
  { id:5, name:"手繪感筆記風格", group:"手工溫度", cover:"C2-1-4",
    short:"鉛筆草稿感，教學知識圖解", desc:"手感筆觸溫暖，適合教育內容與個人品牌",
    options:[
      { g:"筆觸類型", type:"radio", key:"stroke", items:[
        ["鉛筆草稿感","鉛筆線條，帶有輕微素描紋路"],["鋼筆線稿","流暢俐落，線條有粗細變化"],
        ["手寫筆跡","手寫文字融入圖解，親切感強"],["塗鴉插圖風","隨性塗鴉，活潑帶童趣"]]},
      { g:"背景質感", type:"radio", key:"paper", items:[
        ["空白筆記本頁","乾淨空白頁面，聚焦圖解"],["橫線筆記紙","帶橫線的筆記本頁感"],["方格紙","工程師、數學風格格紙"]]},
      { g:"排版結構", type:"radio", key:"layout", items:[
        ["線性流程圖","箭頭連接的步驟流程"],["心智圖結構","放射狀分支，發散思考"]]}
    ],
    ex:[
      { id:"2-1-1", t:"鉛筆草稿感：鉛筆線條帶輕微素描紋路", d:"【主題：產品設計草圖思維導圖 / 副標題：從用戶痛點到功能原型】<br>【版面：心智圖結構 / 重點訊息：分享給你的設計夥伴】" },
      { id:"2-1-2", t:"鋼筆線稿：流暢俐落，線條有粗細變化", d:"【主題：台灣百年建築演進史 / 副標題：1895 至今 × 風格與工法變遷】<br>【版面：垂直時間軸 / 重點訊息：下載完整時間軸海報】" },
      { id:"2-1-3", t:"手寫筆跡：手寫文字融入圖解，親切感強", d:"【主題：老闆の工作筆記本 / 副標題：這週學到的 3 件事】<br>【版面：AI 自動優化 / 補充描述：追蹤分享職場成長日記】" },
      { id:"2-1-4", t:"塗鴉插圖風：隨性塗鴉，活潑帶童趣", d:"【主題：小學生的科學小教室 / 副標題：植物如何把陽光變食物？】<br>【版面：中心對焦 / 補充描述：訂閱每週知識漫畫】" }
    ]},
  { id:6, name:"白板／黑板板書風格", group:"手工溫度", cover:"C2-2-1",
    short:"馬克筆板書，腦力激盪感", desc:"教學板書風格，適合說明、教學、腦力激盪",
    options:[
      { g:"板面類型", type:"radio", key:"board_type", items:[
        ["白板馬克筆風","亮白底色，彩色粗馬克筆線條"],["黑板粉筆風","深綠底色，白粉筆手寫，帶粉塵質感"]]},
      { g:"筆跡風格", type:"radio", key:"stroke_style", items:[
        ["粗獷隨性","筆觸不規則，即興感強"],["整齊板書","排列有序，教學講義感"],["腦力激盪感","想法四散、氣泡箭頭，發散構思"]]}
    ],
    ex:[
      { id:"2-2-1", t:"粗獷隨性：筆觸不規則，即興感強", d:"【主題：化學反應式圖解課 / 副標題：氧化、還原、酸鹼一次弄懂】<br>【版面：AI 自動優化 / 重點訊息：下載課程筆記 PDF】" },
      { id:"2-2-2", t:"整齊板書：排列有序，教學講義感", d:"【主題：Python 學習地圖 / 副標題：Beginner Roadmap】<br>【版面：AI 自動優化 / 重點訊息：學習筆記感】" },
      { id:"2-2-3", t:"腦力激盪感：想法四散、氣泡箭頭，發散構思", d:"【主題：新產品上市腦力風暴 / 副標題：10 個切入市場的創新角度】<br>【版面：AI自動排版 / 重點訊息：帶這張圖去開會！】" }
    ]},
  { id:7, name:"3D 黏土質感", group:"3D 立體造型", cover:"C3-1-1",
    short:"手工捏製感，溫暖立體造型", desc:"手工捏製感的 3D 造型，溫暖可愛，現代插畫趨勢",
    options:[
      { g:"材質風格", type:"checkbox", key:"clay_material", items:[
        ["手工捏製感","不規則邊緣，定格動畫質感"],["光滑啞光黏土","表面細緻，無明顯反光"],["圓潤有機造型","膨脹飽滿的圓弧形態"]]},
      { g:"配色氛圍", type:"radio", key:"color_mood", items:[
        ["粉嫩糖果色","薄荷綠、奶油橙，清甜可口"],["暖色溫馨調","蜜桃、奶油黃，溫暖居家感"]]},
      { g:"燈光設定", type:"checkbox", key:"lighting", items:[
        ["柔和工作室燈光","室內暖光，陰影柔和均勻"],["高品質 3D 渲染","電影級打光，渲染精細"]]}
    ],
    ex:[
      { id:"3-1-1", t:"粉嫩糖果色：薄荷綠、奶油橙，清甜可口", d:"【主題：甜點店新品上架囉！ / 副標題：草莓塔 × 焦糖布丁 × 抹茶捲】<br>【版面：便當盒排版 / CTA：加入早鳥候位名單】" },
      { id:"3-1-2", t:"暖色溫馨調：蜜桃、奶油黃，溫暖居家感", d:"【主題：寶寶副食品添加指南 / 副標題：4-6 個月黃金期 × 食材安全清單】<br>【版面：網格矩陣 / 重點訊息：下載嬰幼兒飲食時間表】" }
    ]},
  { id:8, name:"盲盒公仔風格", group:"3D 立體造型", cover:"C3-2-1",
    short:"Q 版比例，潮玩收藏品質感", desc:"潮玩收藏品質感，Q 版可愛角色設計",
    options:[
      { g:"角色造型", type:"checkbox", key:"char_style", items:[
        ["Q 版比例","大頭小身，卡通收藏品比例"],["大眼表情","誇張大眼，表情豐富可愛"],["站姿展示","正面站立展示，商品攝影角度"]]},
      { g:"材質完成度", type:"checkbox", key:"finish", items:[
        ["光滑啞光材質","消光塑膠感，盲盒標準質感"],["精緻收藏品質感","工藝品細節，設計師玩具感"],["乾淨白底展示","白色背景，商品照風格"]]}
    ],
    ex:[
      { id:"3-2-1", t:"Q版比例 ＋ 大眼表情", d:"【主題：職場人設大調查 / 副標題：你是哪一款工作星座？】<br>【版面：中心對焦 / CTA：留言說說你的款式】" },
      { id:"3-2-2", t:"站姿展示 ＋ 精緻收藏品質感", d:"【主題：限量公仔 Series 02 開箱 / 副標題：12 款職業角色 × 全台限量 500 套】<br>【版面：網格矩陣 / CTA：官網即日起開放預購】" }
    ]},
  { id:9, name:"積木風格", group:"3D 立體造型", cover:"C3-3-2",
    short:"樂高顆粒質感，模組堆疊造型", desc:"積木堆疊造型，親切有趣，適合教學與兒童主題",
    options:[
      { g:"材質細節", type:"checkbox", key:"brick_detail", items:[
        ["樂高顆粒質感","頂部顆粒突起，ABS 塑膠感"],["方塊堆疊結構","體素風格，模組化組合"],["塑膠光澤感","表面反光，玩具質感"]]},
      { g:"配色方案", type:"radio", key:"brick_color", items:[
        ["飽和原色","紅黃藍綠，經典玩具色彩"],["粉彩積木色","柔和淡色，清新現代感"]]}
    ],
    ex:[
      { id:"3-3-1", t:"飽和原色積木：頂部顆粒突起，紅黃藍綠經典玩具配色／樂高顆粒質感", d:"【主題：積木式學習金字塔 / 副標題：聆聽 → 理解 → 應用 → 創造】<br>【版面：層級金字塔 / CTA：報名暑期 STEAM 工作坊】" },
      { id:"3-3-2", t:"粉彩積木色：柔和淡色積木，清新現代感／塑膠光澤感", d:"【主題：親子共玩新體驗 / 副標題：培養空間感 × 邏輯力 × 創造力】<br>【版面：便當盒排版 / CTA：立即加入親子玩樂社群】" }
    ]},
  { id:10, name:"等距視角微縮風格", group:"3D 立體造型", cover:"C3-4-1",
    short:"45° 等距視角，可愛微縮場景", desc:"45度等距視角，可愛微縮場景，適合流程地圖",
    options:[
      { g:"視角設定", type:"radio", key:"iso_view", items:[
        ["標準等距角度","45度平行透視，無消失點"],["俯瞰微縮場景","鳥瞰小人國場景，立體俯視"]]},
      { g:"場景風格", type:"radio", key:"scene_type", items:[
        ["辦公室 / 工作場景","桌椅人物，職場生活感"],["城市建築場景","微縮城市，建築街道"],["流程路徑圖","步驟旅程地圖，3D 流程圖"]]}
    ],
    ex:[
      { id:"3-4-1", t:"標準等距角度：45度平行透視，無消失點／辦公室工作場景", d:"【主題：混合辦公模式設計指南 / 副標題：遠端 ＋ 實體協作最佳實踐】<br>【版面：便當盒排版 / CTA：下載辦公空間規劃手冊】" },
      { id:"3-4-2", t:"俯瞰微縮場景：鳥瞰小人國場景，立體俯視／城市建築場景", d:"【主題：智慧城市基礎建設全圖解 / 副標題：感測器、5G、AI 如何串聯城市】<br>【版面：中心對焦 / 補充描述：探索更多城市科技內容】" },
      { id:"3-4-3", t:"流程路徑圖：步驟旅程地圖，3D 流程圖，俯瞰小人國視角", d:"【主題：新進員工 30 天上手地圖 / 副標題：報到 → 培訓 → 試作 → 獨立作業】<br>【版面：蛇形流程 / 重點訊息：列印張貼在你的工位上】" }
    ]},
  { id:11, name:"社論雜誌插畫感", group:"插畫敘事", cover:"G4-1-2",
    short:"水彩渲染，編輯質感構圖", desc:"雜誌插圖質感，適合內容行銷與專題報導",
    options:[
      { g:"繪畫技法", type:"radio", key:"paint_style", items:[
        ["水彩渲染","色彩暈染，柔和筆觸"],["厚塗油畫感","濃郁筆觸，色塊大膽"],["復古報紙風","1950 年代海報風，泛黃紙張感"]]},
      { g:"構圖氛圍", type:"radio", key:"composition", items:[
        ["雜誌封面構圖","強烈主視覺，編輯排版感"],["敘事意境感","隱喻式視覺，概念藝術方向"]]}
    ],
    ex:[
      { id:"4-1-1", t:"水彩渲染：色彩暈染，柔和筆觸／雜誌封面構圖：強烈主視覺", d:"【主題：氣候變遷的顏色 / 副標題：用色彩說一個地球的故事】<br>【版面：雜誌封面構圖 / 重點訊息：閱讀完整專題報導】" },
      { id:"4-1-2", t:"厚塗油畫：濃郁筆觸，色塊大膽／雜誌封面構圖：強烈主視覺", d:"【主題：台灣百工百業人物誌 / 副標題：漁村、茶山、工廠裡的職人精神】<br>【版面：雜誌封面構圖 / 重點訊息：加入訂閱支持在地創作】" },
      { id:"4-1-3", t:"復古報紙風：1950 年代海報風，泛黃紙張感／敘事意境感：隱喻式視覺，概念藝術方向", d:"【主題：1950 vs 2026 物價大比較 / 副標題：一碗麵、一杯珍奶、一戶房子】<br>【版面：左右對比 / 重點訊息：留言你覺得哪個時代比較好過】" }
    ]},
  { id:12, name:"日系動漫風格", group:"插畫敘事", cover:"G4-2-1",
    short:"賽璐珞著色，高飽和動漫色", desc:"動漫美學，適合角色主導的說明與品牌吉祥物",
    options:[
      { g:"繪製技法", type:"radio", key:"anime_style", items:[
        ["賽璐珞著色","平塗上色，硬邊陰影，動畫感"],["高飽和動漫色","鮮豔高飽和，視覺衝擊強"],["漫畫可愛風","可愛吉祥物風，適合衛教內容"]]},
      { g:"角色風格", type:"radio", key:"char_type", items:[
        ["戲劇性動作感","誇張動作、豐富表情"],["可愛角色為主","Q 版動漫角色，Kawaii 風格"]]}
    ],
    ex:[
      { id:"4-2-1", t:"賽璐珞著色：平塗上色，硬邊陰影，動畫感／戲劇性動作感：誇張動作、豐富表情", d:"【主題：電競賽事開幕倒數 / 副標題：32 強激戰 × 總獎金百萬】<br>【版面：中心對焦 / CTA：立即搶票入場】" },
      { id:"4-2-2", t:"高飽和動漫色：鮮豔高飽和，視覺衝擊強／戲劇性動作感：誇張動作、豐富表情", d:"【主題：夏日祭典開放報名！ / 副標題：煙火、浴衣、棉花糖、祈願燈籠】<br>【版面：便當盒排版 / 重點訊息：掃碼報名夏日限定活動】" },
      { id:"4-2-3", t:"漫畫可愛風：可愛吉祥物風格，適合衛教內容／可愛角色為主：Q 版動漫角色，Kawaii 風格", d:"【主題：打疫苗不可怕！小朋友安心指南 / 副標題：注射前、中、後的 Q&A 全解答】<br>【版面：便當盒排版 / 重點訊息：帶這張圖去打疫苗】" }
    ]},
  { id:13, name:"日系清新風格", group:"插畫敘事", cover:"G4-3-1",
    short:"粉彩淡雅，充足留白，療癒氛圍", desc:"淡雅柔和，留白優雅，適合生活、健康、親子主題",
    options:[
      { g:"色調風格", type:"checkbox", key:"jp_color", items:[
        ["粉彩淡雅色調","低飽和粉色系，日本插畫氛圍"],["柔焦質感","輕微模糊邊緣，夢幻光線感"],["充足留白","大量空白，讓視覺自然呼吸"]]},
      { g:"主題氛圍", type:"radio", key:"jp_theme", items:[
        ["生活健康感","療癒舒適，平易近人的調性"],["親子溫馨感","溫暖家庭感，友善兒童視角"]]}
    ],
    ex:[
      { id:"4-3-1", t:"粉彩淡雅色調：低飽和粉色系，日本插畫氛圍／生活健康感：療癒舒適，平易近人的調性", d:"【主題：每日飲食 ×10 色蔬果攻略 / 副標題：天然食材的顏色就是你的健康密碼】<br>【版面：AI 自動優化 / 重點訊息：關注每週食譜更新】" },
      { id:"4-3-2", t:"柔焦質感：輕微模糊邊緣，夢幻光線感／親子溫馨感：溫暖家庭感，友善兒童視角", d:"【主題：孩子的成長里程碑 / 副標題：0-6 歲大腦發育關鍵期一覽】<br>【版面：垂直時間軸 / 重點訊息：保存這張圖給每位新手父母】" }
    ]},
  { id:14, name:"便當盒排版法", group:"版面結構", cover:"C5-1-1",
    short:"大小格混排，模組化分割版型", desc:"大小格子組合，適合多主題並陳的資訊圖",
    options:[
      { g:"格子結構", type:"radio", key:"bento_grid", items:[
        ["大小格混排","不等比格子，非對稱感強"],["等比方格","統一大小格子，整齊有序"],["主副格層次","一個主角格 + 多個配角格"]]},
      { g:"格子內容搭配", type:"radio", key:"bento_content", items:[
        ["搭配極簡向量插畫","每格放置平面向量圖示"],["搭配數據圖表","每格放置數據視覺化元件"],["搭配 3D 元素","每格放置 3D 黏土或等距物件"]]}
    ],
    ex:[
      { id:"5-1-1", t:"大小格混排：不等比格子，非對稱感強／搭配極簡向量插畫：每格放置平面向量圖示", d:"【主題：品牌核心價值 × 5 大承諾 / 副標題：誠信、創新、永續、客戶、夥伴】<br>【便當盒排版法：大小格混排 ＋ 極簡向量插畫 / 補充描述：了解我們的品牌故事】" },
      { id:"5-1-2", t:"等比方格：統一大小格子，整齊有序／搭配數據圖表：每格放置數據視覺化元件", d:"【主題：全球市場佔有率快速總覽 / 副標題：亞太 36% · 歐洲 28% · 美洲 24%】<br>【便當盒排版法：等比方格 ＋ 數據圖表 / 重點訊息：索取完整市場分析報告】" },
      { id:"5-1-3", t:"主副格層次：一個主角格 + 多個配角格／搭配 3D 元素：每格放置 3D 黏土或等距物件", d:"【主題：服務亮點一格看懂 / 副標題：速度、價格、品質、售後、彈性】<br>【便當盒排版法：主副格層次 ＋ 3D 元素 / 重點訊息：立即詢問客製化方案】" }
    ]},
  { id:15, name:"專業科學繪圖（版面型）", group:"版面結構", cover:"C5-2-2",
    short:"步驟分解與比對，版面化圖解", desc:"版面化科學圖解，適合步驟說明與比對分析",
    options:[
      { g:"版面結構", type:"radio", key:"sci_layout", items:[
        ["步驟分解版型","編號步驟，依序拆解流程"],["比對對照版型","前後對比、左右並陳分析"],["階層結構版型","金字塔或樹狀，分類層級"]]}
    ],
    ex:[
      { id:"5-2-1", t:"步驟分解版型：編號步驟，依序拆解流程，適合操作說明", d:"【主題：咖啡豆的旅程：從農場到杯子 / 副標題：採摘、日曬、烘焙、萃取 8 道工序】<br>【版面：步驟分解版型 / 重點訊息：看完更懂你手上這杯咖啡】" },
      { id:"5-2-2", t:"比對對照版型：前後對比、左右並陳分析", d:"【主題：傳統製造 vs 智慧製造比較表 / 副標題：效率、成本、彈性、人力、品質 5 維度】<br>【版面：比對對照版型 / 重點訊息：下載完整評估框架】" },
      { id:"5-2-3", t:"階層結構版型：金字塔或樹狀，分類層級", d:"【主題：台灣教育體制全解析 / 副標題：幼教、國中小、高中、大專院校體系】<br>【版面：階層結構版型 / 重點訊息：分享給正在考慮升學的你】" }
    ]}
];

// ===================================================
// STATE & HELPERS
// ===================================================
let cur = null, opts = {}, size = SIZES[0], lbList = [], lbIdx = 0;
const $   = id => document.getElementById(id);
const img = code => `./images/${code}.jpg`;

function examples(s){
  const out = [];
  s.ex.forEach(e => (e.ai || 'CG').split('').forEach(k => out.push({
    src: img(k + e.id), k, ai: k === 'C' ? 'ChatGPT' : 'Gemini', t: e.t, d: e.d
  })));
  return out;
}

// ===================================================
// SIDEBAR
// ===================================================
function renderSide(){
  $('side-list').innerHTML = GROUPS.map(g => `
    <div class="side-group">
      <div class="side-group-title">${g}</div>
      ${STYLES.filter(s => s.group === g).map(s => `
        <div class="s-item" data-id="${s.id}" onclick="selectStyle(${s.id})">
          <div class="s-thumb" style="background-image:url('${img(s.cover)}')"></div>
          <div><div class="s-name">${s.name}</div><div class="s-desc">${s.short}</div></div>
        </div>`).join('')}
    </div>`).join('');
}
function markSide(){
  document.querySelectorAll('.s-item').forEach(el =>
    el.classList.toggle('active', !!cur && +el.dataset.id === cur.id));
}

// ===================================================
// OVERVIEW（風格畫廊）
// ===================================================
function renderOverview(){
  cur = null; markSide();
  $('main').innerHTML = `
    <div class="wrap">
      <div class="ov-head">
        <h1>視覺風格畫廊</h1>
        <p>點選任一風格（左側或下方卡片），即可查看範例圖、勾選細項條件，並複製視覺風格 Prompt。</p>
      </div>
      ${GROUPS.map((g, gi) => {
        const list = STYLES.filter(s => s.group === g);
        return `
        <section class="ov-group">
          <div class="ov-group-head"><span class="tag">群組 ${gi + 1}</span><b>${g}</b><small>${list.length} 種風格</small></div>
          <div class="card-grid">
            ${list.map(s => `
              <div class="card" onclick="selectStyle(${s.id})">
                <div class="card-img" style="background-image:url('${img(s.cover)}')"><span class="badge">共 ${examples(s).length} 張</span></div>
                <div class="card-info"><b>${s.name}</b><span>${s.short}</span></div>
              </div>`).join('')}
          </div>
        </section>`;
      }).join('')}
      <p class="month">製作年月：2026/10（第 2 版）</p>
    </div>`;
  $('main').scrollTop = 0;
}

// ===================================================
// DETAIL（範例 + 細項 + Prompt）
// ===================================================
function selectStyle(id){
  cur = STYLES.find(s => s.id === id);
  opts = {};
  markSide();
  renderDetail();
  $('main').scrollTop = 0;
  if (window.innerWidth <= 860) $('main').scrollIntoView({ behavior:'smooth' });
}

function renderDetail(){
  const ex = examples(cur);
  lbList = ex;

  const optHTML = cur.options.map(g => `
    <div class="opt-group">
      <div class="opt-group-title">${g.g}<em>${g.type === 'checkbox' ? '可複選' : '單選'}</em></div>
      ${g.items.map(([v, d]) => `
        <label class="opt-row">
          <input type="${g.type}" name="opt-${g.key}" data-key="${g.key}" value="${v}">
          <div><span class="opt-name">${v}</span><span class="opt-desc">${d}</span></div>
        </label>`).join('')}
    </div>`).join('');

  $('main').innerHTML = `
    <div class="wrap">
      <button class="back" onclick="renderOverview()">← 全部風格總覽</button>
      <div class="d-head">
        <span class="tag">${cur.group}</span>
        <h1 class="d-title">${cur.name}</h1>
        <p class="d-desc">${cur.desc}</p>
      </div>

      <div class="panel">
        <div class="panel-title">範例參考圖<small>共 ${ex.length} 張・點圖放大</small></div>
        <div class="ex-strip">
          ${ex.map((e, i) => `
            <div class="ex" onclick="openLb(${i})">
              <div class="ex-img" style="background-image:url('${e.src}')"><span class="ai ${e.k}">${e.ai}</span></div>
              <div class="ex-cap">${e.t}</div>
            </div>`).join('')}
        </div>
      </div>

      <div class="d-grid">
        <div class="panel">
          <div class="panel-title"><span class="num">2</span>風格細項條件
            <small><button class="link-btn" onclick="clearOpts()">清除勾選</button></small>
          </div>
          <div id="opt-box">${optHTML}</div>
        </div>

        <div class="panel">
          <div class="panel-title"><span class="num">3</span>視覺風格 Prompt<span class="copy-ok" id="copy-ok">✓ 已複製</span></div>
          <div class="size-row">輸出比例
            ${SIZES.map((s, i) => `<span class="chip ${s === size ? 'selected' : ''}" onclick="setSize(${i})">${s}</span>`).join('')}
          </div>
          <textarea id="prompt" spellcheck="false"></textarea>
          <div class="actions"><button class="btn" onclick="copyPrompt()">複製指令</button></div>
          <div class="tip"><strong>使用提示：</strong>先在 Gemini、ChatGPT 貼上你的資訊圖內容（主題、重點文字），再接著貼上這段視覺風格指令即可。指令可直接在上方修改。</div>
        </div>
      </div>
    </div>`;

  document.querySelectorAll('#opt-box input').forEach(i =>
    i.addEventListener('change', () => { collect(); updatePrompt(); }));
  updatePrompt();
}

function collect(){
  opts = {};
  document.querySelectorAll('#opt-box input:checked').forEach(i => {
    (opts[i.dataset.key] = opts[i.dataset.key] || []).push(i.value);
  });
}
function clearOpts(){
  document.querySelectorAll('#opt-box input').forEach(i => i.checked = false);
  opts = {}; updatePrompt();
}
function setSize(i){
  size = SIZES[i];
  document.querySelectorAll('.size-row .chip').forEach((c, k) => c.classList.toggle('selected', k === i));
  updatePrompt();
}

// ===================================================
// PROMPT
// ===================================================
function buildPrompt(){
  const L = [];
  L.push(`請以下列視覺風格，生成一張【${size}】資訊圖：`, '');
  L.push('**視覺風格**：');
  L.push(`採用「${cur.name}」風格（${cur.group}）。${cur.desc}。`);
  cur.options.forEach(g => {
    const v = opts[g.key];
    if (!v || !v.length) return;
    const parts = v.map(x => {
      const it = g.items.find(i => i[0] === x);
      return it && it[1] ? `${x}（${it[1]}）` : x;
    });
    L.push(`- ${g.g}：${parts.join('、')}`);
  });
  L.push('', '**輸出規格要求**：');
  L.push(`- 比例為 ${size}`);
  L.push('- 整體構圖飽滿，視覺元素豐富但不雜亂');
  L.push('- 配色和諧，文字使用繁體中文，字體清晰易讀');
  return L.join('\n');
}
function updatePrompt(){ if (cur && $('prompt')) $('prompt').value = buildPrompt(); }

function copyPrompt(){
  const ta = $('prompt');
  if (!ta.value.trim()) return;
  const done = () => { const el = $('copy-ok'); el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2000); };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(ta.value).then(done).catch(() => { ta.select(); document.execCommand('copy'); done(); });
  } else { ta.select(); document.execCommand('copy'); done(); }
}

// ===================================================
// LIGHTBOX
// ===================================================
function openLb(i){ lbIdx = i; showLb(); $('lb').classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeLb(){ $('lb').classList.remove('open'); document.body.style.overflow = ''; }
function lbNav(d){ lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLb(); }
function showLb(){
  const e = lbList[lbIdx];
  $('lb-img').src = e.src;
  $('lb-img').alt = e.t;
  $('lb-ai').className = 'ai-tag ' + e.k;
  $('lb-ai').textContent = e.ai;
  $('lb-t').textContent = e.t;
  $('lb-d').innerHTML = e.d;
  $('lb-count').textContent = `${lbIdx + 1} / ${lbList.length}`;
}
document.addEventListener('keydown', e => {
  if (!$('lb').classList.contains('open')) return;
  if (e.key === 'Escape')     closeLb();
  if (e.key === 'ArrowLeft')  lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

// ===================================================
// INIT
// ===================================================
renderSide();
renderOverview();

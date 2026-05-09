// ============================================================
// GALLERY DATA
// 說明：
//   images 陣列中每個物件：
//     src      : 圖片路徑（放在 images/ 資料夾）
//     subTitle : 子標題（例如子風格名稱，無子分類可與 styleName 相同）
//     desc     : 這張圖的一行說明
//   若只有一張：images 陣列只放一個物件即可
//   若有多張：直接新增物件，Lightbox 自動出現縮圖列與左右箭頭
// ============================================================
const GALLERY_DATA = [

  // ── 群組一：精準資訊視覺化 ──
  {
    id: 1,
    styleName: "極簡向量插畫風格",
    desc: "SVG 圖示感，適合 SOP 流程",
    group: "精準資訊視覺化",
    images: [
      { src: "./images/C1-1-1.jpg", subTitle: "ChatGPT 幾何平整構成：幾何形狀為主體，線條清晰，色塊平整無漸層", desc: "<br>【主題：2026企業數位轉型趨勢 / 副標題：AI × 自動化 × 雲端】<br>【版面：網格矩陣 / 補充描述：科技企業、藍白色系、專業圖示】" },
      { src: "./images/G1-1-1.jpg", subTitle: "Gemini 幾何平整構成：幾何形狀為主體，線條清晰，色塊平整無漸層", desc: "<br>【主題：2026企業數位轉型趨勢 / 副標題：AI × 自動化 × 雲端】<br>【版面：網格矩陣 / 補充描述：科技企業、藍白色系、專業圖示】" },
      { src: "./images/C1-1-2.jpg", subTitle: "ChatGPT 企業曼非斯風：配色柔和無輪廓線，具科技新創的極簡感", desc: "<br>【主題：電商會員消費分析 / 副標題：新客 vs 舊客比較】<br>【版面：左右對比 / 補充描述：KPI、圖表、商業報告感】" },
      { src: "./images/G1-1-2.jpg", subTitle: "Gemini 企業曼非斯風：配色柔和無輪廓線，具科技新創的極簡感", desc: "<br>【主題：電商會員消費分析 / 副標題：新客 vs 舊客比較】<br>【版面：左右對比 / 補充描述：KPI、圖表、商業報告感】" },
      { src: "./images/C1-1-3.jpg", subTitle: "ChatGPT 可愛粉嫩風：線條圓潤，色調粉嫩溫馨，加入卡通圖案元素", desc: "<br>【主題：新創品牌識別設計指南 / 副標題：色彩、字型、空間的科技美學】<br>【版面：中心對焦 / CTA：追蹤我們獲取更多設計靈感】" },
      { src: "./images/G1-1-3.jpg", subTitle: "Gemini 可愛粉嫩風：線條圓潤，色調粉嫩溫馨，加入卡通圖案元素", desc: "<br>【主題：新創品牌識別設計指南 / 副標題：色彩、字型、空間的科技美學】<br>【版面：中心對焦 / CTA：追蹤我們獲取更多設計靈感】" },
      { src: "./images/C1-1-4.jpg", subTitle: "ChatGPT 可愛粉嫩風：線條圓潤，色調粉嫩溫馨，加入卡通圖案元素", desc: "<br>【主題：兒童健康飲食指南 / 副標題：多吃蔬果少糖飲】<br>【版面：中心對焦 / 補充描述：追蹤我們獲取更多設計靈感】" },
      { src: "./images/G1-1-4.jpg", subTitle: "Gemini 可愛粉嫩風：線條圓潤，色調粉嫩溫馨，加入卡通圖案元素", desc: "<br>【主題：兒童健康飲食指南 / 副標題：多吃蔬果少糖飲】<br>【版面：中心對焦 / 補充描述：追蹤我們獲取更多設計靈感】" },
    ]
  },
  {
    id: 2,
    styleName: "專業科學繪圖風格",
    desc: "剖面與分解，學術研究專用",
    group: "精準資訊視覺化",
    images: [
      { src: "./images/C1-2-1.jpg", subTitle: "ChatGPT 剖面分解圖：步驟流程、系統架構說明", desc: "<br>【主題：工業馬達結構全解析 / 副標題：轉子、定子、軸承一次看懂】<br>【版面：步驟分解版型 / 補充描述：索取技術規格手冊】" },
      { src: "./images/G1-2-1.jpg", subTitle: "Gemini 剖面分解圖：步驟流程、系統架構說明", desc: "<br>【主題：工業馬達結構全解析 / 副標題：轉子、定子、軸承一次看懂】<br>【版面：步驟分解版型 / 補充描述：索取技術規格手冊】" },
      { src: "./images/C1-2-2.jpg", subTitle: "ChatGPT 技術說明圖：展示內部結構，拆解元件關係，箭頭標注清晰", desc: "<br>【主題：半導體製程 12 道工序 / 副標題：從矽晶圓到封裝測試全紀錄】<br>【版面：蛇形流程 / CTA：聯絡工程顧問團隊】" },
      { src: "./images/G1-2-2.jpg", subTitle: "Gemini 技術說明圖：展示內部結構，拆解元件關係，箭頭標注清晰", desc: "<br>【主題：半導體製程 12 道工序 / 副標題：從矽晶圓到封裝測試全紀錄】<br>【版面：蛇形流程 / CTA：聯絡工程顧問團隊】" },
      { src: "./images/C1-2-3.jpg", subTitle: "ChatGPT 生物醫學圖解：人體、細胞、分子等醫學視覺化，功能性配色", desc: "<br>【主題：心臟血管疾病預防指南 / 副標題：認識動脈硬化 × 三高管理】<br>【版面：AI自動排版 / CTA：預約免費健康諮詢】" },
      { src: "./images/G1-2-3.jpg", subTitle: "Gemini 生物醫學圖解：人體、細胞、分子等醫學視覺化，功能性配色", desc: "<br>【主題：心臟血管疾病預防指南 / 副標題：認識動脈硬化 × 三高管理】<br>【版面：AI自動排版 / CTA：預約免費健康諮詢】" },
    ]
  },
  {
    id: 3,
    styleName: "現代數據儀表板風",
    desc: "UI/UX 感，發光數據節點",
    group: "精準資訊視覺化",
    images: [
      { src: "./images/C1-3-1.jpg", subTitle: "ChatGPT 深色儀表板：深底色，數字醒目，科技感強，適合 KPI 展示", desc: "<br>【主題：Q3 電商銷售 KPI 總覽 / 副標題：GMV、轉換率、客單價三大指標】<br>【版面：便當盒排版 / CTA：查看完整季度報告】" },
      { src: "./images/G1-3-1.jpg", subTitle: "Gemini 深色儀表板：深底色，數字醒目，科技感強，適合 KPI 展示", desc: "<br>【主題：Q3 電商銷售 KPI 總覽 / 副標題：GMV、轉換率、客單價三大指標】<br>【版面：便當盒排版 / CTA：查看完整季度報告】" },
      { src: "./images/C1-3-2.jpg", subTitle: "ChatGPT 淺色儀表板：白底清爽，商務報告常用，圓餅圖與長條圖組合", desc: "<br>【主題：年度人資數據全盤點 / 副標題：留任率、滿意度、培訓時數】<br>【版面：網格矩陣 / 重點訊息：下載 HR Dashboard 模板】" },
      { src: "./images/G1-3-2.jpg", subTitle: "Gemini 淺色儀表板：白底清爽，商務報告常用，圓餅圖與長條圖組合", desc: "<br>【主題：年度人資數據全盤點 / 副標題：留任率、滿意度、培訓時數】<br>【版面：網格矩陣 / 重點訊息：下載 HR Dashboard 模板】" },
      { src: "./images/C1-3-3.jpg", subTitle: "ChatGPT 科技介面感：帶科幻感線框，未來感強烈", desc: "<br>【主題：AI 監控系統即時數據流 / 副標題：99.97% 精準度 × 0.3s 響應】<br>【版面：中心對焦 / 重點訊息：申請 30 天免費試用】" },
      { src: "./images/G1-3-3.jpg", subTitle: "Gemini 科技介面感：帶科幻感線框，未來感強烈", desc: "<br>【主題：AI 監控系統即時數據流 / 副標題：99.97% 精準度 × 0.3s 響應】<br>【版面：中心對焦 / 重點訊息：申請 30 天免費試用】" },
    ]
  },
  {
    id: 4,
    styleName: "微霧玻璃質感",
    desc: "高階質感，半透明磨砂效果",
    group: "精準資訊視覺化",
    images: [
      { src: "./images/C1-4-2.jpg", subTitle: "ChatGPT 層疊堆疊感：多層卡片疊放，空間深度感", desc: "<br>【主題：正念冥想入門 5 步驟 / 副標題：每天 10 分鐘找回內心平靜】<br>【版面：便當盒排版 / 補充描述：加入每日冥想挑戰】" },
      { src: "./images/G1-4-1.jpg", subTitle: "Gemini 磨砂半透明：毛玻璃模糊效果", desc: "<br>【主題：雲端 SaaS 解決方案 / 副標題：安全、彈性、隨時擴充】<br>【版面：中心對焦 / CTA：立即體驗 Demo】" },
    ]
  },

  // ── 群組二：手工溫度 ──
  {
    id: 5,
    styleName: "手繪感筆記風格",
    desc: "鉛筆草稿感，教學知識圖解",
    group: "手工溫度",
    images: [
      { src: "./images/C2-1-1.jpg", subTitle: "ChatGPT 鉛筆草稿感：鉛筆線條帶輕微素描紋路", desc: "<br>【主題：產品設計草圖思維導圖 / 副標題：從用戶痛點到功能原型】<br>【版面：心智圖結構 / 重點訊息：分享給你的設計夥伴】" },
      { src: "./images/G2-1-1.jpg", subTitle: "Gemini 鉛筆草稿感：鉛筆線條帶輕微素描紋路", desc: "<br>【主題：產品設計草圖思維導圖 / 副標題：從用戶痛點到功能原型】<br>【版面：心智圖結構 / 重點訊息：分享給你的設計夥伴】" },
      { src: "./images/C2-1-2.jpg", subTitle: "ChatGPT 鋼筆線稿：流暢俐落，線條有粗細變化", desc: "<br>【主題：台灣百年建築演進史 / 副標題：1895 至今 × 風格與工法變遷】<br>【版面：垂直時間軸 / 重點訊息：下載完整時間軸海報】" },
      { src: "./images/G2-1-2.jpg", subTitle: "Gemini 鋼筆線稿：流暢俐落，線條有粗細變化", desc: "<br>【主題：台灣百年建築演進史 / 副標題：1895 至今 × 風格與工法變遷】<br>【版面：垂直時間軸 / 重點訊息：下載完整時間軸海報】" },
      { src: "./images/C2-1-3.jpg", subTitle: "ChatGPT 手寫筆跡：手寫文字字入圖解，親切感強", desc: "<br>【主題：老闆の工作筆記本 / 副標題：這週學到的 3 件事】<br>【版面：AI 自動優化 / 補充描述：追蹤分享職場成長日記】" },
      { src: "./images/G2-1-3.jpg", subTitle: "Gemini 手寫筆跡：手寫文字字入圖解，親切感強", desc: "<br>【主題：老闆の工作筆記本 / 副標題：這週學到的 3 件事】<br>【版面：AI 自動優化 / 補充描述：追蹤分享職場成長日記】" },
      { src: "./images/C2-1-4.jpg", subTitle: "ChatGPT 塗鴉插圖風：隨性塗鴉，活潑帶童趣", desc: "<br>【主題：小學生的科學小教室 / 副標題：植物如何把陽光變食物？】<br>【版面：中心對焦 / 補充描述：訂閱每週知識漫畫】" },
      { src: "./images/G2-1-4.jpg", subTitle: "Gemini 塗鴉插圖風：隨性塗鴉，活潑帶童趣", desc: "<br>【主題：小學生的科學小教室 / 副標題：植物如何把陽光變食物？】<br>【版面：中心對焦 / 補充描述：訂閱每週知識漫畫】" },
    ]
  },
  {
    id: 6,
    styleName: "白板/黑板 板書風格",
    desc: "馬克筆板書，腦力激盪感",
    group: "手工溫度",
    images: [
      { src: "./images/C2-2-1.jpg", subTitle: "ChatGPT 粗獷隨性：筆觸不規劃，即興感強", desc: "<br>【主題：化學反應式圖解課 / 副標題：氧化、還原、酸鹼一次弄懂】<br>【版面：AI 自動優化 / 重點訊息：下載課程筆記 PDF】" },
      { src: "./images/G2-2-1.jpg", subTitle: "Gemini 粗獷隨性：筆觸不規劃，即興感強", desc: "<br>【主題：化學反應式圖解課 / 副標題：氧化、還原、酸鹼一次弄懂】<br>【版面：AI 自動優化 / 重點訊息：下載課程筆記 PDF】" },
      { src: "./images/C2-2-2.jpg", subTitle: "ChatGPT 整齊板書：排列有序，教學講義感", desc: "<br>【主題：Python 學習地圖 / 副標題：Beginner Roadmap】<br>【版面：AI 自動優化 / 重點訊息：學習筆記感】" },
      { src: "./images/G2-2-2.jpg", subTitle: "Gemini 整齊板書：排列有序，教學講義感", desc: "<br>【主題：Python 學習地圖 / 副標題：Beginner Roadmap】<br>【版面：AI 自動優化 / 重點訊息：學習筆記感】" },
      { src: "./images/C2-2-3.jpg", subTitle: "ChatGPT 腦力激盪感：想法四散、氣泡箭頭，發散構思", desc: "<br>【主題：新產品上市腦力風暴 / 副標題：10 個切入市場的創新角度】<br>【版面：AI自動排版 / 重點訊息：帶這張圖去開會！】" },
      { src: "./images/G2-2-3.jpg", subTitle: "Gemini 腦力激盪感：想法四散、氣泡箭頭，發散構思", desc: "<br>【主題：新產品上市腦力風暴 / 副標題：10 個切入市場的創新角度】<br>【版面：AI自動排版 / 重點訊息：帶這張圖去開會！】" },
    ]
  },

  // ── 群組三：3D 立體造型 ──
  {
    id: 7,
    styleName: "3D 黏土質感",
    desc: "手工捏製感，溫暖立體造型",
    group: "3D 立體造型",
    images: [
      // { src: "./images/C3-1-1.jpg", subTitle: "ChatGPT Q版比例 ＋ 大眼表情", desc: "<br>【主題：職場人設大調查 / 副標題：你是哪一款工作星座？】<br>【版面：中心對焦 / CTA：留言說說你的款式 💬】" },
      // { src: "./images/G3-1-1.jpg", subTitle: "Gemini Q版比例 ＋ 大眼表情", desc: "<br>【主題：職場人設大調查 / 副標題：你是哪一款工作星座？】<br>【版面：中心對焦 / CTA：留言說說你的款式 💬】" },
      { src: "./images/C3-1-1.jpg", subTitle: "ChatGPT 粉嫩糖果色：薄荷綠、奶油橙，清甜可口", desc: "<br>【主題：甜點店新品上架囉！ / 副標題：草莓塔 × 焦糖布丁 × 抹茶捲】<br>【版面：便當盒排版 / CTA：加入早鳥候位名單】" },
      { src: "./images/G3-1-1.jpg", subTitle: "Gemini 粉嫩糖果色：薄荷綠、奶油橙，清甜可口", desc: "<br>【主題：甜點店新品上架囉！ / 副標題：草莓塔 × 焦糖布丁 × 抹茶捲】<br>【版面：便當盒排版 / CTA：加入早鳥候位名單】" },
      { src: "./images/C3-1-2.jpg", subTitle: "ChatGPT 暖色溫馨調：蜜桃、奶油黃，溫暖居家感", desc: "<br>【主題：寶寶副食品添加指南 / 副標題：4-6 個月黃金期 × 食材安全清單】<br>【版面：網格矩陣 / 重點訊息：下載嬰幼兒飲食時間表】" },
      { src: "./images/G3-1-2.jpg", subTitle: "Gemini 暖色溫馨調：蜜桃、奶油黃，溫暖居家感", desc: "<br>【主題：寶寶副食品添加指南 / 副標題：4-6 個月黃金期 × 食材安全清單】<br>【版面：網格矩陣 / 重點訊息：下載嬰幼兒飲食時間表】" },
    ]
  },
  {
    id: 8,
    styleName: "盲盒公仔風格",
    desc: "Q 版比例，潮玩收藏品質感",
    group: "3D 立體造型",
    images: [
      { src: "./images/C3-2-1.jpg", subTitle: "ChatGPT Q版比例 ＋ 大眼表情", desc: "<br>【主題：職場人設大調查 / 副標題：你是哪一款工作星座？】<br>【版面：中心對焦 / CTA：留言說說你的款式】" },
      { src: "./images/G3-2-1.jpg", subTitle: "Gemini Q版比例 ＋ 大眼表情", desc: "<br>【主題：職場人設大調查 / 副標題：你是哪一款工作星座？】<br>【版面：中心對焦 / CTA：留言說說你的款式】" },
      { src: "./images/C3-2-2.jpg", subTitle: "ChatGPT 站姿展示 ＋ 精緻收藏品質感", desc: "<br>【主題：限量公仔 Series 02 開箱 / 副標題：12 款職業角色 × 全台限量 500 套】<br>【版面：網格矩陣 / CTA：官網即日起開放預購】" },
      { src: "./images/G3-2-2.jpg", subTitle: "Gemini 站姿展示 ＋ 精緻收藏品質感", desc: "<br>【主題：限量公仔 Series 02 開箱 / 副標題：12 款職業角色 × 全台限量 500 套】<br>【版面：網格矩陣 / CTA：官網即日起開放預購】" },
    ]
  },
  {
    id: 9,
    styleName: "積木風格",
    desc: "樂高顆粒質感，模組堆疊造型",
    group: "3D 立體造型",
    images: [
      { src: "./images/C3-3-1.jpg", subTitle: "ChatGPT 飽和原色積木：頂部顆粒突起，紅黃藍綠經典玩具配色/樂高顆粒質感", desc: "<br>【主題：積木式學習金字塔 / 副標題：聆聽 → 理解 → 應用 → 創造】<br>【版面：層級金字塔 / CTA：報名暑期 STEAM 工作坊】" },
      { src: "./images/G3-3-1.jpg", subTitle: "Gemini 飽和原色積木：頂部顆粒突起，紅黃藍綠經典玩具配色/樂高顆粒質感", desc: "<br>【主題：積木式學習金字塔 / 副標題：聆聽 → 理解 → 應用 → 創造】<br>【版面：層級金字塔 / CTA：報名暑期 STEAM 工作坊】" },
      { src: "./images/C3-3-2.jpg", subTitle: "ChatGPT 粉彩積木色：柔和淡色積木，清新現代感/塑膠光澤感", desc: "<br>【主題：親子共玩新體驗 / 副標題：培養空間感 × 邏輯力 × 創造力】<br>【版面：便當盒排版 / CTA：立即加入親子玩樂社群】" },
      { src: "./images/G3-3-2.jpg", subTitle: "Gemini 粉彩積木色：柔和淡色積木，清新現代感/塑膠光澤感", desc: "<br>【主題：親子共玩新體驗 / 副標題：培養空間感 × 邏輯力 × 創造力】<br>【版面：便當盒排版 / CTA：立即加入親子玩樂社群】" },
    ]
  },
  {
    id: 10,
    styleName: "等距視角微縮風格",
    desc: "45° 等距視角，可愛微縮場景",
    group: "3D 立體造型",
    images: [
      { src: "./images/C3-4-1.jpg", subTitle: "ChatGPT 標準等距角度：45度平行透視，無消失點/辦公室工作場景", desc: "<br>【主題：混合辦公模式設計指南 / 副標題：遠端 ＋ 實體協作最佳實踐】<br>【版面：便當盒排版 / CTA：下載辦公空間規劃手冊】" },
      { src: "./images/G3-4-1.jpg", subTitle: "Gemini 標準等距角度：45度平行透視，無消失點/辦公室工作場景", desc: "<br>【主題：混合辦公模式設計指南 / 副標題：遠端 ＋ 實體協作最佳實踐】<br>【版面：便當盒排版 / CTA：探索更多城市科技內容】" },
      { src: "./images/C3-4-2.jpg", subTitle: "ChatGPT 俯瞰微縮場景：鳥瞰小人國場景，立體俯視/城市建築場景", desc: "<br>【主題：智慧城市基礎建設全圖解 / 副標題：感測器、5G、AI 如何串聯城市】<br>【版面：中心對焦 / 補充描述：探索更多城市科技內容】" },
      { src: "./images/G3-4-2.jpg", subTitle: "Gemini 俯瞰微縮場景：鳥瞰小人國場景，立體俯視/城市建築場景", desc: "<br>【主題：智慧城市基礎建設全圖解 / 副標題：感測器、5G、AI 如何串聯城市】<br>【版面：中心對焦 / 補充描述：探索更多城市科技內容】" },
      { src: "./images/C3-4-3.jpg", subTitle: "ChatGPT 流程路徑圖", desc: "步驟旅程地圖，3D 流程圖，俯瞰小人國視角<br>【主題：新進員工 30 天上手地圖 / 副標題：報到 → 培訓 → 試作 → 獨立作業】<br>【版面：蛇形流程 / 重點訊息：列印張貼在你的工位上】" },
      { src: "./images/G3-4-3.jpg", subTitle: "Gemini 流程路徑圖", desc: "步驟旅程地圖，3D 流程圖，俯瞰小人國視角<br>【主題：新進員工 30 天上手地圖 / 副標題：報到 → 培訓 → 試作 → 獨立作業】<br>【版面：蛇形流程 / 重點訊息：列印張貼在你的工位上】" },
    ]
  },

  // ── 群組四：插畫敘事 ──
  {
    id: 11,
    styleName: "社論雜誌插畫感",
    desc: "水彩渲染，編輯質感構圖",
    group: "插畫敘事",
    images: [
      { src: "./images/C4-1-1.jpg", subTitle: "ChatGPT 水彩渲染：色彩暈染，柔和筆觸 / 雜誌封面構圖：強烈主視覺", desc: "<br>【主題：氣候變遷的顏色 / 副標題：用色彩說一個地球的故事】<br>【版面：雜誌封面構圖 / 重點訊息：閱讀完整專題報導】" },
      { src: "./images/G4-1-1.jpg", subTitle: "Gemini 水彩渲染：色彩暈染，柔和筆觸 / 雜誌封面構圖：強烈主視覺", desc: "<br>【主題：氣候變遷的顏色 / 副標題：用色彩說一個地球的故事】<br>【版面：雜誌封面構圖 / 重點訊息：閱讀完整專題報導】" },
      { src: "./images/C4-1-2.jpg", subTitle: "ChatGPT  厚塗油畫：濃郁筆觸，色塊大膽 / 雜誌封面構圖：強烈主視覺", desc: "<br>【主題：台灣百工百業人物誌 / 副標題：漁村、茶山、工廠裡的職人精神】<br>【版面：雜誌封面構圖 / 重點訊息：加入訂閱支持在地創作】" },
      { src: "./images/G4-1-2.jpg", subTitle: "Gemini  厚塗油畫：濃郁筆觸，色塊大膽 / 雜誌封面構圖：強烈主視覺", desc: "<br>【主題：台灣百工百業人物誌 / 副標題：漁村、茶山、工廠裡的職人精神】<br>【版面：雜誌封面構圖 / 重點訊息：加入訂閱支持在地創作】" },
      { src: "./images/C4-1-3.jpg", subTitle: "ChatGPT  復古報紙風：1950 年代海報風，泛黃紙張感 / 敘事意境感：隱喻式視覺，概念藝術方向 / ", desc: "<br>【主題：1950 vs 2026 物價大比較 / 副標題：一碗麵、一杯珍奶、一戶房子】<br>【版面：左右對比 / 重點訊息：留言你覺得哪個時代比較好過】" },
      { src: "./images/G4-1-3.jpg", subTitle: "Gemini  復古報紙風：1950 年代海報風，泛黃紙張感 / 敘事意境感：隱喻式視覺，概念藝術方向 / ", desc: "<br>【主題：1950 vs 2026 物價大比較 / 副標題：一碗麵、一杯珍奶、一戶房子】<br>【版面：左右對比 / 重點訊息：留言你覺得哪個時代比較好過】" },
    ]
  },
  {
    id: 12,
    styleName: "日系動漫風格",
    desc: "賽璐珞著色，高飽和動漫色",
    group: "插畫敘事",
    images: [
      { src: "./images/C4-2-1.jpg", subTitle: "ChatGPT 賽璐珞著色：平塗上色，硬邊陰影，動畫感 / 戲劇性動作感：誇張動作、豐富表情", desc: "<br>【主題：電競賽事開幕倒數 / 副標題：32 強激戰 × 總獎金百萬】<br>【版面：中心對焦 / CTA：立即搶票入場】" },
      { src: "./images/G4-2-1.jpg", subTitle: "Gemini 賽璐珞著色：平塗上色，硬邊陰影，動畫感 / 戲劇性動作感：誇張動作、豐富表情", desc: "<br>【主題：電競賽事開幕倒數 / 副標題：32 強激戰 × 總獎金百萬】<br>【版面：中心對焦 / CTA：立即搶票入場】" },
      { src: "./images/C4-2-2.jpg", subTitle: "ChatGPT 高飽和動漫色：鮮豔高飽和，視覺衝擊強 / 戲劇性動作感：誇張動作、豐富表情", desc: "<br>【主題：夏日祭典開放報名！ / 副標題：煙火、浴衣、棉花糖、祈願燈籠】<br>【版面便當盒排版： / 重點訊息：掃碼報名夏日限定活動】" },
      { src: "./images/G4-2-2.jpg", subTitle: "Gemini 高飽和動漫色：鮮豔高飽和，視覺衝擊強 / 戲劇性動作感：誇張動作、豐富表情", desc: "<br>【主題：夏日祭典開放報名！ / 副標題：煙火、浴衣、棉花糖、祈願燈籠】<br>【版面便當盒排版： / 重點訊息：掃碼報名夏日限定活動】" },
      { src: "./images/C4-2-3.jpg", subTitle: "ChatGPT 漫畫可愛風：可愛吉祥物風格，適合衛教內容 / 可愛角色為主：Q 版動漫角色，Kawaii 風格", desc: "<br>【主題：打疫苗不可怕！小朋友安心指南 / 副標題：注射前、中、後的 Q&A 全解答】<br>【版面便當盒排版： / 重點訊息：帶這張圖去打疫苗】" },
      { src: "./images/G4-2-3.jpg", subTitle: "Gemini 漫畫可愛風：可愛吉祥物風格，適合衛教內容 / 可愛角色為主：Q 版動漫角色，Kawaii 風格", desc: "<br>【主題：打疫苗不可怕！小朋友安心指南 / 副標題：注射前、中、後的 Q&A 全解答】<br>【版面便當盒排版： / 重點訊息：帶這張圖去打疫苗】" },
    ]
  },
  {
    id: 13,
    styleName: "日系清新風格",
    desc: "粉彩淡雅，充足留白，療癒氛圍",
    group: "插畫敘事",
    images: [
      { src: "./images/C4-3-1.jpg", subTitle: "ChatGPT 粉彩淡雅色調：低飽和粉色系，日本插畫氛圍 / 生活健康感：療癒舒適，平易近人的調性", desc: "<br>【主題：每日飲食 ×10 色蔬果攻略 / 副標題：天然食材的顏色就是你的健康密碼】<br>【版面：AI 自動優化 / 重點訊息：關注每週食譜更新】" },
      { src: "./images/G4-3-1.jpg", subTitle: "Gemini 粉彩淡雅色調：低飽和粉色系，日本插畫氛圍 / 生活健康感：療癒舒適，平易近人的調性", desc: "<br>【主題：每日飲食 ×10 色蔬果攻略 / 副標題：天然食材的顏色就是你的健康密碼】<br>【版面：AI 自動優化 / 重點訊息：關注每週食譜更新】" },
      { src: "./images/C4-3-2.jpg", subTitle: "ChatGPT 柔焦質感：輕微模糊邊緣，夢幻光線感 / 親子溫馨感：溫暖家庭感，友善兒童視角", desc: "<br>【主題：孩子的成長里程碑 / 副標題：0-6 歲大腦發育關鍵期一覽】<br>【版面：垂直時間軸 / 重點訊息：保存這張圖給每位新手父母】" },
      { src: "./images/G4-3-2.jpg", subTitle: "Gemini 柔焦質感：輕微模糊邊緣，夢幻光線感 / 親子溫馨感：溫暖家庭感，友善兒童視角", desc: "<br>【主題：孩子的成長里程碑 / 副標題：0-6 歲大腦發育關鍵期一覽】<br>【版面：垂直時間軸 / 重點訊息：保存這張圖給每位新手父母】" },
    ]
  },

  // ── 群組五：版面結構 ──
  {
    id: 14,
    styleName: "便當盒排版法",
    desc: "大小格混排，模組化分割版型",
    group: "版面結構",
    images: [
      { src: "./images/C5-1-1.jpg", subTitle: "ChatGPT 大小格混排：不等比格子，非對稱感強 / 搭配極簡向量插畫：每格放置平面向量圖示", desc: "<br>【主題：品牌核心價值 × 5 大承諾 / 副標題：誠信、創新、永續、客戶、夥伴】<br>【便當盒排版法：大小格混排 ＋ 極簡向量插畫 / 補充描述：了解我們的品牌故事】" },
      { src: "./images/G5-1-1.jpg", subTitle: "Gemini 大小格混排：不等比格子，非對稱感強 / 搭配極簡向量插畫：每格放置平面向量圖示", desc: "<br>【主題：品牌核心價值 × 5 大承諾 / 副標題：誠信、創新、永續、客戶、夥伴】<br>【便當盒排版法：大小格混排 ＋ 極簡向量插畫 / 補充描述：了解我們的品牌故事】" },
      { src: "./images/C5-1-2.jpg", subTitle: "ChatGPT 等比方格：統一大小格子，整齊有序 / 搭配數據圖表：每格放置數據視覺化元件", desc: "<br>【主題：全球市場佔有率快速總覽 / 副標題：亞太 36% · 歐洲 28% · 美洲 24%】<br>【便當盒排版法：等比方格 ＋ 數據圖表 / 重點訊息：索取完整市場分析報告】" },
      { src: "./images/G5-1-2.jpg", subTitle: "Gemini 等比方格：統一大小格子，整齊有序 / 搭配數據圖表：每格放置數據視覺化元件", desc: "<br>【主題：全球市場佔有率快速總覽 / 副標題：亞太 36% · 歐洲 28% · 美洲 24%】<br>【便當盒排版法：等比方格 ＋ 數據圖表 / 重點訊息：索取完整市場分析報告】" },
      { src: "./images/C5-1-3.jpg", subTitle: "ChatGPT 主副格層次：一個主角格 + 多個配角格 / 搭配 3D 元素：每格放置 3D 黏土或等距物件", desc: "<br>【主題：服務亮點一格看懂 / 副標題：速度、價格、品質、售後、彈性】<br>【便當盒排版法：主副格層次 ＋ 3D 元素 / 重點訊息：立即詢問客製化方案】" },
      { src: "./images/G5-1-3.jpg", subTitle: "Gemini 主副格層次：一個主角格 + 多個配角格 / 搭配 3D 元素：每格放置 3D 黏土或等距物件", desc: "<br>【主題：服務亮點一格看懂 / 副標題：速度、價格、品質、售後、彈性】<br>【便當盒排版法：主副格層次 ＋ 3D 元素 / 重點訊息：立即詢問客製化方案】" },
    ]
  },
  {
    id: 15,
    styleName: "專業科學繪圖（版面型）",
    desc: "步驟分解與比對，版面化圖解",
    group: "版面結構",
    images: [
      { src: "./images/C5-2-1.jpg", subTitle: "ChatGPT 步驟分解版型：編號步驟，依序拆解流程，適合操作說明", desc: "<br>【主題：咖啡豆的旅程：從農場到杯子 / 副標題：採摘、日曬、烘焙、萃取 8 道工序】<br>【版面：步驟分解版型 / 重點訊息：看完更懂你手上這杯咖啡】" },
      { src: "./images/G5-2-1.jpg", subTitle: "Gemini 步驟分解版型：編號步驟，依序拆解流程，適合操作說明", desc: "<br>【主題：咖啡豆的旅程：從農場到杯子 / 副標題：採摘、日曬、烘焙、萃取 8 道工序】<br>【版面：步驟分解版型 / 重點訊息：看完更懂你手上這杯咖啡】" },
      { src: "./images/C5-2-2.jpg", subTitle: "ChatGPT 比對對照版型：前後對比、左右並陳分析", desc: "<br>【主題：傳統製造 vs 智慧製造比較表 / 副標題：效率、成本、彈性、人力、品質 5 維度】<br>【版面：比對對照版型 / 重點訊息：下載完整評估框架】" },
      { src: "./images/G5-2-2.jpg", subTitle: "Gemini 比對對照版型：前後對比、左右並陳分析", desc: "<br>【主題：傳統製造 vs 智慧製造比較表 / 副標題：效率、成本、彈性、人力、品質 5 維度】<br>【版面：比對對照版型 / 重點訊息：下載完整評估框架】" },
      { src: "./images/C5-2-3.jpg", subTitle: "ChatGPT 階層結構版型：金字塔或樹狀，分類層級", desc: "<br>【主題：台灣教育體制全解析 / 副標題：幼教、國中小、高中、大專院校體系】<br>【版面：階層結構版型 / 重點訊息：分享給正在考慮升學的你】" },
      { src: "./images/G5-2-3.jpg", subTitle: "Gemini 階層結構版型：金字塔或樹狀，分類層級", desc: "<br>【主題：台灣教育體制全解析 / 副標題：幼教、國中小、高中、大專院校體系】<br>【版面：階層結構版型 / 重點訊息：分享給正在考慮升學的你】" },
    ]
  },
];

// ============================================================
// GROUP ORDER & LABELS
// ============================================================
const GROUP_ORDER = [
  "精準資訊視覺化",
  "手工溫度",
  "3D 立體造型",
  "插畫敘事",
  "版面結構",
];

// ============================================================
// RENDER GALLERY
// ============================================================
function renderGallery() {
  const body = document.getElementById('gallery-body');
  body.innerHTML = '';

  GROUP_ORDER.forEach((groupName, gIdx) => {
    const items = GALLERY_DATA.filter(d => d.group === groupName);
    if (!items.length) return;

    const section = document.createElement('div');
    section.className = 'group-section';

    // Group header
    section.innerHTML = `
      <div class="group-header">
        <span class="group-tag">群組 ${gIdx + 1}</span>
        <span class="group-title">${groupName}</span>
        <span class="group-count">${items.length} 種風格</span>
      </div>
      <div class="card-grid" id="grid-${gIdx}"></div>
    `;

    body.appendChild(section);

    const grid = section.querySelector(`#grid-${gIdx}`);

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'style-card';
      card.onclick = () => openLightbox(item.id, 0);

      // Pick first image for card thumbnail
      const firstImg = item.images[0];
      const hasImg = firstImg && firstImg.src;
      const multiCount = item.images.length;

      card.innerHTML = `
        <div class="card-img-wrap">
          ${hasImg
            ? `<img src="${firstImg.src}" alt="${item.styleName}" loading="lazy">`
            : `<div class="card-placeholder">
                <div class="card-placeholder-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="15" rx="2" stroke="#3D5A99" stroke-width="1.5"/>
                    <circle cx="8.5" cy="10.5" r="2" stroke="#3D5A99" stroke-width="1.5"/>
                    <path d="M2 16l5-4 4 3.5 3-2.5 8 6" stroke="#3D5A99" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="card-placeholder-text">${item.styleName}</span>
              </div>`
          }
          ${multiCount > 1 ? `<span class="card-multi-badge">共 ${multiCount} 張</span>` : ''}
        </div>
        <div class="card-info">
          <div class="card-name">${item.styleName}</div>
          <div class="card-desc">${item.desc}</div>
        </div>
      `;

      grid.appendChild(card);
    });
  });
}

// ============================================================
// LIGHTBOX STATE
// ============================================================
let lbCurrentItem = null;
let lbCurrentIdx  = 0;

function openLightbox(styleId, imgIdx) {
  lbCurrentItem = GALLERY_DATA.find(d => d.id === styleId);
  lbCurrentIdx  = imgIdx || 0;
  renderLightbox();
  document.getElementById('lightbox-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('lightbox-overlay')) closeLightbox();
}

function lbNavigate(dir) {
  const total = lbCurrentItem.images.length;
  lbCurrentIdx = (lbCurrentIdx + dir + total) % total;
  renderLightbox();
}

function lbGoTo(idx) {
  lbCurrentIdx = idx;
  renderLightbox();
}

function renderLightbox() {
  const item   = lbCurrentItem;
  const idx    = lbCurrentIdx;
  const images = item.images;
  const cur    = images[idx];
  const total  = images.length;
  const hasImg = cur && cur.src;

  // Main image
  const mainWrap = document.getElementById('lb-main-wrap');
  if (hasImg) {
    mainWrap.innerHTML = `<img src="${cur.src}" alt="${cur.subTitle}">`;
  } else {
    mainWrap.innerHTML = `
      <div class="lb-placeholder-large">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="15" rx="2" stroke="#3D5A99" stroke-width="1.2"/>
          <circle cx="8.5" cy="10.5" r="2" stroke="#3D5A99" stroke-width="1.2"/>
          <path d="M2 16l5-4 4 3.5 3-2.5 8 6" stroke="#3D5A99" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
        <span>圖片待補充：${cur.subTitle}</span>
      </div>`;
  }

  // Arrows
  const prevBtn = document.getElementById('lb-prev');
  const nextBtn = document.getElementById('lb-next');
  if (total > 1) {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  } else {
    prevBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
  }

  // Info
  document.getElementById('lb-style-name').textContent = item.styleName;
  document.getElementById('lb-style-desc').textContent = '：' + item.desc;
  // document.getElementById('lb-sub-title').textContent  = cur.subTitle + '：' + cur.desc;
  document.getElementById('lb-sub-title').innerHTML  = cur.subTitle +  cur.desc;
  // document.getElementById('lb-sub-title').innerHTML  = cur.subTitle + '：' + cur.desc;
  document.getElementById('lb-counter').textContent    = total > 1 ? `${idx + 1} / ${total}` : '';

  // Thumbnail strip
  const strip = document.getElementById('lb-thumb-strip');
  if (total > 1) {
    strip.classList.remove('hidden');
    strip.innerHTML = images.map((img, i) => {
      const active  = i === idx ? 'active' : '';
      const hasThumb = img && img.src;
      return `
        <div class="lb-thumb ${active}" onclick="lbGoTo(${i})">
          ${hasThumb
            ? `<img src="${img.src}" alt="${img.subTitle}">`
            : `<div class="lb-thumb-placeholder">${img.subTitle}</div>`
          }
        </div>`;
    }).join('');
  } else {
    strip.classList.add('hidden');
  }
}

// Keyboard nav
document.addEventListener('keydown', e => {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lbNavigate(-1);
  if (e.key === 'ArrowRight') lbNavigate(1);
});

// ============================================================
// INIT
// ============================================================
renderGallery();

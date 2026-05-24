// ===================================================
// DATA: Style definitions (from MD file)
// ===================================================
const STYLES = {
  1: {
    name: "極簡向量插畫風格",
    group: "精準資訊視覺化",
    desc: "幾何平整、線條簡潔，適合企業報告與數據說明",
    previewLabel: "極簡向量插畫風格 示意圖",
    previewImg: "images/C1-1-1.jpg",
    options: [
      {
        groupName: "整體風格",
        type: "radio",
        key: "style_main",
        items: [
          { value: "幾何平整構成", label: "幾何平整構成", desc: "以幾何形狀為主體，結構清晰" },
          { value: "極簡線條", label: "極簡線條", desc: "線條構成為主，去除多餘裝飾" },
          { value: "企業曼非斯風", label: "企業曼非斯風", desc: "配色柔和無輪廓線，具科技新創的極簡感" },
          { value: "可愛粉嫩風", label: "可愛粉嫩風", desc: "線條圓潤，色調粉嫩溫馨，加入卡通圖案元素" }
        ]
      },
      {
        groupName: "配色方案",
        type: "radio",
        key: "color",
        items: [
          { value: "三色限定", label: "三色限定", desc: "全圖不超過三個主色，視覺乾淨俐落" },
          { value: "莫蘭迪色調", label: "莫蘭迪色調", desc: "低飽和、灰調柔和，優雅沉穩" },
          { value: "高對比雙色", label: "高對比雙色", desc: "強烈對比，視覺衝擊力強" }
        ]
      },
      {
        groupName: "細節修飾",
        type: "checkbox",
        key: "detail",
        items: [
          { value: "無陰影無漸層", label: "無陰影無漸層", desc: "保持純平面感，避免立體效果" },
          { value: "SVG 圖示質感", label: "SVG 圖示質感", desc: "圖示乾淨銳利，適合數位輸出" }
        ]
      }
    ]
  },
  2: {
    name: "專業科學繪圖風格",
    group: "精準資訊視覺化",
    desc: "精確標注、圖解清晰，適合技術說明與學術用途",
    previewLabel: "專業科學繪圖風格 示意圖",
    previewImg: "images/G1-2-2.jpg",
    options: [
      {
        groupName: "圖解類型",
        type: "radio",
        key: "diagram_type",
        items: [
          { value: "剖面分解圖", label: "剖面分解圖", desc: "展示內部結構，拆解元件關係" },
          { value: "技術說明圖", label: "技術說明圖", desc: "步驟流程、系統架構說明" },
          { value: "生物醫學圖解", label: "生物醫學圖解", desc: "人體、細胞、分子等醫學視覺化" }
        ]
      },
      {
        groupName: "標示風格",
        type: "checkbox",
        key: "annotation",
        items: [
          { value: "箭頭標注", label: "箭頭標注", desc: "以引線指向各部位說明" },
          { value: "圖例說明", label: "圖例說明", desc: "附上色彩或符號對照說明" }
        ]
      },
      {
        groupName: "視覺風格",
        type: "radio",
        key: "visual_style",
        items: [
          { value: "黑白線稿", label: "黑白線稿", desc: "純線條繪製，學術論文風格" },
          { value: "功能性配色", label: "功能性配色", desc: "以色彩區分功能區域或類別" }
        ]
      }
    ]
  },
  3: {
    name: "現代數據儀表板風",
    group: "精準資訊視覺化",
    desc: "Dashboard UI 風格，適合呈現 KPI、數據報告",
    previewLabel: "現代數據儀表板風 示意圖",
    previewImg: "images/C1-3-2.jpg",
    options: [
      {
        groupName: "介面風格",
        type: "radio",
        key: "ui_theme",
        items: [
          { value: "深色儀表板", label: "深色儀表板", desc: "深底色，數字醒目，科技感強" },
          { value: "淺色儀表板", label: "淺色儀表板", desc: "白底清爽，商務報告常用" },
          { value: "科技介面感", label: "科技介面感", desc: "帶科幻感線框，未來感強烈" }
        ]
      },
      {
        groupName: "圖表元件",
        type: "checkbox",
        key: "chart_type",
        items: [
          { value: "折線圖 / 曲線圖", label: "折線圖 / 曲線圖", desc: "趨勢變化、時間序列" },
          { value: "圓餅圖 / 環形圖", label: "圓餅圖 / 環形圖", desc: "比例分配、結構呈現" },
          { value: "數字卡片（KPI）", label: "數字卡片（KPI）", desc: "大字顯示關鍵數字指標" },
          { value: "長條圖", label: "長條圖", desc: "類別比較、排行呈現" }
        ]
      }
    ]
  },
  4: {
    name: "微霧玻璃質感（Glassmorphism）",
    group: "精準資訊視覺化",
    desc: "磨砂半透明效果，現代感強，適合科技品牌",
    previewLabel: "微霧玻璃質感 示意圖",
    previewImg: "images/C1-4-2.jpg",
    options: [
      {
        groupName: "材質效果",
        type: "checkbox",
        key: "material",
        items: [
          { value: "磨砂半透明", label: "磨砂半透明", desc: "毛玻璃模糊效果，層次通透" },
          { value: "層疊堆疊感", label: "層疊堆疊感", desc: "多層卡片疊放，空間深度感" },
          { value: "柔和背光", label: "柔和背光", desc: "邊緣發光，輕微光暈氛圍" }
        ]
      },
      {
        groupName: "背景搭配",
        type: "radio",
        key: "bg",
        items: [
          { value: "深色漸層背景", label: "深色漸層背景", desc: "深色底色更突顯玻璃通透感" },
          { value: "柔色背景", label: "柔色背景", desc: "淡色調背景，輕盈優雅" }
        ]
      }
    ]
  },
  5: {
    name: "手繪感筆記風格",
    group: "手工溫度",
    desc: "手感筆觸溫暖，適合教育內容與個人品牌",
    previewLabel: "手繪感筆記風格 示意圖",
    previewImg: "images/C2-1-4.jpg",
    options: [
      {
        groupName: "筆觸類型",
        type: "radio",
        key: "stroke",
        items: [
          { value: "鉛筆草稿感", label: "鉛筆草稿感", desc: "鉛筆線條，帶有輕微素描紋路" },
          { value: "鋼筆線稿", label: "鋼筆線稿", desc: "流暢俐落，線條有粗細變化" },
          { value: "手寫筆跡", label: "手寫筆跡", desc: "手寫文字融入圖解，親切感強" },
          { value: "塗鴉插圖風", label: "塗鴉插圖風", desc: "隨性塗鴉，活潑帶童趣" }
        ]
      },
      {
        groupName: "背景質感",
        type: "radio",
        key: "paper",
        items: [
          { value: "空白筆記本頁", label: "空白筆記本頁", desc: "乾淨空白頁面，聚焦圖解" },
          { value: "橫線筆記紙", label: "橫線筆記紙", desc: "帶橫線的筆記本頁感" },
          { value: "方格紙", label: "方格紙", desc: "工程師、數學風格格紙" }
        ]
      },
      {
        groupName: "排版結構",
        type: "radio",
        key: "layout",
        items: [
          { value: "線性流程圖", label: "線性流程圖", desc: "箭頭連接的步驟流程" },
          { value: "心智圖結構", label: "心智圖結構", desc: "放射狀分支，發散思考" }
        ]
      }
    ]
  },
  6: {
    name: "白板板書風格",
    group: "手工溫度",
    desc: "教學板書風格，適合說明、教學、腦力激盪",
    previewLabel: "白板板書風格 示意圖",
    previewImg: "images/C2-2-1.jpg",
    options: [
      {
        groupName: "板面類型",
        type: "radio",
        key: "board_type",
        items: [
          { value: "白板馬克筆風", label: "白板馬克筆風", desc: "亮白底色，彩色粗馬克筆線條" },
          { value: "黑板粉筆風", label: "黑板粉筆風", desc: "深綠底色，白粉筆手寫，帶粉塵質感" }
        ]
      },
      {
        groupName: "筆跡風格",
        type: "radio",
        key: "stroke_style",
        items: [
          { value: "粗獷隨性", label: "粗獷隨性", desc: "筆觸不規則，即興感強" },
          { value: "整齊板書", label: "整齊板書", desc: "排列有序，教學講義感" },
          { value: "腦力激盪感", label: "腦力激盪感", desc: "想法四散、氣泡箭頭，發散構思" }
        ]
      }
    ]
  },
  7: {
    name: "3D 黏土質感",
    group: "3D 立體造型",
    desc: "手工捏製感的 3D 造型，溫暖可愛，現代插畫趨勢",
    previewLabel: "3D 黏土質感 示意圖",
    previewImg: "images/C3-1-1.jpg",
    options: [
      {
        groupName: "材質風格",
        type: "checkbox",
        key: "clay_material",
        items: [
          { value: "手工捏製感", label: "手工捏製感", desc: "不規則邊緣，定格動畫質感" },
          { value: "光滑啞光黏土", label: "光滑啞光黏土", desc: "表面細緻，無明顯反光" },
          { value: "圓潤有機造型", label: "圓潤有機造型", desc: "膨脹飽滿的圓弧形態" }
        ]
      },
      {
        groupName: "配色氛圍",
        type: "radio",
        key: "color_mood",
        items: [
          { value: "粉嫩糖果色", label: "粉嫩糖果色", desc: "薄荷綠、奶油橙，清甜可口" },
          { value: "暖色溫馨調", label: "暖色溫馨調", desc: "蜜桃、奶油黃，溫暖居家感" }
        ]
      },
      {
        groupName: "燈光設定",
        type: "checkbox",
        key: "lighting",
        items: [
          { value: "柔和工作室燈光", label: "柔和工作室燈光", desc: "室內暖光，陰影柔和均勻" },
          { value: "高品質 3D 渲染", label: "高品質 3D 渲染", desc: "電影級打光，渲染精細" }
        ]
      }
    ]
  },
  8: {
    name: "盲盒公仔風格",
    group: "3D 立體造型",
    desc: "潮玩收藏品質感，Q 版可愛角色設計",
    previewLabel: "盲盒公仔風格 示意圖",
    previewImg: "images/C3-2-1.jpg",
    options: [
      {
        groupName: "角色造型",
        type: "checkbox",
        key: "char_style",
        items: [
          { value: "Q 版比例", label: "Q 版比例", desc: "大頭小身，卡通收藏品比例" },
          { value: "大眼表情", label: "大眼表情", desc: "誇張大眼，表情豐富可愛" },
          { value: "站姿展示", label: "站姿展示", desc: "正面站立展示，商品攝影角度" }
        ]
      },
      {
        groupName: "材質完成度",
        type: "checkbox",
        key: "finish",
        items: [
          { value: "光滑啞光材質", label: "光滑啞光材質", desc: "消光塑膠感，盲盒標準質感" },
          { value: "精緻收藏品質感", label: "精緻收藏品質感", desc: "工藝品細節，設計師玩具感" },
          { value: "乾淨白底展示", label: "乾淨白底展示", desc: "白色背景，商品照風格" }
        ]
      }
    ]
  },
  9: {
    name: "積木風格",
    group: "3D 立體造型",
    desc: "積木堆疊造型，親切有趣，適合教學與兒童主題",
    previewLabel: "積木風格 示意圖",
    previewImg: "images/C3-3-2.jpg",
    options: [
      {
        groupName: "材質細節",
        type: "checkbox",
        key: "brick_detail",
        items: [
          { value: "樂高顆粒質感", label: "樂高顆粒質感", desc: "頂部顆粒突起，ABS 塑膠感" },
          { value: "方塊堆疊結構", label: "方塊堆疊結構", desc: "體素風格，模組化組合" },
          { value: "塑膠光澤感", label: "塑膠光澤感", desc: "表面反光，玩具質感" }
        ]
      },
      {
        groupName: "配色方案",
        type: "radio",
        key: "brick_color",
        items: [
          { value: "飽和原色", label: "飽和原色", desc: "紅黃藍綠，經典玩具色彩" },
          { value: "粉彩積木色", label: "粉彩積木色", desc: "柔和淡色，清新現代感" }
        ]
      }
    ]
  },
  10: {
    name: "等距視角微縮風格",
    group: "3D 立體造型",
    desc: "45度等距視角，可愛微縮場景，適合流程地圖",
    previewLabel: "等距視角微縮風格 示意圖",
    previewImg: "images/C3-4-1.jpg",
    options: [
      {
        groupName: "視角設定",
        type: "radio",
        key: "iso_view",
        items: [
          { value: "標準等距角度", label: "標準等距角度", desc: "45度平行透視，無消失點" },
          { value: "俯瞰微縮場景", label: "俯瞰微縮場景", desc: "鳥瞰小人國場景，立體俯視" }
        ]
      },
      {
        groupName: "場景風格",
        type: "radio",
        key: "scene_type",
        items: [
          { value: "辦公室 / 工作場景", label: "辦公室 / 工作場景", desc: "桌椅人物，職場生活感" },
          { value: "城市建築場景", label: "城市建築場景", desc: "微縮城市，建築街道" },
          { value: "流程路徑圖", label: "流程路徑圖", desc: "步驟旅程地圖，3D 流程圖" }
        ]
      }
    ]
  },
  11: {
    name: "社論雜誌插畫感",
    group: "插畫敘事",
    desc: "雜誌插圖質感，適合內容行銷與專題報導",
    previewLabel: "社論雜誌插畫感 示意圖",
    previewImg: "images/G4-1-2.jpg",
    options: [
      {
        groupName: "繪畫技法",
        type: "radio",
        key: "paint_style",
        items: [
          { value: "水彩渲染", label: "水彩渲染", desc: "色彩暈染，柔和筆觸" },
          { value: "厚塗油畫感", label: "厚塗油畫感", desc: "濃郁筆觸，色塊大膽" },
          { value: "復古報紙風", label: "復古報紙風", desc: "1950 年代海報風，泛黃紙張感" }
        ]
      },
      {
        groupName: "構圖氛圍",
        type: "radio",
        key: "composition",
        items: [
          { value: "雜誌封面構圖", label: "雜誌封面構圖", desc: "強烈主視覺，編輯排版感" },
          { value: "敘事意境感", label: "敘事意境感", desc: "隱喻式視覺，概念藝術方向" }
        ]
      }
    ]
  },
  12: {
    name: "日系動漫風格",
    group: "插畫敘事",
    desc: "動漫美學，適合角色主導的說明與品牌吉祥物",
    previewLabel: "日系動漫風格 示意圖",
    previewImg: "images/G4-2-1.jpg",
    options: [
      {
        groupName: "繪製技法",
        type: "radio",
        key: "anime_style",
        items: [
          { value: "賽璐珞著色", label: "賽璐珞著色", desc: "平塗上色，硬邊陰影，動畫感" },
          { value: "高飽和動漫色", label: "高飽和動漫色", desc: "鮮豔高飽和，視覺衝擊強" },
          { value: "漫畫可愛風", label: "漫畫可愛風", desc: "可愛吉祥物風，適合衛教內容" }
        ]
      },
      {
        groupName: "角色風格",
        type: "radio",
        key: "char_type",
        items: [
          { value: "戲劇性動作感", label: "戲劇性動作感", desc: "誇張動作、豐富表情" },
          { value: "可愛角色為主", label: "可愛角色為主", desc: "Q 版動漫角色，Kawaii 風格" }
        ]
      }
    ]
  },
  13: {
    name: "日系清新風格",
    group: "插畫敘事",
    desc: "淡雅柔和，留白優雅，適合生活、健康、親子主題",
    previewLabel: "日系清新風格 示意圖",
    previewImg: "images/G4-3-1.jpg",
    options: [
      {
        groupName: "色調風格",
        type: "checkbox",
        key: "jp_color",
        items: [
          { value: "粉彩淡雅色調", label: "粉彩淡雅色調", desc: "低飽和粉色系，日本插畫氛圍" },
          { value: "柔焦質感", label: "柔焦質感", desc: "輕微模糊邊緣，夢幻光線感" },
          { value: "充足留白", label: "充足留白", desc: "大量空白，讓視覺自然呼吸" }
        ]
      },
      {
        groupName: "主題氛圍",
        type: "radio",
        key: "jp_theme",
        items: [
          { value: "生活健康感", label: "生活健康感", desc: "療癒舒適，平易近人的調性" },
          { value: "親子溫馨感", label: "親子溫馨感", desc: "溫暖家庭感，友善兒童視角" }
        ]
      }
    ]
  },
  14: {
    name: "便當盒排版法",
    group: "版面結構",
    desc: "大小格子組合，適合多主題並陳的資訊圖",
    previewLabel: "便當盒排版法 示意圖",
    previewImg: "images/C5-1-1.jpg",
    options: [
      {
        groupName: "格子結構",
        type: "radio",
        key: "bento_grid",
        items: [
          { value: "大小格混排", label: "大小格混排", desc: "不等比格子，非對稱感強" },
          { value: "等比方格", label: "等比方格", desc: "統一大小格子，整齊有序" },
          { value: "主副格層次", label: "主副格層次", desc: "一個主角格 + 多個配角格" }
        ]
      },
      {
        groupName: "格子內容搭配",
        type: "radio",
        key: "bento_content",
        items: [
          { value: "搭配極簡向量插畫", label: "搭配極簡向量插畫", desc: "每格放置平面向量圖示" },
          { value: "搭配數據圖表", label: "搭配數據圖表", desc: "每格放置數據視覺化元件" },
          { value: "搭配 3D 元素", label: "搭配 3D 元素", desc: "每格放置 3D 黏土或等距物件" }
        ]
      }
    ]
  },
  15: {
    name: "專業科學繪圖（版面型）",
    group: "版面結構",
    desc: "版面化科學圖解，適合步驟說明與比對分析",
    previewLabel: "專業科學繪圖（版面型）示意圖",
    previewImg: "images/C5-2-2.jpg",
    options: [
      {
        groupName: "版面結構",
        type: "radio",
        key: "sci_layout",
        items: [
          { value: "步驟分解版型", label: "步驟分解版型", desc: "編號步驟，依序拆解流程" },
          { value: "比對對照版型", label: "比對對照版型", desc: "前後對比、左右並陳分析" },
          { value: "階層結構版型", label: "階層結構版型", desc: "金字塔或樹狀，分類層級" }
        ]
      }
    ]
  }
};

// ===================================================
// STATE
// ===================================================
let selectedSize  = "橫向 16:9";
let selectedScene = "";
let selectedStyle = "";
let selectedLayout = "";
let pptHeaderSpace = false;
let pptNoText = false;
let txtMain = "";
let txtSub  = "";
let txtCta  = "";
let txtExtra = "";
// styleOptions: { key: value_or_array }
let styleOptions  = {};

// ===================================================
// CHIP SELECTION (size)
// ===================================================
document.querySelectorAll('#size-chips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#size-chips .chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    selectedSize = chip.dataset.value;
    updatePrompt();
  });
});

// ===================================================
// SELECT LISTENERS
// ===================================================
document.getElementById('scene-select').addEventListener('change', e => {
  selectedScene = e.target.value;
  updatePrompt();
});

document.getElementById('layout-select').addEventListener('change', e => {
  selectedLayout = e.target.value;
  updatePrompt();
});

document.getElementById('style-select').addEventListener('change', e => {
  selectedStyle = e.target.value;
  styleOptions = {};
  renderStylePanel(selectedStyle);
  updatePrompt();
});

// ===================================================
// CHECKBOXES & TEXT
// ===================================================
document.getElementById('ppt-header-space').addEventListener('change', e => {
  pptHeaderSpace = e.target.checked; updatePrompt();
});
document.getElementById('ppt-no-text').addEventListener('change', e => {
  pptNoText = e.target.checked; updatePrompt();
});

['txt-main','txt-sub','txt-cta','txt-extra'].forEach(id => {
  document.getElementById(id).addEventListener('input', e => {
    if(id === 'txt-main')  txtMain  = e.target.value;
    if(id === 'txt-sub')   txtSub   = e.target.value;
    if(id === 'txt-cta')   txtCta   = e.target.value;
    if(id === 'txt-extra') txtExtra = e.target.value;
    updatePrompt();
  });
});

// ===================================================
// RENDER STYLE PANEL (middle column)
// ===================================================
function renderStylePanel(styleId) {
  const panel = document.getElementById('style-panel');
  const previewThumb = document.getElementById('preview-thumb');
  const previewLabel = document.getElementById('preview-label');
  const zoomHint = document.getElementById('zoom-hint');

  if (!styleId || !STYLES[styleId]) {
    panel.innerHTML = '<p style="font-size:13px;color:var(--text-light);text-align:center;padding:24px 0;">選擇視覺風格後，在此選擇細項條件</p>';
    previewLabel.style.display = '';
    previewLabel.innerHTML = '請先在左欄選擇視覺風格，<br>此處將顯示風格參考圖';
    previewThumb.style.backgroundImage = 'none';
    zoomHint.classList.add('hidden');
    previewThumb.style.cursor = 'default';
    return;
  }

  const style = STYLES[styleId];
  
  // Update preview area — 只更新背景圖，不覆蓋整個 innerHTML，
  // 以免破壞 preview-label / zoom-hint 等子元素
  if (style.previewImg) {
    previewThumb.style.backgroundImage  = 'url("' + style.previewImg + '")';
    previewThumb.style.backgroundSize   = 'cover';
    previewThumb.style.backgroundPosition = 'center';
    previewLabel.style.display = 'none';
  } else {
    previewThumb.style.backgroundImage = 'none';
    previewLabel.style.display = '';
    previewLabel.textContent = style.previewLabel + '（圖片待補充）';
  }
  zoomHint.classList.remove('hidden');
  previewThumb.style.cursor = 'pointer';

  // Build options HTML
  let html = '';
  style.options.forEach(group => {
    html += `<div class="opt-group">`;
    html += `<div class="opt-group-title">${group.groupName}</div>`;
    group.items.forEach(item => {
      const inputType = group.type === 'radio' ? 'radio' : 'checkbox';
      const nameAttr  = group.type === 'radio' ? `name="opt-${group.key}"` : '';
      html += `
        <label class="opt-row">
          <input type="${inputType}" ${nameAttr} 
            data-group="${group.key}" 
            data-type="${group.type}"
            value="${item.value}">
          <div class="opt-row-text">
            <span class="opt-row-name">${item.label}</span>
            ${item.desc ? `<span class="opt-row-desc">${item.desc}</span>` : ''}
          </div>
        </label>`;
    });
    html += `</div>`;
  });

  panel.innerHTML = html;

  // Add listeners
  panel.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', () => {
      collectStyleOptions();
      updatePrompt();
    });
  });
}

// ===================================================
// COLLECT STYLE OPTIONS FROM PANEL
// ===================================================
function collectStyleOptions() {
  const panel = document.getElementById('style-panel');
  styleOptions = {};
  
  // Radios
  panel.querySelectorAll('input[type="radio"]:checked').forEach(input => {
    styleOptions[input.dataset.group] = input.value;
  });
  
  // Checkboxes
  panel.querySelectorAll('input[type="checkbox"]').forEach(input => {
    const key = input.dataset.group;
    if (!styleOptions[key]) styleOptions[key] = [];
    if (input.checked) styleOptions[key].push(input.value);
  });
}

// ===================================================
// BUILD PROMPT
// ===================================================
function buildPrompt() {
  if (!selectedStyle) return '';
  
  const style = STYLES[selectedStyle];
  let lines = [];

  lines.push(`請生成一張【${selectedSize}資訊圖】，已包含完整排版與視覺設計。`);
  lines.push('');

  // Scene
  if (selectedScene) {
    lines.push(`**主視覺 / 構圖內容描述**：`);
    lines.push(`針對「${selectedScene}」。畫面應呈現相關主題的視覺化設計。`);
    lines.push('');
  }

  // Style
  lines.push(`**視覺風格**：`);
  lines.push(`採用「${style.name}」風格（${style.group}）。${style.desc}。`);

  // Style sub-options
  const optLines = [];
  Object.keys(styleOptions).forEach(key => {
    const val = styleOptions[key];
    if (Array.isArray(val) && val.length > 0) {
      optLines.push(val.join('、'));
    } else if (typeof val === 'string' && val) {
      // Find desc from STYLES
      let desc = '';
      if (style && style.options) {
        style.options.forEach(grp => {
          grp.items.forEach(item => {
            if (item.value === val && item.desc) desc = item.desc;
          });
        });
      }
      optLines.push(desc ? `${val}（${desc}）` : val);
    }
  });
  if (optLines.length > 0) {
    optLines.forEach(l => lines.push(`- ${l}`));
  }
  lines.push('');

  // Layout
  lines.push(`**版面配置**：`);
  if (selectedLayout) {
    lines.push(`採用「${selectedLayout}」排版方式。`);
  } else {
    lines.push(`由 AI 自動優化資訊層級與空間分配。`);
  }
  lines.push('');

  // PPT settings
  const pptItems = [];
  if (pptHeaderSpace) pptItems.push('頂部 30% 區域必須保持完全純色留白背景（Solid Background），嚴禁出現圖形裝飾，構圖重心集中在中下區域');
  if (pptNoText) pptItems.push('版面為純圖示版本，不含文字說明');
  if (pptItems.length > 0) {
    lines.push(`**簡報母片設定**：`);
    pptItems.forEach(i => lines.push(`- ${i}`));
    lines.push('');
  }

  // Text content
  const textItems = [];
  if (txtMain)  textItems.push(`主標題：${txtMain}`);
  if (txtSub)   textItems.push(`副標題：${txtSub}`);
  if (txtCta)   textItems.push(`重點訊息：${txtCta}`);
  if (textItems.length > 0) {
    lines.push(`**文字設計細節**：`);
    textItems.forEach(t => lines.push(`- ${t}`));
    lines.push('');
  }

  // Extra
  if (txtExtra) {
    lines.push(`**補充說明**：`);
    lines.push(txtExtra);
    lines.push('');
  }

  // Output spec
  lines.push(`**輸出規格要求**：`);
  lines.push(`- 比例為 ${selectedSize}`);
  lines.push(`- 整體構圖飽滿，視覺元素豐富但不雜亂`);
  lines.push(`- 配色和諧，字體清晰易讀`);

  return lines.join('\n');
}

// ===================================================
// BUILD SUMMARY ITEMS
// ===================================================
function buildSummaryItems() {
  const items = [];

  items.push({ label: '輸出格式', value: selectedSize });

  if (selectedScene) items.push({ label: '應用場景', value: selectedScene });

  if (selectedStyle && STYLES[selectedStyle]) {
    items.push({ label: '視覺風格', value: STYLES[selectedStyle].name });
    // Sub options
    const style = STYLES[selectedStyle];
    Object.keys(styleOptions).forEach(key => {
      const val = styleOptions[key];
      if (Array.isArray(val) && val.length > 0) {
        // Find group name
        let groupName = key;
        style.options.forEach(g => { if (g.key === key) groupName = g.groupName; });
        items.push({ label: groupName, value: val.join('、') });
      } else if (typeof val === 'string' && val) {
        let groupName = key;
        style.options.forEach(g => { if (g.key === key) groupName = g.groupName; });
        items.push({ label: groupName, value: val });
      }
    });
  }

  if (selectedLayout) items.push({ label: '版面配置', value: selectedLayout });
  if (pptHeaderSpace) items.push({ label: '母片設定', value: '預留上方 30% 標題空白' });
  if (pptNoText)      items.push({ label: '母片設定', value: '純圖示版（不含文字）' });
  if (txtMain)  items.push({ label: '主標題', value: txtMain });
  if (txtSub)   items.push({ label: '副標題', value: txtSub });
  if (txtCta)   items.push({ label: '重點訊息', value: txtCta });
  if (txtExtra) items.push({ label: '補充描述', value: txtExtra.length > 30 ? txtExtra.slice(0,30) + '…' : txtExtra });

  return items;
}

// ===================================================
// UPDATE PROMPT (right column)
// ===================================================
function updatePrompt() {
  const items = buildSummaryItems();
  const listEl = document.getElementById('prompt-items-list');
  const textarea = document.getElementById('prompt-textarea');

  if (items.length === 0 || !selectedStyle) {
    listEl.innerHTML = '<div class="prompt-empty">尚未設定任何條件，<br>請從左欄開始選擇</div>';
    textarea.value = '';
    return;
  }

  listEl.innerHTML = items.map(i =>
    `<div class="prompt-item"><div><strong>${i.label}：</strong>${i.value}</div></div>`
  ).join('');

  textarea.value = buildPrompt();
}

// ===================================================
// COPY & RESET
// ===================================================
function copyPrompt() {
  const textarea = document.getElementById('prompt-textarea');
  if (!textarea.value.trim()) return;
  
  navigator.clipboard.writeText(textarea.value).then(() => {
    const el = document.getElementById('copy-success');
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2000);
  }).catch(() => {
    textarea.select();
    document.execCommand('copy');
  });
}

function resetAll() {
  // Size chips
  document.querySelectorAll('#size-chips .chip').forEach((c, i) => {
    c.classList.toggle('selected', i === 0);
  });
  selectedSize = "橫向 16:9";

  // Selects
  document.getElementById('scene-select').value  = '';
  document.getElementById('style-select').value  = '';
  document.getElementById('layout-select').value = '';
  selectedScene = ''; selectedStyle = ''; selectedLayout = '';

  // Checkboxes
  document.getElementById('ppt-header-space').checked = false;
  document.getElementById('ppt-no-text').checked = false;
  pptHeaderSpace = false; pptNoText = false;

  // Texts
  document.getElementById('txt-main').value  = '';
  document.getElementById('txt-sub').value   = '';
  document.getElementById('txt-cta').value   = '';
  document.getElementById('txt-extra').value = '';
  txtMain = ''; txtSub = ''; txtCta = ''; txtExtra = '';

  // Style options
  styleOptions = {};
  renderStylePanel('');
  updatePrompt();
}

// ===================================================
// LIGHTBOX
// ===================================================
function openLightbox() {
  if (!selectedStyle) return;
  const style = STYLES[selectedStyle];
  document.getElementById('lightbox-caption').innerHTML = style.previewLabel + '<br>（ 註：其他細項風格詳網站右上角【視覺風格 畫廊】頁 ）';
  // document.getElementById('lightbox-caption').textContent = style.previewLabel + '（註）';
  // document.getElementById('lightbox-caption').textContent = style.previewLabel ;
  // document.getElementById('lightbox-img').src = '';
  document.getElementById('lightbox-img').src = style.previewImg || '';
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox') || e.target.classList.contains('lightbox-close')) {
    document.getElementById('lightbox').classList.remove('open');
  }
}

// ESC to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
});
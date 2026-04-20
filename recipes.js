// HowToCook 菜谱数据集 - 从 https://github.com/Anduin2017/HowToCook 提取
const RECIPES = [
  {
    id: 1,
    name: "可乐鸡翅",
    category: "荤菜",
    difficulty: 3,
    time: "30分钟",
    servings: 2,
    tags: ["鸡翅", "可乐", "生姜", "酱油"],
    ingredients: [
      { name: "鸡翅", amount: "500g", type: "meat" },
      { name: "可乐", amount: "330ml", type: "other" },
      { name: "生姜", amount: "5片", type: "vegetable" },
      { name: "酱油", amount: "30ml", type: "condiment" },
      { name: "料酒", amount: "15ml", type: "condiment" },
      { name: "盐", amount: "3g", type: "condiment" }
    ],
    steps: [
      "鸡翅洗净，在两面各划两刀便于入味",
      "冷水下锅焯水，捞出沥干",
      "锅中放少许油，放入生姜片爆香",
      "放入鸡翅，中小火煎至两面金黄",
      "倒入可乐和酱油，加入料酒",
      "大火烧开后转小火，盖盖焖煮 15-20 分钟",
      "开盖大火收汁，汤汁浓稠后关火装盘"
    ]
  },
  {
    id: 2,
    name: "红烧肉",
    category: "荤菜",
    difficulty: 3,
    time: "60分钟",
    servings: 3,
    tags: ["五花肉", "酱油", "冰糖"],
    ingredients: [
      { name: "五花肉", amount: "500g", type: "meat" },
      { name: "酱油", amount: "40ml", type: "condiment" },
      { name: "冰糖", amount: "30g", type: "condiment" },
      { name: "料酒", amount: "30ml", type: "condiment" },
      { name: "生姜", amount: "3片", type: "vegetable" },
      { name: "八角", amount: "2个", type: "condiment" },
      { name: "盐", amount: "3g", type: "condiment" }
    ],
    steps: [
      "五花肉切成 3cm 见方的块",
      "冷水下锅焯水 3 分钟，捞出洗净",
      "锅不放油，中小火放入冰糖炒出焦糖色",
      "放入五花肉翻炒均匀上色",
      "加入酱油、料酒、生姜、八角",
      "加入开水没过肉，大火烧开转小火炖 45 分钟",
      "开盖大火收汁，汤汁浓稠即可"
    ]
  },
  {
    id: 3,
    name: "宫保鸡丁",
    category: "荤菜",
    difficulty: 3,
    time: "25分钟",
    servings: 2,
    tags: ["鸡胸肉", "花生米", "干辣椒", "黄瓜"],
    ingredients: [
      { name: "鸡胸肉", amount: "300g", type: "meat" },
      { name: "花生米", amount: "50g", type: "other" },
      { name: "干辣椒", amount: "8个", type: "condiment" },
      { name: "黄瓜", amount: "1根", type: "vegetable" },
      { name: "酱油", amount: "20ml", type: "condiment" },
      { name: "醋", amount: "15ml", type: "condiment" },
      { name: "白糖", amount: "15g", type: "condiment" },
      { name: "淀粉", amount: "10g", type: "condiment" },
      { name: "花椒", amount: "10粒", type: "condiment" }
    ],
    steps: [
      "鸡胸肉切丁，用酱油、淀粉腌制 10 分钟",
      "黄瓜切丁，干辣椒剪段",
      "调碗汁：酱油、醋、白糖、淀粉加少许水拌匀",
      "冷油小火炒花生米至酥脆，盛出备用",
      "热油爆香花椒、干辣椒",
      "放入鸡丁大火翻炒至变白",
      "加入黄瓜丁翻炒，倒入碗汁快速翻炒均匀",
      "最后加入花生米翻拌出锅"
    ]
  },
  {
    id: 4,
    name: "糖醋排骨",
    category: "荤菜",
    difficulty: 3,
    time: "40分钟",
    servings: 2,
    tags: ["排骨", "醋", "白糖", "酱油"],
    ingredients: [
      { name: "排骨", amount: "500g", type: "meat" },
      { name: "白糖", amount: "40g", type: "condiment" },
      { name: "醋", amount: "30ml", type: "condiment" },
      { name: "酱油", amount: "20ml", type: "condiment" },
      { name: "料酒", amount: "20ml", type: "condiment" },
      { name: "生姜", amount: "3片", type: "vegetable" }
    ],
    steps: [
      "排骨剁成小段，冷水下锅焯水 5 分钟",
      "捞出沥干水分",
      "锅中放油，放入排骨煎至表面微焦",
      "加入料酒、酱油翻炒上色",
      "加入开水没过排骨，放入生姜片",
      "大火烧开转小火炖 30 分钟",
      "加入白糖和醋，大火收汁至浓稠挂满排骨"
    ]
  },
  {
    id: 5,
    name: "回锅肉",
    category: "荤菜",
    difficulty: 3,
    time: "30分钟",
    servings: 2,
    tags: ["五花肉", "青椒", "豆瓣酱", "蒜苗"],
    ingredients: [
      { name: "五花肉", amount: "300g", type: "meat" },
      { name: "青椒", amount: "2个", type: "vegetable" },
      { name: "蒜苗", amount: "3根", type: "vegetable" },
      { name: "豆瓣酱", amount: "20g", type: "condiment" },
      { name: "酱油", amount: "10ml", type: "condiment" },
      { name: "料酒", amount: "10ml", type: "condiment" },
      { name: "生姜", amount: "3片", type: "vegetable" }
    ],
    steps: [
      "五花肉整块冷水下锅，加姜片料酒煮 20 分钟至八成熟",
      "捞出放凉后切薄片",
      "青椒切块，蒜苗切段",
      "锅不放油，放入五花肉片中火煸出油脂",
      "肉片微卷后推到一边，放入豆瓣酱炒出红油",
      "混合翻炒，加入酱油、料酒调味",
      "放入青椒和蒜苗大火翻炒至断生出锅"
    ]
  },
  {
    id: 6,
    name: "西红柿炒鸡蛋",
    category: "素菜",
    difficulty: 1,
    time: "15分钟",
    servings: 2,
    tags: ["西红柿", "鸡蛋", "葱"],
    ingredients: [
      { name: "西红柿", amount: "2个", type: "vegetable" },
      { name: "鸡蛋", amount: "3个", type: "meat" },
      { name: "葱", amount: "2根", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "白糖", amount: "5g", type: "condiment" },
      { name: "食用油", amount: "20ml", type: "condiment" }
    ],
    steps: [
      "西红柿切块，葱切葱花，鸡蛋打散加少许盐",
      "热锅凉油，倒入蛋液炒至凝固盛出",
      "锅中再加少许油，放入葱花爆香",
      "放入西红柿块中火翻炒出汁",
      "加入白糖和盐调味",
      "倒回鸡蛋翻炒均匀即可出锅"
    ]
  },
  {
    id: 7,
    name: "麻婆豆腐",
    category: "素菜",
    difficulty: 2,
    time: "20分钟",
    servings: 2,
    tags: ["豆腐", "肉末", "豆瓣酱", "花椒"],
    ingredients: [
      { name: "豆腐", amount: "400g", type: "vegetable" },
      { name: "猪肉末", amount: "100g", type: "meat" },
      { name: "豆瓣酱", amount: "20g", type: "condiment" },
      { name: "花椒粉", amount: "3g", type: "condiment" },
      { name: "淀粉", amount: "10g", type: "condiment" },
      { name: "酱油", amount: "10ml", type: "condiment" },
      { name: "葱", amount: "2根", type: "vegetable" }
    ],
    steps: [
      "豆腐切 2cm 小块，放入加盐的开水中焯烫 2 分钟",
      "热油炒散肉末至变色",
      "加入豆瓣酱炒出红油",
      "加入适量水烧开，放入豆腐块",
      "小火炖 5 分钟使豆腐入味",
      "加入酱油调味，水淀粉勾芡",
      "出锅撒花椒粉和葱花"
    ]
  },
  {
    id: 8,
    name: "虎皮青椒",
    category: "素菜",
    difficulty: 2,
    time: "15分钟",
    servings: 2,
    tags: ["青椒", "蒜", "酱油", "醋"],
    ingredients: [
      { name: "青椒", amount: "5个", type: "vegetable" },
      { name: "蒜", amount: "3瓣", type: "vegetable" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "醋", amount: "10ml", type: "condiment" },
      { name: "白糖", amount: "10g", type: "condiment" }
    ],
    steps: [
      "青椒去蒂去籽，用刀面拍扁",
      "蒜切末",
      "锅中不放油，放入青椒中火煎至两面起虎皮斑",
      "盛出青椒，锅中放少许油爆香蒜末",
      "放入青椒，加入酱油、醋、白糖和少许水",
      "翻炒均匀收汁即可"
    ]
  },
  {
    id: 9,
    name: "地三鲜",
    category: "素菜",
    difficulty: 2,
    time: "25分钟",
    servings: 2,
    tags: ["土豆", "茄子", "青椒"],
    ingredients: [
      { name: "土豆", amount: "1个", type: "vegetable" },
      { name: "茄子", amount: "1个", type: "vegetable" },
      { name: "青椒", amount: "2个", type: "vegetable" },
      { name: "蒜", amount: "4瓣", type: "vegetable" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "淀粉", amount: "10g", type: "condiment" },
      { name: "盐", amount: "3g", type: "condiment" }
    ],
    steps: [
      "土豆去皮切滚刀块，茄子切滚刀块，青椒切块",
      "土豆块放入油锅中炸至表面金黄捞出",
      "茄子块放入油锅中炸至变软捞出",
      "锅中留底油，爆香蒜末",
      "加入酱油、盐和少许水烧开",
      "放入土豆、茄子、青椒翻炒均匀",
      "水淀粉勾芡，翻匀出锅"
    ]
  },
  {
    id: 10,
    name: "炒青菜",
    category: "素菜",
    difficulty: 1,
    time: "8分钟",
    servings: 2,
    tags: ["青菜", "蒜", "盐"],
    ingredients: [
      { name: "青菜", amount: "300g", type: "vegetable" },
      { name: "蒜", amount: "3瓣", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "食用油", amount: "15ml", type: "condiment" }
    ],
    steps: [
      "青菜洗净，蒜切末",
      "热锅凉油，放入蒜末爆香",
      "放入青菜大火翻炒",
      "炒至青菜变软出水",
      "加盐调味，翻炒均匀出锅"
    ]
  },
  {
    id: 11,
    name: "清蒸鲈鱼",
    category: "水产",
    difficulty: 2,
    time: "25分钟",
    servings: 2,
    tags: ["鲈鱼", "葱", "姜", "酱油"],
    ingredients: [
      { name: "鲈鱼", amount: "1条(约500g)", type: "meat" },
      { name: "葱", amount: "3根", type: "vegetable" },
      { name: "生姜", amount: "5片", type: "vegetable" },
      { name: "蒸鱼豉油", amount: "30ml", type: "condiment" },
      { name: "料酒", amount: "15ml", type: "condiment" }
    ],
    steps: [
      "鲈鱼洗净，鱼身两面各划三刀",
      "用料酒和姜片腌制 10 分钟去腥",
      "盘底铺葱段和姜片，放上鲈鱼",
      "水开后上锅大火蒸 8-10 分钟",
      "倒掉蒸出的汤汁，去掉葱姜",
      "鱼上铺新鲜葱丝，淋蒸鱼豉油",
      "将烧至冒烟的热油浇在葱丝上"
    ]
  },
  {
    id: 12,
    name: "油焖大虾",
    category: "水产",
    difficulty: 2,
    time: "20分钟",
    servings: 2,
    tags: ["大虾", "葱", "姜", "酱油", "白糖"],
    ingredients: [
      { name: "大虾", amount: "500g", type: "meat" },
      { name: "葱", amount: "2根", type: "vegetable" },
      { name: "生姜", amount: "3片", type: "vegetable" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "白糖", amount: "15g", type: "condiment" },
      { name: "料酒", amount: "15ml", type: "condiment" },
      { name: "番茄酱", amount: "15g", type: "condiment" }
    ],
    steps: [
      "大虾剪去虾须虾脚，挑去虾线",
      "热油放入大虾中火煎至变红翻面",
      "两面都变红后放入葱姜爆香",
      "加入料酒、酱油、白糖、番茄酱",
      "加少许水，盖盖焖煮 5 分钟",
      "开盖大火收汁至浓稠"
    ]
  },
  {
    id: 13,
    name: "玉米排骨汤",
    category: "汤",
    difficulty: 2,
    time: "90分钟",
    servings: 3,
    tags: ["排骨", "玉米", "胡萝卜"],
    ingredients: [
      { name: "排骨", amount: "500g", type: "meat" },
      { name: "玉米", amount: "1根", type: "vegetable" },
      { name: "胡萝卜", amount: "1根", type: "vegetable" },
      { name: "生姜", amount: "3片", type: "vegetable" },
      { name: "盐", amount: "5g", type: "condiment" },
      { name: "料酒", amount: "15ml", type: "condiment" }
    ],
    steps: [
      "排骨冷水下锅焯水 5 分钟，捞出洗净",
      "玉米切段，胡萝卜切滚刀块",
      "砂锅放入排骨、姜片，加足量水",
      "大火烧开撇去浮沫，加料酒",
      "转小火炖 60 分钟",
      "放入玉米和胡萝卜继续炖 20 分钟",
      "加盐调味即可"
    ]
  },
  {
    id: 14,
    name: "番茄蛋汤",
    category: "汤",
    difficulty: 1,
    time: "15分钟",
    servings: 2,
    tags: ["西红柿", "鸡蛋", "葱"],
    ingredients: [
      { name: "西红柿", amount: "1个", type: "vegetable" },
      { name: "鸡蛋", amount: "2个", type: "meat" },
      { name: "葱", amount: "1根", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "香油", amount: "5ml", type: "condiment" }
    ],
    steps: [
      "西红柿切小块，鸡蛋打散，葱切葱花",
      "锅中放少许油，放入西红柿翻炒出汁",
      "加入适量水烧开",
      "淋入蛋液，不要搅动，等蛋花浮起",
      "加盐调味，撒葱花，淋香油出锅"
    ]
  },
  {
    id: 15,
    name: "扬州炒饭",
    category: "主食",
    difficulty: 2,
    time: "20分钟",
    servings: 2,
    tags: ["米饭", "鸡蛋", "火腿", "虾仁"],
    ingredients: [
      { name: "米饭", amount: "300g(隔夜饭)", type: "other" },
      { name: "鸡蛋", amount: "2个", type: "meat" },
      { name: "火腿", amount: "50g", type: "meat" },
      { name: "虾仁", amount: "50g", type: "meat" },
      { name: "青豆", amount: "30g", type: "vegetable" },
      { name: "胡萝卜", amount: "30g", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "葱", amount: "1根", type: "vegetable" }
    ],
    steps: [
      "胡萝卜、火腿切小丁，葱切葱花",
      "虾仁用料酒腌制，鸡蛋打散",
      "热油炒散鸡蛋盛出",
      "再放入虾仁炒至变色盛出",
      "锅中放油，放入胡萝卜丁、青豆翻炒",
      "加入火腿丁翻炒，放入米饭炒散",
      "倒回鸡蛋和虾仁，加盐调味翻炒均匀",
      "撒葱花出锅"
    ]
  },
  {
    id: 16,
    name: "茶叶蛋",
    category: "早餐",
    difficulty: 1,
    time: "120分钟",
    servings: 4,
    tags: ["鸡蛋", "茶叶", "酱油", "八角"],
    ingredients: [
      { name: "鸡蛋", amount: "10个", type: "meat" },
      { name: "茶叶", amount: "10g", type: "other" },
      { name: "酱油", amount: "30ml", type: "condiment" },
      { name: "八角", amount: "2个", type: "condiment" },
      { name: "桂皮", amount: "1小块", type: "condiment" },
      { name: "盐", amount: "5g", type: "condiment" }
    ],
    steps: [
      "鸡蛋冷水下锅煮 8 分钟至全熟",
      "捞出用勺子轻轻敲裂蛋壳（不要剥掉）",
      "锅中加水放入茶叶、酱油、八角、桂皮、盐",
      "放入敲裂的鸡蛋，大火烧开",
      "转小火煮 30 分钟",
      "关火浸泡 2 小时以上，越久越入味"
    ]
  },
  {
    id: 17,
    name: "太阳蛋",
    category: "早餐",
    difficulty: 1,
    time: "5分钟",
    servings: 1,
    tags: ["鸡蛋", "盐"],
    ingredients: [
      { name: "鸡蛋", amount: "1个", type: "meat" },
      { name: "盐", amount: "1g", type: "condiment" },
      { name: "食用油", amount: "5ml", type: "condiment" }
    ],
    steps: [
      "平底锅小火加热，刷薄油",
      "打入鸡蛋，保持小火",
      "撒上少许盐",
      "煎至蛋白凝固，蛋黄仍嫩滑（约 2-3 分钟）",
      "用铲子轻轻盛出"
    ]
  },
  {
    id: 18,
    name: "酸辣土豆丝",
    category: "素菜",
    difficulty: 2,
    time: "15分钟",
    servings: 2,
    tags: ["土豆", "干辣椒", "醋"],
    ingredients: [
      { name: "土豆", amount: "2个", type: "vegetable" },
      { name: "干辣椒", amount: "5个", type: "condiment" },
      { name: "醋", amount: "15ml", type: "condiment" },
      { name: "花椒", amount: "10粒", type: "condiment" },
      { name: "蒜", amount: "2瓣", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" }
    ],
    steps: [
      "土豆去皮切细丝，放入清水中浸泡去淀粉",
      "干辣椒剪段，蒜切末",
      "热油爆香花椒后捞出",
      "放入干辣椒和蒜末爆香",
      "沥干土豆丝，放入锅中大火翻炒",
      "加入醋和盐，炒至断生（保持脆爽）出锅"
    ]
  },
  {
    id: 19,
    name: "鱼香肉丝",
    category: "荤菜",
    difficulty: 3,
    time: "25分钟",
    servings: 2,
    tags: ["猪里脊", "木耳", "胡萝卜", "青椒"],
    ingredients: [
      { name: "猪里脊", amount: "250g", type: "meat" },
      { name: "木耳", amount: "50g", type: "vegetable" },
      { name: "胡萝卜", amount: "1根", type: "vegetable" },
      { name: "青椒", amount: "1个", type: "vegetable" },
      { name: "豆瓣酱", amount: "15g", type: "condiment" },
      { name: "醋", amount: "15ml", type: "condiment" },
      { name: "白糖", amount: "15g", type: "condiment" },
      { name: "酱油", amount: "10ml", type: "condiment" },
      { name: "淀粉", amount: "10g", type: "condiment" },
      { name: "蒜", amount: "3瓣", type: "vegetable" },
      { name: "生姜", amount: "3片", type: "vegetable" }
    ],
    steps: [
      "里脊肉切丝，用酱油、淀粉腌制 10 分钟",
      "木耳泡发切丝，胡萝卜、青椒切丝",
      "调碗汁：醋、白糖、酱油、淀粉加水拌匀",
      "热油滑散肉丝盛出",
      "爆香姜蒜和豆瓣酱",
      "放入胡萝卜、木耳翻炒",
      "加入青椒丝和肉丝，倒入碗汁快速翻炒收汁"
    ]
  },
  {
    id: 20,
    name: "水煮肉片",
    category: "荤菜",
    difficulty: 4,
    time: "35分钟",
    servings: 2,
    tags: ["猪里脊", "豆芽", "白菜", "干辣椒"],
    ingredients: [
      { name: "猪里脊", amount: "300g", type: "meat" },
      { name: "豆芽", amount: "200g", type: "vegetable" },
      { name: "白菜", amount: "200g", type: "vegetable" },
      { name: "豆瓣酱", amount: "30g", type: "condiment" },
      { name: "干辣椒", amount: "15个", type: "condiment" },
      { name: "花椒", amount: "15粒", type: "condiment" },
      { name: "淀粉", amount: "15g", type: "condiment" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "蒜", amount: "5瓣", type: "vegetable" }
    ],
    steps: [
      "里脊肉切薄片，用酱油、淀粉、料酒腌制 15 分钟",
      "豆芽洗净，白菜撕小块",
      "热油炒香豆瓣酱出红油，加水烧开",
      "放入豆芽和白菜煮熟，捞出铺碗底",
      "汤中下肉片，用筷子拨散，煮熟后连汤倒入碗中",
      "肉片上撒蒜末、干辣椒段、花椒",
      "将烧至冒烟的热油浇在上面"
    ]
  },
  {
    id: 21,
    name: "蒜蓉西兰花",
    category: "素菜",
    difficulty: 1,
    time: "10分钟",
    servings: 2,
    tags: ["西兰花", "蒜"],
    ingredients: [
      { name: "西兰花", amount: "300g", type: "vegetable" },
      { name: "蒜", amount: "5瓣", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "蚝油", amount: "10ml", type: "condiment" }
    ],
    steps: [
      "西兰花掰成小朵，清水浸泡 10 分钟",
      "烧开水，放入西兰花焯水 1 分钟捞出",
      "蒜切末",
      "热油爆香蒜末",
      "放入西兰花翻炒",
      "加蚝油和盐调味，翻炒均匀出锅"
    ]
  },
  {
    id: 22,
    name: "红烧茄子",
    category: "素菜",
    difficulty: 2,
    time: "20分钟",
    servings: 2,
    tags: ["茄子", "蒜", "酱油"],
    ingredients: [
      { name: "茄子", amount: "2个", type: "vegetable" },
      { name: "蒜", amount: "4瓣", type: "vegetable" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "白糖", amount: "10g", type: "condiment" },
      { name: "淀粉", amount: "10g", type: "condiment" },
      { name: "葱", amount: "1根", type: "vegetable" }
    ],
    steps: [
      "茄子切滚刀块，用盐腌制 10 分钟挤去水分",
      "蒜切末，葱切葱花",
      "锅中多放些油，放入茄子炒至变软盛出",
      "锅中留底油爆香蒜末",
      "加入酱油、白糖和少许水烧开",
      "放入茄子翻炒均匀",
      "水淀粉勾芡，撒葱花出锅"
    ]
  },
  {
    id: 23,
    name: "葱爆羊肉",
    category: "荤菜",
    difficulty: 3,
    time: "15分钟",
    servings: 2,
    tags: ["羊肉", "大葱", "酱油"],
    ingredients: [
      { name: "羊肉", amount: "300g", type: "meat" },
      { name: "大葱", amount: "2根", type: "vegetable" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "料酒", amount: "15ml", type: "condiment" },
      { name: "孜然粉", amount: "5g", type: "condiment" },
      { name: "盐", amount: "3g", type: "condiment" }
    ],
    steps: [
      "羊肉切薄片，用料酒和酱油腌制 10 分钟",
      "大葱斜切成段",
      "热锅大火，放入羊肉快速翻炒至变色",
      "放入大葱段继续大火翻炒",
      "加孜然粉和盐调味",
      "炒至大葱断生即可出锅"
    ]
  },
  {
    id: 24,
    name: "蛋炒饭",
    category: "主食",
    difficulty: 1,
    time: "10分钟",
    servings: 1,
    tags: ["米饭", "鸡蛋", "葱"],
    ingredients: [
      { name: "米饭", amount: "200g(隔夜饭)", type: "other" },
      { name: "鸡蛋", amount: "2个", type: "meat" },
      { name: "葱", amount: "1根", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "食用油", amount: "15ml", type: "condiment" }
    ],
    steps: [
      "鸡蛋打散，葱切葱花",
      "热油倒入蛋液，快速搅拌成碎块",
      "放入米饭大火翻炒，将饭粒炒散",
      "加盐调味，撒葱花翻炒均匀",
      "炒至饭粒分明、略带焦香即可"
    ]
  },
  {
    id: 25,
    name: "紫菜蛋花汤",
    category: "汤",
    difficulty: 1,
    time: "10分钟",
    servings: 2,
    tags: ["紫菜", "鸡蛋"],
    ingredients: [
      { name: "紫菜", amount: "5g", type: "other" },
      { name: "鸡蛋", amount: "1个", type: "meat" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "香油", amount: "5ml", type: "condiment" },
      { name: "葱", amount: "1根", type: "vegetable" }
    ],
    steps: [
      "紫菜撕碎泡发，鸡蛋打散，葱切葱花",
      "锅中加水烧开，放入紫菜",
      "淋入蛋液，轻轻搅动形成蛋花",
      "加盐调味",
      "撒葱花，淋香油出锅"
    ]
  },
  {
    id: 26,
    name: "可乐鸡翅根",
    category: "荤菜",
    difficulty: 2,
    time: "30分钟",
    servings: 2,
    tags: ["鸡翅根", "可乐", "酱油"],
    ingredients: [
      { name: "鸡翅根", amount: "500g", type: "meat" },
      { name: "可乐", amount: "330ml", type: "other" },
      { name: "酱油", amount: "20ml", type: "condiment" },
      { name: "料酒", amount: "15ml", type: "condiment" },
      { name: "生姜", amount: "3片", type: "vegetable" }
    ],
    steps: [
      "鸡翅根洗净，冷水下锅焯水捞出",
      "锅中放少许油，放入鸡翅根煎至表面微焦",
      "加入生姜片、料酒、酱油",
      "倒入可乐，大火烧开",
      "转小火盖盖焖煮 20 分钟",
      "开盖大火收汁至浓稠"
    ]
  },
  {
    id: 27,
    name: "红烧豆腐",
    category: "素菜",
    difficulty: 1,
    time: "15分钟",
    servings: 2,
    tags: ["豆腐", "酱油", "葱"],
    ingredients: [
      { name: "豆腐", amount: "400g", type: "vegetable" },
      { name: "酱油", amount: "15ml", type: "condiment" },
      { name: "葱", amount: "2根", type: "vegetable" },
      { name: "蒜", amount: "2瓣", type: "vegetable" },
      { name: "淀粉", amount: "5g", type: "condiment" },
      { name: "盐", amount: "2g", type: "condiment" }
    ],
    steps: [
      "豆腐切块，葱切葱花，蒜切末",
      "锅中放油，放入豆腐块煎至两面金黄",
      "加入蒜末、酱油和少许水",
      "中小火炖 5 分钟使豆腐入味",
      "加盐调味，水淀粉勾芡",
      "撒葱花出锅"
    ]
  },
  {
    id: 28,
    name: "酸菜鱼",
    category: "水产",
    difficulty: 4,
    time: "40分钟",
    servings: 3,
    tags: ["草鱼", "酸菜", "干辣椒", "花椒"],
    ingredients: [
      { name: "草鱼", amount: "1条(约750g)", type: "meat" },
      { name: "酸菜", amount: "200g", type: "vegetable" },
      { name: "干辣椒", amount: "10个", type: "condiment" },
      { name: "花椒", amount: "10粒", type: "condiment" },
      { name: "鸡蛋清", amount: "1个", type: "meat" },
      { name: "淀粉", amount: "15g", type: "condiment" },
      { name: "生姜", amount: "5片", type: "vegetable" },
      { name: "蒜", amount: "5瓣", type: "vegetable" }
    ],
    steps: [
      "草鱼处理干净，片下鱼肉，斜刀片成薄片",
      "鱼片中加蛋清、淀粉、盐抓匀腌制 15 分钟",
      "酸菜切段，挤干水分",
      "热油炒香酸菜、姜蒜，加水烧开",
      "先煮鱼头鱼骨 10 分钟，捞出放碗底",
      "汤中下鱼片，煮至变色立即捞出（约 1 分钟）",
      "鱼片和汤倒入碗中，撒干辣椒段和花椒",
      "浇上烧至冒烟的热油"
    ]
  },
  {
    id: 29,
    name: "手撕包菜",
    category: "素菜",
    difficulty: 1,
    time: "10分钟",
    servings: 2,
    tags: ["包菜", "干辣椒", "蒜"],
    ingredients: [
      { name: "包菜", amount: "300g", type: "vegetable" },
      { name: "干辣椒", amount: "5个", type: "condiment" },
      { name: "蒜", amount: "3瓣", type: "vegetable" },
      { name: "酱油", amount: "10ml", type: "condiment" },
      { name: "醋", amount: "10ml", type: "condiment" },
      { name: "盐", amount: "2g", type: "condiment" }
    ],
    steps: [
      "包菜用手撕成小块，洗净沥干",
      "蒜切末，干辣椒剪段",
      "热油爆香干辣椒和蒜末",
      "放入包菜大火翻炒",
      "加入酱油、醋、盐调味",
      "炒至包菜断生即可出锅"
    ]
  },
  {
    id: 30,
    name: "鸡蛋灌饼",
    category: "早餐",
    difficulty: 2,
    time: "20分钟",
    servings: 2,
    tags: ["面粉", "鸡蛋", "葱"],
    ingredients: [
      { name: "面粉", amount: "200g", type: "other" },
      { name: "鸡蛋", amount: "2个", type: "meat" },
      { name: "葱", amount: "2根", type: "vegetable" },
      { name: "盐", amount: "3g", type: "condiment" },
      { name: "食用油", amount: "20ml", type: "condiment" }
    ],
    steps: [
      "面粉加温水和成光滑面团，醒 15 分钟",
      "葱切葱花，鸡蛋打散加入葱花和盐",
      "面团分成小剂子，擀成薄饼",
      "平底锅刷油，放入面饼小火烙",
      "面饼鼓起时用筷子戳洞，灌入蛋液",
      "翻面继续烙至两面金黄"
    ]
  }
];

// 食材分类数据库 - 常见冰箱食材
const INGREDIENT_CATEGORIES = {
  "肉类": [
    { name: "五花肉", emoji: "🥩" },
    { name: "猪里脊", emoji: "🥩" },
    { name: "排骨", emoji: "🍖" },
    { name: "鸡肉", emoji: "🍗" },
    { name: "鸡翅", emoji: "🍗" },
    { name: "鸡翅根", emoji: "🍗" },
    { name: "鸡胸肉", emoji: "🍗" },
    { name: "羊肉", emoji: "🥩" },
    { name: "牛肉", emoji: "🥩" },
    { name: "肉末", emoji: "🥩" },
    { name: "大虾", emoji: "🦐" },
    { name: "鲈鱼", emoji: "🐟" },
    { name: "草鱼", emoji: "🐟" },
    { name: "虾仁", emoji: "🦐" }
  ],
  "蛋奶": [
    { name: "鸡蛋", emoji: "🥚" },
    { name: "牛奶", emoji: "🥛" }
  ],
  "蔬菜": [
    { name: "西红柿", emoji: "🍅" },
    { name: "青椒", emoji: "🫑" },
    { name: "土豆", emoji: "🥔" },
    { name: "茄子", emoji: "🍆" },
    { name: "白菜", emoji: "🥬" },
    { name: "青菜", emoji: "🥬" },
    { name: "西兰花", emoji: "🥦" },
    { name: "包菜", emoji: "🥬" },
    { name: "胡萝卜", emoji: "🥕" },
    { name: "黄瓜", emoji: "🥒" },
    { name: "豆芽", emoji: "🌱" },
    { name: "玉米", emoji: "🌽" },
    { name: "蒜苗", emoji: "🧅" },
    { name: "酸菜", emoji: "🥬" },
    { name: "木耳", emoji: "🍄" },
    { name: "青豆", emoji: "🫛" }
  ],
  "主食": [
    { name: "米饭", emoji: "🍚" },
    { name: "面粉", emoji: "🌾" },
    { name: "面条", emoji: "🍜" }
  ],
  "调料": [
    { name: "酱油", emoji: "🫙" },
    { name: "醋", emoji: "🫙" },
    { name: "盐", emoji: "🧂" },
    { name: "白糖", emoji: "🍬" },
    { name: "料酒", emoji: "🍶" },
    { name: "豆瓣酱", emoji: "🫙" },
    { name: "淀粉", emoji: "🫙" },
    { name: "生姜", emoji: "🫚" },
    { name: "蒜", emoji: "🧄" },
    { name: "葱", emoji: "🧅" },
    { name: "干辣椒", emoji: "🌶️" },
    { name: "花椒", emoji: "🫙" },
    { name: "八角", emoji: "⭐" },
    { name: "食用油", emoji: "🫒" },
    { name: "蚝油", emoji: "🫙" },
    { name: "番茄酱", emoji: "🍅" },
    { name: "冰糖", emoji: "🍬" },
    { name: "蒸鱼豉油", emoji: "🫙" },
    { name: "香油", emoji: "🫙" },
    { name: "孜然粉", emoji: "🫙" }
  ],
  "饮品/其他": [
    { name: "可乐", emoji: "🥤" },
    { name: "茶叶", emoji: "🍵" },
    { name: "紫菜", emoji: "🟢" },
    { name: "花生米", emoji: "🥜" },
    { name: "火腿", emoji: "🌭" }
  ]
};

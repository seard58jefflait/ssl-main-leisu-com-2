// assets/content-map.js
// Content map for site sections, keyword tags, and search filtering

const contentMap = {
  sections: [
    {
      id: 'home',
      title: '首页',
      url: 'https://ssl-main-leisu.com',
      tags: ['雷速', '首页', '导航'],
      description: '雷速体育首页入口'
    },
    {
      id: 'live',
      title: '直播',
      url: 'https://ssl-main-leisu.com/live',
      tags: ['雷速', '直播', '体育赛事'],
      description: '实时体育赛事直播'
    },
    {
      id: 'data',
      title: '数据',
      url: 'https://ssl-main-leisu.com/data',
      tags: ['雷速', '数据', '统计'],
      description: '赛事数据统计与分析'
    },
    {
      id: 'news',
      title: '新闻',
      url: 'https://ssl-main-leisu.com/news',
      tags: ['雷速', '新闻', '资讯'],
      description: '体育新闻资讯'
    },
    {
      id: 'video',
      title: '视频',
      url: 'https://ssl-main-leisu.com/video',
      tags: ['雷速', '视频', '集锦'],
      description: '精彩视频集锦'
    },
    {
      id: 'community',
      title: '社区',
      url: 'https://ssl-main-leisu.com/community',
      tags: ['雷速', '社区', '论坛'],
      description: '球迷互动社区'
    }
  ],
  keywords: [
    '雷速体育',
    '雷速直播',
    '雷速比分',
    '雷速数据',
    '雷速新闻',
    '雷速社区',
    'NBA',
    '英超',
    '西甲',
    '欧冠'
  ]
};

function searchFilter(query) {
  if (!query || query.trim() === '') {
    return contentMap.sections;
  }

  const lowerQuery = query.toLowerCase().trim();
  const results = [];

  for (const section of contentMap.sections) {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const urlMatch = section.url.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    const descMatch = section.description.toLowerCase().includes(lowerQuery);

    if (titleMatch || urlMatch || tagMatch || descMatch) {
      results.push(section);
    }
  }

  return results;
}

function getSectionsByTag(tag) {
  if (!tag || tag.trim() === '') {
    return [];
  }

  const lowerTag = tag.toLowerCase().trim();
  return contentMap.sections.filter(section =>
    section.tags.some(t => t.toLowerCase() === lowerTag)
  );
}

function getAllTags() {
  const tagSet = new Set();
  for (const section of contentMap.sections) {
    for (const tag of section.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet);
}

function getSiteMap() {
  return {
    baseUrl: 'https://ssl-main-leisu.com',
    sections: contentMap.sections.map(s => ({
      id: s.id,
      title: s.title,
      url: s.url
    })),
    keywords: contentMap.keywords
  };
}

// Example usage (commented for production):
// console.log(searchFilter('直播'));
// console.log(getSectionsByTag('雷速'));
// console.log(getAllTags());
// console.log(getSiteMap());
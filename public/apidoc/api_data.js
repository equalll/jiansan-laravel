define({ "api": [
  {
    "type": "get",
    "url": "/categories",
    "title": "获取全部分类信息",
    "version": "0.0.1",
    "name": "categories",
    "group": "Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>分类名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>分类别名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"大侠\",\n            \"alias\": \"daxia\"\n        },\n        {\n            \"id\": 2,\n            \"name\": \"纯阳\",\n            \"alias\": \"chunyang\"\n        },\n        {\n            \"id\": 3,\n            \"name\": \"万花\",\n            \"alias\": \"wanhua\"\n        },\n        {\n            \"id\": 4,\n            \"name\": \"藏剑\",\n            \"alias\": \"cangjian\"\n        },\n        {\n            \"id\": 5,\n            \"name\": \"唐门\",\n            \"alias\": \"tangmen\"\n        },\n        {\n            \"id\": 6,\n            \"name\": \"七秀\",\n            \"alias\": \"qixiu\"\n        },\n        {\n            \"id\": 7,\n            \"name\": \"少林\",\n            \"alias\": \"shaolin\"\n        },\n        {\n            \"id\": 8,\n            \"name\": \"五毒\",\n            \"alias\": \"wudu\"\n        },\n        {\n            \"id\": 9,\n            \"name\": \"明教\",\n            \"alias\": \"mingjiao\"\n        },\n        {\n            \"id\": 10,\n            \"name\": \"丐帮\",\n            \"alias\": \"gaibang\"\n        },\n        {\n            \"id\": 11,\n            \"name\": \"苍云\",\n            \"alias\": \"cangyun\"\n        },\n        {\n            \"id\": 12,\n            \"name\": \"长歌\",\n            \"alias\": \"changge\"\n        },\n        {\n            \"id\": 13,\n            \"name\": \"天策\",\n            \"alias\": \"tiance\"\n        }\n    ],\n    \"meta\": {\n        \"status\": \"success\",\n        \"status_code\": 200,\n        \"message\": \"获取分类信息成功\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n    \"message\": \"获取分类信息失败\",\n    \"status_code\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/CategoryController.php",
    "groupTitle": "Api"
  },
  {
    "type": "post",
    "url": "/feedback",
    "title": "提交反馈信息",
    "version": "0.0.1",
    "name": "feedback",
    "group": "Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>反馈内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n    \"data\": {\n        \"contact\":\"44334512\",\n        \"content\":\"提交一个测试反馈信息\"\n     },\n    \"meta\": {\n        \"status\": \"success\",\n        \"status_code\": 200,\n        \"message\": \"提交反馈信息成功\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n    \"message\": \"提交反馈信息失败\",\n    \"status_code\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/FeedbackController.php",
    "groupTitle": "Api"
  },
  {
    "type": "get",
    "url": "/show/{id}",
    "title": "根据壁纸id显示壁纸",
    "version": "0.0.1",
    "name": "show",
    "group": "Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>壁纸id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bigpath",
            "description": "<p>大图路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smallpath",
            "description": "<p>小图路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>浏览量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "\n{\n    \"data\": {\n        \"id\": 1,\n        \"category_id\": 1,\n        \"bigpath\": \"uploads/daxia/689a0dd035e1845b96b3dc18504c077c.jpg\",\n        \"smallpath\": \"uploads/daxia/small689a0dd035e1845b96b3dc18504c077c.jpg\",\n        \"view\": 1,\n        \"created_at\": {\n            \"date\": \"2016-07-22 06:37:31.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2016-07-22 06:37:31.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        }\n    },\n    \"meta\": {\n        \"status\": \"success\",\n        \"status_code\": 200,\n        \"message\": \"获取壁纸列表成功\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n    \"message\": \"壁纸不存在\",\n    \"status_code\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/WallpaperController.php",
    "groupTitle": "Api"
  },
  {
    "type": "get",
    "url": "/status",
    "title": "是否一键设置壁纸",
    "version": "0.0.1",
    "name": "status",
    "group": "Api",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>配置项名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>配置项内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>配置项备注</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"app_save_wallpaper\",\n        \"content\": \"1\",\n        \"comment\": \"app端屏蔽私有api接口\"\n    },\n    \"meta\": {\n        \"status\": \"success\",\n        \"status_code\": 200,\n        \"message\": \"获取配置信息成功\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n    \"message\": \"配置信息不存在\",\n    \"status_code\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/OptionController.php",
    "groupTitle": "Api"
  },
  {
    "type": "get",
    "url": "/wallpapers/{category_id}",
    "title": "获取指定分类的壁纸数据",
    "version": "0.0.1",
    "name": "wallpapers",
    "group": "Api",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类id,需要拼接到url上。0表示根据浏览量倒序查询所有分类壁纸</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>壁纸id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bigpath",
            "description": "<p>大图路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "smallpath",
            "description": "<p>小图路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>浏览量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功响应:",
          "content": "{\n    \"data\": [\n    {\n        \"id\": 23,\n        \"category_id\": 1,\n        \"bigpath\": \"uploads/daxia/3df5e0960455c7effa7059765eeb3a7d.jpg\",\n        \"smallpath\": \"uploads/daxia/small3df5e0960455c7effa7059765eeb3a7d.jpg\",\n        \"view\": 0,\n        \"created_at\": {\n            \"date\": \"2016-07-22 06:37:34.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2016-07-22 06:37:34.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        }\n    },\n    {\n        \"id\": 22,\n        \"category_id\": 1,\n        \"bigpath\": \"uploads/daxia/3d73e271546e383f4ddda23889b7acd2.jpg\",\n        \"smallpath\": \"uploads/daxia/small3d73e271546e383f4ddda23889b7acd2.jpg\",\n        \"view\": 0,\n        \"created_at\": {\n            \"date\": \"2016-07-22 06:37:34.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2016-07-22 06:37:34.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        }\n    },\n    {\n        \"id\": 21,\n        \"category_id\": 1,\n        \"bigpath\": \"uploads/daxia/6ccc78387ebeadda4b01fcb9ede631a5.jpg\",\n        \"smallpath\": \"uploads/daxia/small6ccc78387ebeadda4b01fcb9ede631a5.jpg\",\n        \"view\": 0,\n        \"created_at\": {\n            \"date\": \"2016-07-22 06:37:34.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2016-07-22 06:37:34.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        }\n    },\n    {\n        \"id\": 20,\n        \"category_id\": 1,\n        \"bigpath\": \"uploads/daxia/499c84631f197dbbed42737ad907f271.jpg\",\n        \"smallpath\": \"uploads/daxia/small499c84631f197dbbed42737ad907f271.jpg\",\n        \"view\": 0,\n        \"created_at\": {\n            \"date\": \"2016-07-22 06:37:33.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2016-07-22 06:37:33.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        }\n    },\n    {\n        \"id\": 19,\n        \"category_id\": 1,\n        \"bigpath\": \"uploads/daxia/13239c21ed6b4fb2638202cf9f1c4397.jpg\",\n        \"smallpath\": \"uploads/daxia/small13239c21ed6b4fb2638202cf9f1c4397.jpg\",\n        \"view\": 0,\n        \"created_at\": {\n            \"date\": \"2016-07-22 06:37:33.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        },\n        \"updated_at\": {\n            \"date\": \"2016-07-22 06:37:33.000000\",\n            \"timezone_type\": 3,\n            \"timezone\": \"PRC\"\n        }\n    }\n    ],\n    \"meta\": {\n        \"status\": \"success\",\n        \"status_code\": 200,\n        \"message\": \"获取壁纸列表成功\",\n        \"pagination\": {\n            \"total\": 23,\n            \"count\": 5,\n            \"per_page\": 5,\n            \"current_page\": 1,\n            \"total_pages\": 5,\n            \"links\": {\n                \"next\": \"http://www.jiansan.com/api/wallpapers/1?page=2\"\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败响应:",
          "content": "{\n    \"message\": \"获取壁纸列表失败\",\n    \"status_code\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Api/V1/Controllers/WallpaperController.php",
    "groupTitle": "Api"
  }
] });

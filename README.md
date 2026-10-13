# fancy-go-go
番思 Fancy Go Go：生活提案与活动社交产品原型

## 项目文件

- `public/index.html`：首页。
- `public/`：活动详情、活动列表、发起活动、主理人页面及样式和脚本。
- `public/assets/`：页面使用的图片，已改为相对路径。
- `生活提案-产品需求.md`：产品需求文档。

## 预览与部署

本地可直接打开 `public/index.html` 查看 Demo。

Cloudflare Pages 连接本仓库时，框架选择 None，构建命令填写 `exit 0`，构建输出目录填写 `public`。

目前为静态交互原型，不代表已接入真实报名、支付或 AI 服务。不要将密钥或用户隐私数据放入公开仓库。

## 2026-10-13 视觉版

暖白、珊瑚橙与浅蓝的移动端交互 Demo，采用单列大幅真人场景。不是已发布的微信原生小程序。

页面入口：首页 `index.html`、活动列表 `events.html`、活动详情 `activity.html?id=theatre`（另有 courtyard/album/badminton）、儿童工作坊 `event-detail.html`、主理人 `host-profile.html`、发起提案 `create.html`、我的 `my.html`、参与意向 `join.html?id=theatre`。

收藏、主理人关注、参与意向和提案草稿使用 localStorage，仅在当前浏览器保存。分享优先调用系统分享，后备为复制链接。提案框架为本地模板，不调用 AI。清除浏览器数据会删除这些演示记录。

设计规范见 DESIGN.md，素材来源见 ASSETS.md。运行 `python3 -m http.server 8765 --directory public` 可本地测试。qa.cjs 使用本机提供的 Playwright 和 Chrome 验证路由及交互。

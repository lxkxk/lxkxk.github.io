let svg = '<svg  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="is-badge"><path  d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>'
let total = 0
let nowNum = 0
let items = []
let page = 1
let Url = 'https://kkapi.fomal.cc/api/ispeak?author=6319fedef46fae97dcfa5ee2&page=' // 记住替换为你的API链接


window.addEventListener('DOMContentLoaded', () => {
    getNew();
});

// 获取数据
function getNew() {
    let bibi = document.getElementById('bibi');
    try {
        bibi.removeChild(document.getElementById('more'))
    } catch (error) { }

    bibi.innerHTML += '<div id="bb_loading"><img src="/assets/loading3.gif" alt="bb_loading"></div>' // bb_loading图片可以f12在我网站源码下载，也可以使用其他图片。
    total = 0
    nowNum = 0
    items = []
    // fetch(Url + page).then(res => res.json()).then((res) => {
    getData().then((res) => {
        total = res.data.total
        items = res.data.items
        nowNum += items.length
        if (page == 1) {
            document.querySelector('.bb-info').innerHTML = '<svg style="width:1.20em;height:1.20em;top:5px;fill:currentColor;overflow:hidden;position:relative"><use xlink:href="#icon-chat"></svg> 站长的吐槽(' + total + ')'
        }
        page += 1
    }).then(() => {
        bb();
        if (nowNum < total) {
            document.getElementById('bibi').innerHTML += '<button id="more" onclick="getNew()">再翻翻</button>'
        }
        document.getElementById('bibi').removeChild(document.getElementById('bb_loading'))
    })
}
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                code: 0,
                data: {
                    total: 6,
                    items: [
                        {
                            author: {
                                avatar: "https://i.imgs.ovh/2025/08/02/JVpsr.jpeg",
                                nickName: 'SunFlower🥝'
                            },
                            content: '一直想dIy一个关于自己的个人网站,无意间在github上看到了一个贼牛逼的开源模板,好了,开始开发！',
                            createdAt: '2025-06-01',
                            showComment: '1',
                            tag: {
                                bgColor: "#39c5bb",
                                createdAt: "2025-06-01 23:35:16",
                                description: "站长的一些日常吐槽",
                                name: "日常吐槽🌈",
                                orderNo: 0,
                                updatedAt: "2025-06-01 23:35:16",
                                user: "6319fedef46fae97dcfa5ee2"
                            },
                            title: '开始开发啦！',
                            type: '0',
                            updatedAt: '2025-06-01 23:35:16'
                        },
                        {
                            author: {
                                avatar: "https://i.imgs.ovh/2025/08/02/JVpsr.jpeg",
                                nickName: 'SunFlower🥝'
                            },
                            content: '今天打游戏打的有点晚了,明天上班要早起,不想写代码了,但是又想快点搭建好,算了算了就写一个小时就碎觉,放一首邓紫棋的歌,哈哈哈',
                            createdAt: '2025-06-15',
                            showComment: '1',
                            tag: {
                                bgColor: "#39c5bb",
                                createdAt: "2025-06-01 23:35:16",
                                description: "站长的一些日常吐槽",
                                name: "日常吐槽🌈",
                                orderNo: 0,
                                updatedAt: "2025-06-01 23:35:16",
                                user: "6319fedef46fae97dcfa5ee2"
                            },
                            title: '开始开发啦！',
                            type: '0',
                            updatedAt: '2025-06-01 23:35:16'
                        },
                        {
                            author: {
                                avatar: "https://i.imgs.ovh/2025/08/02/JVpsr.jpeg",
                                nickName: 'SunFlower🥝'
                            },
                            content: '遇到了很多问题,为什么手机加载的这么慢啊,cdn加速不好使呢,找个大佬帮忙看一看',
                            createdAt: '2025-06-17',
                            showComment: '1',
                            tag: {
                                bgColor: "#39c5bb",
                                createdAt: "2025-06-01 23:35:16",
                                description: "站长的一些日常吐槽",
                                name: "日常吐槽🌈",
                                orderNo: 0,
                                updatedAt: "2025-06-01 23:35:16",
                                user: "6319fedef46fae97dcfa5ee2"
                            },
                            title: '开始开发啦！',
                            type: '0',
                            updatedAt: '2025-06-01 23:35:16'
                        },
                        {
                            author: {
                                avatar: "https://i.imgs.ovh/2025/08/02/JVpsr.jpeg",
                                nickName: 'SunFlower🥝'
                            },
                            content: '域名怎么这么贵！liuxk名字缩写当域名好看吗至少好记一些 我靠.com被注册了一年2万多反正也买不起,换一个！',
                            createdAt: '2025-07-06',
                            showComment: '1',
                            tag: {
                                bgColor: "#39c5bb",
                                createdAt: "2025-06-01 23:35:16",
                                description: "站长的一些日常吐槽",
                                name: "日常吐槽🌈",
                                orderNo: 0,
                                updatedAt: "2025-06-01 23:35:16",
                                user: "6319fedef46fae97dcfa5ee2"
                            },
                            title: '开始开发啦！',
                            type: '0',
                            updatedAt: '2025-06-01 23:35:16'
                        },
                        {
                            author: {
                                avatar: "https://i.imgs.ovh/2025/08/02/JVpsr.jpeg",
                                nickName: 'SunFlower🥝'
                            },
                            content: '终于配置好了可以访问了,但是还是有点丑,不急先美化一下,找一些免费的图标,一切皆白嫖哈哈',
                            createdAt: '2025-07-13',
                            showComment: '1',
                            tag: {
                                bgColor: "#39c5bb",
                                createdAt: "2025-06-01 23:35:16",
                                description: "站长的一些日常吐槽",
                                name: "日常吐槽🌈",
                                orderNo: 0,
                                updatedAt: "2025-06-01 23:35:16",
                                user: "6319fedef46fae97dcfa5ee2"
                            },
                            title: '开始开发啦！',
                            type: '0',
                            updatedAt: '2025-06-01 23:35:16'
                        },
                        {
                            author: {
                                avatar: "https://i.imgs.ovh/2025/08/02/JVpsr.jpeg",
                                nickName: 'SunFlower🥝'
                            },
                            content: '我觉得可以了,有亿点点成就感！先找几个朋友来看看怎么样,希望可以得到好评。。。下个月研究一下评论系统',
                            createdAt: '2025-07-25',
                            showComment: '1',
                            tag: {
                                bgColor: "#39c5bb",
                                createdAt: "2025-06-01 23:35:16",
                                description: "站长的一些日常吐槽",
                                name: "日常吐槽🌈",
                                orderNo: 0,
                                updatedAt: "2025-06-01 23:35:16",
                                user: "6319fedef46fae97dcfa5ee2"
                            },
                            title: '开始开发啦！',
                            type: '0',
                            updatedAt: '2025-06-01 23:35:16'
                        },
                    ],
                }
            }
            resolve(data); // 成功时调用resolve
            // 或者 reject(new Error("出错了")); // 出错时调用reject
        }, 1000);
    })
}
// 渲染数据
function bb() {
    let bb = document.getElementById('bb-main')
    items.forEach((item) => {
        let time = item.createdAt.substring(0, 10);
        let div = document.createElement('div')
        item.content = contentFormat(item.content)

        div.className = 'bb-card'
        div.innerHTML = '<div class="card-header"><div class="avatar"><img class="nofancybox"src="' + item.author.avatar + '"></div><div class="name">' + item.author.nickName + '</div>' + svg + '<div class="card-time">' + time + '</div></div><div class="card-content">' + item.content + '</div><div class="card-footer"><div data-v-185689ea=""class="card-label"style="background: ' + item.tag.bgColor + '; color: white;">' + item.tag.name + '</div></div>'
        bb.appendChild(div)
    })
}

// content格式化
function contentFormat(s) {
    let br = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
    let getImgUrl = /(http(.*).[jpg|png|gif])/g;
    let ls = s.match(getImgUrl)
    s = s.replace(re_forimg, '')
    s = s.replace(br, '')

    let html = '<br>'
    if (ls) {
        ls.forEach((e) => {
            html += '<a href="' + e + '" target="_blank" data-fancybox="group" class="fancybox"><img src="' + e + '"></a>'
        })
    }
    s += html
    return s
}
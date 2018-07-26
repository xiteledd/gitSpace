const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const Nightmare = require('nightmare');
const nightmare = Nightmare({show:true});
// 引入相关依赖
var async = require('async');

//使用express启动一个简单的HTTP服务器
const app = express();

let server = app.listen(3000,function(){
	let host = server.address().address;
	let port = server.address().port;
	console.log('your app is running on http://%s:%s',host,port);
});

//使用superagent抓取整个页面
//用cheerio分析页面元素，获取目标数据
let hotNews = [];	//热点新闻
let localNews = [];	//本地新闻

//抓取热点新闻
superagent.get('https://news.baidu.com/').end((err,res)=>{
	if(err){
		console.log('页面抓取失败');
	}else{
		//访问成功，返回的页面数据保存在res中
		//全局的localnews和hotnews用来保存爬取到的新闻数据
		hotNews = getHotNews(res);
		localNews = getLocalNews(res);

	}
});

//用cheerio模块获取热点新闻
let getHotNews = (res)=>
{
	let hotNews = [];
	//将页面的节点参数传进去，就可以获取到对应元素
	//如果请求成功，返回的页面数据会包含在res.txt中

	let $ = cheerio.load(res.text);
	
	$('div#pane-news ul li a').each((idx,ele)=>{
		let news = {
			title:$(ele).text(),		//获取新闻内容
			href:$(ele).attr('href')	//获取新闻标题
		};
		hotNews.push(news);
	});
	//找到目标数据所在元素，获取数据,cherrio中的$(selector).each()用来遍历所有查找到的DOM元素
	//参数idx就是当前遍历到的元素的索引，ele就是当前遍历的DOM元素
	return hotNews;
};


//获取本地新闻
//本地新闻是页面加载过后通过ajax动态加载的
//使用nightmare模块模拟网页动态加载，其中的wait方法会等该地址加载结束后获取数据
nightmare
.goto('https://news.baidu.com/')
.wait("div#local_news")
.evaluate(()=>document.querySelector("div#local_news").innerHTML)
.then(htmlStr=>{
	localNews = getLocalNews(htmlStr);
})
.catch(error=>{
	console.log('本地新闻抓取失败');
})



let getLocalNews = (htmlStr)=>{
	let localNews = [];
	let $ = cheerio.load(htmlStr);

	
	$('ul#localnews-focus li a').each((idx,ele)=>{
		let news = {
			title:$(ele).text(),
			href:$(ele).attr('href')
		};
		localNews.push(news);
	});

	//本地资讯
	$('div#localnews-zixun ul li a').each((index,item)=>{
		let news = {
			title:$(item).text(),
			href:$(item).attr('href')
		}
		localNews.push(news);
	});	
	return localNews;
};

//函数第一个参数表示ajax的请求路径，当一个get请求到localhost：3000时，会执行到后面的async函数
app.get('/',async(req,res,next)=>{
	res.send({
		hotNews:hotNews,
		localNews:localNews
	});//返回数据到前端浏览器
});



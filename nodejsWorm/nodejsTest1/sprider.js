   //引入模块
var express = require('express'),
 	superagent = require('superagent'),
 	cheerio = require('cheerio'),
 	url = require('url'),
 	eventproxy = require('eventproxy'),
 	async = require('async'),
 	http = require('http');


 //定义一些全局变量
 var ep = new eventproxy(),
 	pageUrls = [],//存放收集文章页面网站
 	urlArray = [],
 	pageNum = 200;

 //存储所有页面
for(var i=1;i<=200;i++){
	pageUrls.push('https://www.cnblogs.com/#p'+i);
}

let start = ()=>
{
	function Onrequest(req,res){
		//轮询所有页面
		pageUrls.forEach(function(pageUrl){
			//
			superagent.get(pageUrl).end(err,pres){
				// pres.text 里面存储着请求返回的 html 内容，将它传给 cheerio.load 之后
              	// 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
              	// 剩下就都是利用$ 使用 jquery 的语法了
				var $ = cheerio.load(pres.text);
				var currenPageUrl = $('.titlelnk');

				//当前页面的文章数量
				for(var i=0;i<currenPageUrl.length;)
			}
		})
	}
}

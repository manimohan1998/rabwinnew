(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{WXiH:function(n,t,e){"use strict";e.r(t);var a=e("8Y7J");class l{}var i=e("NcP4"),c=e("xYTU"),o=e("t68o"),g=e("zbXB"),_=e("9AJC"),r=e("fo5T"),s=e("XePT"),u=e("pMnS"),p=e("ITXy"),m=e("B0QU"),h=e("SVse"),C=e("G0yt"),O=e("6n/F");class P{constructor(n,t,e,a){this.nav=t,this.http=e,this.service=a,this.change=0,this.itemList=[],this.Highcharts=O,this.data=[],this.data1=[],this.myLoader=!1,this.customOptions={loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!1,navSpeed:10,autoplay:!0,animateOut:"slideOutUp",animateIn:"slideInUp",navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this.nav.show(),n.interval=2e3,n.keyboard=!0,n.pauseOnHover=!0}scrollToTop(n){n.scrollTop=this.change}ngOnInit(){this.myLoader=!0,console.log(this.change),this.service.god().subscribe(n=>{this.machine_response=n,console.log(this.change),this.ltime=this.machine_response[0].up_time,this.myLoader=!1;for(let t in this.machine_response){this.chart_loop=this.machine_response[t].data,this.data=[],this.data1=[];for(let n in this.machine_response[t].data)this.data.push(this.machine_response[t].data[n].time),this.data1.push(this.machine_response[t].data[n].count),this.reflect=this.machine_response[t].status;O.chart("partcycle"+t,{chart:{renderTo:"container"+t,zoomType:"xy",height:120},exporting:{enabled:!1},credits:{enabled:!1},title:{text:""},subtitle:{text:""},xAxis:[{categories:this.data,crosshair:!1,labels:{enabled:!0}}],yAxis:[{gridLineColor:"#45B734",labels:{enabled:!1},title:{text:""}},{title:{text:""},opposite:!1}],tooltip:{shared:!0},series:[{showInLegend:!1,name:"Count",type:"column",yAxis:1,data:this.data1,color:"OPERATE"===this.reflect?"#1EAD55":"DISCONNECT"===this.reflect?"#6D6D6D":"#F81301",tooltip:{valueSuffix:" "}},{showInLegend:!1,name:"Parts",type:"spline",data:this.data1,color:"OPERATE"===this.reflect?"#1EAD55":"DISCONNECT"===this.reflect?"#6D6D6D":"#F81301",tooltip:{valueSuffix:""}}]})}}),setInterval(()=>{this.service.god().subscribe(n=>{this.machine_response=n,this.ltime=this.machine_response[0].up_time}),this.change=this.change+400,console.log(this.change),this.change>=1200&&(this.change=0),this.scrollToBottom()},1e5)}ngAfterViewChecked(){this.scrollToBottom()}scrollToBottom(){this.scrollBottom.nativeElement.scrollTop=this.change}}var M=e("cXjN"),b=e("IheW"),d=e("xjKI"),f=a.rb({encapsulation:0,styles:[['rect.highcharts-background{opacity:.3}.carousel-caption[_ngcontent-%COMP%]{background-color:#11d525}.frame[_ngcontent-%COMP%]{height:95%;position:absolute;width:100%;top:0;margin-top:10px;background-color:gray;overflow:scroll}.owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%]{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none;color:#9acd32}.owl-item.ng-tns-c11-20.active.ng-trigger.ng-trigger-autoHeight.ng-star-inserted[_ngcontent-%COMP%]{color:violet}button.test123[_ngcontent-%COMP%]{position:fixed;bottom:40px;right:5px;font-size:20px;text-align:center;border-radius:5px;outline:0;z-index:1}  circle-progress tspan{font-weight:600;fill:#3f3f3f}  .highcharts-yaxis-labels text{fill:#fff!important}  .highcharts-yaxis-grid .highcharts-grid-line{stroke:#d5d5d5}h2.sub_title[_ngcontent-%COMP%]{width:35%}#page_area.page[_ngcontent-%COMP%]{background-color:#fafafa}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dedede;margin-bottom:15px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#1a1f3d;margin-bottom:15px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]{list-style:none;display:flex}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:5px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after{content:"|";padding-left:5px;color:#aeaeae}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after{display:none}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;padding-right:4px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;text-transform:capitalize}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#11d525}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.idle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#646262}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li.stop[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:19%;margin:0 10px 20px 0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:10px 5px;justify-content:space-between}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]{display:flex}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;margin-bottom:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin:0;display:flex;align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#34e31a;font-size:16px;padding-right:4px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;justify-content:space-between;padding:15px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:10px;text-transform:uppercase}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{text-align:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;text-transform:uppercase;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;text-align:center;padding:5px 0;margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]   figure.highcharts-figure[_ngcontent-%COMP%]{margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{font-size:12px;text-align:center;padding:5px 0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]{border:1px solid #16a500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#16a500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#34e31a}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#16a5002e}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#16a5004f;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#056b2d}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#16a500;color:#fff;border-bottom:1px solid #056b2d}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#16a500;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]{border:1px solid #888}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#888}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#646262}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#8888883b}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#88888885;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#888;color:#fff;border-bottom:1px solid #646262}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph[_ngcontent-%COMP%]{height:120px;min-height:120px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#888;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]{border:1px solid #f81301}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{color:#fff;background:#f81301}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]{background:#daa5a159}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]{background:#f81301ab;color:#fff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#f81301;color:#fff;border-bottom:1px solid #ba1d11}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .graph_text[_ngcontent-%COMP%]{background:#f81301;color:#fff}@media only screen and (min-width:834px) and (max-width:1112px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:31%;margin:0 6px 14px}}@media only screen and (min-width:834px) and (max-width:1112px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:22%;margin:0 11px 17px 12px}}@media only screen and (min-width:768px) and (max-width:1024px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{margin:0 11px 17px 12px}}@media only screen and (max-width:768px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:31%;margin:0 10px 20px 0}}@media only screen and (max-width:600px){#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]{margin-bottom:10px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .machine_identifier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:100%;margin:0 0 20px}}@media only screen and (min-device-width:320px) and (max-device-width:768px) and (orientation:landscape){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:48%;margin:0 10px 20px 0}ng-deep.highcharts-container[_ngcontent-%COMP%]{width:100%!important}}.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .highcharts-figure[_ngcontent-%COMP%]{min-width:310px;max-width:800px;margin:1em auto}#container[_ngcontent-%COMP%]{height:400px}.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Verdana,sans-serif;border-collapse:collapse;border:1px solid #ebebeb;margin:10px auto;text-align:center;width:100%;max-width:500px}.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.2em;color:#555}.highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600}.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.5em}.highcharts-data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background:#f8f8f8}.highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#f1f7ff}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.stop[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#f81301;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.active[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#16a500;font-weight:600}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item.idle[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{color:#646262;font-weight:600}@media only screen and (min-width:1920px){#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:36px;-webkit-margin-after:-.5em;margin-block-end:-.5em}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:50px}.activemenu[_ngcontent-%COMP%]   #page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:67px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .machine_name[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:65px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .machine_values[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:50px;padding:0;font-weight:500}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .parts_sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:50px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]{width:32%;margin:0 11px 20px}  circle-progress tspan:nth-child(1){font-size:54px}  circle-progress tspan:nth-child(2){font-size:50px}  circle-progress tspan:nth-child(3){font-size:47px}.machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .machine_title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{font-size:66px;margin-top:6px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:40px}#page_area.page[_ngcontent-%COMP%]   .page_title_sec[_ngcontent-%COMP%]   .sub_title[_ngcontent-%COMP%]{font-size:25px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]{align-items:center}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .progress_bar[_ngcontent-%COMP%]{padding-top:20px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_body[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{padding:5px 15px 15px}#page_area.page[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine_item[_ngcontent-%COMP%]   .machine_header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin:0 -7px}}']],data:{}});function x(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),a.tb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function D(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#1EAD55"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,m.a,[m.b,a.k,h.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#1EAD55","#f2f2f2","true","300")}),null)}function y(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#F81301"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,m.a,[m.b,a.k,h.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#F81301","#f2f2f2","true","300")}),null)}function v(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,1,"circle-progress",[["animation","true"],["animationDuration","300"],["innerStrokeColor","#f2f2f2"],["outerStrokeColor","#6D6D6D"],["radius","80"]],null,null,null,p.b,p.a)),a.sb(1,770048,null,0,m.a,[m.b,a.k,h.d],{radius:[0,"radius"],percent:[1,"percent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],animation:[4,"animation"],animationDuration:[5,"animationDuration"]},null)],(function(n,t){n(t,1,0,"80",a.xb(1,"",null==t.parent.context.$implicit?null:t.parent.context.$implicit.oee,""),"#6D6D6D","#f2f2f2","true","300")}),null)}function w(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,42,"div",[["class","machine_item"]],[[2,"stop",null],[2,"active",null],[2,"idle",null]],null,null,null,null)),(n()(),a.tb(1,0,null,null,9,"div",[["class","machine_header"]],null,null,null,null,null)),(n()(),a.tb(2,0,null,null,5,"div",[["class","machine_title"]],null,null,null,null,null)),(n()(),a.tb(3,0,null,null,1,"span",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" check_circle_outline "])),(n()(),a.tb(5,0,null,null,2,"div",[["class","machine_name pl-2"]],null,null,null,null,null)),(n()(),a.tb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Nb(7,null,["",""])),(n()(),a.tb(8,0,null,null,2,"p",[["class","status"]],null,null,null,null,null)),(n()(),a.tb(9,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" fiber_manual_record "])),(n()(),a.tb(11,0,null,null,31,"div",[["class","machine_body"]],null,null,null,null,null)),(n()(),a.tb(12,0,null,null,6,"div",[["class","progress_bar"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,D)),a.sb(14,16384,null,0,h.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.ib(16777216,null,null,1,null,y)),a.sb(16,16384,null,0,h.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.ib(16777216,null,null,1,null,v)),a.sb(18,16384,null,0,h.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(19,0,null,null,15,"ul",[["class","metrics list-unstyle"]],null,null,null,null,null)),(n()(),a.tb(20,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(21,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Availability"])),(n()(),a.tb(23,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(24,null,["","%"])),(n()(),a.tb(25,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(26,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Performance"])),(n()(),a.tb(28,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(29,null,["","%"])),(n()(),a.tb(30,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),a.tb(31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Quality"])),(n()(),a.tb(33,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(34,null,["","%"])),(n()(),a.tb(35,0,null,null,2,"div",[["class","parts_sec d-none"]],null,null,null,null,null)),(n()(),a.tb(36,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Parts"])),(n()(),a.tb(38,0,null,null,4,"div",[["class","machine_values"]],null,null,null,null,null)),(n()(),a.tb(39,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),a.Nb(-1,null,["Actual / Plan : "])),(n()(),a.tb(41,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a.Nb(42,null,[""," /",""]))],(function(n,t){n(t,14,0,"OPERATE"===(null==t.context.$implicit?null:t.context.$implicit.status)),n(t,16,0,"STOP"===(null==t.context.$implicit?null:t.context.$implicit.status)),n(t,18,0,"DISCONNECT"===(null==t.context.$implicit?null:t.context.$implicit.status))}),(function(n,t){n(t,0,0,"STOP"===t.context.$implicit.status,"OPERATE"===t.context.$implicit.status,"DISCONNECT"===t.context.$implicit.status),n(t,7,0,null==t.context.$implicit?null:t.context.$implicit.machine),n(t,24,0,null==t.context.$implicit?null:t.context.$implicit.run),n(t,29,0,null==t.context.$implicit?null:t.context.$implicit.efficiency),n(t,34,0,null==t.context.$implicit?null:t.context.$implicit.quality),n(t,42,0,null==t.context.$implicit?null:t.context.$implicit.actual,null==t.context.$implicit?null:t.context.$implicit.tar)}))}function k(n){return a.Pb(0,[a.Hb(0,h.e,[a.t]),a.Lb(671088640,1,{scrollBottom:0}),(n()(),a.tb(2,0,[[1,0],["scrollBottom",1]],null,20,"section",[["class","page kpi"],["id","page_area"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,x)),a.sb(4,16384,null,0,h.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.tb(5,0,null,null,16,"div",[["class","section_top_padding"]],null,null,null,null,null)),(n()(),a.tb(6,0,null,null,15,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),a.tb(7,0,null,null,11,"div",[["class","page_title_sec"]],null,null,null,null,null)),(n()(),a.tb(8,0,null,null,1,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" OEE Dashboard "])),(n()(),a.tb(10,0,null,null,8,"div",[["class","d-flex justify-content-end"]],null,null,null,null,null)),(n()(),a.tb(11,0,null,null,1,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(-1,null,[" Last Update Time & Date "])),(n()(),a.tb(13,0,null,null,5,"h2",[["class","sub_title"]],null,null,null,null,null)),(n()(),a.Nb(14,null,[" ",""])),a.Jb(15,2),(n()(),a.tb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.Nb(17,null,[" "," "])),a.Jb(18,2),(n()(),a.tb(19,0,null,null,2,"div",[["class","machine_list"]],null,null,null,null,null)),(n()(),a.ib(16777216,null,null,1,null,w)),a.sb(21,278528,null,0,h.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.tb(22,0,null,null,0,"div",[],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,4,0,e.myLoader),n(t,21,0,e.machine_response)}),(function(n,t){var e=t.component,l=a.Ob(t,14,0,n(t,15,0,a.Fb(t,0),e.ltime,"h:mm:ss a"));n(t,14,0,l);var i=a.Ob(t,17,0,n(t,18,0,a.Fb(t,0),e.ltime,"dd-MM-yyyy"));n(t,17,0,i)}))}function z(n){return a.Pb(0,[(n()(),a.tb(0,0,null,null,2,"app-kpi-dashboard",[],null,null,null,k,f)),a.Kb(512,null,C.j,C.j,[]),a.sb(2,8503296,null,0,P,[C.j,M.a,b.c,d.a],null,null)],(function(n,t){n(t,2,0)}),null)}var S=a.pb("app-kpi-dashboard",P,z,{},{},[]),E=(e("mrSG"),e("XNiG"));e("VRyK"),e("LRne"),e("Cfvw"),e("vkgz"),e("pLZG"),e("eIep"),e("SxV6"),e("IzEk"),e("zP0r"),e("lJxs"),e("128B"),e("3E0/");var N=e("iInd");let T=class{constructor(n){this.eventManager=n,this.resizeSubject=new E.a,this.eventManager.addGlobalEventListener("window","resize",this.onResize.bind(this)),this.eventManager.addGlobalEventListener("window","onload",this.onLoaded.bind(this))}get onResize$(){return this.resizeSubject.asObservable()}onResize(n){this.resizeSubject.next(n.target)}onLoaded(n){this.windowWidth=n.target}},j=class{constructor(n){this.errorHandler=n}log(n,...t){Object(a.X)()&&console.log(n,...t)}error(n){this.errorHandler.handleError(n)}warn(n,...t){console.warn(n,...t)}};const $=new a.p("WindowToken");class I{get nativeWindow(){throw new Error("Not implemented.")}}class L extends I{constructor(){super()}get nativeWindow(){return window}}function A(n,t){return Object(h.D)(t)?n.nativeWindow:{setTimeout:(n,t)=>{},clearTimeout:n=>{}}}const F=new a.p("DocumentToken");class B{get nativeDocument(){throw new Error("Not implemented.")}}class J extends B{constructor(){super()}get nativeDocument(){return document}}function H(n,t){return Object(h.D)(t)?n.nativeDocument:{hidden:!1,visibilityState:"visible"}}let R=class{};var W=e("cUpR"),q=e("s7LF"),V=e("QQfA"),X=e("IP0z"),G=e("gavF"),U=e("POq0"),Z=e("Xd0L"),Q=e("/Co4"),K=e("JjoW"),Y=e("/HVE"),nn=e("qJ5m"),tn=e("Mz6y"),en=e("5GAg"),an=e("DkaU"),ln=e("s6ns"),cn=e("821u"),on=e("OIZN"),gn=e("Wc//"),_n=e("Fwaw"),rn=e("zMNK"),sn=e("hOhj"),un=e("Gi4r"),pn=e("oapL"),mn=e("HsOI"),hn=e("ZwOa"),Cn=e("igqZ"),On=e("02hT"),Pn=e("Q+lL"),Mn=e("pBi1"),bn=e("lT8R"),dn=e("BV1i"),fn=e("elxJ"),xn=e("5Bek"),Dn=e("c9fC"),yn=e("FVPZ"),vn=e("qJ50"),wn=e("AaDx"),kn=e("mkRZ"),zn=e("dFDH"),Sn=e("rWV4"),En=e("zQui"),Nn=e("8rEH"),Tn=e("r0V8"),jn=e("10VE"),$n=e("BzsH"),In=e("cw5Z"),Ln=e("hfXE"),An=e("ECJv"),Fn=e("EApP"),Bn=e("1Q6g");class Jn{}e.d(t,"KpiDashboardModuleNgFactory",(function(){return Hn}));var Hn=a.qb(l,[],(function(n){return a.Cb([a.Db(512,a.j,a.bb,[[8,[i.a,c.a,c.b,o.a,g.b,g.a,_.a,_.b,_.h,_.i,_.e,_.f,_.g,r.a,s.a,u.a,S]],[3,a.j],a.w]),a.Db(4608,h.o,h.n,[a.t,[2,h.K]]),a.Db(4608,I,L,[]),a.Db(5120,$,A,[I,a.A]),a.Db(4608,T,T,[W.d]),a.Db(4608,B,J,[]),a.Db(5120,F,H,[B,a.A]),a.Db(4608,j,j,[a.l]),a.Db(4608,q.D,q.D,[]),a.Db(4608,q.g,q.g,[]),a.Db(4608,V.c,V.c,[V.i,V.e,a.j,V.h,V.f,a.q,a.y,h.d,X.b,[2,h.i]]),a.Db(5120,V.j,V.k,[V.c]),a.Db(5120,G.a,G.d,[V.c]),a.Db(4608,U.c,U.c,[]),a.Db(4608,Z.b,Z.b,[]),a.Db(5120,Q.a,Q.b,[V.c]),a.Db(5120,K.a,K.b,[V.c]),a.Db(4608,W.e,Z.c,[[2,Z.g],[2,Z.l]]),a.Db(4608,Z.a,Z.w,[[2,Z.f],Y.a]),a.Db(5120,nn.b,nn.a,[[3,nn.b]]),a.Db(5120,tn.b,tn.c,[V.c]),a.Db(135680,en.h,en.h,[a.y,Y.a]),a.Db(4608,an.e,an.e,[a.L]),a.Db(5120,ln.c,ln.d,[V.c]),a.Db(135680,ln.e,ln.e,[V.c,a.q,[2,h.i],[2,ln.b],ln.c,[3,ln.e],V.e]),a.Db(4608,cn.i,cn.i,[]),a.Db(5120,cn.a,cn.b,[V.c]),a.Db(5120,on.c,on.a,[[3,on.c]]),a.Db(4608,C.v,C.v,[a.j,a.q,C.jb,C.w]),a.Db(4608,gn.a,gn.a,[]),a.Db(1073742336,h.c,h.c,[]),a.Db(1073742336,R,R,[]),a.Db(1073742336,q.C,q.C,[]),a.Db(1073742336,q.m,q.m,[]),a.Db(1073742336,q.z,q.z,[]),a.Db(1073742336,X.a,X.a,[]),a.Db(1073742336,Z.l,Z.l,[[2,Z.d],[2,W.f]]),a.Db(1073742336,Y.b,Y.b,[]),a.Db(1073742336,Z.v,Z.v,[]),a.Db(1073742336,_n.c,_n.c,[]),a.Db(1073742336,rn.g,rn.g,[]),a.Db(1073742336,sn.c,sn.c,[]),a.Db(1073742336,V.g,V.g,[]),a.Db(1073742336,G.c,G.c,[]),a.Db(1073742336,G.b,G.b,[]),a.Db(1073742336,un.c,un.c,[]),a.Db(1073742336,pn.c,pn.c,[]),a.Db(1073742336,U.d,U.d,[]),a.Db(1073742336,mn.e,mn.e,[]),a.Db(1073742336,hn.c,hn.c,[]),a.Db(1073742336,Cn.e,Cn.e,[]),a.Db(1073742336,Z.m,Z.m,[]),a.Db(1073742336,Z.t,Z.t,[]),a.Db(1073742336,On.a,On.a,[]),a.Db(1073742336,Pn.a,Pn.a,[]),a.Db(1073742336,Z.q,Z.q,[]),a.Db(1073742336,Q.c,Q.c,[]),a.Db(1073742336,K.d,K.d,[]),a.Db(1073742336,Mn.b,Mn.b,[]),a.Db(1073742336,Mn.a,Mn.a,[]),a.Db(1073742336,bn.a,bn.a,[]),a.Db(1073742336,dn.a,dn.a,[]),a.Db(1073742336,Z.x,Z.x,[]),a.Db(1073742336,Z.n,Z.n,[]),a.Db(1073742336,fn.a,fn.a,[]),a.Db(1073742336,xn.c,xn.c,[]),a.Db(1073742336,Dn.a,Dn.a,[]),a.Db(1073742336,yn.a,yn.a,[]),a.Db(1073742336,vn.e,vn.e,[]),a.Db(1073742336,nn.c,nn.c,[]),a.Db(1073742336,en.a,en.a,[]),a.Db(1073742336,tn.e,tn.e,[]),a.Db(1073742336,an.c,an.c,[]),a.Db(1073742336,wn.a,wn.a,[]),a.Db(1073742336,kn.a,kn.a,[]),a.Db(1073742336,zn.d,zn.d,[]),a.Db(1073742336,Sn.j,Sn.j,[]),a.Db(1073742336,ln.k,ln.k,[]),a.Db(1073742336,En.p,En.p,[]),a.Db(1073742336,Nn.m,Nn.m,[]),a.Db(1073742336,cn.j,cn.j,[]),a.Db(1073742336,Tn.d,Tn.d,[]),a.Db(1073742336,Tn.c,Tn.c,[]),a.Db(1073742336,jn.i,jn.i,[]),a.Db(1073742336,$n.b,$n.b,[]),a.Db(1073742336,on.d,on.d,[]),a.Db(1073742336,C.c,C.c,[]),a.Db(1073742336,C.f,C.f,[]),a.Db(1073742336,C.g,C.g,[]),a.Db(1073742336,C.k,C.k,[]),a.Db(1073742336,C.l,C.l,[]),a.Db(1073742336,C.r,C.r,[]),a.Db(1073742336,C.t,C.t,[]),a.Db(1073742336,C.x,C.x,[]),a.Db(1073742336,C.z,C.z,[]),a.Db(1073742336,C.D,C.D,[]),a.Db(1073742336,C.G,C.G,[]),a.Db(1073742336,C.J,C.J,[]),a.Db(1073742336,C.M,C.M,[]),a.Db(1073742336,C.P,C.P,[]),a.Db(1073742336,C.U,C.U,[]),a.Db(1073742336,C.X,C.X,[]),a.Db(1073742336,C.Y,C.Y,[]),a.Db(1073742336,C.Z,C.Z,[]),a.Db(1073742336,C.y,C.y,[]),a.Db(1073742336,In.h,In.h,[]),a.Db(1073742336,Ln.b,Ln.b,[]),a.Db(1073742336,An.b,An.b,[]),a.Db(1073742336,Fn.i,Fn.i,[]),a.Db(1073742336,Bn.a,Bn.a,[]),a.Db(1073742336,N.p,N.p,[[2,N.u],[2,N.l]]),a.Db(1073742336,Jn,Jn,[]),a.Db(1073742336,m.c,m.c,[]),a.Db(1073742336,l,l,[]),a.Db(256,Z.e,Z.i,[]),a.Db(256,In.p,"en-US",[]),a.Db(256,Fn.b,{default:Fn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),a.Db(1024,N.j,(function(){return[[{path:"",component:P}]]}),[]),a.Db(256,m.b,{radius:50,space:-12,outerStrokeWidth:12,innerStrokeWidth:12,showSubtitle:!0,subtitle:"OEE"},[])])}))}}]);
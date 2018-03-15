# pug模板引擎(原jade)


### 使用 html 編碼
~~~html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">-->

	<meta property="og:description" content="新媒體時代，每個人都是媒體。聯合報系願景工程邀請校園青年用影像記錄讓台灣更好的積極作為，參加「#願景工程Action～傳影音，拿獎金！」活動。"/>
	<meta name="description" content="新媒體時代，每個人都是媒體。聯合報系願景工程邀請校園青年用影像記錄讓台灣更好的積極作為，參加「#願景工程Action～傳影音，拿獎金！」活動。" />
    <meta property="og:title" content="願景工程Action「2018：世代共好」傳影音拿獎金"/>
	<meta property="og:image" content="https://event.udn.com/vision_action2018/img/safe_image.jpg"/>

    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <title>願景工程Action「2018：世代共好」傳影音拿獎金</title>

    <link href="//s.udn.com.tw/static/font-icons/css/fontello.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">

</head>
<body>

<div id="container">
    
    <div id="header">

        <div class="main restrict">
            
            <a href="#header_menu_area" id="header_menu_btn"><i class="i-list"></i></a>
            
            <a href="https://vision.udn.com/" target="_blank" id="logo"><img src="img/logo.png"></a>
            <ul id="menu">
                <li class="on"><a href="#section1" class="menuNav">首頁</a></li>
                <li><a href="#section2" class="menuNav">活動介紹</a></li>
                <li><a href="#section3" class="menuNav">參賽辦法</a></li>
                <!--#include file="inc/header_menu_area.html" -->
            </ul>
        </div>

    </div>
    <!--/#header-->
    
    <div id="wrapper">
        
        <section id="section1">
            <div class="main restrict">
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fevent.udn.com%2Fvision_action2018%2F&amp;src=sdkpreparse" class="fb_share_btn"><img src="img/fb-40x40-2x.png" alt="facebook 分享"></a>
            </div>
        </section>

        <section id="section2">
            <div class="main restrict">
                <h2 class="title">影音甄選大賽<strong>活動介紹</strong></h2>
                <p>聯合報系文化基金會承辦「王惕吾先生新聞獎學金」超過廿年，深知學生不僅注重個人學習成長，更透過社會參與、服務學習、公益實踐等行動，向社會各角落伸出關懷的手。</p>
                <p>新媒體時代，每個人都是媒體。2018年開始，聯合報系願景工程邀請校園青年一起參與這個新時代，用影像記錄讓台灣更好的積極作為，並上傳到社群媒體，參加「#願景工程Action～傳影音，拿獎金！」活動，共同喚起社會關注、促成正向改變。</p>
                <p>聯合報系文化基金會「王惕吾先生新聞獎學金」將依據評選、網路投票結果贈獎。</p>

                <h2 class="title">影音甄選大賽<strong>甄選主題</strong></h2>
                <p>從年金改革、同性婚姻到勞基法修法，重大議題皆可見不同世代對立的影子。世代間的藩籬，是否能有化解的一日？</p>
                <p>願景工程今年以「世代共好」為主軸，推出<a href="https://vision.udn.com/vision/cate/11885" target="_blank">三波系列報導</a>，包含世代共容（促進世代間的理解與對話），世代共榮（鼓勵世代傳承、共創價值）與世代共融（創想世代間更安全合宜的生活環境），並規劃舉辦<a href="https://vision.udn.com/salon/" target="_blank"> 8 場沙龍活動</a>，邀請各世代分享與對談各自的世代經驗與觀點。</p>

                <img src="img/cover.png">

                <p>2018「<strong>#願景工程Action</strong>」甄選主題訂定為「<strong>世代共好</strong>」，期待校園青年透過自己的視角，詮釋不同世代的議題、促成世代溝通、了解與合作，並用影像紀錄「世代共好」的行動方案。「#願景工程Action」將選拔優秀作品，與青年攜手，擴大行動方案影響力。</p>
                <p>例如，前往長者公寓關懷長輩、幫獨居長者房舍大改造、設計出讓不同世代一起生活的「青銀共居」方案，參與汲取不同世代智慧的「青銀共創」創業計畫，為下一世代革新教育...等，舉凡橫跨不同世代的社會關懷、正向改變等實際執行的方案，均可成為影像紀錄的主題。</p>

                <ul class="extend">
                    <li><a href="https://vision.udn.com/vision/cate/11885" target="_blank"><img src="img/logo_udn.png">願景報導<i class="i-arrow2-right"></i></a></li>
                    <li><a href="https://zh-tw.facebook.com/udn.vision.project/" target="_blank"><img src="img/logo_fb.png">願景粉絲團<i class="i-arrow2-right"></i></a></li>
                </ul>
            </div>
        </section>

        <section id="section3">
            <div class="main restrict">
                <h2 class="title">影音甄選大賽<strong>活動說明</strong></h2>
                
                <h3 class="subtitle"><i class="i-point"></i>參賽資格</h3>
                <dl class="list">
                    <dt>1.個別組：</dt>
                    <dd>國內各大專院校在學學生（不包含進修推廣部學分班與在職進修班），需出具代表人學生證明文件。</dd>
                    <dt>2.社團組：</dt>
                    <dd>於國內各大專院校課外活動組註冊在案，且仍在經營的學生社團；年度營隊須向學校報備或登記在案。社團組報名須出具學校的出團公文或是當年度的社團證明文件。</dd>
                </dl>
                <p><i class="i-point"></i>參賽者應依本報名辦法之規定報名，同一屆報名作品，每件作品限於個別組或社團組擇一參加；但同一代表人如有2件以上行動案，不限報名次數。</p>

                <h3 class="subtitle"><i class="i-point"></i>參賽作品說明</h3>
                <dl class="list">
                    <dt>1.交件規格：</dt>
                    <dd>影像紀錄作品限1分鐘～3分鐘內影片，影片格式mp4、解析度1280*720，拍攝手法或影片類型不拘。</dd>
                    <dt>2.特殊要求：</dt>
                    <dd>影片片尾最後2秒須置入由主辦單位所準備的影片檔，<a href="action.zip">影片檔下載處</a>。</dd>
                </dl>

                <h3 class="subtitle"><i class="i-point"></i>參加方法四步驟</h3>
                <dl class="list">
                    <dd>1.行動方案須於2017/09/01到2018/08/31期間執行。</dd>
                    <dd>2.影像紀錄作品上傳到社群媒體Youtube，標題設定為<strong>【#願景工程Action】2018世代共好-自訂主題（如：在新店與獨居長輩共舞）</strong></dd>
                    <dd>3.進入「#願景工程Action～傳影音，拿獎金！」活動官網完成報名。</dd>
                    <dd>4.收到完成報名確認信後即完成報名程序。</dd>
                </dl>

                <h2 class="title">影音甄選大賽<strong>活動時程</strong></h2>

                <p>「#願景工程Action～傳影音，拿獎金」活動共分為四個階段進行，預計於2018年12月中下旬舉辦贈獎典禮，確切時間及地點將另行公布，並以電子信函通知最終獲選者。</p>
                <p><i class="i-point"></i>贈獎典禮：得獎人須親自到場領獎；若有特殊因素無法親自到場領獎，須事先知會主辦單位，並經主辦單位同意。 </p>

            </div>
        </section>

        <section id="section4">
            <div class="main">

                <dl class="step">
                    <dd><img src="img/step01.png"></dd>
                    <dd><img src="img/step02.png"></dd>
                    <dd><img src="img/step03.png"></dd>
                    <dd><img src="img/step04.png"></dd>
                </dl>

                <!--#include file="inc/join_button.html" -->


            </div>
        </section>

        <section id="section5">
            <div class="main restrict">
                <h2 class="title">影音甄選大賽<strong>獎項</strong></h2>
                <p>本活動旨在協助校園學子成為台灣社會各世代的串連力量，鼓勵個人、團隊或社團關注世代議題，提出並執行解決方案，因此設立行動獎與人氣獎，並區分為個別組與社團組，合計將贈獎60萬元。</p>

                <ul class="table">
                    <li>
                        <h4 class="table_title">行動獎</h4>
                        <ul>
                            <li>
                                <dl>
                                    <dt>個別組</dt>
                                    <dd><i class="i-point"></i>首獎 1名，10萬元</dd>
                                    <dd><i class="i-point"></i>優等 2名，5萬元</dd>
                                    <dd><i class="i-point"></i>佳作 5名，1萬元</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>社團組</dt>
                                    <dd><i class="i-point"></i>首獎 1名，10萬元</dd>
                                    <dd><i class="i-point"></i>優等 2名，5萬元</dd>
                                    <dd><i class="i-point"></i>佳作 5名，1萬元</dd>
                                </dl>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4 class="table_title">人氣獎</h4>
                        <ul>
                            <li>
                                <dl>
                                    <dt>個別組</dt>
                                    <dd><i class="i-point"></i>1名，5萬元</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>社團組</dt>
                                    <dd><i class="i-point"></i>1名，5萬元</dd>
                                </dl>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 class="title">影音甄選大賽<strong>評選方式</strong></h2>
                
                <h3 class="subtitle"><i class="i-point"></i>初選</h3>
                <p>參賽者完成網路報名後，主辦單位將檢視參賽者學生資格、作品完整度與相關證明資料，資料不齊備者視同放棄。參賽者須通過主辦單位的初選始具有被票選資格：</p>
                <ol class="list_disc">
                    <li>文件齊備</li>
                    <li>切合主題(50%)</li>
                    <li>影片品質(50%)</li>
                </ol>

                <h3 class="subtitle"><i class="i-point"></i>【行動獎】決選</h3>
                <ol class="list_decimal">
                    <li>切合主題(20%)</li>
                    <li>影片品質(30%)</li>
                    <li>行動成果(50%)</li>
                </ol>

                <h3 class="subtitle"><i class="i-point"></i>【人氣獎】網友票選</h3>
                <p>凡擁有Facebook帳號之民眾，登入「#願景工程Action～傳影音，拿獎金！」活動網站，即可參與票選。FB之「按讚」、「分享」功能各算1票，可以投給同一作品或不同作品，但同一帳號分享同一作品多次僅計算1票。投票結束後，統計票數最高者獲該組人氣獎。</p>
                <h4 class="listtitle">1. 投票資格：如有以下情況之一，主辦單位有權拒絕或撤銷投票資格：</h4>
                <ol class="list_disc">
                    <li>偽造、偽冒或未經他人同意擅自使用之Facebook帳號，且經查證屬實者。</li>
                    <li>其他危及活動公平性或有其他違反法令之情事者。</li>
                </ol>
                <p>主辦單位保有審視民眾投票資格或刪除爭議票數之權利。</p>
                <h4 class="listtitle">2. 投票期間</h4>
                <p>投票時間從10月01日上午09：00起，至10月31日24：00止，以活動網頁時間為準。主辦單位11月上旬將於活動官網上公布最終票數。</p>
                

            </div>
        </section>

        <section id="section6">
            <div class="main restrict">
                <h2 class="title">影音甄選大賽<strong>注意事項與聯絡資訊</strong></h2>
                <h3 class="subtitle"><i class="i-point"></i>注意事項</h3>
                <ol class="list_decimal">
                    <li>參賽者或得獎者若有作品不實、違反著作權法、違反本活動規定或其他法令者，主辦單位得取消其參賽或贈獎資格、移除其上傳作品，並追回其已領取之獎金、獎座，參賽者、得獎者均不得有異議。</li>
                    <li>參賽影片不得使用有侵權之嫌的圖像，禁止抄襲或複製他人作品，禁止涉及色情、暴力、毀謗、人身攻擊，禁止侵害他人隱私權或妨礙社會正當風俗及公共秩序作品或有違反中華民國相關法令規定等情事。若有違反，除參賽者應自負法律責任外，主辦單位得取消其得獎資格，並追回其已領得之獎品、獎金。</li>
                    <li>依中華民國稅法規定，獎金超過新台幣2 萬元者，得獎者需負擔10%之稅金，且金額超過新台幣1000 元(含)者，年度報稅時必須計入個人所得，以上計算僅針對獎金計算，贈品部份不予以列入，並由主辦單位開立扣繳憑單供得獎人申報綜合所得稅。</li>
                    <li>參賽者、獲獎者作品，主辦單位（聯合報系文化基金會、聯合報系願景工程）得有不限期間、不限地點及次數之重製、公開傳輸、公開播送等權利，以便主辦單位進行後續宣傳及行銷活動，且不另外再給予報酬。</li>
                    <li>參加網路人氣投票活動時，請正常使用票選系統，如經查獲有灌票、或其他人為且非正常使用且干擾票選程序之事宜，除該使用者之任何投票均不列入計算，該使用者亦直接失去得獎資格。</li>
                    <li>獲獎者若同時重複獲得不同獎項，取最佳獎項為主，次獎項則不予以計算，並依總積分排名補上得獎隊伍；但行動獎與人氣獎得依規定重複獲獎；得獎者若無法出席頒獎典禮，經主辦單位同意後，得由他人代領，若無人領取則視同放棄，獎項不另遞補。</li>
                    <li>參賽者於參加本活動之同時，即同意接受本活動辦法與注意事項之規範，如有違反，主辦單位得取消其參加或得獎資格，保留對活動的最終解釋權、追回獎項、獎金和獎品的權利。</li>
                    <li>主辦單位對本活動之活動辦法、得獎時間、得獎公佈、獎項內容與數量有修改權利，且修改後不另行通知，且活動因故無法進行時，主辦單位有權決定取消、終止、修改或暫停活動。</li>
                </ol>


                <!--#include file="inc/join_button.html" -->


                <ul class="host">
                    <li>主辦單位：</li>
                    <li><a href="http://fund.udngroup.com/" target="_blank"><img src="img/logo_fund.png"></a></li>
                    <li><a href="https://vision.udn.com/" target="_blank"><img src="img/logo_vision.png"></a></li>
                </ul>

                <p>客服信箱：<a href="mailto:udnfund@udngroup.com.tw">udnfund@udngroup.com.tw</a></p>
            </div>
        </section>

    </div>
    <!--/#wrapper-->

    <div id="footer">
            <div class="main">聯合線上公司 著作權所有 © udn.com All Rights Reserved.</div>
    </div>
    <!--/#footer-->

    <a id="gotop" href='javascript:void(0);'><i></i></a>
    <!-- /#gotop -->


</div>

    <script src="js/lib/jquery.min.js"></script>
    <script src="js/lib/sweetalert2.min.js"></script>
    <script src="js/lib/jquery.mmenu.min.js"></script>
    <script src="js/index.js"></script>
    
</body>
<nav id="header_menu_area">
	<ul>
        <!--#include file="inc/header_menu_area.html" -->
	</ul>
</nav>
</html>
~~~



// Chess Coach V4 challenge extension
window.CHESS_COURSE.modules.push(
  {id:"M9", title:"挑戰・淺", subtitle:"先算 1–2 層，不再只靠口訣"},
  {id:"M10", title:"挑戰・中", subtitle:"比較候選著，找對手最佳回應"},
  {id:"M11", title:"挑戰・深", subtitle:"取捨、預防、優勢轉換與深層判斷"}
);

window.CHESS_COURSE.questions.push(
{
 id:"M9-Q01",module:"M9",difficulty:"淺",title:"兵真的免費嗎？",
 type:"mcq",
 fen:"r1bqk2r/ppp2ppp/2n2n2/3pp3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
 prompt:"白王現在沒有立即危險。你看到 d5、e5 的黑兵。哪個判斷最精確？",
 choices:[
  {id:"A",text:"Bxd5 直接贏一兵",correct:false,explain:"不一定。f6 的黑馬能參與回吃；要算完整個交換鏈。"},
  {id:"B",text:"Nxe5 直接贏一兵",correct:false,explain:"不一定。c6 的黑馬控制 e5，可以回吃。"},
  {id:"C",text:"兩顆都不能直接當成免費兵；先算回吃，再和 O-O 比較",correct:true,explain:"對。王沒立即危險不代表一定要先易位；但吃兵也必須先確認交換後是否真的賺。"},
  {id:"D",text:"只要能王車易位，就不應該吃任何兵",correct:false,explain:"這是把原則當成死規則。若有乾淨的戰術獲利，吃兵可以優先。"}
 ]
},
{
 id:"M9-Q02",module:"M9",difficulty:"淺",title:"絕對牽制：它真的能走嗎？",
 type:"mcq",
 fen:"4k3/8/2n5/1B6/8/8/8/4K3 b - - 0 1",
 prompt:"黑馬在 c6，白象 b5 的斜線通往黑王 e8。黑馬能不能隨便跳走？",
 choices:[
  {id:"A",text:"可以，因為騎士可以跳過棋子",correct:false,explain:"能跳過棋子，不代表能讓自己的王暴露在將軍線上。"},
  {id:"B",text:"不行；若移開會讓 b5 象直接攻擊 e8 王",correct:true,explain:"對。這是 absolute pin；若移開會使自己的王被將軍，因此那個移動本身非法。"},
  {id:"C",text:"只有皇后才能牽制",correct:false,explain:"象、車、后都能利用長線形成牽制。"},
  {id:"D",text:"能不能走只看馬的 L 形",correct:false,explain:"合法走法還必須滿足自己的王不能處於被攻擊狀態。"}
 ]
},
{
 id:"M9-Q03",module:"M9",difficulty:"淺",title:"領先時要不要換后？",
 type:"mcq",
 fen:"6k1/4q3/8/8/8/8/4Q3/4R1K1 w - - 0 1",
 prompt:"白方比黑方多一台車，沒有直接被將死。若能安全交換皇后，通常哪個想法更合理？",
 choices:[
  {id:"A",text:"避免換后，因為皇后最強",correct:false,explain:"領先物質時，保留大量攻擊棋子反而可能給對手更多反擊機會。"},
  {id:"B",text:"傾向換后，但仍要確認交換後沒有戰術問題",correct:true,explain:"對。簡化會讓多出的車更容易成為決定性優勢，但仍不能自動交換。"},
  {id:"C",text:"一定換后，不必計算",correct:false,explain:"原則永遠不能取代具體計算。"},
  {id:"D",text:"是否換后只看棋子分值",correct:false,explain:"還要看王安全、活動性、兵型與殘局結構。"}
 ]
},
{
 id:"M9-Q04",module:"M9",difficulty:"淺",title:"前哨站值不值得留？",
 type:"mcq",
 fen:"6k1/2p3p1/8/4N3/3P1P2/8/8/6K1 w - - 0 1",
 prompt:"白馬站在 e5，受 d4、f4 支持，而且黑兵很難把它趕走。若黑方願意用一隻普通的象交換它，白方通常怎麼想？",
 choices:[
  {id:"A",text:"通常不急著換；這隻馬是強力前哨",correct:true,explain:"對。棋子的名義分值不是全部；位置可以讓這匹馬的實際價值高很多。"},
  {id:"B",text:"一定換，因為象和馬分值一樣",correct:false,explain:"分值只是粗略起點，位置品質很重要。"},
  {id:"C",text:"騎士在中心一定危險",correct:false,explain:"騎士通常最喜歡中心，尤其是不能被兵趕走的中心格。"},
  {id:"D",text:"只要能交換就交換",correct:false,explain:"無條件簡化會把自己的優勢棋子換掉。"}
 ]
},
{
 id:"M9-Q05",module:"M9",difficulty:"淺",title:"哪一顆棋子最該改善？",
 type:"mcq",
 fen:"r3k2r/ppp2ppp/2n5/3pp3/8/2N1PN2/PPPP1PPP/R1BQ1RK1 w kq - 0 8",
 prompt:"白方已易位，兩匹馬都已發展，但 c1 象與 a1 車仍很被動。沒有立即戰術時，哪種思考最有效？",
 choices:[
  {id:"A",text:"再把已經很活躍的馬走第三次",correct:false,explain:"除非有具體戰術，重複移動強子通常不如改善最差的棋子。"},
  {id:"B",text:"找方法發展 c1 象，讓兩台車逐步連起來",correct:true,explain:"對。改善最差的棋子，是中盤很實用的候選著產生方法。"},
  {id:"C",text:"任意推邊兵",correct:false,explain:"邊兵有時有用途，但這裡更明顯的需求是完成發展。"},
  {id:"D",text:"只盯著對手王，不管自己棋子",correct:false,explain:"沒有足夠棋子參戰時，攻王通常缺乏力量。"}
 ]
},
{
 id:"M9-Q06",module:"M9",difficulty:"淺",title:"最後 5 秒的防呆",
 type:"mcq",
 fen:"4k3/8/8/8/3q4/8/4R3/4K3 w - - 0 1",
 prompt:"你已經想好一手看起來很漂亮的棋。落子前最後 3–5 秒，最該檢查什麼？",
 choices:[
  {id:"A",text:"對手下一手有沒有將軍、吃子、直接威脅",correct:true,explain:"對。這個 blunder check 對實戰棋力提升非常大。"},
  {id:"B",text:"重新回想整個開局名稱",correct:false,explain:"開局名稱不會阻止你下一手掉后。"},
  {id:"C",text:"自己的棋看起來是否積極",correct:false,explain:"積極不等於安全。"},
  {id:"D",text:"只看自己能不能將軍",correct:false,explain:"你也必須看對手的強制著。"}
 ]
},

{
 id:"M10-Q01",module:"M10",difficulty:"中",title:"棋子協同：一步將死",
 type:"move",
 fen:"r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
 prompt:"白方走。找出立即將死的一手。",
 hint:"看 f7。除了皇后之外，還有哪一顆白棋控制 f7？",
 expected:[{from:"h5",to:"f7"}],
 correct:"Qxf7#。關鍵不是皇后自己很強，而是 c4 的白象保護 f7，所以黑王不能 Kxf7。",
 common:[
  {code:"W1",title:"只看到皇后靠近王",text:"真正使將死成立的是棋子協同：皇后佔 f7，象 c4 保護 f7。"},
  {code:"W2",title:"以為王可以吃任何貼身棋子",text:"王能吃棋，但目的格必須沒有被敵方棋子控制。"}
 ]
},
{
 id:"M10-Q02",module:"M10",difficulty:"中",title:"先找對手最強回應",
 type:"mcq",
 fen:"6k1/5ppp/8/7Q/2B5/8/8/6K1 w - - 0 1",
 prompt:"你發現一手將軍，看起來能贏很多。真正的計算流程應該是？",
 choices:[
  {id:"A",text:"只算對手最自然的回應",correct:false,explain:"對手可能有更強的防守資源。"},
  {id:"B",text:"列出所有合法走法，平均算一樣深",correct:false,explain:"太慢。應優先找最強、最強制的防守。"},
  {id:"C",text:"先找對手最強回應，再看自己的下一個強制著",correct:true,explain:"對。計算品質取決於你是否替對手找最好棋。"},
  {id:"D",text:"將軍通常都好，所以直接走",correct:false,explain:"無效將軍常只是浪費 tempo。"}
 ]
},
{
 id:"M10-Q03",module:"M10",difficulty:"中",title:"後排將死",
 type:"move",
 fen:"6k1/5ppp/8/8/8/8/8/4R1K1 w - - 0 1",
 prompt:"白方走，一步將死。",
 hint:"黑王被自己的 f7、g7、h7 兵封住。讓車進入第 8 排。",
 expected:[{from:"e1",to:"e8"}],
 correct:"Re8#。黑王被自己的兵封在後排，這叫 back-rank mate。這也是為什麼有時 h6/h3 的『透氣格』很重要。",
 common:[
  {code:"W1",title:"一直將軍但不封出口",text:"將軍本身不夠；要看王有哪些逃生格。"},
  {code:"W2",title:"忽略自己的兵也能困住王",text:"後排將死常是自己的兵牆把王封死。"}
 ]
},
{
 id:"M10-Q04",module:"M10",difficulty:"中",title:"關閉中心後，攻擊方向改了",
 type:"mcq",
 fen:"r1bq1rk1/ppp2ppp/2np1n2/4p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
 prompt:"雙方中心相對穩定、王都已易位。白方想進攻時，最成熟的想法是哪個？",
 choices:[
  {id:"A",text:"直接把皇后衝到對手王旁邊",correct:false,explain:"單一皇后通常不足以形成可靠攻勢。"},
  {id:"B",text:"先問哪一側有空間、兵突破與更多棋子可投入，再決定攻擊翼",correct:true,explain:"對。攻擊方向由兵結構、空間與棋子數決定，不是固定公式。"},
  {id:"C",text:"中心關閉就一定攻王翼",correct:false,explain:"有時攻后翼、有時攻王翼；必須看具體兵鏈與空間。"},
  {id:"D",text:"中心關閉就不能進攻",correct:false,explain:"反而常能更積極推翼側兵，因為中心較不易突然打開。"}
 ]
},
{
 id:"M10-Q05",module:"M10",difficulty:"中",title:"強馬換壞象？",
 type:"mcq",
 fen:"6k1/2p3p1/3p4/4N3/3P1P2/8/8/2B3K1 w - - 0 1",
 prompt:"白馬 e5 是強前哨；白象 c1 被自己的兵限制。若你只能保留其中一顆，通常更願意留下哪顆？",
 choices:[
  {id:"A",text:"留下 e5 的強馬",correct:true,explain:"對。棋子的實際價值取決於位置，不只是名義分值。"},
  {id:"B",text:"一定留下象，因為象永遠比馬強",correct:false,explain:"不存在這種固定規則。"},
  {id:"C",text:"哪顆都一樣",correct:false,explain:"一顆是強前哨、一顆受限，實戰價值不同。"},
  {id:"D",text:"先把兩顆都換掉",correct:false,explain:"無條件交換會消除自己的優勢棋子。"}
 ]
},
{
 id:"M10-Q06",module:"M10",difficulty:"中",title:"車殘局：兵還是主動？",
 type:"mcq",
 fen:"6k1/7p/8/8/8/8/P7/R5K1 w - - 0 1",
 prompt:"車殘局中，你可以選『守住一顆兵但車很被動』，或『暫時放掉兵但車能切王、將軍、攻後方』。通常哪個概念更重要？",
 choices:[
  {id:"A",text:"任何兵都不能放",correct:false,explain:"車殘局裡活動性經常比一顆兵更值錢。"},
  {id:"B",text:"車的主動性通常優先，但仍要算是否會直接輸掉關鍵通路兵",correct:true,explain:"對。主動車能將軍、側攻、切王，常能製造足夠補償。"},
  {id:"C",text:"只看物質數量",correct:false,explain:"車的位置與王的位置極其重要。"},
  {id:"D",text:"車殘局不需要計算",correct:false,explain:"恰恰相反，很多車殘局需要精確計算。"}
 ]
},

{
 id:"M11-Q01",module:"M11",difficulty:"深",title:"預防：先問對手想幹嘛",
 type:"mcq",
 fen:"r4rk1/ppp2ppp/2npbn2/8/2B1P3/2NP1N2/PPP2PPP/R1BQR1K1 b - - 0 10",
 prompt:"輪到黑方。沒有立即戰術。深一層的決策方法是什麼？",
 choices:[
  {id:"A",text:"只找自己最積極的一手",correct:false,explain:"這會忽略對手下一步可能獲得的強力計畫。"},
  {id:"B",text:"先問白方下一步最想做什麼，再決定要阻止、忽略或反擊",correct:true,explain:"對。這就是 prophylaxis：不是被動防守，而是把對手計畫納入自己的決策。"},
  {id:"C",text:"每一步都先退棋",correct:false,explain:"預防不等於消極。"},
  {id:"D",text:"只要沒有將軍就隨便走",correct:false,explain:"高水平局面常在沒有戰術時由計畫決定。"}
 ]
},
{
 id:"M11-Q02",module:"M11",difficulty:"深",title:"靜態優勢 vs 動態優勢",
 type:"mcq",
 fen:"r2q1rk1/pp2bppp/2npbn2/2pp4/8/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10",
 prompt:"白方兵型較健康；黑方棋子目前更活躍。哪種評估方式更成熟？",
 choices:[
  {id:"A",text:"只看兵型，白方一定好",correct:false,explain:"兵型是靜態因素，但活動性、先手與王安全是動態因素。"},
  {id:"B",text:"只看誰現在有攻勢",correct:false,explain:"動態優勢可能消失；若攻勢沒轉化，靜態缺陷會留下。"},
  {id:"C",text:"分開看靜態與動態；黑方若不能及時利用活動性，白方長期結構可能更有價值",correct:true,explain:"對。高手常問：這個優勢是會消失的，還是會留下來的？"},
  {id:"D",text:"棋局只由物質決定",correct:false,explain:"位置因素常足以補償甚至超過物質差。"}
 ]
},
{
 id:"M11-Q03",module:"M11",difficulty:"深",title:"交換不是中性的",
 type:"mcq",
 fen:"6k1/2p2pp1/3p3p/4N3/3P1P2/8/6PP/6K1 w - - 0 1",
 prompt:"白馬 e5 是全盤最強的棋子。若交換它會進入兵數相等、沒有明顯突破的殘局，哪個問題最值得先問？",
 choices:[
  {id:"A",text:"交換後，我還剩下什麼優勢？",correct:true,explain:"對。交換會改變局面性質；不要把強棋子換掉後才發現優勢也一起消失。"},
  {id:"B",text:"交換是否讓棋子總數變少",correct:false,explain:"少棋子本身不是目的。"},
  {id:"C",text:"交換後棋盤是否更漂亮",correct:false,explain:"沒有棋理意義。"},
  {id:"D",text:"同分值棋子交換永遠中性",correct:false,explain:"位置、兵型與剩餘棋子會讓交換價值完全不同。"}
 ]
},
{
 id:"M11-Q04",module:"M11",difficulty:"深",title:"算到安靜局面再評估",
 type:"mcq",
 fen:"4k3/8/8/3q4/4Q3/8/8/4K3 w - - 0 1",
 prompt:"你正在算一串強制交換。什麼時候最適合停止這條變化並做局面評估？",
 choices:[
  {id:"A",text:"自己吃到第一顆棋就停",correct:false,explain:"對手可能馬上回吃或有更強的中間著。"},
  {id:"B",text:"雙方將軍與強制吃子大致結束、局面變安靜時",correct:true,explain:"對。這時再比較物質、王安全、活動性、兵型，評估才有意義。"},
  {id:"C",text:"一定要算到 20 手",correct:false,explain:"深度不是固定數字；強制程度更重要。"},
  {id:"D",text:"只要自己覺得舒服就停",correct:false,explain:"這容易造成 confirmation bias。"}
 ]
},
{
 id:"M11-Q05",module:"M11",difficulty:"深",title:"優勢要轉換，不是收藏",
 type:"mcq",
 fen:"6k1/5ppp/8/3N4/8/8/5PPP/6K1 w - - 0 1",
 prompt:"白方有一匹非常強的馬，但若用它交換黑方最後一個防守子，經計算會得到明確勝勢兵殘局。怎麼看？",
 choices:[
  {id:"A",text:"不能換，因為強馬很珍貴",correct:false,explain:"優勢的目的不是收藏，而是轉換成更容易贏的形式。"},
  {id:"B",text:"若兵殘局經計算是明確勝勢，交換是好的優勢轉換",correct:true,explain:"對。高手會把位置優勢轉換成可實現、可計算的終局優勢。"},
  {id:"C",text:"只要交換就一定更好",correct:false,explain:"前提是你真的算清楚交換後的殘局。"},
  {id:"D",text:"強棋子永遠不能換",correct:false,explain:"沒有這種規則。"}
 ]
},
{
 id:"M11-Q06",module:"M11",difficulty:"深",title:"高手的最後一步：比較候選著",
 type:"mcq",
 fen:"r2q1rk1/pp2bppp/2npbn2/2pp4/8/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10",
 prompt:"你找到三個都合理的候選著：改善最差棋子、製造威脅、預防對手突破。最後應該怎麼選？",
 choices:[
  {id:"A",text:"挑最有攻擊性的",correct:false,explain:"攻擊性只是特徵，不代表客觀效果最好。"},
  {id:"B",text:"挑自己最熟悉的",correct:false,explain:"熟悉度可影響實戰選擇，但不是棋理上的最終比較方法。"},
  {id:"C",text:"對每個候選著找對手最佳回應，再比較 resulting position",correct:true,explain:"對。候選著只是起點；真正的選擇來自對手最佳抵抗後，哪個結果最好。"},
  {id:"D",text:"隨機選，因為三個都合理",correct:false,explain:"高水平差距往往就在這個比較階段。"}
 ]
}
);
/* Chess Coach V7 bundled course data. Single-file bundle to avoid partial-load races. */\n\nwindow.CHESS_COURSE = {
  modules: [
    {id:"M1", title:"每一手怎麼想", subtitle:"先建立不容易 blunder 的固定流程"},
    {id:"M2", title:"兵型入門", subtitle:"全部用圖像理解，不先背術語"},
    {id:"M3", title:"基本戰術", subtitle:"雙攻、牽制、串擊、閃擊"},
    {id:"M4", title:"開局原則", subtitle:"知道為什麼走，而不是背棋譜"},
    {id:"M5", title:"策略與好位置", subtitle:"沒有戰術時知道棋子該去哪"},
    {id:"M6", title:"殘局基礎", subtitle:"王、通路兵與車兵殘局核心"},
    {id:"M7", title:"計算方法", subtitle:"候選著、最佳回應與中間著"},
    {id:"M8", title:"實戰決策", subtitle:"交換、王安全、時間與 blunder check"}
  ],
  questions: [
    {
      id:"M1-Q01", module:"M1", title:"一手同時做兩件事",
      type:"move",
      fen:"r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      prompt:"黑方走。找一手能『發展棋子』又能『攻擊白方中心兵』的棋。",
      hint:"看 g8 的馬。它能不能一邊出動，一邊碰到 e4？",
      expected:[{from:"g8",to:"f6"}],
      correct:"很好。...Nf6 同時發展馬、攻擊 e4，也讓黑王更接近王車易位。高手喜歡一手完成多個任務。",
      common:[
        {code:"W1", title:"先走 ...Qe7", text:"不是大錯，但皇后太早出來，還會卡住 f8 的象；發展效率較低。"},
        {code:"W2", title:"先跳 ...Nd4", text:"有攻擊味道，但同一隻馬再次移動，其他棋子還沒發展。除非有具體戰術，通常不急。"}
      ]
    },
    {
      id:"M1-Q02", module:"M1", title:"先看對手在威脅什麼",
      type:"mcq",
      fen:"rnbqkbnr/pppp1ppp/8/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 3",
      prompt:"輪到黑方。白方皇后在 h5、象在 c4。你第一件事應該察覺什麼？",
      choices:[
        {id:"A", text:"白方想吃 a7 的兵", correct:false, explain:"不是主要危險。a7 離白方進攻重點很遠。"},
        {id:"B", text:"白方威脅 Qxf7#（吃 f7 並將死）", correct:true, explain:"對。皇后與 c4 的象一起瞄準 f7。這就是為什麼每手先看對手威脅。"},
        {id:"C", text:"白方想把王車易位", correct:false, explain:"白方確實可能想易位，但眼前更急的是直接的將死威脅。"},
        {id:"D", text:"黑方可以先吃 c4 的象", correct:false, explain:"目前沒有這麼直接的合法吃法，而且即使有，也要先確認是否能解除將死威脅。"}
      ]
    },
    {
      id:"M1-Q03", module:"M1", title:"被牽制時先別慌",
      type:"mcq",
      fen:"rnbqk2r/pppp1ppp/5n2/4p3/4P1b1/5N2/PPPP1PPP/RNBQKB1R w KQkq - 4 4",
      prompt:"黑象在 g4 壓住 f3 的馬。白方現在最好的思考順序是哪個？",
      choices:[
        {id:"A", text:"立刻想辦法趕走那隻象", correct:false, explain:"有時可以，但先確認是否真的有立即危險。不要看到被攻擊就自動反應。"},
        {id:"B", text:"先看黑方的將軍、吃子、威脅，再找自己的強制著", correct:true, explain:"這是最穩定的實戰流程：先看對手強制手段，再看自己的。"},
        {id:"C", text:"只計算自己最想走的那一步", correct:false, explain:"這很容易漏掉對手下一手的直接戰術。"},
        {id:"D", text:"把所有合法走法都算一遍", correct:false, explain:"效率太低。高手不是算全部，而是先找高優先級候選著。"}
      ]
    },
    {
      id:"M1-Q04", module:"M1", title:"候選著先看什麼",
      type:"mcq",
      fen:"6k1/5ppp/8/7Q/2B5/8/8/6K1 w - - 0 1",
      prompt:"白方準備計算下一手。通常最先檢查哪一類棋？",
      choices:[
        {id:"A", text:"將軍（Checks）", correct:true, explain:"對。將軍迫使對手回應，最容易縮小計算樹。"},
        {id:"B", text:"隨便挑一顆沒動過的棋子", correct:false, explain:"發展很重要，但在可能有戰術時，強制著優先。"},
        {id:"C", text:"只看吃兵", correct:false, explain:"吃子重要，但將軍通常更強制，應先檢查。"},
        {id:"D", text:"先想十步後的理想位置", correct:false, explain:"太早。先排除眼前的強制變化與戰術。"}
      ]
    },

    {
      id:"M2-Q01", module:"M2", title:"同一路兩顆兵",
      type:"mcq",
      fen:"4k3/8/8/8/8/2P5/2P5/4K3 w - - 0 1",
      prompt:"白方在 c2、c3 各有一顆兵。這種兵型叫什麼？",
      choices:[
        {id:"A", text:"孤兵：旁邊沒有自己的兵", correct:false, explain:"不是。這題重點是兩顆兵在同一條 c-file 上。"},
        {id:"B", text:"落後兵：跟不上旁邊的兵", correct:false, explain:"不是。落後兵通常是旁邊兵往前了，自己難以安全推進。"},
        {id:"C", text:"通路兵：前面沒有敵兵能攔", correct:false, explain:"是不是通路兵要看敵方兵的位置；光看 c2、c3 不能這樣判定。"},
        {id:"D", text:"疊兵（doubled pawns）：同一路兩顆", correct:true, explain:"對。c2、c3 同在 c-file，所以叫疊兵。先記圖像：『同一路兩顆』。"}
      ]
    },
    {
      id:"M2-Q02", module:"M2", title:"沒有鄰居的兵",
      type:"mcq",
      fen:"4k3/8/8/8/3P4/8/P5P1/4K3 w - - 0 1",
      prompt:"白方 d4 的兵，在 c-file 與 e-file 都沒有白兵。它最符合哪個描述？",
      choices:[
        {id:"A", text:"孤兵（isolated pawn）", correct:true, explain:"對。左右相鄰 file 都沒有自己的兵，所以缺乏兵的互相保護。"},
        {id:"B", text:"疊兵", correct:false, explain:"疊兵要同一條 file 有兩顆自己的兵。"},
        {id:"C", text:"通路兵", correct:false, explain:"要看敵兵是否能從前方或左右相鄰 file 阻擋；這題沒有提供那個條件。"},
        {id:"D", text:"後翼兵", correct:false, explain:"這不是這裡要學的標準兵型名稱。"}
      ]
    },
    {
      id:"M2-Q03", module:"M2", title:"前面沒人攔的兵",
      type:"mcq",
      fen:"4k3/8/p6p/3P4/8/8/8/4K3 w - - 0 1",
      prompt:"白方 d5 兵的前方 d-file，以及左右 c/e-file，都沒有黑兵。這顆兵叫什麼？",
      choices:[
        {id:"A", text:"疊兵", correct:false, explain:"不是。同一條 d-file 只有一顆白兵。"},
        {id:"B", text:"落後兵", correct:false, explain:"不是。這顆兵反而已經很前進。"},
        {id:"C", text:"通路兵（passed pawn）", correct:true, explain:"對。它前進到升變的路上，沒有敵兵能用正常兵路線攔住它。"},
        {id:"D", text:"孤兵", correct:false, explain:"它可能同時也是孤兵，但題目強調的是『前方與左右相鄰 file 沒有敵兵』，所以重點是通路兵。"}
      ]
    },
    {
      id:"M2-Q04", module:"M2", title:"兵鏈的底部",
      type:"mcq",
      fen:"4k3/8/8/4P3/3P4/2P5/8/4K3 w - - 0 1",
      prompt:"白兵形成 c3 → d4 → e5 的斜向兵鏈。通常哪顆兵最需要保護？",
      choices:[
        {id:"A", text:"e5，因為最前面", correct:false, explain:"e5 有 d4 保護；它不是整條鏈最缺乏兵保護的地方。"},
        {id:"B", text:"d4，因為在中間", correct:false, explain:"d4 受到 c3 保護。"},
        {id:"C", text:"c3，兵鏈的底部", correct:true, explain:"對。兵鏈往往從後方底部供應保護；攻擊者常瞄準底部。"},
        {id:"D", text:"三顆都完全一樣", correct:false, explain:"不是。兵鏈的保護方向有結構，底部通常是關鍵弱點。"}
      ]
    },

    {
      id:"M3-Q01", module:"M3", title:"騎士雙攻",
      type:"move",
      fen:"8/4k3/3q4/8/7N/8/8/4K3 w - - 0 1",
      prompt:"白方走。讓騎士同時攻擊黑王和黑后。",
      hint:"從 h4 找一個能同時碰到 e7 與 d6 的格子。",
      expected:[{from:"h4",to:"f5"}],
      correct:"Nf5+！騎士同時將軍黑王，又攻擊 d6 的黑后。這叫 fork（雙攻）。",
      common:[
        {code:"W1", title:"只看有沒有吃子", text:"雙攻不一定要立刻吃。先創造『對手只能救一邊』的局面更重要。"},
        {code:"W2", title:"只看到將軍", text:"將軍是好線索，但還要問：這個將軍是否同時攻擊更高價值目標？"}
      ]
    },
    {
      id:"M3-Q02", module:"M3", title:"一顆棋子不能動",
      type:"mcq",
      fen:"4k3/8/2n5/1B6/8/8/8/4K3 b - - 0 1",
      prompt:"黑馬在 c6，白象在 b5，黑王在 e8。為什麼黑馬很尷尬？",
      choices:[
        {id:"A", text:"黑馬被自己的王擋住", correct:false, explain:"不是。王沒有擋馬的 L 形移動。"},
        {id:"B", text:"黑馬一走，b5 象的斜線會直接攻擊黑王", correct:true, explain:"對。馬被『釘』在王前面，這叫 pin（牽制）。"},
        {id:"C", text:"黑馬不能跳過棋子", correct:false, explain:"騎士本來就可以跳過棋子。"},
        {id:"D", text:"因為黑馬在深色格", correct:false, explain:"格子顏色與騎士是否能動沒有直接關係。"}
      ]
    },
    {
      id:"M3-Q03", module:"M3", title:"先攻王，再拿后",
      type:"mcq",
      fen:"4q3/4k3/8/8/8/8/8/4R1K1 w - - 0 1",
      prompt:"白車從 e1 沿 e-file 攻擊黑王 e7，黑后在王後面的 e8。王移開後，后會掉。這是什麼概念？",
      choices:[
        {id:"A", text:"雙攻", correct:false, explain:"有點相似，但這裡是同一直線上先逼前面的高價值目標移開，再吃後面的目標。"},
        {id:"B", text:"牽制", correct:false, explain:"牽制是『前面的棋子因後方更重要目標而不敢動』；這題反過來，是王被迫先動。"},
        {id:"C", text:"串擊（skewer）", correct:true, explain:"對。先攻前面的高價值目標，迫使它移開，再拿後面的棋。"},
        {id:"D", text:"升變", correct:false, explain:"與兵到最後一排變棋子無關。"}
      ]
    },
    {
      id:"M3-Q04", module:"M3", title:"移開遮住的棋子",
      type:"mcq",
      fen:"4k3/7q/8/8/4N3/8/8/1B4K1 w - - 0 1",
      prompt:"白象 b1 的斜線被自己的 e4 馬擋住。若馬移開後，象突然攻擊 h7 的黑后，這種想法叫什麼？",
      choices:[
        {id:"A", text:"閃擊／閃開攻擊（discovered attack）", correct:true, explain:"對。移開前面的棋子，讓後面的長程棋子突然發動攻擊。"},
        {id:"B", text:"王車易位", correct:false, explain:"與王和車的特殊走法無關。"},
        {id:"C", text:"兵鏈", correct:false, explain:"兵鏈是兵互相斜向保護的結構。"},
        {id:"D", text:"困子", correct:false, explain:"這題核心是『移開遮擋，露出攻擊線』。"}
      ]
    },

    {
      id:"M4-Q01", module:"M4", title:"皇后太早出門",
      type:"mcq",
      fen:"r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 3",
      prompt:"開局很早就把皇后放到 h5，最大的普遍風險是什麼？",
      choices:[
        {id:"A", text:"皇后會永遠不能回去", correct:false, explain:"不是。皇后仍然可以移動。"},
        {id:"B", text:"對手可能一邊發展棋子，一邊追皇后，讓你浪費步數", correct:true, explain:"對。這叫丟 tempo：你反覆搬皇后，對手卻每手都在發展。"},
        {id:"C", text:"皇后只能走直線", correct:false, explain:"皇后可以走直線與斜線。"},
        {id:"D", text:"皇后出來後不能王車易位", correct:false, explain:"皇后的位置本身不會取消易位權。"}
      ]
    },
    {
      id:"M4-Q02", module:"M4", title:"王安全：及時易位",
      type:"move",
      fen:"r1bqk2r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
      prompt:"白方已經把王翼路線清空。走一手讓王安全、車也更快參戰的棋。",
      hint:"這是王與車一次完成的特殊走法。",
      expected:[{from:"e1",to:"g1"}],
      correct:"O-O。王車易位一次完成王安全與車的連接，是開局最有效率的手段之一。",
      common:[
        {code:"W1", title:"先走 h3 / a3", text:"這些兵步有時有用，但若沒有具體需要，通常比完成王安全更慢。"},
        {code:"W2", title:"再動已發展的棋子", text:"除非有戰術，開局通常優先把尚未工作的棋子帶出來並讓王安全。"}
      ]
    },
    {
      id:"M4-Q03", module:"M4", title:"中心不是口號",
      type:"mcq",
      fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      prompt:"起始局面，下列哪一手最直接爭取中心空間並打開棋子路線？",
      choices:[
        {id:"A", text:"a3", correct:false, explain:"只處理邊兵，對中心和棋子發展幫助很少。"},
        {id:"B", text:"h3", correct:false, explain:"同樣是邊兵手，沒有立即爭取中心。"},
        {id:"C", text:"d4", correct:true, explain:"對。d4 佔據中心，還打開 c1 象與 d1 后的線。"},
        {id:"D", text:"Na3", correct:false, explain:"雖然是發展棋子，但馬在 a3 對中心控制較少。"}
      ]
    },
    {
      id:"M4-Q04", module:"M4", title:"同一顆棋子一直走",
      type:"mcq",
      fen:"rnbqkbnr/pppppppp/8/6N1/4P3/8/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
      prompt:"假設白馬很早就從 g1→f3→g5，而其他棋子都還沒出來。普遍問題是什麼？",
      choices:[
        {id:"A", text:"馬走兩次就違規", correct:false, explain:"不是違規。問題是效率。"},
        {id:"B", text:"花兩個 tempo 在同一顆棋子，其他棋子仍沒發展", correct:true, explain:"對。除非第二次移動帶來具體戰術，不然通常會落後發展。"},
        {id:"C", text:"騎士不能到 g5", correct:false, explain:"可以。從 f3 到 g5 是合法騎士步。"},
        {id:"D", text:"王因此永久不能易位", correct:false, explain:"馬的這些走法不會直接取消王車易位權。"}
      ]
    },

    {
      id:"M5-Q01", module:"M5", title:"壞象：先看自己的兵",
      type:"mcq",
      fen:"4k3/8/8/8/3P4/4P3/8/2B1K3 w - - 0 1",
      prompt:"白象在 c1，自己的 d4、e3 兵限制它。這隻象現在怎麼評價最合理？",
      choices:[
        {id:"A", text:"偏壞象：活動空間被自己的同色兵限制", correct:true, explain:"對。『壞』不是說棋子本身變弱，而是目前可用斜線很少。"},
        {id:"B", text:"好象：因為它還沒被吃", correct:false, explain:"好壞象主要看活動性和兵結構，不是看是否還活著。"},
        {id:"C", text:"無法判斷，象永遠都一樣強", correct:false, explain:"象的實際價值會受兵結構與開放斜線大幅影響。"},
        {id:"D", text:"壞象：因為它站在 c1", correct:false, explain:"位置本身不是原因；限制它的是自己的兵。"}
      ]
    },
    {
      id:"M5-Q02", module:"M5", title:"開放線給誰用",
      type:"mcq",
      fen:"3r2k1/8/8/8/8/8/8/3R2K1 w - - 0 1",
      prompt:"d-file 上沒有兵，形成一條開放線。哪種棋子最喜歡佔據這種直線？",
      choices:[
        {id:"A", text:"車（Rook）", correct:true, explain:"對。車沿直線活動，開放 file 能最大化它的射程。"},
        {id:"B", text:"騎士", correct:false, explain:"騎士不靠直線射程，所以開放 file 對它不是核心資源。"},
        {id:"C", text:"兵", correct:false, explain:"兵反而會堵住 file。"},
        {id:"D", text:"王", correct:false, explain:"王在殘局可很活躍，但『搶開放 file』主要是車的任務。"}
      ]
    },
    {
      id:"M5-Q03", module:"M5", title:"騎士的好據點",
      type:"mcq",
      fen:"6k1/2p3p1/8/4N3/3P1P2/8/8/6K1 w - - 0 1",
      prompt:"白馬在 e5，有自己的 d4、f4 兵支持，而且黑方沒有兵能把它趕走。這種格子有什麼特點？",
      choices:[
        {id:"A", text:"前哨站／outpost：安全、深入、難被兵趕走", correct:true, explain:"對。騎士特別喜歡這種穩定中心格。"},
        {id:"B", text:"一定是壞位置，因為在中心", correct:false, explain:"相反，騎士通常喜歡中心，因為能控制更多格。"},
        {id:"C", text:"只有皇后能使用這種格子", correct:false, explain:"任何棋子都能占格，但 outpost 對騎士尤其有價值。"},
        {id:"D", text:"這叫王車易位", correct:false, explain:"完全不同的概念。"}
      ]
    },
    {
      id:"M5-Q04", module:"M5", title:"弱格為什麼弱",
      type:"mcq",
      fen:"6k1/8/2p1p3/8/4N3/8/8/6K1 w - - 0 1",
      prompt:"黑兵在 c6、e6。中間的 d6 沒有黑兵能再用兵去控制。為什麼 d6 可能成為弱格？",
      choices:[
        {id:"A", text:"因為 d6 是深色格", correct:false, explain:"顏色不是核心。"},
        {id:"B", text:"黑兵結構已經讓它難以用兵驅趕進駐 d6 的白子", correct:true, explain:"對。弱格常指對手可以占據，而你很難用兵把它趕走。"},
        {id:"C", text:"因為 d6 離王太遠", correct:false, explain:"弱格概念主要看兵能否控制，不是單看距離。"},
        {id:"D", text:"所有沒有兵的格子都是弱格", correct:false, explain:"不是。很多空格完全不弱，關鍵是能否被有效控制和利用。"}
      ]
    },

    {
      id:"M6-Q01", module:"M6", title:"兩王面對面",
      type:"mcq",
      fen:"8/4k3/8/4K3/8/8/8/8 w - - 0 1",
      prompt:"兩個王中間隔一格正面相對。這個殘局概念叫什麼？",
      choices:[
        {id:"A", text:"對王／opposition", correct:true, explain:"對。誰被迫先讓開，常會失去關鍵格。"},
        {id:"B", text:"雙攻", correct:false, explain:"雙攻是同時攻擊兩個目標。"},
        {id:"C", text:"牽制", correct:false, explain:"牽制需要前後目標在同一直線。"},
        {id:"D", text:"兵鏈", correct:false, explain:"這裡沒有兵鏈。"}
      ]
    },
    {
      id:"M6-Q02", module:"M6", title:"殘局裡王是戰鬥棋子",
      type:"mcq",
      fen:"8/4k3/8/8/8/4P3/4K3/8 w - - 0 1",
      prompt:"盤上大部分棋子都交換掉了。白方通常應如何看待自己的王？",
      choices:[
        {id:"A", text:"仍然躲在後面，永遠不要靠近中心", correct:false, explain:"這是開局常見安全觀念，但殘局不同。"},
        {id:"B", text:"把王當成主動戰鬥棋子，往中心與兵靠近", correct:true, explain:"對。殘局王的活動性非常重要。"},
        {id:"C", text:"王只能守兵，不能攻擊", correct:false, explain:"王可以攻擊並吃子，只要不走進被攻擊格。"},
        {id:"D", text:"王的位置不再重要", correct:false, explain:"恰恰相反，殘局王的位置往往決定勝負。"}
      ]
    },
    {
      id:"M6-Q03", module:"M6", title:"兵能不能跑掉",
      type:"mcq",
      fen:"8/8/8/2P4k/8/8/8/4K3 w - - 0 1",
      prompt:"白兵在 c5，黑王在 h5，白方走。只看『方格規則』的直覺，黑王來得及抓到這顆兵嗎？",
      choices:[
        {id:"A", text:"大致來不及；黑王在兵升變方格之外", correct:true, explain:"對。畫一個從兵到升變格的正方形，黑王不在裡面時通常追不上。"},
        {id:"B", text:"一定來得及，因為王比兵強", correct:false, explain:"王雖強，但距離太遠時仍追不上即將升變的兵。"},
        {id:"C", text:"兵不能自己升變", correct:false, explain:"兵到最後一排會升變。"},
        {id:"D", text:"只有有車時才能判斷", correct:false, explain:"這是純王兵殘局就能用的快速判斷法。"}
      ]
    },
    {
      id:"M6-Q04", module:"M6", title:"車放在通路兵後面",
      type:"mcq",
      fen:"r5k1/8/4P3/8/8/8/8/4R1K1 w - - 0 1",
      prompt:"白兵在 e6，白車在 e1 從後方支持它。這符合哪個常見車兵殘局原則？",
      choices:[
        {id:"A", text:"車通常喜歡放在通路兵後方", correct:true, explain:"對。兵往前走時，後方車的射程不會被自己的兵越來越堵住。"},
        {id:"B", text:"車應永遠放在兵前面", correct:false, explain:"前面的車常會被自己的兵限制，而且容易被王攻擊。"},
        {id:"C", text:"車的位置完全無所謂", correct:false, explain:"車的活動性是車兵殘局核心。"},
        {id:"D", text:"只有皇后能支援通路兵", correct:false, explain:"車非常擅長從後方支援兵。"}
      ]
    },

    {
      id:"M7-Q01", module:"M7", title:"別只算自己的好棋",
      type:"mcq",
      fen:"6k1/5ppp/8/7Q/2B5/8/8/6K1 w - - 0 1",
      prompt:"你找到一手看起來很強的將軍。下一步正確做法是什麼？",
      choices:[
        {id:"A", text:"立刻走，因為將軍一定最好", correct:false, explain:"將軍只是候選著，不保證最好。"},
        {id:"B", text:"計算對手最強的回應，再看自己下一個強制著", correct:true, explain:"對。計算不是『我想怎麼走』，而是『對手最佳抵抗後還成立嗎』。"},
        {id:"C", text:"只看對手最差的回應", correct:false, explain:"這會讓你高估自己的攻擊。"},
        {id:"D", text:"如果看起來漂亮就不用算", correct:false, explain:"漂亮不等於正確。"}
      ]
    },
    {
      id:"M7-Q02", module:"M7", title:"候選著的高效率順序",
      type:"mcq",
      fen:"4k3/8/8/8/8/8/4Q3/4R1K1 w - - 0 1",
      prompt:"局面可能有戰術時，最常用的高效率搜尋順序是哪個？",
      choices:[
        {id:"A", text:"將軍 → 吃子 → 威脅", correct:true, explain:"對。英文常縮寫 CCT：Checks, Captures, Threats。"},
        {id:"B", text:"兵步 → 王步 → 邊線棋", correct:false, explain:"沒有這種通用優先級。"},
        {id:"C", text:"從最漂亮的棋開始", correct:false, explain:"美感不是搜尋準則。"},
        {id:"D", text:"把所有合法走法平均算一遍", correct:false, explain:"太慢，也浪費計算資源。"}
      ]
    },
    {
      id:"M7-Q03", module:"M7", title:"先插一手再回應",
      type:"mcq",
      fen:"4k3/8/8/8/8/8/3qQ3/4K3 w - - 0 1",
      prompt:"對手剛攻擊你的皇后，但你發現可以先下一個強制將軍，再處理皇后。這種『中間插一手』的想法叫什麼？",
      choices:[
        {id:"A", text:"中間著（zwischenzug / intermediate move）", correct:true, explain:"對。不要自動回應對手威脅；先檢查自己有沒有更強的強制著。"},
        {id:"B", text:"王車易位", correct:false, explain:"不是王與車的特殊走法。"},
        {id:"C", text:"兵鏈", correct:false, explain:"不是兵結構。"},
        {id:"D", text:"和棋", correct:false, explain:"與結果無關。"}
      ]
    },
    {
      id:"M7-Q04", module:"M7", title:"什麼時候停止往下算",
      type:"mcq",
      fen:"6k1/8/8/8/8/8/5Q2/6K1 w - - 0 1",
      prompt:"計算一條變化時，什麼時候比較合理先停下來評估？",
      choices:[
        {id:"A", text:"只算自己一手就停", correct:false, explain:"通常太短，容易忽略對手直接反擊。"},
        {id:"B", text:"直到雙方強制著大致結束、局面變安靜，再評估結果", correct:true, explain:"對。這叫算到 quiet position，再比較物質、王安全與棋子活動性。"},
        {id:"C", text:"一定要算到將死", correct:false, explain:"很多局面沒有將死線，不需要無限算。"},
        {id:"D", text:"只要看到自己吃到兵就停", correct:false, explain:"對手可能下一手吃更大的棋。"}
      ]
    },

    {
      id:"M8-Q01", module:"M8", title:"領先物質時的交換",
      type:"mcq",
      fen:"6k1/4q3/8/8/8/8/4Q3/4R1K1 w - - 0 1",
      prompt:"白方比黑方多一台車，而且沒有直接被將死的危險。若能安全交換皇后，通常怎麼看？",
      choices:[
        {id:"A", text:"通常有利，因為減少黑方反攻機會，讓多出的車更有價值", correct:true, explain:"對。領先物質時，安全簡化局面通常是好方向。"},
        {id:"B", text:"一定不好，高手從不換后", correct:false, explain:"沒有這種原則。交換是否好取決於局面與剩餘物質。"},
        {id:"C", text:"只要能換就一定換，完全不用計算", correct:false, explain:"仍要確認交換後沒有戰術或殘局陷阱。"},
        {id:"D", text:"皇后價值低於車，所以不能換", correct:false, explain:"皇后通常約 9 分，車約 5 分；而且這題談的是雙方皇后互換。"}
      ]
    },
    {
      id:"M8-Q02", module:"M8", title:"王安全比貪兵重要",
      type:"mcq",
      fen:"r1bqk2r/ppp2ppp/2n2n2/3pp3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
      prompt:"白王還在 e1，已經可以短易位。旁邊同時有一顆看似能吃的小兵。沒有戰術保證時，通常優先什麼？",
      choices:[
        {id:"A", text:"先完成王安全與發展", correct:true, explain:"對。開局多數情況下，安全與發展比貪一顆邊兵更重要。"},
        {id:"B", text:"看到兵一定先吃", correct:false, explain:"貪兵常會浪費 tempo 或打開對手攻擊。"},
        {id:"C", text:"永遠不要王車易位", correct:false, explain:"易位是非常常見的王安全手段。"},
        {id:"D", text:"把皇后搬到邊線", correct:false, explain:"通常沒有必要，也可能拖慢發展。"}
      ]
    },
    {
      id:"M8-Q03", module:"M8", title:"車殘局：主動比死守重要",
      type:"mcq",
      fen:"6k1/7p/8/8/8/8/P7/R5K1 w - - 0 1",
      prompt:"進入車殘局後，你的車目前在 a1。一般來說，最重要的方向是哪個？",
      choices:[
        {id:"A", text:"讓車保持主動，攻兵、切王、從側後方活動", correct:true, explain:"對。車殘局非常重視活動性，死守往往比少一兵更危險。"},
        {id:"B", text:"把車鎖死在自己兵旁邊永遠不動", correct:false, explain:"被動車常讓對手王與車自由改善位置。"},
        {id:"C", text:"只看自己多幾顆兵", correct:false, explain:"車的活動性常能抵消一顆兵的差距。"},
        {id:"D", text:"車殘局不需要王", correct:false, explain:"王同樣非常重要。"}
      ]
    },
    {
      id:"M8-Q04", module:"M8", title:"落子前最後 5 秒",
      type:"mcq",
      fen:"4k3/8/8/8/8/8/3q4/4K3 w - - 0 1",
      prompt:"你已經選好下一手。落子前最值得做的快速 blunder check 是什麼？",
      choices:[
        {id:"A", text:"再看一次：對手有沒有將軍、吃子、直接威脅", correct:true, explain:"對。這個 3–5 秒習慣能消滅大量低級失誤。"},
        {id:"B", text:"想像自己贏棋後的局面", correct:false, explain:"沒有幫助，反而容易分心。"},
        {id:"C", text:"重新把整盤從第一手算一次", correct:false, explain:"太慢，不實際。"},
        {id:"D", text:"只確認自己的棋走得好看", correct:false, explain:"外觀不是安全檢查。"}
      ]
    }
  ]
};\n\n
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
  {code:"W2",title:"以為王可以吃任何貼身棋子",text:"王能吃棋，但目的格必須沒有被敵方棋子控制。"},
  {code:"W3",title:"那 Bxf7+ 呢？",text:"Bxf7+ 也是將軍，而且黑王不能 Kxf7，因為 h5 的白后保護 f7；但它不是將死。黑王仍可走 Ke7。Qxf7# 的差別是皇后站在 f7 時同時控制 e7、d7 等逃生格，把黑王真正封死。"}
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

window.CHESS_COURSE.modules.push(
  {id:"M12", title:"診斷・難題", subtitle:"不提示、不判分；用你的實際選擇診斷弱點"}
);

window.CHESS_COURSE.questions.push(
{
 id:"M12-Q01",alias:"D1",module:"M12",difficulty:"診斷",title:"D1｜只走最佳第一手",
 type:"diagnostic",
 fen:"r1bqrk2/1pp1np2/p3pn2/3p2N1/1B3P2/NP1BP2P/P1PPQ3/R3K1R1 w - - 0 1",
 prompt:"白方走。不要提示、不要看答案、不要用引擎。給自己最多 3 分鐘，只走你認為最強的一手。",
 note:"這題頁面不會告訴你對錯。走完後，把顯示的 D1 答案代碼與你的理由貼回 ChatGPT。"
}
);\n\n
(function(){
const C=window.CHESS_COURSE;
const old=C.questions.findIndex(q=>q.id==="M12-Q01");
if(old>=0) C.questions.splice(old,1);

const mod=C.modules.find(m=>m.id==="M12");
if(mod){
  mod.title="實戰診斷";
  mod.subtitle="直接下棋 → 分支追問 → 自動診斷 → 完整詳解";
}

C.questions.push(
{
 id:"M12-Q01",alias:"D1",module:"M12",difficulty:"難",title:"D1｜安靜著與強制將殺",
 type:"diagnostic",
 fen:"r1bqrk2/1pp1np2/p3pn2/3p2N1/1B3P2/NP1BP2P/P1PPQ3/R3K1R1 w - - 0 1",
 intro:"白方走。不要先找題型，只找你認為最強的棋。你必須一路把變化走完。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手是什麼？",
   expected:{from:"e2",to:"h5"},
   after:[{from:"f8",to:"g8"}],
   afterText:"黑方以 ...Kg8 回應。現在繼續找白方最強的一手。",
   success:"很好。你沒有被『一定要先將軍』綁住，而是找到安靜的 Qh5！。它把黑王逼進一個強制網。",
   alternatives:[
    {from:"g5",to:"e6",title:"Nxe6+：有將軍，但太早滿足",tag:"強迫著偏誤",pros:"你有先找 check，方向沒錯。",cons:"這手沒有利用完整的將殺幾何；本局存在更強的強制勝法。",coach:"找 checks 之後，再多問一次：有沒有一手『不是將軍，但下一手無法防』？"},
    {from:"g5",to:"f7",title:"Nxf7：看到雙攻／攻后",tag:"物質偏誤",pros:"馬到 f7 會碰到 d8 皇后，戰術感是有的。",cons:"你把『贏后』放在『將死』之前。若對方王已暴露，優先掃描 mating net。",coach:"攻王局面先比較：將死 > 贏后 > 贏小子。"},
    {from:"b4",to:"e7",title:"Bxe7+：強制但不夠強",tag:"check tunnel vision",pros:"你有注意 pinned knight 和將軍。",cons:"第一個看到的 check 不一定最好；它沒有像 Qh5 一樣把黑王的逃生格一起封死。",coach:"每找到一個 check，至少再找一個候選著再比較。"}
   ],
   other:{title:"其他走法",tag:"候選著產生",pros:"至少你在找主動手段。",cons:"這個局面有強制將殺；若完全沒把 Qh5 列入候選，代表攻王幾何掃描還不完整。",coach:"依序掃：王周圍逃生格 → 我方 queen/rook/bishop 的線 → knight 控制格 → quiet threat。"}
  },
  {
   prompt:"第 2 手：黑王已到 g8。白方怎麼繼續？",
   expected:{from:"h5",to:"h8"},
   after:[{from:"g8",to:"h8"}],
   afterText:"黑王被迫 Kxh8。現在找最後一手。",
   success:"Qh8+！這一步是皇后犧牲。重點不是皇后的分值，而是它把黑王強迫到 h8。",
   alternatives:[
    {from:"h5",to:"f7",title:"Qxf7+：自然將軍",tag:"過早兌現",pros:"仍是強制著。",cons:"你急著吃 f7，卻錯過把王『拖到指定格』的皇后犧牲。",coach:"將殺組合常需要先控制 king placement，而不是先收 material。"}
   ],
   other:{title:"其他走法",tag:"計算中斷",pros:"你已找到第一手的攻擊概念。",cons:"若第二手無法繼續，代表你可能只看到第一手效果，沒有在落子前算完整條強制線。",coach:"在攻王題裡，第一手落下前至少問：對方最佳回應後，我下一個 forcing move 是什麼？"}
  },
  {
   prompt:"第 3 手：黑王在 h8。白方一手結束。",
   expected:{from:"g5",to:"f7"},
   success:"Nxf7#。完成。前兩手皇后不是在『贏東西』，而是在安排黑王的位置，最後由騎士封死。",
   alternatives:[],
   other:{title:"其他走法",tag:"終局圖像辨識",pros:"你已經算到第三層。",cons:"最後一步若看不到 Nxf7#，通常是沒有完整檢查 king escape squares。",coach:"將軍後逐格檢查：王能逃哪裡？能吃掉將軍子嗎？能擋嗎？能由別子吃掉嗎？"}
  }
 ],
 report:{
  strength:"如果你能完整找到 Qh5 → Qh8+ → Nxf7#，代表你的 forcing-line calculation 與攻王幾何已經不錯。",
  focus:"若第一手卡住，重點練 quiet move；若第二或第三手卡住，重點是『第一手前就多算兩層』。",
  rule:"高效率搜尋：先找所有 checks，但不要停在 checks；再找 forcing threats，尤其是能限制王逃生格的 quiet move。",
  line:"Qh5! Kg8 → Qh8+! Kxh8 → Nxf7#"
 }
},
{
 id:"M12-Q02",alias:"D2",module:"M12",difficulty:"難",title:"D2｜被攻擊時不要自動防守",
 type:"diagnostic",
 fen:"r3r1k1/pp3p1p/5Q2/4q3/1P3N2/2BB2P1/1P5P/R6K w - - 0 1",
 intro:"白后正在被黑后攻擊。白方走。不要因為被攻擊就自動撤退，先找全盤最強的一手。",
 stages:[
  {
   prompt:"第 1 手：白方最強的一手？",
   expected:{from:"d3",to:"h7"},
   after:[{from:"g8",to:"h7"}],
   afterText:"黑王走 Kxh7。繼續。",
   success:"Bxh7+！你正確忽略了『皇后被攻擊』這件事，因為你有更強的 forcing move。",
   alternatives:[
    {from:"f6",to:"e5",title:"Qxe5：先處理被攻擊的皇后",tag:"威脅固定",pros:"你看到自己的皇后被攻擊，而且 Qxe5 還能吃掉對方皇后。",cons:"但這局存在直接將殺。只要有 forced mate，material concern 都是次要。",coach:"每次重要棋子被攻擊時，不要立刻回應；先做一次 CCT：Checks, Captures, Threats。"},
    {from:"f4",to:"g6",title:"Ng6：靠近王，但順序錯",tag:"move order",pros:"你有注意到 knight 對王翼的威脅。",cons:"真正關鍵是先用 Bxh7+ 強迫王的位置；順序錯就讓對手有防守時間。",coach:"戰術不只看『做什麼』，還要看『先做哪個』。"}
   ],
   other:{title:"其他走法",tag:"防守反射",pros:"你可能在處理皇后安全或一般發展。",cons:"局面有立即 forced mate；若沒先找 Bxh7+，代表對手威脅讓你的注意力被綁架。",coach:"自己的棋被攻擊時，先問：我能不能用更強的將軍迫使對手沒有時間吃它？"}
  },
  {
   prompt:"第 2 手：黑王在 h7。白方如何繼續強迫？",
   expected:{from:"f6",to:"f7"},
   after:[{from:"h7",to:"h8"}],
   afterText:"黑王選擇 ...Kh8。找最後一手。",
   success:"Qxf7+。這是第二個 forcing move；你沒有停下來收材料，而是繼續逼王。",
   alternatives:[],
   other:{title:"其他走法",tag:"forcing line 續航",pros:"你找到第一手犧牲。",cons:"若這裡停下，通常表示你在犧牲前沒有先算到『犧牲之後靠什麼繼續』。",coach:"任何 sacrifice 在落子前都要回答：對方接受後，我的下一個 forcing move 是什麼？"}
  },
  {
   prompt:"第 3 手：黑王到了 h8。白方一手將死。",
   expected:{from:"f4",to:"g6"},
   success:"Ng6#。完成。這條線的核心是 bishop sacrifice → queen forcing check → knight mate。",
   alternatives:[],
   other:{title:"其他走法",tag:"棋子協同",pros:"你已經逼王到角落。",cons:"若沒看到 Ng6#，通常是只追蹤 queen，沒有重新掃描 knight 的控制格。",coach:"每次王被逼到新位置，都重新掃一次所有己方棋子，而不是只看剛剛走的那顆。"}
  }
 ],
 branches:[
  "若 1...Kf8，白方直接 2.Ng6#。",
  "若 1...Kxh7 2.Qxf7+ Kh6，則 3.Qg6#。",
  "若 1...Kxh7 2.Qxf7+ Kh8，則 3.Ng6#。",
  "若 1...Kxh7 2.Qxf7+ Qg7，則 3.Qxg7#。"
 ],
 report:{
  strength:"完整解出代表你能在自己皇后受攻時仍優先計算 forcing moves。",
  focus:"最常見弱點是『被攻擊就自動反應』，以及 sacrifice 只算第一手、沒有算接受後的續手。",
  rule:"被攻擊 ≠ 必須處理。先問：我有沒有 check、強制 capture、或 mate threat，讓對手根本沒時間執行威脅？",
  line:"Bxh7+! Kxh7 → Qxf7+ Kh8 → Ng6#"
 }
},
{
 id:"M12-Q03",alias:"D3",module:"M12",difficulty:"深",title:"D3｜不要自動升后",
 type:"diagnostic",
 fen:"5r2/3R1P1k/7p/8/q7/1p6/PP6/K5Q1 w - - 0 1",
 intro:"白方走。這題有一個很不自然的決定。不要假設『升變一定選皇后』。",
 stages:[
  {
   prompt:"第 1 手：白方如何開始強制線？",
   expected:{from:"g1",to:"g8"},
   after:[{from:"f8",to:"g8"}],
   afterText:"黑車被迫 Rxg8。現在白兵到達 f8 時，你必須選升變棋子。",
   success:"Qg8+！皇后犧牲把 f8 清空，讓 f7 兵可以升變。",
   alternatives:[
    {from:"d7",to:"h7",title:"Rh7+：看起來直接",tag:"表面將軍",pros:"你有看到 rook 與 king 的接近。",cons:"它沒有像 Qg8+ 一樣強迫黑車離開 f8，因此沒有創造下一手升變的條件。",coach:"有時第一手的目的不是將死，而是『清除某一格』。"}
   ],
   other:{title:"其他走法",tag:"幾何／清格",pros:"你在找將軍或升變。",cons:"這題關鍵是先用 Qg8+ 把黑車從 f8 拉走。",coach:"看到即將升變的兵時，先問：升變格被誰佔住？能不能用 forcing move 把它引開？"}
  },
  {
   prompt:"第 2 手：f7 兵走到 f8。升變成哪一顆棋？",
   expected:{from:"f7",to:"f8",promotion:"n"},
   after:[{from:"h7",to:"h8"}],
   afterText:"黑王走 ...Kh8。最後一手。",
   success:"f8=N+！關鍵是升馬才會立刻攻擊 h7 的黑王。升后反而沒有 check。",
   alternatives:[
    {from:"f7",to:"f8",promotion:"q",title:"f8=Q：最自然，但錯",tag:"自動升后",pros:"皇后名義價值最高。",cons:"問題是 queen 在 f8 並不攻擊 h7，所以不是 forcing check；你給了黑方喘息。",coach:"升變不是選『最貴』，而是選『當下功能最強』。"},
    {from:"f7",to:"f8",promotion:"r",title:"f8=R：也沒有將軍",tag:"升變功能",pros:"車很強。",cons:"f8 的 rook 不攻擊 h7。",coach:"先看每種 promotion 對 king 的立即控制格。"},
    {from:"f7",to:"f8",promotion:"b",title:"f8=B：也沒有將軍",tag:"升變功能",pros:"象能控制長斜線。",cons:"從 f8 的 bishop 也不攻擊 h7。",coach:"只有 knight 從 f8 可以攻擊 h7。"}
   ],
   other:{title:"其他走法",tag:"underpromotion awareness",pros:"你知道要推兵。",cons:"若沒有比較 Q/R/B/N 的功能，就容易機械式升后。",coach:"promotion 前固定做 2 秒檢查：Q、R、B、N 哪個會 check／mate／fork？"}
  },
  {
   prompt:"第 3 手：黑王在 h8。白方一手將死。",
   expected:{from:"d7",to:"h7"},
   success:"Rh7#。完成。這題的精華是 Q sacrifice → knight underpromotion check → rook mate。",
   alternatives:[],
   other:{title:"其他走法",tag:"收尾幾何",pros:"你已找到最難的 underpromotion。",cons:"最後若沒看到 Rh7#，代表強制線末端還需要更完整地掃 rook lines。",coach:"每一個 check 後都重新列出王的所有逃生格，再找能一次封死的 long-range piece。"}
  }
 ],
 report:{
  strength:"能獨立找到 f8=N+，代表你不會被『棋子價值』的直覺綁架，能根據功能選 promotion。",
  focus:"若你升后，弱點不是不懂規則，而是 decision automation：把常見選項當成預設答案。",
  rule:"升變前永遠比較四種棋：哪個能 check？哪個能控制逃生格？哪個能形成 fork？",
  line:"Qg8+! Rxg8 → f8=N+! Kh8 → Rh7#"
 }
}
);
})();
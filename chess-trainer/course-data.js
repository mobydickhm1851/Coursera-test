window.CHESS_COURSE = {
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
};
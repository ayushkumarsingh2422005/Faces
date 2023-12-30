import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <>
{/*       
<div class="main"></div>
<div class="footer">
  <div class="bubbles">
    <div class="bubble" style="--size:4.439619219959469rem; --distance:6.912262781343278rem; --position:30.180978346089468%; --time:2.9280557905151654s; --delay:-2.2349515494145202s;"></div>
    <div class="bubble" style="--size:5.873965559929874rem; --distance:8.02881498662121rem; --position:12.313442301630207%; --time:2.1145381100738216s; --delay:-2.6380916752924635s;"></div>
    <div class="bubble" style="--size:4.042316372860669rem; --distance:8.284467341708833rem; --position:52.02999516591822%; --time:2.4378431276670165s; --delay:-3.9181616988075474s;"></div>
    <div class="bubble" style="--size:5.979430293925995rem; --distance:7.65472621249238rem; --position:90.48428196661851%; --time:3.2850136940098147s; --delay:-3.3251754826196147s;"></div>
    <div class="bubble" style="--size:5.762604231324378rem; --distance:7.418937689843596rem; --position:50.70608601027856%; --time:2.906388446163541s; --delay:-2.0540103793957787s;"></div>
    <div class="bubble" style="--size:5.47851880696142rem; --distance:8.739511234900654rem; --position:12.750971094068714%; --time:3.4157445907360287s; --delay:-3.37039546954467s;"></div>
    <div class="bubble" style="--size:2.593054413174044rem; --distance:8.790521726086158rem; --position:76.13350734434712%; --time:2.7558687762593754s; --delay:-2.3904354403792816s;"></div>
    <div class="bubble" style="--size:4.964367865070139rem; --distance:9.791152768194555rem; --position:50.157930738907766%; --time:3.556074550205758s; --delay:-2.703938511585637s;"></div>
    <div class="bubble" style="--size:4.457823277417897rem; --distance:6.939423552319177rem; --position:94.04979120124126%; --time:3.4326387476004756s; --delay:-3.2934508215813505s;"></div>
    <div class="bubble" style="--size:5.9887299195993275rem; --distance:6.385980253074021rem; --position:56.41582669757517%; --time:2.836727616625021s; --delay:-2.8001235757166794s;"></div>
    <div class="bubble" style="--size:4.382515708047931rem; --distance:9.587948373881693rem; --position:66.4958386910474%; --time:2.9647462896535646s; --delay:-2.7258135098681793s;"></div>
    <div class="bubble" style="--size:2.3926020837083346rem; --distance:9.589182675714962rem; --position:10.554480921191544%; --time:3.031717126756443s; --delay:-2.5517523052544218s;"></div>
    <div class="bubble" style="--size:2.4441398959331657rem; --distance:6.824891295692902rem; --position:12.234811820435809%; --time:3.304841454905525s; --delay:-2.739568905625865s;"></div>
    <div class="bubble" style="--size:2.709638991902458rem; --distance:7.039897056857555rem; --position:66.62856775657069%; --time:2.2760714957600823s; --delay:-2.359144367381357s;"></div>
    <div class="bubble" style="--size:3.8252093689371645rem; --distance:8.88434881287176rem; --position:51.2841491482753%; --time:2.0498958193014714s; --delay:-3.449955520247511s;"></div>
    <div class="bubble" style="--size:3.1078433862157944rem; --distance:6.752426533679617rem; --position:10.13888322636136%; --time:3.4028600757459904s; --delay:-3.4795413443727026s;"></div>
    <div class="bubble" style="--size:3.4559051168397703rem; --distance:7.859426780230759rem; --position:17.97232430856993%; --time:3.712204837585902s; --delay:-3.7766347054540863s;"></div>
    <div class="bubble" style="--size:3.888717771752445rem; --distance:9.162434730541403rem; --position:10.71496778637717%; --time:3.8714096560062354s; --delay:-2.570689084084188s;"></div>
    <div class="bubble" style="--size:4.930027062101044rem; --distance:8.521335281112924rem; --position:42.031760385361075%; --time:2.5190752878272256s; --delay:-3.8516082186426654s;"></div>
    <div class="bubble" style="--size:5.884021445904457rem; --distance:8.736072887735038rem; --position:45.54954703860409%; --time:3.974942958411052s; --delay:-2.8813733611029098s;"></div>
    <div class="bubble" style="--size:3.8395501575213205rem; --distance:9.871228670074302rem; --position:10.03605472771348%; --time:2.8026582482340716s; --delay:-3.273360705697738s;"></div>
    <div class="bubble" style="--size:2.9229645716350587rem; --distance:7.150637537771371rem; --position:56.00563284210992%; --time:3.713064461116352s; --delay:-2.6693418054616793s;"></div>
    <div class="bubble" style="--size:4.4449305880167875rem; --distance:7.563701953321177rem; --position:44.1298841713496%; --time:2.9575375140034006s; --delay:-2.553367925876517s;"></div>
    <div class="bubble" style="--size:4.739361560132048rem; --distance:6.616134552137589rem; --position:32.841398650770465%; --time:3.2849714411650854s; --delay:-2.1798016833309624s;"></div>
    <div class="bubble" style="--size:3.996206188077913rem; --distance:9.63132834555248rem; --position:22.50530870675272%; --time:2.1137313013111587s; --delay:-2.210608561030441s;"></div>
    <div class="bubble" style="--size:5.457197564138945rem; --distance:7.2545311897838465rem; --position:14.217010674273173%; --time:3.3188855239499686s; --delay:-3.8737407734111873s;"></div>
    <div class="bubble" style="--size:5.004469169875727rem; --distance:8.484299036451013rem; --position:53.154702617969384%; --time:2.6028958154019866s; --delay:-2.444977747775991s;"></div>
    <div class="bubble" style="--size:5.488367398501537rem; --distance:9.861286671216007rem; --position:69.03207621022918%; --time:3.7783788973043193s; --delay:-2.8739567102999777s;"></div>
    <div class="bubble" style="--size:4.453920873707579rem; --distance:6.323628854755693rem; --position:44.922414894382044%; --time:2.595338147761854s; --delay:-3.452234389231687s;"></div>
    <div class="bubble" style="--size:4.4070560631486515rem; --distance:6.760688340763697rem; --position:68.58824620333606%; --time:2.3656512993636705s; --delay:-3.84239874627692s;"></div>
    <div class="bubble" style="--size:3.418681442431029rem; --distance:7.190956587211431rem; --position:42.150721904437404%; --time:2.598453384915573s; --delay:-2.6963735744475392s;"></div>
    <div class="bubble" style="--size:4.025121011096581rem; --distance:6.07709591898396rem; --position:17.514123449801254%; --time:3.221581143176078s; --delay:-3.4919436189850637s;"></div>
    <div class="bubble" style="--size:5.132841546355389rem; --distance:8.276020005011084rem; --position:85.73640099746918%; --time:2.1618799496167855s; --delay:-3.804495312309829s;"></div>
    <div class="bubble" style="--size:3.321077657494042rem; --distance:9.600027717793441rem; --position:63.72982136958586%; --time:3.5927254429969007s; --delay:-3.20950980390095s;"></div>
    <div class="bubble" style="--size:5.858503654590409rem; --distance:8.809231221521522rem; --position:43.31544314606999%; --time:3.057604853896899s; --delay:-2.4232656369095595s;"></div>
    <div class="bubble" style="--size:4.970532922884775rem; --distance:9.542681892487494rem; --position:67.06348989950402%; --time:3.5314165363380217s; --delay:-3.5193633155764465s;"></div>
    <div class="bubble" style="--size:5.730191664337229rem; --distance:7.281912562988685rem; --position:102.49368552430475%; --time:2.265753636269228s; --delay:-3.8707042256053215s;"></div>
    <div class="bubble" style="--size:5.824656117127447rem; --distance:6.718210321408707rem; --position:51.689984684665575%; --time:3.8309102694143955s; --delay:-2.5215347217892163s;"></div>
    <div class="bubble" style="--size:2.1237371851601052rem; --distance:7.1159338993147rem; --position:98.74299960825257%; --time:3.292865055989842s; --delay:-2.073902932436451s;"></div>
    <div class="bubble" style="--size:2.003805481299075rem; --distance:9.430020724994815rem; --position:27.99587191016971%; --time:3.8138262027791505s; --delay:-3.077696126945792s;"></div>
    <div class="bubble" style="--size:2.1340972954620474rem; --distance:9.818292836151807rem; --position:43.84833464099815%; --time:2.915435538498584s; --delay:-3.3204945749893677s;"></div>
    <div class="bubble" style="--size:5.620354763425011rem; --distance:7.758216973747613rem; --position:53.72648639408969%; --time:2.5147895159259264s; --delay:-3.1174686609370132s;"></div>
    <div class="bubble" style="--size:4.213488704088438rem; --distance:9.898544302452265rem; --position:11.416969929036302%; --time:3.753940641138328s; --delay:-3.071513965329176s;"></div>
    <div class="bubble" style="--size:3.502306002217722rem; --distance:7.4315603722083505rem; --position:52.720896197698664%; --time:2.6141091765055076s; --delay:-3.8496473171379133s;"></div>
    <div class="bubble" style="--size:4.522273069645123rem; --distance:9.00641324700631rem; --position:56.387850410693034%; --time:3.9913114759537627s; --delay:-2.25627310662546s;"></div>
    <div class="bubble" style="--size:5.740703197727405rem; --distance:7.247498274760919rem; --position:87.34954548416967%; --time:2.333046322577641s; --delay:-3.9725894929752488s;"></div>
    <div class="bubble" style="--size:5.406959080773227rem; --distance:7.966708830854817rem; --position:44.93555200656265%; --time:2.8787597357987953s; --delay:-3.2555779563091125s;"></div>
    <div class="bubble" style="--size:3.226880845211178rem; --distance:8.834507635525988rem; --position:27.187337406143477%; --time:2.654135387605398s; --delay:-3.5801143227844126s;"></div>
    <div class="bubble" style="--size:3.529507145464997rem; --distance:9.593952800389872rem; --position:79.97466664514984%; --time:2.5202945185305485s; --delay:-3.4406397931670583s;"></div>
    <div class="bubble" style="--size:5.202169519032552rem; --distance:8.093974088472677rem; --position:70.99632114179758%; --time:2.16444376467176s; --delay:-2.3814264731609063s;"></div>
    <div class="bubble" style="--size:5.462036118486323rem; --distance:8.98785177335898rem; --position:72.12514044787389%; --time:2.0293684150361893s; --delay:-3.9628566014621844s;"></div>
    <div class="bubble" style="--size:4.258110717813113rem; --distance:9.853409106177097rem; --position:7.069428258218673%; --time:3.407642929484356s; --delay:-3.8735624029492746s;"></div>
    <div class="bubble" style="--size:3.7528706413169637rem; --distance:7.394532097035173rem; --position:25.90186446789516%; --time:2.5950449281395818s; --delay:-3.5409466763851762s;"></div>
    <div class="bubble" style="--size:4.213650712247827rem; --distance:9.427516258885614rem; --position:5.750190538940149%; --time:3.2177432417221628s; --delay:-3.1175081858565004s;"></div>
    <div class="bubble" style="--size:5.475062747856311rem; --distance:9.938082541137542rem; --position:8.077960703806248%; --time:2.186125745722421s; --delay:-3.9330093849629106s;"></div>
    <div class="bubble" style="--size:3.6085965750781233rem; --distance:7.971120804035137rem; --position:65.60942304211282%; --time:2.7403548999810527s; --delay:-2.1428558610836173s;"></div>
    <div class="bubble" style="--size:4.3914698763336215rem; --distance:6.997790673043896rem; --position:69.64312373279132%; --time:2.3400558772644198s; --delay:-2.497796231438727s;"></div>
    <div class="bubble" style="--size:3.8746039341836767rem; --distance:8.05595102134146rem; --position:80.18703121674238%; --time:2.7711735138496376s; --delay:-3.427208202293093s;"></div>
    <div class="bubble" style="--size:2.410656836489915rem; --distance:6.901739621883944rem; --position:18.472191028924584%; --time:2.728811817592554s; --delay:-2.8246824763736913s;"></div>
    <div class="bubble" style="--size:3.718999554887273rem; --distance:7.391558346370795rem; --position:92.78610960835934%; --time:3.698928926062658s; --delay:-2.2826757717813573s;"></div>
    <div class="bubble" style="--size:5.581616447084866rem; --distance:6.443290168952018rem; --position:88.38697002335282%; --time:2.7809068327632644s; --delay:-3.3801112268325015s;"></div>
    <div class="bubble" style="--size:5.258457667843881rem; --distance:6.806771434028478rem; --position:5.07658302756418%; --time:3.646184673909073s; --delay:-2.4063439236712894s;"></div>
    <div class="bubble" style="--size:4.367934914723825rem; --distance:6.213462200293228rem; --position:92.44588756094414%; --time:2.9042095214698107s; --delay:-2.9076175441508756s;"></div>
    <div class="bubble" style="--size:3.671833719001312rem; --distance:9.214372075016165rem; --position:1.629296810558209%; --time:2.1565823171962704s; --delay:-2.322387503593023s;"></div>
    <div class="bubble" style="--size:2.0441709749480053rem; --distance:8.040765600364423rem; --position:62.2736587994805%; --time:2.2021670415236976s; --delay:-3.266071594778861s;"></div>
    <div class="bubble" style="--size:5.052084193995921rem; --distance:7.952713544731753rem; --position:78.97977157278459%; --time:3.929578611121281s; --delay:-3.4426256540832516s;"></div>
    <div class="bubble" style="--size:2.569523532239553rem; --distance:6.565586434489684rem; --position:6.470040270682269%; --time:3.346855300387391s; --delay:-3.803264454026716s;"></div>
    <div class="bubble" style="--size:5.9625023439082705rem; --distance:6.288492219976213rem; --position:14.881095077741787%; --time:3.1323446452255275s; --delay:-3.3465082821726s;"></div>
    <div class="bubble" style="--size:3.8585702373531934rem; --distance:6.806602912429246rem; --position:93.9275300722754%; --time:3.723430403731703s; --delay:-3.8809313274691934s;"></div>
    <div class="bubble" style="--size:3.4296839072259067rem; --distance:9.102214539826047rem; --position:39.10597658000507%; --time:2.5405969369355845s; --delay:-3.2151955888706505s;"></div>
    <div class="bubble" style="--size:3.752443161921536rem; --distance:7.858184153792787rem; --position:49.02366317073394%; --time:3.260303178830173s; --delay:-2.9505828966177985s;"></div>
    <div class="bubble" style="--size:5.496303980311678rem; --distance:8.290339805777116rem; --position:26.74303316445188%; --time:2.086966470272663s; --delay:-2.955709987010076s;"></div>
    <div class="bubble" style="--size:5.3175290322933rem; --distance:6.386846882790433rem; --position:104.33240555099079%; --time:3.451858132518578s; --delay:-3.2424420944163694s;"></div>
    <div class="bubble" style="--size:4.824157033819727rem; --distance:9.24976915920367rem; --position:52.94972169146387%; --time:2.9076424213592555s; --delay:-2.436125223649603s;"></div>
    <div class="bubble" style="--size:5.797299714711908rem; --distance:7.532065225483164rem; --position:3.1327553601702043%; --time:2.0614126839078155s; --delay:-3.8132708046188744s;"></div>
    <div class="bubble" style="--size:2.632513895153899rem; --distance:7.9810155605286806rem; --position:41.4730376208295%; --time:2.7751415836132836s; --delay:-3.0797518539669118s;"></div>
    <div class="bubble" style="--size:4.891792923341652rem; --distance:6.051333994484436rem; --position:80.43164533508883%; --time:2.199094501208035s; --delay:-2.822195699979289s;"></div>
    <div class="bubble" style="--size:5.79909396801838rem; --distance:9.796992497695541rem; --position:34.89254473913432%; --time:3.947648844312272s; --delay:-3.82586557807523s;"></div>
    <div class="bubble" style="--size:4.340930233074615rem; --distance:7.037172909862874rem; --position:76.5786320838578%; --time:3.5391810487254696s; --delay:-2.1514957954531178s;"></div>
    <div class="bubble" style="--size:3.2827842319283205rem; --distance:6.55054682913117rem; --position:-2.757339490349089%; --time:2.8100236073760763s; --delay:-2.77430129194737s;"></div>
    <div class="bubble" style="--size:5.856913541248932rem; --distance:7.1875113729293085rem; --position:100.10712905428993%; --time:3.357181568763642s; --delay:-3.5517629678535796s;"></div>
    <div class="bubble" style="--size:4.766702104429757rem; --distance:7.8385181466291405rem; --position:62.949979177521115%; --time:3.632963235073719s; --delay:-2.4936159700492553s;"></div>
    <div class="bubble" style="--size:3.6767213445068165rem; --distance:7.449078576378946rem; --position:-4.358232803455413%; --time:3.397645219366627s; --delay:-3.1870885234477284s;"></div>
    <div class="bubble" style="--size:3.821183833488976rem; --distance:9.980498846131395rem; --position:79.74876930033204%; --time:3.8877622581552056s; --delay:-2.7272293739960225s;"></div>
    <div class="bubble" style="--size:3.4258223451559795rem; --distance:6.3269467702614115rem; --position:101.1331891240122%; --time:2.159221402884774s; --delay:-2.056704018392436s;"></div>
    <div class="bubble" style="--size:5.382723233413746rem; --distance:6.234562308061081rem; --position:27.91028344576872%; --time:3.669399162968011s; --delay:-2.1894646896750443s;"></div>
    <div class="bubble" style="--size:4.570129114335203rem; --distance:8.644648115130046rem; --position:81.68893866992286%; --time:2.747731983005985s; --delay:-3.030616542213164s;"></div>
    <div class="bubble" style="--size:5.606437792194758rem; --distance:9.202871639042929rem; --position:54.7093533366811%; --time:3.3263656942003323s; --delay:-2.5636969609943203s;"></div>
    <div class="bubble" style="--size:3.8719098980968383rem; --distance:6.216008756727616rem; --position:95.61678790673037%; --time:2.278768007019281s; --delay:-2.0348701010879036s;"></div>
    <div class="bubble" style="--size:4.257497175850931rem; --distance:9.156458553038942rem; --position:22.80013221657782%; --time:2.025046953484929s; --delay:-2.6527140289924596s;"></div>
    <div class="bubble" style="--size:4.7528080355166rem; --distance:7.205981579701053rem; --position:18.354617044832903%; --time:2.4704831310536397s; --delay:-2.5667598870680965s;"></div>
    <div class="bubble" style="--size:4.238626472584704rem; --distance:8.771671993055872rem; --position:23.84445830867373%; --time:3.9502611270882424s; --delay:-2.548255678900324s;"></div>
    <div class="bubble" style="--size:5.111322627523884rem; --distance:8.268442660779314rem; --position:3.0101322495833305%; --time:3.938367720308855s; --delay:-2.90096178084386s;"></div>
    <div class="bubble" style="--size:5.8051445349838255rem; --distance:7.394060063974738rem; --position:101.06405254679726%; --time:2.3186534709774915s; --delay:-2.879959269180374s;"></div>
    <div class="bubble" style="--size:2.8023068517500365rem; --distance:7.719141568960939rem; --position:54.647239759111926%; --time:3.213514208338143s; --delay:-3.7041997422053914s;"></div>
    <div class="bubble" style="--size:5.336319247153164rem; --distance:9.635436011591382rem; --position:102.11909227276445%; --time:2.512673929792586s; --delay:-2.8445717886148567s;"></div>
    <div class="bubble" style="--size:3.5212317944854954rem; --distance:9.067360775651313rem; --position:102.00358743226256%; --time:3.7080720624372927s; --delay:-3.115561599469692s;"></div>
    <div class="bubble" style="--size:2.503190734167645rem; --distance:7.625496281242047rem; --position:79.12282230224511%; --time:2.776068635840074s; --delay:-2.363221778471424s;"></div>
    <div class="bubble" style="--size:3.7733727625376448rem; --distance:9.449656731972937rem; --position:94.63772677791106%; --time:3.7468874200691564s; --delay:-2.4294178621473645s;"></div>
    <div class="bubble" style="--size:3.1918581224324534rem; --distance:6.926837090179009rem; --position:28.091277475062697%; --time:3.1618439880151645s; --delay:-2.780231411025173s;"></div>
    <div class="bubble" style="--size:2.751371755263351rem; --distance:7.499985717637487rem; --position:41.9029976375065%; --time:2.3684988300767786s; --delay:-3.345216972976188s;"></div>
    <div class="bubble" style="--size:3.40305130708475rem; --distance:6.132976050440035rem; --position:51.44193175609062%; --time:2.4838082103109254s; --delay:-3.961440628068389s;"></div>
    <div class="bubble" style="--size:3.031364211788447rem; --distance:9.020382628514593rem; --position:35.06401724580882%; --time:3.54017361377461s; --delay:-3.9958406457989493s;"></div>
    <div class="bubble" style="--size:4.452585530735863rem; --distance:8.873779692546513rem; --position:87.9642563490531%; --time:3.9653476664347598s; --delay:-2.2899901930527036s;"></div>
    <div class="bubble" style="--size:2.9772104621231295rem; --distance:8.331431654535523rem; --position:46.737727048485276%; --time:2.0436529896990954s; --delay:-2.2625363733567694s;"></div>
    <div class="bubble" style="--size:2.5860967665080175rem; --distance:9.546370936440594rem; --position:69.63617871784639%; --time:3.6248027093131947s; --delay:-2.5258417437055485s;"></div>
    <div class="bubble" style="--size:2.014861844978215rem; --distance:6.85183356185662rem; --position:104.95755036015782%; --time:2.0658280263293767s; --delay:-3.102229470962259s;"></div>
    <div class="bubble" style="--size:3.7606282044922636rem; --distance:7.805136468704369rem; --position:62.24130254529973%; --time:2.1890740318107484s; --delay:-3.750465248019427s;"></div>
    <div class="bubble" style="--size:4.699182190959381rem; --distance:8.839259134649804rem; --position:12.154471519653985%; --time:3.4328563560180623s; --delay:-3.2266945965224103s;"></div>
    <div class="bubble" style="--size:3.6100889694072817rem; --distance:6.634672080297043rem; --position:57.33050182880837%; --time:2.178614611420443s; --delay:-2.053688884758943s;"></div>
    <div class="bubble" style="--size:5.693718426675134rem; --distance:6.999909321343244rem; --position:74.92664043610615%; --time:3.2561161864595913s; --delay:-3.018811368044579s;"></div>
    <div class="bubble" style="--size:3.0112134853237302rem; --distance:7.20761659664389rem; --position:64.61542911781481%; --time:3.873151541254938s; --delay:-2.148451893359993s;"></div>
    <div class="bubble" style="--size:3.4578664927887415rem; --distance:7.65775162788789rem; --position:17.551027699327612%; --time:2.715362792786571s; --delay:-3.1675350615824143s;"></div>
    <div class="bubble" style="--size:5.220349313651941rem; --distance:6.734607913356757rem; --position:-2.707753408349598%; --time:2.316815140522721s; --delay:-2.7564178230625442s;"></div>
    <div class="bubble" style="--size:2.1346403374553846rem; --distance:7.457540134025189rem; --position:79.81817986626133%; --time:2.1927708392087824s; --delay:-2.4319379129456857s;"></div>
    <div class="bubble" style="--size:4.780878361525199rem; --distance:9.783614375793475rem; --position:102.95896761886807%; --time:2.20812441755912s; --delay:-3.9344287123786286s;"></div>
    <div class="bubble" style="--size:3.8960678957070485rem; --distance:6.1500613826259904rem; --position:10.103609091052563%; --time:2.355296619027839s; --delay:-3.2574419217997503s;"></div>
    <div class="bubble" style="--size:2.8517626431605203rem; --distance:8.78538758344886rem; --position:-2.0103292524812266%; --time:2.7774698354278473s; --delay:-2.6426804579767857s;"></div>
    <div class="bubble" style="--size:4.108001096509677rem; --distance:6.783926439483046rem; --position:95.75330504172788%; --time:3.1150008057341236s; --delay:-2.6406205196300934s;"></div>
    <div class="bubble" style="--size:2.9705409432843535rem; --distance:8.9866913869576rem; --position:37.099079677381305%; --time:2.3818988634677507s; --delay:-3.0640844937008915s;"></div>
    <div class="bubble" style="--size:3.9396103712727966rem; --distance:6.4502491518061325rem; --position:53.68989823526656%; --time:2.861793750932377s; --delay:-2.367118068173408s;"></div>
    <div class="bubble" style="--size:4.126709835013447rem; --distance:9.886776622625685rem; --position:40.0731814394213%; --time:3.1734829005500065s; --delay:-3.121446476647315s;"></div>
    <div class="bubble" style="--size:2.7334929542757456rem; --distance:7.655022474233485rem; --position:-1.6995773178893248%; --time:2.2352076623311676s; --delay:-2.0043075319562003s;"></div>
    <div class="bubble" style="--size:5.463172322510107rem; --distance:6.206484228597125rem; --position:73.03427379284847%; --time:2.988033003042554s; --delay:-3.1531976093215817s;"></div>
    <div class="bubble" style="--size:2.0462569875639414rem; --distance:8.959993921445161rem; --position:55.77796720261562%; --time:3.0029207918462286s; --delay:-2.6212211276068613s;"></div>
    <div class="bubble" style="--size:3.2539837949060235rem; --distance:9.936939664561336rem; --position:12.084819120496373%; --time:2.2690167411758355s; --delay:-3.9538657662550314s;"></div>
    <div class="bubble" style="--size:2.5375203975832488rem; --distance:9.776553231856223rem; --position:80.92750891137327%; --time:3.1118561551860195s; --delay:-3.275776366615083s;"></div>
    <div class="bubble" style="--size:3.3931114453972926rem; --distance:7.1850245924657505rem; --position:48.34380479244845%; --time:3.8705906501188267s; --delay:-2.9542293338404466s;"></div>
  </div>
  <div class="content">
    <div>
      <div><b>Eldew</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>
      <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>
      <div><b>Chashakib</b><a href="#">Chogauw</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>
      <div><b>Athod</b><a href="#">Pamuz</a><a href="#">Vapert</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
    </div>
    <div><a class="image" href="https://codepen.io/z-" target="_blank" style="background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;)"></a>
      <p>©2019 Not Really</p>
    </div>
  </div>
</div>
<svg style="position: fixed; top: 100vh">
  <defs>
    <filter id="blob">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
    </filter>
  </defs>
</svg> */}


  <div>
    <footer>
      <div>
        Footer 
        </div>
    </footer>
  </div>
    </>
  )
}

export default Footer



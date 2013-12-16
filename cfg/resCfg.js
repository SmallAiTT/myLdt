var resCfg = cc.resCfg;
var jsRes = js.myldt;

resCfg["myldt"] = {
    ref : [jsRes.tt_js]//Base references for the project.
};

resCfg.gameModules = [jsRes.myApp_js, jsRes.HomeBgSp_js];//Game modules

resCfg[jsRes.myApp_js] = {
    //MyLayer.js is the reference of myApp.js.
    //myApp.js does not need to care about the implement of of MyLayer.js, including its resources and references.
    //What you need to care about is just the interface of MyLayer.js for others.
    ref : [jsRes.MyLayer_js]
};

resCfg[jsRes.MyLayer_js] = {
    res : [res.CloseNormal_png, res.CloseSelected_png, res.HelloWorld_jpg],//Resources to preLoad.
    layer : "MyLayer",  //This is for test unit, others like "scene", "sprite" and so on.
    args : {}           //Arguments for "MyLayer.create" for example. Works only in test unit mode.
};

resCfg[jsRes.HomeBgLy_js] = {
    res : [res.home_bg_png, res.home_sea_png]
};

resCfg[jsRes.HomeBgLyTest_js] = {
    ref : [jsRes.HomeBgLy_js],
    layer : "tt.HomeBgLyTest"
};
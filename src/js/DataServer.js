import axios from "axios";
import moment from "moment"
import areaData from "@/mock/area.json" // 中国分区
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const nCovServer = '/api';
/**
 * CesiumLab服务访问控制
 * @class
 */
class DataServer {

    constructor(root) {
        this._root = root;

        this.dataCach = [];

        // geojson服务地址
        this.earthsdkServer = 'https://www.earthsdk.com/static/data/';
    }

    loadAreaList(){
      const url = nCovServer + '/book/area';
      axios.get(url)
         .then(res => {
          console.log(res,'list');
         })
    }

    loadScene() {

        return new Promise((resolve, reject) => {
            axios
                .get("./static/scene.json")
                .then(res => {

                    if (res.status == 200) {
                        resolve(res.data);
                    } else {
                        reject(res.data);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
    //加载全球总览数据
    loadWorldOverall(ut) {

            return new Promise((resolve, reject) => {

                    //获取每个区域的最新数据
                    var provinceMap = areaData;

                    //统计总量
                    var ret = {
                        confirmedCount: 0,
                        suspectedCount: 0,
                        curedCount: 0,
                        deadCount: 0,
                        updateTime: 0
                    };

                    for (var key in provinceMap) {
                        var province = provinceMap[key];

                        ret.updateTime = Math.max(ret.updateTime, province.updateTime);
                        ret.confirmedCount += province.confirmedCount;
                        ret.suspectedCount += province.suspectedCount;
                        ret.curedCount += province.curedCount;
                        ret.deadCount += province.deadCount;
                    }

                    resolve(ret);
            });

        }
        //加载全球分区数据 和 上一个函数一样
    loadWorldSubArea(ut) {
        return new Promise((resolve, reject) => {
                //获取每个区域的最新数据
                var provinceMap = areaData;

                //统计总量
                var ret = {
                    confirmedCount: 0,
                    suspectedCount: 0,
                    curedCount: 0,
                    deadCount: 0,
                    updateTime: 0,
                    subs: []
                };

                for (var key in provinceMap) {
                    var province = provinceMap[key];

                    ret.updateTime = Math.max(ret.updateTime, province.updateTime);
                    ret.confirmedCount += province.confirmedCount;
                    ret.suspectedCount += province.suspectedCount;
                    ret.curedCount += province.curedCount;
                    ret.deadCount += province.deadCount;


                    var finded = ret.subs.find(el => {
                        return el.name == province.country;
                    });
                    if (finded) {
                        finded.confirmedCount += province.confirmedCount;
                        finded.suspectedCount += province.suspectedCount;
                        finded.curedCount += province.curedCount;
                        finded.deadCount += province.deadCount;
                        finded.updateTime = Math.max(finded.updateTime, province.updateTime);
                    } else {
                        ret.subs.push({
                            confirmedCount: province.confirmedCount,
                            suspectedCount: province.suspectedCount,
                            curedCount: province.curedCount,
                            deadCount: province.deadCount,
                            updateTime: province.updateTime,
                            name: province.country,
                            shortName: province.country
                        });
                    }
                }
                resolve(ret);

        });

    }


    //加载中国总览数据
    loadChinaOverall(ut) {
            return new Promise((resolve, reject) => {
                resolve({"confirmedCount":81263,"suspectedCount":190,"curedCount":70561,"deadCount":3250,"updateTime":1584629664925});
            });
        }
        //加载中国分区数据
    loadChinaSubArea(ut) {
        return new Promise((resolve, reject) => {
                //获取每个区域的最新数据
                var provinceMap = areaData;

                //统计总量
                var ret = {
                    confirmedCount: 0,
                    suspectedCount: 0,
                    curedCount: 0,
                    deadCount: 0,
                    updateTime: 0,
                    subs: []
                };

                for (var key in provinceMap) {
                    var province = provinceMap[key];
                    if (province.country != '中国')
                        continue;

                    ret.updateTime = Math.max(ret.updateTime, province.updateTime);
                    ret.confirmedCount += province.confirmedCount;
                    ret.suspectedCount += province.suspectedCount;
                    ret.curedCount += province.curedCount;
                    ret.deadCount += province.deadCount;


                    var finded = ret.subs.find(el => {
                        return el.name == province.provinceShortName;
                    });
                    if (finded) {
                        finded.confirmedCount += province.confirmedCount;
                        finded.suspectedCount += province.suspectedCount;
                        finded.curedCount += province.curedCount;
                        finded.deadCount += province.deadCount;
                        finded.updateTime = Math.max(finded.updateTime, province.updateTime);
                    } else {
                        ret.subs.push({
                            confirmedCount: province.confirmedCount,
                            suspectedCount: province.suspectedCount,
                            curedCount: province.curedCount,
                            deadCount: province.deadCount,
                            updateTime: province.updateTime,
                            name: province.provinceShortName,
                            shortName: province.provinceShortName
                        });
                    }
                }
                resolve(ret);
        });
    }


    //加载某省总览数据
    loadProvinceOverall(province, ut) {
            return new Promise((resolve, reject) => {

                    // 获取每个区域的最新数据
                    var provinceMap = areaData;

                    if (provinceMap.hasOwnProperty(province)) {

                        var ret = provinceMap[province];

                        resolve(ret);

                    } else {
                        resolve({});
                    }

            });
        }
        //加载某省分区数据
    loadProvinceSubArea(province, ut) {

        return new Promise((resolve, reject) => {
                //获取每个区域的最新数据
                var provinceMap = areaData;

                if (provinceMap.hasOwnProperty(province)) {
                    var ret = provinceMap[province];
                    ret.subs = [];
                    if (ret.cities) {
                        ret.cities.forEach(c => {
                            ret.subs.push({
                                name: c.cityName,
                                confirmedCount: c.confirmedCount,
                                suspectedCount: c.suspectedCount,
                                curedCount: c.curedCount,
                                deadCount: c.deadCount
                            });
                        })
                    }
                    console.log(JSON.stringify(ret),'ret')
                    resolve(ret);

                } else {
                    resolve({});
                }
        });
    }


    //加载某个区域的 总览数据
    loadOverall(area, ut) {
        if (area == 'world')
            return this.loadWorldOverall(ut);
        else if (area == 'china')
            return this.loadChinaOverall(ut);
        else return this.loadProvinceOverall(area, ut);
    }

    //加载某个区域的 子分区 数据
    loadSubArea(area, ut) {
        if (area == 'world')
            return this.loadWorldSubArea(ut);
        else if (area == 'china')
            return this.loadChinaSubArea(ut);
        else return this.loadProvinceSubArea(area, ut);
    }

    //获取用来做日期分析的所有时间
    getHistoryDays() {

        return new Promise((resolve, reject) => {

                    var start = new Date(1585054959124);

                    const daytime = 24 * 60 * 60 * 1000;

                    //注意 -1 避免数据显示在0点
                    var startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime() + daytime - 1;

                    var endDay = new Date();
                    endDay =  new Date(endDay.getFullYear(), endDay.getMonth(), endDay.getDate()).getTime() + daytime - 1;
                    var ret = [];

                    while (startDay <= endDay) {

                        ret.push(new Date(startDay));

                        startDay += daytime;
                    }

                    console.log(ret,'rettt')
                    resolve(ret);
        });
    }

    //获取中国所有市级数据
    loadCitiesData(ut) {
        return new Promise((resolve, reject) => {
                //获取每个区域的最新数据
                var provinceMap = areaData;

                //统计总量
                var ret = [];

                for (var key in provinceMap) {
                    var province = provinceMap[key];
                    if (province.country !== '中国')
                        continue;

                    var pn = province.provinceShortName;
                    if (pn === '北京' || pn === '重庆' || pn == '上海' || pn === '天津') {
                        ret.push({
                            name: province.provinceName,
                            confirmedCount: province.confirmedCount,
                            suspectedCount: province.suspectedCount,
                            curedCount: province.curedCount,
                            deadCount: province.deadCount
                        });
                        continue;
                    }

                    if (!province.cities)
                        continue;
                    province.cities.forEach(c => {
                        ret.push({
                            name: c.cityName,
                            confirmedCount: c.confirmedCount,
                            suspectedCount: c.suspectedCount,
                            curedCount: c.curedCount,
                            deadCount: c.deadCount
                        });
                    });
                }
                resolve(ret);
        });
    }
}

export default DataServer;

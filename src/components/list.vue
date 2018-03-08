<template>
  <div class="associated">
    <div class="associatedLeft">
      <p>关联商品</p>
    </div>
    <div class="associatedCon">
       <div class="associatedTop">

         <div class="elCheckbox" v-for="item,i in cities">
           <div v-for="(cityBox,key,indexBox) in item" class="elCheckboxKey">
             {{key}}：
           </div>
           <el-checkbox-group v-for="(cityBox,key,indexBox) in item" v-model="checkedCities[i]">
             <el-checkbox  v-for="(city,index) in cityBox" :label="city.code" :key="index">{{city.name}}{{city.city}}</el-checkbox>
           </el-checkbox-group>
         </div>
       </div>
      <div class="associteTable">
        <el-table :data="results[0]" border style="width: 902px;margin: 0 auto;">
          <el-table-column prop="code" label="尺码" width="60"></el-table-column>
          <el-table-column prop="name" label="颜色" width="60"></el-table-column>
          <el-table-column prop="city" label="SKU编码" width="60"></el-table-column>
          <el-table-column prop="address" label="*第三方编码" width="60"></el-table-column>
          <el-table-column prop="address" label="*商品名称" width="60"></el-table-column>
          <el-table-column prop="address" label="*销售价" width="60"></el-table-column>
          <el-table-column prop="address" label="*供货价" width="60"></el-table-column>
          <el-table-column prop="address" label="*市场价" width="60"></el-table-column>
          <el-table-column prop="address" label="*库存" width="60"></el-table-column>
          <el-table-column prop="address" label="*销售价" width="60"></el-table-column>
          <el-table-column prop="address" label="*供货价" width="60"></el-table-column>
          <el-table-column prop="address" label="*库存预警" width="60"></el-table-column>
          <el-table-column prop="address" label="*佣金扣率" width="60"></el-table-column>
          <el-table-column prop="address" label="*是否上架" width="60"></el-table-column>
          <el-table-column label="操作" width="60">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, checkedCitiesBox)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <button @click="danji">点击</button>
  </div>
</template>
<style lang="less">
  .associated{
    width:80%;
    height:90%;
    overflow: hidden;
    clear: both;
    border:1px solid rgba(228, 228, 228, 1);
    margin:0 auto;
    .associatedLeft{
      width: 15%;
      height: 100%;
      float: left;
      background: rgba(235, 235, 235, 0.5);
      p{
        width:100%;
        max-width: 200px;
        height: 50px;
        background: url("../assets/image/u214.png") no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        font-size: 16px;
        line-height: 50px;
        margin-top: 20px;
        text-align: center;
      }
    }
    .associatedCon{
      width:85%;
      float: left;
      .associatedTop{
        min-width: 500px;
        overflow: hidden;
        margin: 30px auto;
        .el-checkbox{
          margin:5px;
        }
        .elCheckbox{
          width: 100%;
          height: 100%;
          overflow: hidden;
          >div{
            float: left;
            font-size: 14px;
          }
          .elCheckboxKey{
            line-height: 30px;
          }
        }
      }
      .associteTable{
        th{
          font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
          font-weight: 700;
          font-style: normal;
          font-size: 10px;
          color: #666666;
          text-align: center;
          line-height: normal;
        }

      }
    }
  }




</style>

<script>
  const cityOptions = [{'地区':[{'city':'济南','code1':'150641'},{'city':'北京','code1':'150642'}, {'city':'广州','code1':'150643'},{'city':'深圳','code1':'150644'}]},
    {'水壶':[{'name':'茶杯','code2':'750642'},{'name':'水杯','code2':'850642'}, {'name':'暖壶','code2':'950642'}]},
    {'工具':[{'name':'钢笔','code3':'110642'},{'name':'本子','code3':'120642'}, {'name':'书籍','code3':'130642'},{'name':'纸张','code3':'140642'}]},
    {'成长':[{'name':'人生','code4':'154642'},{'name':'生活','code4':'153642'}, {'name':'梦想','code4':'152642'},{'name':'过去','code4':'151642'}]}];
  export default {
    data() {
      return {
        checkedCities: [],
        checkedCitiesList:[],
        checkedCitiesBox:[],
        max:1,
        cities: cityOptions,
        result:[],
        results:[]
      };
    },
    methods:{
      danji(){
        console.log(this.checkedCities)
      },
      arrCall(){
        this.results = []
        this.checkedCitiesBox = []
        this.checkedCitiesList  = this.checkedCities.filter((item)=>{
           return item.length != 0
        })
        if(this.checkedCitiesList.length != 0){
          this.result = [];
          this.results = [];
          this.doExchange(this.checkedCitiesList,0);
        }
        console.log(this.results)
//        this.results.map((item,index)=>{
//          var obj = {}
//          for(var i = 0; i < item.length; i++){
//            obj = Object.assign(item[i]);
//          }
//          this.checkedCitiesBox.push(obj)
//        })
        console.log()
      },
      doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
          this.result[depth] = arr[depth][i]
          if (depth != arr.length - 1) {
            this.doExchange(arr, depth + 1)
          } else {
            this.results.push(this.result)
          }
        }
      }
    },


//      function () {
//
//        // `this` 指向 vm 实例
//        this.checkedCitiesBox.map(function (item,index) {
//          console.log(item)
//        })
//        return ''
//      }
    watch:{
      checkedCities:'arrCall'
    },
    created(){
      for(var i = 0; i < cityOptions.length; i++){
        this.checkedCities.push([])
      }
    }
  };
</script>


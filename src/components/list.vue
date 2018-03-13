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
             <el-checkbox  v-for="(city,box,index) in cityBox" :label='city' :key="index">{{city.name}}{{city.list}}{{city.city}}{{city.box}}</el-checkbox>
           </el-checkbox-group>
         </div>
       </div>
      <div class="associteTable">
        <el-table :data="checkedCitiesBox" border style="width: 902px;margin: 0 auto;">
          <el-table-column prop="asd" label="尺码" width="60"></el-table-column>
          <el-table-column prop="name" label="颜色" width="60"></el-table-column>
          <el-table-column prop="city" label="SKU编码" width="60"></el-table-column>
          <el-table-column prop="list" label="*第三方编码" width="60"></el-table-column>
          <el-table-column prop="box" label="*商品名称" width="60"></el-table-column>
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
    <div v-for="(item,index) in checkedCitiesBox">
      {{item.name}}      {{item.city}}      {{item.list}}      {{item.box}}
    </div>
    <button class="button" @click="danji">点击</button>
  </div>
</template>
<style lang="less">
  .associated{
    width:80%;
    overflow: hidden;
    clear: both;
    border:1px solid rgba(228, 228, 228, 1);
    margin: 0 auto;
    margin-top:5%;
    .associatedLeft{
      width: 15%;
      height: 100%;
      float: left;
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
        width: 900px;
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
        overflow: hidden;
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
    .button{
      display: block;
      padding: 10px 20px;
      border-radius: 5px;
      margin: 10px auto;
      cursor: pointer;
    }
  }




</style>

<script>
  const cityOptions = [{'地区':[{'city':'济南','code':'150641'},{'city':'北京','code':'150642'}, {'city':'广州','code':'150643'},{'city':'深圳','code':'150644'}]},
    {'水壶':[{'name':'茶杯','code1':'750642'},{'name':'水杯','code':'850642'}, {'name':'暖壶','code':'950642'}]},
    {'工具':[{'list':'钢笔','code2':'110642'},{'list':'本子','code':'120642'}, {'list':'书籍','code':'130642'},{'list':'纸张','code':'140642'}]},
    {'成长':[{'box':'人生','code3':'154642'},{'box':'生活','code':'153642'}, {'box':'梦想','code':'152642'},{'box':'过去','code':'151642'}]}];
  export default {
    data() {
      return {
        checkedCities: [],
        checkedCitiesList:[],
        checkedCitiesBox:[],
        max:1,
        cities: cityOptions,
        result:[],
        results:[],
        resultBox:[]
      };
    },
    methods:{
      danji(){
        console.log(this.checkedCities)
      },
      arrCall(){
        this.checkedCitiesList  = this.checkedCities.filter((item)=>{
           return item.length != 0
        })
        this.checkedCitiesBox = []
        if(this.checkedCitiesList.length != 0){
          this.result = [];
          this.results = [];
          this.doExchange(this.checkedCitiesList,0);
          for(var i = 0; i < this.results.length; i ++){
            this.checkedCitiesBox.push([])
            this.results[i] = this.results[i].split('|')
            for(var j = 0; j < this.results[i].length; j++){
              this.results[i][j] = JSON.parse(this.results[i][j])
              for(var k in this.results[i][j])
              this.checkedCitiesBox[i][k+''] = this.results[i][j][k]
            }
          }
        }
      },
      doExchange(arr, depth) {
        for (var i = 0; i < arr[depth].length; i++) {
          this.result[depth] = JSON.stringify(arr[depth][i])
          if (depth != arr.length - 1) {
            this.doExchange(arr, depth + 1)
          } else {
            this.results.push(this.result.join('|'))
          }
        }
      },
    },
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


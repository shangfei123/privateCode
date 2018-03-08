<template>
  <div id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login">
      <p>悠活科技</p>
    </div>
  </div>
</template>

<script>

  export default {
    methods:{
      init(){
        $('#sku_detail').html('')
        var item = '<tr>';
        function doExchange(arr, depth) {
          for (var i = 0; i < arr[depth].length; i++) {
            result[depth] = arr[depth][i]
            if (depth != arr.length - 1) {
              doExchange(arr, depth + 1)
            } else {
              for (var k = 0; k < result.length; k++) {
                item += '<td>' + result[k] + '<input type="hidden" name="paramSkuCode_"'+k+' value="1111111'+k+'" /></td>'
              }
              item += `<td ><input class="easyui-validatebox" type="text" name="proSkuCode" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="proSkuThirdCode" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="spuName" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="proSkuPrice" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="costPrice" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="marketingPrice" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="stock" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="stockWarning" class="easyui-textbox" /></td>
                            <td><input class="easyui-validatebox" type="text" name="proDiscount" class="easyui-textbox" /></td>
                            <td><input class="easyui-switchbutton" name="skuState" onText="是" offText="否" checked="checked"></td>
                            <td>
                            <div class="spec-del">删除</div>
                   </td> </tr>`

            }
          }
        }

        $('#sku_detail').on('click','.spec-del',function(ev){
          // var ev=ev||event
          $(this).parents('tr').remove()
        })

        function test(arr) {
          results = [];
          result = [];
          doExchange(arr, 0);
          console.log(results.length, results.join(','));
          $('#sku_detail').append(item)
        }
      },
      data(){
        function Ma(a,n){
          var A;
          var b=new Array();
          if(n==1){
            A=a[0][0];
            return A;
          }
          else if(n==2){
            A=a[0][0]*a[1][1]-a[0][1]*a[1][0];
            return A;
          }
          else if(n==3){
            A=a[0][0]*a[1][1]*a[2][2]+
              a[1][0]*a[2][1]*a[0][2]+
              a[2][0]*a[0][1]*a[1][2]-
              a[2][0]*a[1][1]*a[0][2]-
              a[0][0]*a[2][1]*a[1][2]-
              a[1][0]*a[0][1]*a[2][2];
            return A;
          }else {
            A=0;
            var c=new Array();
            var e=new Array();
//计算第一行结果为1，-5，9，-3；
            for(var i=0;i<n;i++) {
              b[i]=a[i][0]*power(-1,i+1+1);
            }
//上面的循环没有问题
//把第一行除外的其他行的值从上向下，从左到右赋值给新的数组a[i][j]
            for(var i=0;i<n;i++){
              e[i]=new Array();
              for(var j=0;j<n-1;j++){
                e[i][j]=a[i][j+1];
              }
            }
//降阶后重组
            for(var i=0;i<n;i++)
            {
              for(var j=0;j<n;j++){

                c[j]=new Array();
                for(var k=0;k<n-1;k++){
                  if(i>j){
                    c[j][k]=e[j][k];
//主要把在之前的四阶降级为三阶，右下角三阶
                  }
                  else if(i<j){
                    c[j-1][k]=e[j][k];
                  }
                }
              }

              A+=b[i]*arguments.callee(c,(n-1));
            }
            return A;
          }
        }
      }
    }
  }
</script>


<style lang="less">
  #app{
    overflow: hidden;
    background: url("../../assets/image/sky.jpg");
    .login{
      position: fixed;
      top: 400px;
      left:50%;

    }
  }
</style>

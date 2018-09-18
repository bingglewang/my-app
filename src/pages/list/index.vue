<template>
  <div>
    <mp-search
      @confirm="onSearchConfirm"
      @change="onSearchChange"
    />
    <mp-panel
      :data-source="dataSource"
      title="我的查询记录"
      type="text"
    />
  </div>
</template>

<script>
  import MpPanel from 'mp-weui/packages/panel'
  import MpSearch from 'mp-weui/packages/search'
    export default {
    components:{
      MpPanel,
      MpSearch
    },
      data(){
        return{
          dataSource : [
          {
            content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            meta: ['文字来源', '2018-09-10:17:22:00', { value: '其它信息', divider: true }],
            title: '标题一',
          },
          {
            content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
            title: '标题一',
          },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            },
            {
              content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              meta: ['文字来源', '时间', { value: '其它信息', divider: true }],
              title: '标题一',
            }
        ]
        }
      },
      methods:{
        onSearchConfirm(){

        },
        onSearchChange(){

        }
      }
    }
</script>

<style scoped>

</style>

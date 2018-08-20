<template>
  <div>
    <transition name="tran-mask">
      <div v-show="show" class="mask" @click="hide"></div>
    </transition>
    <transition name="tran-dialog">
      <div v-show="show" class="box">
        发起提问
        <div class="form">
          <div class="form-row">
            <span class="label">标题：</span><input v-model="formData.cTitle" placeholder="请输入" type="text">
          </div>
          <div class="form-row">
            <span class="label">描述：</span><textarea v-model="formData.cContent" placeholder="请输入" rows="5"></textarea>
          </div>
          <div class="form-row">
            <span class="label">姓名：</span><input v-model="formData.cPosterName" placeholder="请输入" type="text">
          </div>
        </div>
        <div>
          <div class="btn" @click="submitPost">提交</div>
          <div class="btn btn-cancel" @click="hide">取消</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ['show'],
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    hide() {
      this.$emit('update:show', false)
    },
    async submitPost() {
      let {data} = await this.$http.post('AddPostInfo', this.formData)
      if (data.Code == 10000) {
        this.hide()
      } else {
        alert(data.Message)
      }
    }
  }
}
</script>
<style scoped>
.form-row{
  margin: 10px 0;
}
.form-row input{
  height: 25px;
}
.form-row input, .form-row textarea{
  box-sizing: border-box;
  width: 80%;
  padding: 0;
  border: none;
  border: 1px solid #c5c5c5;
  vertical-align: text-top;
  border-radius: 3px;
}
.form-row .label{
  width: 20%;
  display: inline-block;
}
.mask{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
  z-index: 500;
}
.box{
  position: fixed;
  display: table;
  z-index: 501;
  width: 75%;
  max-width: 666px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  background: #fff;
  padding: 15px 10px;
}
.tran-dialog-enter-active {
  animation: tran-dialog-in .5s;
}
.tran-dialog-leave-active {
  animation: tran-dialog-out .3s;
}
@keyframes tran-dialog-in {
  0% {
    transform: scale(1.185);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes tran-dialog-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.85);
    opacity: 0;
  }
}
.tran-mask-enter, .tran-mask-leave-active {
  opacity: 0;
}
.tran-mask-leave-active, .tran-mask-enter-active {
  transition: opacity 300ms;
}
</style>

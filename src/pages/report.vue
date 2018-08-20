<template>
  <div>
    <page-title></page-title>
    <div class="report-content">
      <div class="product-cell __w100p">
        <div class="label">举报标题</div>
        <input v-model="formData.cTitle" placeholder="请输入" type="text" class="value">
      </div>
      <div class="product-cell __w100p">
        <div class="label">被举报人</div>
        <input v-model="formData.cReportedUserName" placeholder="请输入" type="text" class="value">
      </div>
      <div class="product-cell __w100p">
        <div class="label">被举报人地址</div>
        <input v-model="formData.cReportedAddress" placeholder="请输入" type="text" class="value">
      </div>
      <div class="product-cell __w100p">
        <div class="label">举报内容</div>
        <textarea v-model="formData.cContent" placeholder="请输入" rows="5" class="value" />
      </div>
      <div class="product-cell __w100p">
        <div class="label">附件</div>
        <img v-show="imgPath" :src="imgPath" alt="上传" class="value">
        <input @change="upload" placeholder="请输入" type="file" class="value">
      </div>
    </div>
    <div class="center">
      <div class="btn" @click="clickSubmit">发起举报</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {},
      imgPath: ''
    }
  },
  methods: {
    upload(e) {
      let reader = new FileReader()
      reader.onload = (e) => {
        this.imgPath = e.target.result
      }
      reader.readAsDataURL(e.target.files[0])
    },
    clickSubmit() {
      if (this.imgPath) {
        this.submitImg()
      } else {
        this.submitPost()
      }
    },
    async submitImg() {
      let {data} = await this.$http.post('api/Upload', {
        basePicString: this.imgPath
      })
      if (data.Code == 10000) {
        this.formData.cPic = data.Content.src
        this.submitPost()
      } else {
        alert(data.Message)
      }
    },
    async submitPost() {
      let {data} = await this.$http.post('AddReportedInfo', this.formData)
      if (data.Code == 10000) {
        alert('提交成功')
        this.formData = {}
        this.imgPath = ''
      } else {
        alert(data.Message)
      }
    }
  }
}
</script>

<style>
.report-content{
  padding: 15px 0;
  overflow: hidden;
}
.report-content input{
  height: 25px;
}
.report-content input, .report-content textarea{
  width: 75%;
  padding: 0;
  border: none;
  border: 1px solid #c5c5c5;
  vertical-align: text-top;
  box-sizing: border-box;
  border-radius: 3px;
}
.report-content .label{
  width: 20%;
  display: inline-block;
}
</style>

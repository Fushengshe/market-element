<template>
  <div id="register">
    <div class = "logo">
      <h1 class = "title">乐 易 购</h1>
      <h2 class = "slogan">XXXXXXXXXXX</h2>
    </div>

    <div class = "main">
      <h3 class = "register-title">注 册</h3>

      <el-form class = "register-form" :model="ruleFormRegister" :rules = "verifyRegister" ref="registerValidateForm">
         <el-form-item label="邮箱/手机号" prop = "mailNum">
          <el-input v-model="ruleFormRegister.mailNum" placeholder="请输入邮箱/手机号"></el-input>
         </el-form-item>

         <el-form-item label="密码" class = "form-psd" prop = "psd">
          <el-input v-model="ruleFormRegister.psd" type = "password" placeholder="请输入密码"></el-input>
         </el-form-item>

         <el-form-item label="密码确认" class = "form-checkPsd" prop = "checkPsd">
          <el-input v-model="ruleFormRegister.checkPsd" type = "password" placeholder="请确认密码"></el-input>
         </el-form-item>
      </el-form>

      <el-button type="primary" class = "register-btn" @click = "submitForm('ruleFormRegister')">注 册</el-button>
      <router-link to = "login" class = "login">已经有账号？</router-link>

      <router-link to = "#" class = "issue">登录时遇到问题？</router-link>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'register',
    data () {
      let checkmailNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      let checkpsd = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      let checkpsd2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleFormRegister.psd) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleFormRegister: {
          mailNum: '',
          psd: '',
          checkPsd: ''
        },
        verifyRegister: {
          mailNum: [
            { validator: checkmailNum, trigger: 'blur' }
          ],
          psd: [
            { validator: checkpsd, trigger: 'blur' }
          ],
          checkPsd: [
            { validator: checkpsd2, trigger: 'blur' }
          ]
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) =>{
            if (valid) {
              const { mailNum, psd, checkPsd} = this.ruleFormRegister

            }
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#register{
  height:100%;
}

.logo{
  height:21vh;
  padding-top: 6vh;
}

.title{
  margin-bottom:4vh;
}

.slogan{
  margin: 0;
}

.register-title{
  margin-bottom: 4vh;
}

.main{
  height:69vh;
  text-align:center;
}

.register-form{
  margin:0 auto;
  width: 75%;
}

.register-btn{
  display:block;
  margin:5vh auto 3vh auto;
}

.login{
  font-size: 14px;
  color:#1c8de0;
  text-decoration: none;
}

.issue{
  font-size: 12px;
  color:#1c8de0;
  text-decoration: none;
  position:absolute;
  right:2vw; bottom:1vh;
}
</style>

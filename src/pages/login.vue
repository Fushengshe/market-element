<template>
  <div id="login">
    <div class="logo">
      <h1 class="title">乐 易 购</h1>
      <h2 class="slogan">XXXXXXXXXXX</h2>
    </div>

    <div class="main">
      <h3 class="login-title">登 录</h3>
      <img src="http://temp.im/80x80" class="avatar" alt="your_avatar" />

      <el-form class="login-form" :model="ruleFormLogin" :rules="verifyFormLogin">
        <el-form-item label="邮箱/手机号" prop="mailNum">
          <el-input :model="ruleFormLogin.mailNum" placeholder="请输入邮箱/手机号"></el-input>
        </el-form-item>

         <el-form-item label="密码" class = "form-password" prop = "password">
          <el-input :model= "ruleFormLogin.password" placeholder="请输入密码"></el-input>
         </el-form-item>
      </el-form>
      <router-link to="#" class="forget">忘记密码</router-link>
      <el-button type="primary" class="login-btn">登 录</el-button>
      <router-link to="register" class="register">还没有账号？</router-link>
      <router-link to="register" class="issue">登录时遇到问题？</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../config/api'
  import { Message } from 'element-ui'
  export default {
    name: 'login',
    data () {
      let checkMailNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      let checkPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      return {
        ruleFormLogin: {
          mailNum: '',
          password: ''
        },
        verifyFormLogin: {
          checkmailNum: [
            { validator: checkMailNum, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: checkPassword, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const opt = this.ruleFormLogin
            let data = await api.userLogin(opt)
            if (!data.info) {
              Message.error('账号不存在！！')
            } else if (data.success) {
              Message.success('登录成功！！')
              this.$store.dispatch('UserLogin', data.token)
              this.$store.dispatch('UserName', data.mailNum)
              let redirect = decodeURIComponent(this.$route.query.redirect || '/')
              this.$router.push({
                path: redirect
              })
            } else {
              Message.error('密码错误！！')
            }
          } else {
            Message.error('请正确填写表单！！')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #login {
    height: 100%;
  }

  .logo {
    height: 21vh;
    padding-top: 6vh;
    text-align: center;
  }

  .title {
    margin-bottom: 4vh;
  }

  .slogan {
    margin: 0;
  }

  .login-title {
    margin-bottom: 4vh;
  }

  .main {
    height: 69vh;
    text-align: center;
  }

  .avatar {
    border-radius: 40px;
  }

  .login-form {
    margin: 0 auto;
    width: 75%;
  }

.form-password{
  margin:0;
}

  .forget {
    font-size: 12px;
    color: #1c8de0;
    text-decoration: none;
    float: right;
    margin-top: 0.5%;
    margin-right: 14%;
  }

  .login-btn {
    display: block;
    margin: 5vh auto 3vh auto;
  }

  .register {
    font-size: 14px;
    color: #1c8de0;
    text-decoration: none;
  }

  .issue {
    font-size: 12px;
    color: #1c8de0;
    text-decoration: none;
    position: absolute;
    right: 2vw;
    bottom: 1vh;
  }
</style>

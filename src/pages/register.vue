<template>
  <div id="register">
    <div class="logo">
      <h1 class="title">乐 易 购</h1>
      <h2 class="slogan">XXXXXXXXXXX</h2>
    </div>

    <div class="main">
      <h3 class="register-title">注 册</h3>
      <el-form class="register-form" :model="ruleFormRegister" :rules="verifyRegister" ref="ruleFormRegister">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleFormRegister.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="邮箱/手机号" prop="mailNum">
          <el-input v-model="ruleFormRegister.mailNum" placeholder="请输入邮箱/手机号"></el-input>
        </el-form-item>

        <el-form-item label="密码" class="form-password" prop="password">
          <el-input v-model="ruleFormRegister.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label="密码确认" class="form-checkPassword" prop="checkPassword">
          <el-input v-model="ruleFormRegister.checkPassword" type="password" placeholder="请确认密码"></el-input>
        </el-form-item>
      </el-form>

      <el-button type="primary" class="register-btn" @click="submitForm('ruleFormRegister')">注 册</el-button>
      <router-link to="/" class="login">已经有账号？</router-link>

      <router-link to="#" class="issue">登录时遇到问题？</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../config/api'
  import {Message} from 'element-ui'
  const ERR_OK = 0
  const ERR_USER = 1
  export default {
    name: 'register',
    data () {
      let checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请填写用户名'))
        } else {
          callback()
        }
      }
      let checkMailNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请填写手机或邮箱'))
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
      let checkVerifyPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleFormRegister.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleFormRegister: {
          username: '',
          mailNum: '',
          password: '',
          checkPassword: ''
        },
        verifyRegister: {
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          mailNum: [
            {validator: checkMailNum, trigger: 'blur'}
          ],
          password: [
            {validator: checkPassword, trigger: 'blur'}
          ],
          checkPassword: [
            {validator: checkVerifyPassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const opt = {
              // FIXME:有时间修改一下表单字段，这便那就不用重新取名了
              username: this.ruleFormRegister.username,
              password: this.ruleFormRegister.password,
              confirm: this.ruleFormRegister.checkPassword,
              mobile: this.ruleFormRegister.mailNum
            }
            api.userRegister(opt).then(({data}) => {
              if (data.code === ERR_OK) {
                Message.success('Register successful')
                this.$router.push('./login')
              } else if (data.code === ERR_USER) {
                Message.error('用户名已存在')
              } else {
                Message.error('Register error')
              }
            })
          } else {
            Message.error('submit error')
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #register {
    height: 100%;
    text-align: center;
  }

  .logo {
    height: 7.2rem;
  }

  .title {
    margin-bottom: 4vh;
  }

  .slogan {
    margin: 0;
  }

  .register-title {
    margin-bottom: 1rem;
  }

  .main {
    height: 69vh;
    text-align: center;
  }

  .register-form {
    margin: 0 auto;
    width: 75%;
  }

  .form-password {
    margin-bottom: 1rem;
  }

  .register-btn {
    display: block;
    margin: 5vh auto 3vh auto;
  }

  .login {
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

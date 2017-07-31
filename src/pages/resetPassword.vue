<template>
  <div id="reset">
    <div class="logo">
      <h1 class="title">乐 易 购</h1>
    </div>

    <div class="main">
      <h2 class="reset-title">密码重置</h2>

      <el-form class="reset-form" :model="ruleFormReset" :rules="verifyFormReset" ref="ruleFormReset">
        <el-form-item label="邮箱/手机号" prop="mailNum">
          <el-input v-model="ruleFormReset.mailNum" placeholder="请输入邮箱/手机号"></el-input>
        </el-form-item>

        <el-form-item label="密码" class="form-password" prop="password">
          <el-input v-model="ruleFormReset.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item label="密码确认" class="form-checkPassword" prop="checkPassword">
          <el-input v-model="ruleFormReset.checkPassword" type="password" placeholder="请确认密码"></el-input>
        </el-form-item>

        <el-form-item label="验证码" class="form-verify" prop="verify">
          <el-input v-model="ruleFormReset.verify" placeholder="请输入收到的验证码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="reset-btn" @click="submitForm('ruleFormReset')">重置密码</el-button>
      <router-link to="Reset" class="Reset">还没有账号？</router-link>
      <router-link to="Reset" class="issue">遇到问题？</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../config/api'
  import { Message } from 'element-ui'
  const ERR_OK = 0
  const ERR_CODE = 1
  const ERR_EX = 2
  const ERR_NUM = 3

  export default {
    name: 'reset',
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
      let checkVerifyPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleFormReset.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      let checkVerify = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'))
        } else {
          callback()
        }
      }
      return {
        ruleFormReset: {
          mailNum: '',
          password: '',
          checkPassword: '',
          verify: ''
        },
        verifyFormReset: {
          checkMailNum: [
            {validator: checkMailNum, trigger: 'blur'}
          ],
          password: [
            {validator: checkPassword, trigger: 'blur'}
          ],
          checkPassword: [
            {validator: checkVerifyPassword, trigger: 'blur'}
          ],
          checkVerify: [
            {validator: checkVerify, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const opt = {
              // FIXME:有时间修改一下表单字段，这边那就不用重新取名了
              mobile: this.ruleFormReset.mailNum,
              password: this.ruleFormReset.password,
              confirm: this.ruleFormReset.checkPassword,
              verify: this.ruleFormReset.verify
            }
            api.reset(opt).then(({data}) => {
              console.log(data)
              if (data.code === ERR_CODE) {
                Message.error('验证码错误！！')
              } else if (data.code === ERR_EX) {
                Message.error('验证码已失效！！')
              } else if (data.code === ERR_NUM) {
                Message.error('手机号错误！！')
              } else if (data.code === ERR_OK) {
                Message.success('密码重置成功，请登录')
                this.$router.push('/')
              }
            })
          } else {
            Message.error('请正确填写表单！！')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  #reset {
    height 100%
  }

  .logo {
    height 12vh
    padding-top 2vh
    text-align center
  }

  .title {
    margin-bottom 1vh
  }

  .reset-title {
    margin-bottom 4vh
  }

  .main {
    height 69vh
    text-align center
  }

  .reset-form {
    margin 0 auto
    width 75%
  }

  .reset-btn {
    display block
    margin 5vh auto 3vh auto
  }

  .Reset {
    font-size 14px
    color #1c8de0
    text-decoration: none
  }

  .issue {
    font-size 12px
    color #1c8de0
    text-decoration none
    position absolute
    right 2vw
    bottom 1vh
  }
</style>

<template>
  <div id="forget">
    <div class="logo">
      <h1 class="title">乐 易 购</h1>
    </div>

    <div class="main">
      <h2 class="forget-title">忘记密码</h2>

      <el-form class="forget-form" :model="ruleFormForget" :rules="verifyFormForget" ref="ruleFormForget">
        <el-form-item label="邮箱/手机号" prop="mailNum">
          <el-input v-model="ruleFormForget.mailNum" placeholder="请输入邮箱/手机号"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="forget-btn" @click="submitForm('ruleFormForget')">发送验证码</el-button>
      <router-link to="register" class="register">还没有账号？</router-link>
      <router-link to="register" class="issue">遇到问题？</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../config/api'
  import {Message} from 'element-ui'
  const ERR_OK = 0
  const ERR_USER = 1

  export default {
    name: 'forget',
    data () {
      let checkMailNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      return {
        ruleFormForget: {
          mailNum: ''
        },
        verifyFormForget: {
          checkMailNum: [
            {validator: checkMailNum, trigger: 'blur'}
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
              mobile: this.ruleFormForget.mailNum
            }
            api.forget(opt).then(({data}) => {
              console.log(data)
              if (data.code === ERR_USER) {
                Message.error('账号不存在！！')
              } else if (data.code === ERR_OK) {
                Message.success('验证码已发送，请注意查收')
                let redirect = decodeURIComponent('/reset')
                this.$router.push({
                  path: redirect
                })
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
  #forget {
    height 100%
  }

  .logo {
    height 21vh
    padding-top 6vh
    text-align center
  }

  .title {
    margin-bottom 2vh
  }

  .forget-title {
    margin-bottom 4vh
  }

  .main {
    height 69vh
    text-align center
  }

  .forget-form {
    margin 0 auto
    width 75%
  }

  .forget-btn {
    display block
    margin 5vh auto 3vh auto
  }

  .register {
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
